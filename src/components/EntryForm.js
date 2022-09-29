import { TextField } from '@mui/material';
import SubmitButton from './SubmitButton.js';

function EntryForm() {
  return (
    <section className="entry-section">
      <form method="GET" action="/handler">
        <h2 className="heading">Who are you?</h2>
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
