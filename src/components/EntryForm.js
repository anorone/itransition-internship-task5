import styled from '@emotion/styled';
import { TextField, Button } from '@mui/material';

const EntryButton = styled(Button)({
  fontSize: 16
});

function EntryForm() {
  return (
    <form method="GET" action="/handler">
      <h2 className="heading">Who are you?</h2>
      <TextField
        id="outlined-basic"
        name="user"
        label="Write your name"
        variant="outlined"
        placeholder="Susanne"
        margin="normal"
        fullWidth
        focused
        required
      />
      <EntryButton
        className="entry-button"
        type="submit"
        variant="contained"
      >
        Enter
      </EntryButton>
    </form>
  );
}

export default EntryForm;
