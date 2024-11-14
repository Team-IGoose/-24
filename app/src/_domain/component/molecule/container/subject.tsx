import { Box } from "@mui/material";

function Subject(): JSX.Element {
    return (
        <Box
      sx={{
        width: "250px",
        height: "60px",
        backgroundColor: "#8cd197",
        color: "#333333",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: { xs: "1rem", sm: "1.5rem", md: "2rem" },
        clipPath:
          "polygon(0% 0%, 85% 0%, 100% 50%, 85% 100%, 0% 100%)",
        // border: "2px solid black",
      }}
    >
      제목
    </Box>
    )
}

export default Subject;