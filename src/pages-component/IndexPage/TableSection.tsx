import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Segmented from '../../components/Common/Segmented/Segmented';
import Intent from '../../components/Intent/Intent';
import { humanizeNumber } from '../../helpers/humanizeNumber';
import { GetApiResponseType } from '../../types/GetApiResponseType';
import Table from './Table';
import { filterCols, filterHeadings } from './TableSection/filterData';

const TableSectionDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

type TableSectionProps = {
  data: GetApiResponseType;
};

const CHOICES = [
  {
    id: 0,
    text: 'Broad Match',
  },
  {
    id: 1,
    text: 'Related',
  },
  {
    id: 2,
    text: 'Questions',
  },
];

type DataColumnType = [
  keyof Pick<GetApiResponseType, 'raw_broadmatch_data'>,
  keyof Pick<GetApiResponseType, 'raw_related_data'>,
  keyof Pick<GetApiResponseType, 'raw_question_data'>
];

const DATA_COLUMN: DataColumnType = [
  'raw_broadmatch_data',
  'raw_related_data',
  'raw_question_data',
];

const COLUMN_RENDERERS = {
  2: (value: number) => <Intent number={value} textSmall={true} />,
  5: (value: string) => humanizeNumber(value),
};

export type TableData = string[][];

const TableSection = ({ data }: TableSectionProps) => {
  const { columnNames } = data;

  const [selectedChoice, setSelectedChoice] = useState<number>(CHOICES[0].id);
  const [tableData, setTableData] = useState<TableData>();

  useEffect(() => {
    const key = DATA_COLUMN[selectedChoice];
    const tableData = data[key];
    setTableData(filterCols(tableData));
  }, [data, selectedChoice]);

  const selectChoice = (choice: number) => {
    setSelectedChoice(choice);
  };

  return (
    <TableSectionDiv>
      <div>
        <Segmented
          choices={CHOICES}
          selectedChoice={selectedChoice}
          onSelect={selectChoice}
        />
      </div>
      {tableData && (
        <Table
          columnNames={filterHeadings(columnNames)}
          rows={tableData}
          columnRenderers={COLUMN_RENDERERS}
        />
      )}
    </TableSectionDiv>
  );
};

export default TableSection;
