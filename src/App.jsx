import { GoodList } from "./components/GoodList";
import goods from "./goods";

export const App = () => (
  <div className="App">
    <GoodList goods={goods} />
  </div>
);
