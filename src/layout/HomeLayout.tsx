import Main from '../components/Main/Main';
import Menu from '../components/Menu/Menu';

const HomeLayout = ({ children }: { children: React.ReactNode }) => (
  <div>
    <Menu />
    <Main>{children}</Main>
  </div>
);

export default HomeLayout;
