import Badge from '../Common/Badge/Badge';
import { intentMap } from './intentMap';

type IntentType = {
  number: number;
  textSmall?: boolean;
};

const Intent = ({ number, textSmall }: IntentType) => {
  const { type, color } = intentMap[number % 3];
  const text = textSmall ? type[0] : type;

  return (
    <Badge
      text={text}
      bgColor={color.bg}
      textColor={color.text}
      hoverColor={color.hover}
    />
  );
};

export default Intent;
