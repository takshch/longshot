import classes from './Main.module.scss'

const Main = ({ children }: { children: React.ReactNode }) => (
  <div className={classes['main']}>{children}</div>
);

export default Main;
