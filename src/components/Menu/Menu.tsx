import MenuItem from './Item/Item';
import classes from './Menu.module.scss';
import { ItemType } from './type';

const topItems: ItemType[] = [{ name: 'Dashboard' }, { name: 'Recipes' }];
const bottomItems: ItemType[] = [
  { name: 'Blogs' },
  {
    name: 'Templates',
    subItems: [{ name: 'Favourites' }, { name: 'Custom Template' }],
  },
  { name: 'Integrations', subItems: [{ name: 'Semrush' }] },
];

const Menu = () => (
  <div className={classes['menu']}>
    {topItems.map((item) => (
      <MenuItem {...item} />
    ))}
    {bottomItems.map((item) => (
      <MenuItem {...item} />
    ))}
  </div>
);

export default Menu;
