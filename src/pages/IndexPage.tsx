import Divider from '../components/Common/Divider/Divider';
import HomeLayout from '../layout/HomeLayout';
import classes from './IndexPage.module.scss';

const IndexPage = () => (
  <HomeLayout>
    <div className={classes['breadcrumbs']}>
      <span>Keyword Explorer</span>
      <span>{'>'}</span>
      <span className={classes['color-black']}>Keyword Overview</span>
    </div>
    <h3 className={classes['keyword-search']}>
      <span className={classes['color-black']}>Keyword:</span>{' '}
      <span>shopping in barcelona</span>
    </h3>
    <div className={classes['font-short']}>Database: United States</div>
    <Divider />
  </HomeLayout>
);

export default IndexPage;
