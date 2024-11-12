import { Box, styled, Typography } from "@mui/material";

const Container = styled(Box)({
  display: "flex",
  alignItems: "center",
  cursor: "pointer",
  margin: "1.5rem 0"
})
const LogoImage = styled("img")`
  width: 2.5rem;
  height: 2.5rem;
  margin-right: 0.3rem
`;
const LogoText = styled(Typography)({
  color: "#666",
  WebkitTextStroke: "0.5px #666"
})

const S = {
  Container,
  LogoImage,
  LogoText
}
export default S