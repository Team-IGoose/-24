import eg from "../../../../common/assets/image/eg.svg";
import { Box, Typography, Button, Stack } from "@mui/material";

function Top(): JSX.Element {
    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                width: "100%",
                padding: "0 6rem", // 좌우 여백 추가
            }}
        >
            {/* 로고와 텍스트 섹션 */}
            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: "1rem", // 로고와 텍스트 사이 간격
                }}
            >
                <img src={eg} alt="eg Logo" style={{ width: "40px", height: "auto" }} />
                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        borderRadius: "0.3rem",
                        padding: "0.6rem",
                        color: "#333",
                    }}
                >
                    <Typography>이 누리집은 대한민국 공식 전자정부 누리집입니다.</Typography>
                </Box>
            </Box>

            {/* 버튼 섹션 */}
            <Stack direction="row" spacing={3}>
                {["로그인", "회원가입", "이용안내", "질문과 답변", "원격지원"].map((text) => (
                    <Button
                        key={text}
                        disableRipple
                        disableFocusRipple
                        sx={{
                            color: "black",
                            outline: "none",
                            border: "none",
                            backgroundColor: "transparent",
                            "&:hover": {
                                color: "#1976d2",
                            },
                            "&:focus": {
                                outline: "none",
                            },
                            "&:active": {
                                color: "#0d47a1",
                            },
                        }}
                    >
                        {text}
                    </Button>
                ))}
            </Stack>
        </Box>
    );
}

export default Top;
