import { useState } from 'react';
import Segmented from '../../../components/Common/Segmented/Segmented';
import { GetApiResponseType } from '../../../types/GetApiResponseType';

type TableProps = {
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

const Table = ({ data }: TableProps) => {
  const { columnNames } = data;

  const [selectedChoice, setSelectedChoice] = useState<number>(CHOICES[0].id);

  const selectChoice = (choice: number) => {
    setSelectedChoice(choice);
  }

  console.log(selectedChoice);

  return (
    <Segmented
      choices={CHOICES}
      selectedChoice={selectedChoice}
      onSelect={selectChoice}
    />
  );
};

export default Table;
