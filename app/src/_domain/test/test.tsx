import { Button } from "@mui/material";
import axios from "axios";

function Test(): JSX.Element {
  async function request() {
    try {
      // body에 포함할 데이터
      const data = {
        startValue: "강원",
      };

      // POST 요청
      const response = await axios.post("http://localhost:8080/api/major", data);
      console.log("Response:", response.data);
    } catch (error) {
      console.error("Error:", error);
    }
  }

  return <Button onClick={request}>test</Button>;
}

export default Test;
