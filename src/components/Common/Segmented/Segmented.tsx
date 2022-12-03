import styled from 'styled-components';
import SegmentedItem from './SegmentedItem';

const Div = styled.div`
  display: inline-flex;
  border: 2px solid rgb(229 231 235);
  border-radius: 4px;
  padding: 5px;
  width: fit-content;
  background-color: rgb(229 231 235);
`;

interface ChoiceType {
  id: number;
  text: string;
}

interface SegmentedProps {
  choices: ChoiceType[];
  selectedChoice: number;
  disabledChoice?: number;
  disabled?: boolean;
  onSelect: (choice: number) => void;
}

function Segmented({
  choices,
  selectedChoice,
  disabledChoice,
  disabled,
  onSelect,
}: SegmentedProps) {
  const isSelected = (choice: number) => selectedChoice === choice;
  const isDisabled = (choice: number) => disabled || disabledChoice === choice;

  return (
    <Div>
      {choices.map(({ id, text }) => (
        <SegmentedItem
          key={id}
          text={text}
          isSelected={isSelected(id)}
          isDisabled={isDisabled(id)}
          onClick={() => onSelect(id)}
        />
      ))}
    </Div>
  );
}

export default Segmented;
