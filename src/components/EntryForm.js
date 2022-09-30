import { TextField } from '@mui/material';
import SubmitButton from './SubmitButton.js';

function EntryForm({ isHidden, showMailer }) {
  function onSubmit(evt) {
    evt.preventDefault();
    showMailer();
  }

  return (
    <section className="entry-section" hidden={isHidden}>
      <form method="GET" action="/handler" onSubmit={onSubmit}>
        <h2 className="heading heading_main">Who are you?</h2>
        <TextField
          id="entry-field"
          name="user"
          label="Write your name"
          variant="outlined"
          placeholder="Susanne"
          margin="normal"
          fullWidth
          focused
          required
        />
        <SubmitButton text="Enter" />
      </form>
    </section>
  );
}

export default EntryForm;
