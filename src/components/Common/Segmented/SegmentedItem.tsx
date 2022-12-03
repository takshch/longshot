import styled, { css } from 'styled-components';

type DivProps = {
  isSelected: boolean;
  isDisabled?: boolean;
  onClick: Function;
  role: string;
};

const Div = styled.div<DivProps>`
  padding: 10px;
  text-align: center;
  cursor: pointer;

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

interface SegmentedItemProps {
  text: string;
  isSelected: boolean;
  isDisabled?: boolean;
  onClick: Function;
}

export default function SegmentedItem({
  text,
  isSelected,
  isDisabled,
  onClick,
}: SegmentedItemProps) {
  return (
    <Div
      isSelected={isSelected}
      isDisabled={isDisabled}
      role="button"
      onClick={() => !isDisabled && onClick()}
    >
      {text}
    </Div>
  );
}
