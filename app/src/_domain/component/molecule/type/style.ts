import { Box, Button, styled } from "@mui/material";

const Container = styled(Box)({
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  paddingLeft: "15rem",
  height: "3rem",
  background: "#62D491",
});

const TypeButton = styled(Button)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100%",
  color: "black",
  borderRadius: 0,
  padding: "0 3rem",
});

const S = {
  Container,
  TypeButton,
};
export default S;
