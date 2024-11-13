import eg from "../../../../common/assets/image/eg.svg";
import { Box, Typography, Button, Stack } from "@mui/material";

function Top(): JSX.Element {
    return (
        <Box sx={{
            display: "flex",
            justifyContent: "space-between",
            alignContent: "center",
            margin: "0 15rem"

        }}>
            <Box sx={{
                display: "flex",
            }}>
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
                    <Typography> 이 누리집은 대한민국 공식 전자정부 누리집입니다.</Typography>
                </Box>
            </Box>
            <Box>
                <Stack spacing={2} direction="row">
                    {["로그인", "회원가입", "이용안내", "질문과 답변", "원격지원"].map((text) => (
                        <Button
                            key={text}
                            disableRipple
                            disableFocusRipple
                            sx={{
                                color: "black", // 기본 텍스트 색상
                                outline: "none",
                                border: "none",
                                backgroundColor: "transparent",
                                "&:hover": {
                                    color: "#1976d2", // 마우스를 올렸을 때 텍스트 색상 (파란색)
                                },
                                "&:focus": {
                                    outline: "none",
                                },
                                "&:active": {
                                    color: "#0d47a1", // 클릭했을 때 텍스트 색상 (더 진한 파란색)
                                },
                            }}
                        >
                            {text}
                        </Button>
                    ))}
                </Stack>
            </Box>
        </Box>
    );
}

export default Top;