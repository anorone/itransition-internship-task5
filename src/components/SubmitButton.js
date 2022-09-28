import styled from '@emotion/styled';
import { Button } from "@mui/material";

const Btn = styled(Button)({
  fontSize: 16
});

function SubmitButton({ text }) {
  return (
    <Btn
      className="submit-button"
      type="submit"
      variant="contained"
    >
      {text}
    </Btn>
  )
}

export default SubmitButton;
