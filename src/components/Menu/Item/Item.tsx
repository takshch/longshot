import { ItemType } from '../type';
import classes from './Item.module.scss';

const MenuItem = ({ name, subItems }: ItemType) => (
  <div className={classes['menu-item']}>
    <span className={classes['name']}>{name}</span>
    {subItems && subItems.length > 0 && (
      <div className={classes['sub-item']}>
        {subItems.map((item, index) => (
          <MenuItem {...item} key={index} />
        ))}
      </div>
    )}
  </div>
);

export default MenuItem;
