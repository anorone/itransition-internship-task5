import { useState } from 'react';
import { Autocomplete, TextField } from "@mui/material";
import SubmitButton from './SubmitButton.js';

function Mailer({ isHidden }) {
  const [isInfoHidden, setVisibility] = useState(true);
  const [recipient, setRecipient] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('Hi there!');

  function onSubmit(evt) {
    evt.preventDefault();
    setVisibility(false);
    setRecipient('');
    setSubject('');
    setMessage('');
    setTimeout(() => {
      setVisibility(true)
    }, 2500);
  }

  return (
    <section hidden={isHidden}>
      <form className="mailer" method="POST" action="/post" onSubmit={onSubmit}>
        <h2 className="heading">Write someone you like</h2>
        <Autocomplete
          id="msg-recipient"
          options={['Bob', 'Ann', 'Lisa', 'Max']}
          renderInput={(params) => <TextField {...params} label="Recipient" />}
          size="small"
          freeSolo
          value={recipient}
          onChange={(evt, userValue) => setRecipient(userValue)}
        />
        <TextField
          id="msg-subject"
          name="subject"
          label="Subject"
          variant="outlined"
          size="small"
          value={subject}
          onChange={(evt) => setSubject(evt.target.value)}
        />
        <TextField
          multiline
          minRows="1.5"
          value={message}
          onChange={(evt) => setMessage(evt.target.value)}
          required
        />
        <SubmitButton text="Send" />
      </form>
      <div className="info" hidden={isInfoHidden}>Your message have been sent successfully</div>
    </section>
  );
}

export default Mailer;
