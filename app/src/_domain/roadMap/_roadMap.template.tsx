import { Box, Typography, Button } from "@mui/material";
import { ArrowForward } from "@mui/icons-material";
import O from "../component/organism/_index";
import S from "../component/molecule/container/subject";

function Template(): JSX.Element {
  return (
    <>
      {/* Header */}
      <O.Header />

      {/* 로드맵 제목 및 화살표 네비게이션 */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: { xs: 1, sm: 2, md: 3 },
          padding: 2,
          width: "100%",
          justifyContent: "space-evenly",
        }}
      >
        {/* 제목 */}
        <S />
        <S />
        <S />
        <S />
        <S />
        <S />
      </Box>
      

      {/* 내용 표시 박스 */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          border: "1px solid black",
          height: "50vh",
          justifyContent: "center",
          alignItems: "center",
          marginY: 2,
        }}
      >
        <Typography variant="h4" color="black">로드맵 내용</Typography>
        <Typography color="black">여기에 로드맵의 세부 내용이 표시됩니다.</Typography>
      </Box>

      {/* 하단 페이지 네비게이션 */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          paddingX: 5,
          marginBottom: 2,
        }}
      >
        <Button variant="outlined" color="primary">
          이전
        </Button>
        <Button variant="outlined" color="primary">
          다음
        </Button>
      </Box>

      {/* Footer */}
      <O.Footer />
    </>
  );
}

export default Template;
