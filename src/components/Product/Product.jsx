
export const Card = ({title, text, price = 0}) => (
  <div className="Card">
    <h2 className="Card__title">{title}</h2>
    <div className="Card__details">
      <p>{text}</p>
      <p>{price.toFixed(2)}</p>
    </div>
  </div>
)