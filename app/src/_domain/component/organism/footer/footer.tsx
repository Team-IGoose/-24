import { Box, Typography } from "@mui/material";
import gov from "../../../../common/assets/image/gov.svg";
import Gangwon from "../../../../common/assets/image/Gangwon.svg";

function Footer(): JSX.Element {
    return (
        <Box
            sx={{
                display: "flex",
                marginLeft: "3rem",
                alignItems: "center",
                gap: 2, // 요소 간 간격

            }}
        >
            
            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                }}
            >
                <img src={gov} alt="미래 24" style={{ height: "40px" }} />
                <Typography sx={{ fontSize: "14px", fontWeight: "bold", color: "#333" }}>
                    미래 24
                </Typography>
            </Box>

            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                }}
            >
                <img src={Gangwon} alt="강원특별자치도" style={{ height: "40px" }} />
                <Typography sx={{ fontSize: "14px", fontWeight: "bold", color: "#333" }}>
                    강원특별자치도
                </Typography>
            </Box>
        </Box>
    );
}

export default Footer;
