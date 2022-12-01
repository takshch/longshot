import Main from '../components/Main/Main';
import Menu from '../components/Menu/Menu';
import classes from './HomeLayout.module.scss'

const HomeLayout = ({ children }: { children: React.ReactNode }) => (
  <div className={classes['home-layout']}>
    <Menu />
    <Main>{children}</Main>
  </div>
);

export default HomeLayout;
