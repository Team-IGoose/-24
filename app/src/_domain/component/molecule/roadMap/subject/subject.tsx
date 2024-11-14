import { Box } from "@mui/material";

interface SubjectProps {
  children: React.ReactNode;
  isSelected: boolean;
}

function Subject({ children, isSelected }: SubjectProps): JSX.Element {
    return (
        <Box
      sx={{
        width: "200px",
        height: "60px",
        backgroundColor: isSelected ? "#4caf50" : "#8cd197",
        color: "#333333",
        display: "flex",
        alignItems: "center",
        justifyContent: "left",
        paddingLeft: "2rem",
        fontSize: "1rem",
        clipPath:
          "polygon(0% 0%, 85% 0%, 100% 50%, 85% 100%, 0% 100%)",
          
        transition: "background-color 0.3s ease",
      }}
    >
      { children }
    </Box>
    )
}

export default Subject;