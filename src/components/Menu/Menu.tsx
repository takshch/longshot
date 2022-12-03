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
    {topItems.map((item, index) => (
      <MenuItem {...item} key={`top-${index}`} />
    ))}
    {bottomItems.map((item, index) => (
      <MenuItem {...item} key={`bottom-${index}`} />
    ))}
  </div>
);

export default Menu;
