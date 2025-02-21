import './GoodCard.scss';

export const GoodCard = ({ good }) => (
  <p
    className="GoodCard"
    style={{ color: good.color }}
  >
    {good.name}
  </p>
);
