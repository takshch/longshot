import Card from '../../../components/Common/Card/Card';
import Divider from '../../../components/Common/Divider/Divider';

type VolumeAndKeywordCardProps = {
  volume: number;
  keywordDifficulty: number;
};

export const VolumeAndKeywordCard = ({
  volume,
  keywordDifficulty,
}: VolumeAndKeywordCardProps) => (
  <Card>
    <div>Volume</div>
    <h3>{volume}</h3>
    <Divider />
    <div>Keyword Difficulty</div>
    <div>
      <h3>{keywordDifficulty}%</h3>
    </div>
    <p>
      Slightly more competition. You'll need well structured and unique content
      appropriately optimized for your keyword
    </p>
  </Card>
);
