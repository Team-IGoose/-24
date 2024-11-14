import { styled, Typography } from "@mui/material";

const MenuText = styled(Typography)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  cursor: "pointer",
  width: "10rem",
  height: "5rem",
  WebkitTextStroke: "0.3px black",
  position: "relative",

  "&::after": {
    content: '""',
    position: "absolute",
    bottom: 0,
    left: 0,
    width: 0,
    height: "0.2rem",
    backgroundColor: "green",
    transition: "width 0.3s ease",
  },

  "&:hover::after": {
    width: "100%",
  },
});

const S = {
  MenuText,
};
export default S;
