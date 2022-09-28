import { Autocomplete, TextField } from "@mui/material";
import SubmitButton from './SubmitButton';

function Mailer() {
  return (
    <section hidden={true}>
      <form className="mailer" method="POST" action="">
        <Autocomplete
          id="msg-recipient"
          options={['Bob', 'Ann', 'Lisa', 'Max']}
          renderInput={(params) => <TextField {...params} label="Recipient"/>}
          size="small"
          freeSolo
        />
        <TextField
          id="msg-subject"
          name="subject"
          label="Subject"
          variant="outlined"
          size="small"
        />
        <TextField
          multiline
          minRows="1.5"
          defaultValue="Hi there!"
          required
        />
        <SubmitButton text="Send" />
      </form>
    </section>
  );
}

export default Mailer;
