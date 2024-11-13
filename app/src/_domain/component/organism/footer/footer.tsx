import { Box, Typography, Link, Stack } from "@mui/material";
import gov from "../../../../common/assets/image/gov.svg";
import Gangwon from "../../../../common/assets/image/Gangwon.svg";

function Footer(): JSX.Element {
    return (
        <Box>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column", // 세로 정렬
                    width: "100%",
                    backgroundColor: "#f9f9f9", // 전체 배경 색상
                }}
            >
                {/* 로고와 텍스트 섹션 */}
                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "flex-start", // 왼쪽 정렬
                        gap: "1rem",
                        padding: "1.3rem 2.5rem",
                    }}
                >
                    {/* 미래 24 부분 */}
                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "flex-start", // 왼쪽 정렬
                            gap: "0.6rem",
                        }}
                    >
                        <img src={gov} alt="미래 24" style={{ height: "2.5rem" }} />
                        <Typography sx={{ fontSize: "1rem", fontWeight: "bold", color: "#333" }}>
                            미래 24
                        </Typography>
                    </Box>

                    {/* 강원특별자치도 부분 */}
                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "flex-start", // 왼쪽 정렬
                            gap: "0.6rem",
                        }}
                    >
                        <img src={Gangwon} alt="강원특별자치도" style={{ height: "2.5rem" }} />
                        <Typography sx={{ fontSize: "1rem", fontWeight: "bold", color: "#333" }}>
                            강원특별자치도
                        </Typography>
                    </Box>
                </Box>

                {/* 정보 및 링크 섹션 */}
                <Box
                    sx={{
                        padding: "0 3rem",
                        display: "flex",
                        flexDirection: "column", // 세로 정렬
                        alignItems: "flex-start", // 왼쪽 정렬
                    }}
                >
                    {/* 정보 섹션 */}
                    <Stack direction="row" spacing={4} alignItems="center">
                        <Typography
                            sx={{
                                color: "#333",
                                fontSize: "1.1rem",
                                lineHeight: "2", // 줄 간격 조절
                                textAlign: "left", // 왼쪽 정렬
                            }}
                        >
                            (24266) 강원특별자치도
                            <br />
                            <b>홈페이지 전산 이용 문의 1577-XXXX</b> (유료, 한국고용정보원 고객상담센터, 평일 09시 ~ 18시)
                            <br />
                            <b>고용-노동 분야 제도 문의 국번없이 1350</b> (유료, 고용노동부 고객상담센터, 평일 09시 ~ 18시)
                        </Typography>
                    </Stack>

                    {/* 하단 링크 섹션 */}
                    <Stack
                        direction="row"
                        spacing={2}
                        sx={{
                            marginTop: "0.8rem",
                            paddingTop: "0.5rem",
                            flexWrap: "wrap",
                            justifyContent: "flex-start", // 왼쪽 정렬
                            borderTop: "1px solid #ddd",
                            width: "100%",
                        }}
                    >
                        {[
                            "이용약관",
                            "개인정보처리방침",
                            "이메일무단수집거부",
                            "저작권보호정책",
                            "오픈API 서비스",
                            "화상상담 관리자",
                            "사이트맵",
                            "챗봇",
                        ].map((text) => (
                            <Link
                                key={text}
                                href="#"
                                sx={{
                                    color: "#333",
                                    fontSize: "1rem",
                                    textDecoration: "none",
                                }}
                            >
                                {text}
                            </Link>
                        ))}
                    </Stack>

                    {/* 저작권 정보 */}
                    <Typography
                        sx={{
                            marginTop: "0.8rem",
                            marginBottom: "1.5rem", // 아래쪽 여백 추가
                            color: "#999",
                            fontSize: "0.9rem",
                            textAlign: "left", // 왼쪽 정렬
                        }}
                    >
                        © 2024 Ministry of Employment and Labor, Korea Employment Information Service. All rights reserved.
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
}

export default Footer;
