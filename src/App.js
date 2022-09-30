import { useState } from 'react';
import EntryForm from './components/EntryForm.js';
import Mailer from './components/Mailer.js';

function App() {
  const [isMailerHidden, setVisibility] = useState(true);

  function showMailer() {
    setVisibility(!isMailerHidden);
  }

  return (
    <div className="app">
      <h1 className="sr-only">Messenger</h1>
      <EntryForm isHidden={!isMailerHidden} showMailer={showMailer} />
      <Mailer isHidden={isMailerHidden} />
    </div>
  );
}

export default App;
