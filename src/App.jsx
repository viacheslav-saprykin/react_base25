import goods from "./goods";

export const App = () => (
  <div
    className="GoodList"
  >
    {goods.map((good) => (
      <p
        className="GoodCard"
        style={{ color: good.color }}
        key={good.id}
      >
        {good.name}
      </p>
    ))}
  </div>
);
