import { useState } from 'react';
import classNames from 'classnames';

import { GoodList } from './components/GoodList';
import goods from './goods.json';

export const App = () => {
  const [sortField, setSortField] = useState('');

const visibleGoods = [...goods].sort((good1, good2) => {
  switch (sortField) {
    case 'id':
      return good1.id - good2.id;
    case 'name':
      return good1.name.localeCompare(good2.name);
    case 'color':
      return good1.color.localeCompare(good2.color);
    default:
      return 0;
  }
});

  return (
    <div className="App">
      <div>
        Sort by:

        {['id', 'name', 'color'].map(field => (
          <button
            key={field}
            className={classNames({ active: sortField === field })}
            onClick={() => setSortField(field)}
          >
            {field}
          </button>
        ))}
        <button onClick={() => setSortField('')}>Reset</button>
      </div>

      <GoodList goods={visibleGoods} />
    </div>
  );
};
