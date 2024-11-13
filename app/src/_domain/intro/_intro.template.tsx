import { Box } from "@mui/material";
import O from "../component/organism/_index";

function Template(): JSX.Element {
  return (
    <>
      <O.Header />

      {/* Center와 텍스트를 반반 나누는 Box */}
      <Box
        sx={{
          display: "flex",
          border: "1px solid black",
          height: "50vh",
        }}
      >
        {/* Center 컴포넌트 - 왼쪽 50% */}
        <Box
          sx={{
            flexGrow: 1,
            width: "50%",
            display: "flex",
            justifyContent: "center", // 수평 중앙 정렬
            alignItems: "center", // 수직 중앙 정렬
          }}
        >
          <O.Center />
        </Box>

        {/* 세로선 */}
        <Box
          sx={{
            width: "1px",
            backgroundColor: "black",
            height: "100%",
          }}
        />

        {/* 텍스트 부분 - 오른쪽 50% */}
        <Box
          sx={{
            flexGrow: 1,
            width: "50%",
            display: "flex",
            justifyContent: "center", // 수평 중앙 정렬
            alignItems: "center", // 수직 중앙 정렬
            fontSize: "5rem"
          }}
        >
          범준 선배는 바부야~~
        </Box>
      </Box>

      <O.Footer />
    </>
  );
}

export default Template;
