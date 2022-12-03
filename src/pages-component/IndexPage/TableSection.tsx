import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Segmented from '../../components/Common/Segmented/Segmented';
import { GetApiResponseType } from '../../types/GetApiResponseType';
import Table from './Table';

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

export type TableData = string[][]

const TableSection = ({ data }: TableSectionProps) => {
  const { columnNames } = data;

  const [selectedChoice, setSelectedChoice] = useState<number>(CHOICES[0].id);
  const [tableData, setTableData] = useState<TableData>();

  useEffect(() => {
    const key = DATA_COLUMN[selectedChoice];
    const tableData = data[key];
    setTableData(tableData);
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
      {tableData && <Table columnNames={columnNames} rows={tableData} />}
    </TableSectionDiv>
  );
};

export default TableSection;
