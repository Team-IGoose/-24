import { Box, Button, Typography } from "@mui/material";
import O from "../component/organism/_index";
import Subject from "../component/molecule/roadMap/subject/subject";
import Content from "../component/molecule/roadMap/content/content";
import { useEffect, useState } from "react";
import axios from "axios";

const roadMapData = [
  { title: "직무 선택", content: "직무 선택에 대한 내용입니다." },
  { title: "대학 추천", content: "대학 추천에 대한 내용입니다." },
  {
    title: "일자리 플러스 센터",
    content: "일자리 플러스 센터에 대한 내용입니다.",
  },
  { title: "국가취업지원제도", content: "국가취업지원제도에 대한 내용입니다." },
  { title: "일자리 소개", content: "일자리 소개에 대한 내용입니다." },
  { title: "지원 하기", content: "지원하기에 대한 내용입니다." },
];

function Template(): JSX.Element {
  const [count, setCount] = useState(0);
  const [universityData, setUniversityData] = useState([]);
  const [checkboxes, setCheckboxes] = useState({
    option1: false,
    option2: false,
  });

  // 이전 버튼 클릭 핸들러
  const handlePrevious = () => {
    setCount((prev) => (prev > 0 ? prev - 1 : roadMapData.length - 1));
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // 다음 버튼 클릭 핸들러
  const handleNext = () => {
    setCount((prev) => (prev < roadMapData.length - 1 ? prev + 1 : 0));
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // 체크박스 상태 변경 핸들러
  const handleCheckboxChange =
    (name: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setCheckboxes((prev) => ({
        ...prev,
        [name]: event.target.checked,
      }));
    };

  // "대학 추천"이 선택되었을 때 대학 정보 가져오기
  useEffect(() => {
    if (roadMapData[count].title === "대학 추천") {
      fetchUniversityData();
    }
  }, [count]);

  // 대학 정보 가져오기
  const fetchUniversityData = async () => {
    try {
      const response = await axios.post("http://localhost:8080/api/major", {
        startValue: "강원",
      });
      setUniversityData(response.data);
    } catch (error) {
      console.error("Error fetching university data:", error);
    }
  };

  return (
    <>
      {/* Header */}
      <O.Header />

      {/* 로드맵 제목 및 화살표 네비게이션 */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: { xs: 1, sm: 2, md: 3 },
          padding: 2,
          width: "100%",
          justifyContent: "space-evenly",
        }}
      >
        {/* Subject 컴포넌트에 내용 전달 및 선택된 항목 스타일링 */}
        {roadMapData.map((item, index) => (
          <Subject key={index} isSelected={index === count}>
            {index + 1}. {item.title}
          </Subject>
        ))}
      </Box>

      {/* 내용 표시 박스 */}
      <Content
        roadMapTitle={roadMapData[count].title}
        roadMapContent={roadMapData[count].content}
        checkboxes={checkboxes}
        universityData={universityData}
        handleCheckboxChange={handleCheckboxChange}
      />

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          border: "1px solid black",
          height: "50vh",
          justifyContent: "center",
          alignItems: "center",
          marginY: 2,
        }}
      >
        <Typography variant="h4" color="black">
          로드맵 내용
        </Typography>
        <Typography color="black">
          여기에 로드맵의 세부 내용이 표시됩니다.
        </Typography>
      </Box>

      {/* 하단 페이지 네비게이션 */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          paddingX: 5,
          marginBottom: 2,
        }}
      >
        <Button variant="outlined" color="primary" onClick={handlePrevious}>
          이전
        </Button>
        <Button variant="outlined" color="primary" onClick={handleNext}>
          이전
        </Button>
        <Button variant="outlined" color="primary">
          다음
        </Button>
      </Box>

      {/* Footer */}
      <O.Footer />
    </>
  );
}

export default Template;
