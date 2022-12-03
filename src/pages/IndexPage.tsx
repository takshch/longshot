import axios from 'axios';
import { useEffect, useState } from 'react';
import Badge from '../components/Common/Badge/Badge';
import Card from '../components/Common/Card/Card';
import Divider from '../components/Common/Divider/Divider';
import { humanizeNumber } from '../helpers/humanizeNumber';
import HomeLayout from '../layout/HomeLayout';
import { VolumeAndKeywordCard } from '../pages-component/IndexPage/Cards/VolumeAndKeywordCard';
import Table from '../pages-component/IndexPage/Table/Table';
import { GetApiResponseType } from '../types/GetApiResponseType';
import classes from './IndexPage.module.scss';

const MOCK_DATA_URL = '/mock/data.json';

const getMockData = async () => {
  const { data } = await axios.get<GetApiResponseType>(MOCK_DATA_URL);
  return data;
};

const IndexPage = () => {
  const [data, setData] = useState<GetApiResponseType | undefined>();
  const [hasError, setHasError] = useState<Boolean>(false);

  useEffect(() => {
    getMockData()
      .then((data) => {
        setData(data);
        setHasError(false);
      })
      .catch(() => setHasError(true));
  }, []);

  return (
    <HomeLayout>
      {hasError && <div>Failed to fetch</div>}
      {data && (
        <>
          <div className={classes['breadcrumbs']}>
            <span>Keyword Explorer</span>
            <span>{'>'}</span>
            <span className={classes['color-black']}>Keyword Overview</span>
          </div>
          <h3 className={classes['keyword-search']}>
            <span className={classes['color-black']}>Keyword:</span>{' '}
            <span>{data.topic}</span>
          </h3>
          <div className={classes['font-short']}>Database: {data.country}</div>
          <Divider />
          <div className={classes['main']}>
            <div className={classes['info-cards']}>
              <VolumeAndKeywordCard volume={480} keywordDifficulty={46} />
              <div className={classes['intent-result-cpc-cards']}>
                <Card>
                  <div>Intent</div>
                  <br />
                  <Badge text={'Commerical'} />
                </Card>
                <Card>
                  <div>Results</div>
                  <h3>{humanizeNumber('339000000')}</h3>
                </Card>
                <Card>
                  <div className={classes['cpc-comm-card']}>
                    <span>
                      <div>CPC</div>
                      <h3>${'0.12'}</h3>
                    </span>
                    <span>
                      <div>Comm.</div>
                      <h3>{'0.24'}</h3>
                    </span>
                  </div>
                </Card>
              </div>
            </div>
            <Table data={data} />
          </div>
        </>
      )}
    </HomeLayout>
  );
};

export default IndexPage;
