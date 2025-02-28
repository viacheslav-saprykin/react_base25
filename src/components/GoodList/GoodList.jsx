import { GoodCard } from "../GoodCard";
import "./GoodList.scss";


export const GoodList = ({ goods }) => (
  <div className="GoodList">
    {goods.map(good => (
      <div 
        key={good.id} 
        className="GoodCard" 
        style={{ color: good.color }}
      >
        {good.name}
      </div>
    ))}
  </div>
);