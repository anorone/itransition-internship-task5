import { Autocomplete, TextField } from "@mui/material";
import SubmitButton from './SubmitButton.js';

function Mailer() {
  return (
    <section hidden={true}>
      <form className="mailer" method="POST" action="">
        <h2 className="heading">Write someone you like</h2>
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
      <div className="info" hidden={true}>Your message have been sent successfully</div>
    </section>
  );
}

export default Mailer;
