import styled, { css } from 'styled-components';

type SegmentedItemProps = {
  isSelected: boolean;
  isDisabled?: boolean;
  onClick: Function;
  role: string;
};

const SegmentedItem = styled.div<SegmentedItemProps>`
  padding: 10px;
  text-align: center;

  ${(props) =>
    props.isDisabled &&
    css`
      background-color: rgb(229 231 235);
      color: #000;
    `};

  ${(props) =>
    props.isSelected &&
    css`
      background-color: rgb(75 85 99);
      color: #fff;
    `};
`;

interface ItemProps {
  text: string;
  choice: number;
  isSelected: boolean;
  isDisabled?: boolean;
  onClick: Function;
}

function Item({ choice, text, isSelected, isDisabled, onClick }: ItemProps) {
  return (
    <SegmentedItem
      isSelected={isSelected}
      isDisabled={isDisabled}
      role="button"
      onClick={() => !isDisabled && onClick()}
    >
      {text}
    </SegmentedItem>
  );
}

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
    <div>
      {choices.map(({ id, text }) => (
        <Item
          key={id}
          choice={id}
          text={text}
          isSelected={isSelected(id)}
          isDisabled={isDisabled(id)}
          onClick={() => onSelect(id)}
        />
      ))}
    </div>
  );
}

export default Segmented;
