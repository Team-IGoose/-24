import { Button } from "@mui/material";
import axios from "axios";

function Test(): JSX.Element {
  async function request() {
    await axios.get(
      "http://localhost:8080/api/data?ability=R7000&workRgn=R3000"
    );
  }

  return <Button onProgress={request}>test</Button>;
}
export default Test;
