import { Box } from "@mui/material";
import O from "../component/organism/_index";

function Template(): JSX.Element {
  return (
    <>
      <O.Header />
      <Box
        sx={{
          display: "flex",
          border: "1px solid black", // 두께, 스타일, 색상을 모두 지정
          height: "50vh", // 높이를 50vh로 설정
          justifyContent: "center",
          alignItems: "center"
        }}
      > 범준 선배는 바부야~~ 멍충이야~~~ </Box>
      <O.Footer />
    </>
  );
}

export default Template;
