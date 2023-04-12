import { TrendData } from "../../Data/TrendData";
import "./TrendCard.css";

const TrendCard = () => {
  return (
    <div className="trendCard">
      <h3>Trends For You</h3>
      {TrendData.map((trend, id) => (
        <div className="trends">
          <span>#{trend.name}</span>
          <span>{trend.shares}k shares</span>
        </div>
      ))}
    </div>
  );
};

export default TrendCard;
