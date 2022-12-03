import styled from 'styled-components';

type BadgeProps = {
  text: string;
  textColor?: string;
  bgColor?: string;
  hoverColor?: string;
};

type SpanStyleProps = {
  textColor?: string;
  bgColor?: string;
  hoverColor?: string;
};

const Span = styled.span<SpanStyleProps>`
  padding: 3px 10px;
  border-radius: 15px;
  background: ${(props) => props.bgColor || 'yellow'};
  color: ${(props) => props.textColor || 'brown'};
  &:hover {
    color: ${(props) => props.hoverColor || 'brown'};
  }
`;

const Badge = ({ text, textColor, bgColor, hoverColor }: BadgeProps) => {
  return (
    <Span textColor={textColor} bgColor={bgColor} hoverColor={hoverColor}>
      {text}
    </Span>
  );
};

export default Badge;
