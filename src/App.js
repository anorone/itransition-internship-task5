import EntryForm from './components/EntryForm';
import Mailer from './components/Mailer';

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
