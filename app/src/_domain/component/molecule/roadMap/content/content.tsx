import React, { useState } from "react";
import { Box, Typography, Checkbox, FormControlLabel, CardContent, Card, Button } from "@mui/material";
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';


interface ContentProps {
  roadMapTitle: string;
  roadMapContent: string;
  universityData: Array<{ universe: string; collage: string; major: string }>;
  checkboxes: {
    option1: boolean;
    option2: boolean;
  };
  handleCheckboxChange: (name: string) => (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const pastelColors = ["#e3f2fd", "#e8f5e9", "#fff3e0", "#f3e5f5", "#ffebee"];

function Content({
  roadMapTitle,
  roadMapContent,
  universityData,
  checkboxes,
  handleCheckboxChange,
}: ContentProps): JSX.Element {
    const [count, setCount] = useState(15);

    const handleMore = () => {
        setCount(count+10)
    }
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        border: "1px solid black",
        padding: 3,
        borderRadius: "10px",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
        width: "100%",
        height: "auto",
        backgroundColor: "#f9f9f9",
        justifyContent: "center",
        alignItems: "center",
        marginY: 2,
      }}
    >
      <Typography variant="h4" color="#333333">
        {roadMapTitle}
      </Typography>
      <Typography color="#666">{roadMapContent}</Typography>

      {/* "직무 선택"이 선택된 경우 체크박스 표시 */}
      {roadMapTitle === "직무 선택" && (
        <Box>
          <FormControlLabel
            control={
              <Checkbox
                checked={checkboxes.option1}
                onChange={handleCheckboxChange("option1")}
              />
            }
            label={
                <Typography sx={{ color: "black" }}>
                  공공 기관
                </Typography>
              }
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={checkboxes.option2}
                onChange={handleCheckboxChange("option2")}
              />
            }
            label={
                <Typography sx={{ color: "black" }}>
                  고임금 일자리
                </Typography>
              }
          />
        </Box>
      )}

      {/* "대학 추천"이 선택된 경우 대학 정보 그리드 섹션 표시 */}
      {roadMapTitle === "대학 추천" && (
        <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: "1.5rem",
          width: "90%",
        //   maxWidth: "1000px",
          marginTop: 2,
        }}
      >
        {universityData.length > 0 ? (
          universityData.map((univ, index) => (
            index < count && <Card
              key={index}
              sx={{
                borderRadius: "15px",
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                padding: 2,
                backgroundColor: pastelColors[index % pastelColors.length],
                transition: "transform 0.2s ease-in-out",
                "&:hover": {
                  transform: "scale(1.03)",
                },
              }}
            >
              <CardContent>
                <Typography variant="h6" color="#1976d2" sx={{ fontWeight: "bold", marginBottom: 1 }}>
                  {univ.universe}
                </Typography>
                <Typography color="#555" sx={{ marginBottom: 0.5 }}>
                  단과대학: {univ.collage}
                </Typography>
                <Typography color="#777" sx={{ marginBottom: 2 }}>
                  전공: {univ.major}
                </Typography>
                <Button
                variant="text"
                sx={{
                  marginTop: "1rem",
                  color: "#333",
                  textTransform: "none",
                  fontWeight: "bold",
                  "&:hover": {
                    textDecoration: "underline",
                    backgroundColor: "transparent",
                  },
                }}
              >
                자세히 보기
              </Button>
              </CardContent>
            </Card>
          ))
        ) : (
            <Typography color="#888">No university data available.</Typography>
        )}
      </Box>
      )}
      {roadMapTitle === "대학 추천" &&<Box 
        sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            marginTop: "2rem",
        }}>
      <Fab color="default" aria-label="add" onClick={handleMore}>
        <AddIcon />
      </Fab>

      </Box>}
    </Box>
  );
}

export default Content;
