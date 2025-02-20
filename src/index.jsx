import { createRoot } from 'react-dom/client'

const element = document.querySelector('#root');

function App() {
  return (
    <div>
      <h1>New text</h1>
    </div>
  );
}
createRoot(element).render(
  <App />
);