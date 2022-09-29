import EntryForm from './components/EntryForm.js';
import Mailer from './components/Mailer.js';

function App() {
  return (
    <div className="app">
      <h1 className="sr-only">Messenger</h1>
      <EntryForm />
      <Mailer />
    </div>
  );
}

export default App;
