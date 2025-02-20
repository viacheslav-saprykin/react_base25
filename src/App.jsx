import { Card } from "./components/Product/Product";
import "./App.scss";
import './components/Product/Product.scss';


export const App = () => (
  <div className="App">
    <h1>My Shop</h1>
    <Card
      title="Pizza"
      text="Text about pizza"
      price={10}
    />
    <Card
      title="Ice Cream"
      text="Text about ice cream"
      price={3}
    />
    <Card
      title="Chocolate"
      text="Text about chocolate"
      price={5}
    />
    <Card
      title="Banana"
      text="Text about banana"
    />
  </div>
);
