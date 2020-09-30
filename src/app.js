import Films from './components/Films';
import Header from './components/Header';
import Review from './components/Review';

async function App() {
  const template = document.createElement('template');
  template.innerHTML = `
    <div class="container">
      ${Header()}
      ${await Films()}
      ${Review()}
    </div>
  `;
  // Return a new node from template
  return template.content.cloneNode(true);
}

export default App;
