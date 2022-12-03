import { useState } from 'react';
import Segmented from '../../components/Common/Segmented/Segmented';
import { GetApiResponseType } from '../../types/GetApiResponseType';
import Table from './Table';

type TableSectionProps = {
  data: GetApiResponseType;
};

const CHOICES = [
  {
    id: 1,
    text: 'Broad Match',
  },
  {
    id: 2,
    text: 'Related',
  },
  {
    id: 3,
    text: 'Questions',
  },
];

const TableSection = ({ data }: TableSectionProps) => {
  const { columnNames, raw_broadmatch_data } = data;

  const [selectedChoice, setSelectedChoice] = useState<number>(CHOICES[0].id);

  const selectChoice = (choice: number) => {
    setSelectedChoice(choice);
  };

  return (
    <div>
      <div>
        <Segmented
          choices={CHOICES}
          selectedChoice={selectedChoice}
          onSelect={selectChoice}
        />
      </div>
      <Table columnNames={columnNames} rows={raw_broadmatch_data} />
    </div>
  );
};

export default TableSection;
