import Badge from '../Common/Badge/Badge';
import { IntentType } from './intentMap';

const Intent = ({ type, color }: IntentType) => {
  return (
    <Badge
      text={type}
      bgColor={color.bg}
      textColor={color.text}
      hoverColor={color.hover}
    />
  );
};

export default Intent;
