import React, { useState } from "react";
import { Box, Button, TextField, Typography, Chip, Stack, ToggleButton, ToggleButtonGroup, Menu, MenuItem, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import DescriptionIcon from "@mui/icons-material/Description";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import AssignmentTurnedInOutlinedIcon from "@mui/icons-material/AssignmentTurnedInOutlined";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import BusinessCenterOutlinedIcon from "@mui/icons-material/BusinessCenterOutlined";
import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";
import CardMembershipOutlinedIcon from "@mui/icons-material/CardMembershipOutlined";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

function SearchBar(): JSX.Element {
  const [searchType, setSearchType] = useState<string>("통합검색");
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const [selectedCategory, setSelectedCategory] = useState<string>("전체");

  const handleSearchTypeChange = (
    event: React.MouseEvent<HTMLElement>,
    newSearchType: string
  ) => {
    if (newSearchType !== null) {
      setSearchType(newSearchType);
    }
  };

  const handleDropdownClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleDropdownClose = (category?: string) => {
    setAnchorEl(null);
    if (category) {
      setSelectedCategory(category);
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        padding: "2rem",
        flexDirection: "column",
        gap: "2rem",
      }}
    >
      {/* 검색 섹션 */}
      <Box sx={{ display: "flex", width: "100%" }}>
        {/* 왼쪽 여백 5% */}
        <Box sx={{ flex: "0 0 5%" }} />

        {/* 검색 섹션 40% */}
        <Box sx={{ flex: "0 0 40%", display: "flex", flexDirection: "column", gap: "1rem" }}>
          {/* 검색 타입 선택 버튼 */}
          <ToggleButtonGroup
            value={searchType}
            exclusive
            onChange={handleSearchTypeChange}
          >
            {["통합검색", "일자리 검색", "직업훈련 검색"].map((type) => (
              <ToggleButton
                key={type}
                value={type}
                sx={{
                  fontSize: "1.1rem",
                  textTransform: "none",
                  fontWeight: searchType === type ? "bold" : "normal",
                  color: searchType === type ? "#4caf50" : "#666",
                  border: "none",
                  "&.Mui-selected": {
                    color: "#4caf50",
                    backgroundColor: "transparent",
                    border: "none",
                    "&:hover": {
                      backgroundColor: "transparent",
                    },
                  },
                  "&:hover": {
                    backgroundColor: "transparent",
                    border: "none",
                  },
                  "&.Mui-focusVisible": {
                    outline: "none",
                    border: "none",
                  },
                  "&:focus": {
                    outline: "none",
                    boxShadow: "none",
                  },
                }}
              >
                {type}
              </ToggleButton>
            ))}
          </ToggleButtonGroup>

          {/* 검색 바 */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              borderRadius: "2rem",
              border: "4px solid #4caf50",
              padding: "0.5rem 1rem",
              width: "100%",
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
            }}
          >
            <Button
              onClick={handleDropdownClick}
              sx={{
                minWidth: "auto",
                color: "#333",
                fontWeight: "bold",
                marginRight: "1rem",
              }}
            >
              {selectedCategory} ▼
            </Button>
            <Menu anchorEl={anchorEl} open={open} onClose={() => handleDropdownClose()}>
              {["전체", "신고·신청", "정책", "채용"].map((category) => (
                <MenuItem
                  key={category}
                  onClick={() => handleDropdownClose(category)}
                  sx={{ fontSize: "0.9rem" }}
                >
                  {category}
                </MenuItem>
              ))}
            </Menu>
            <TextField
              variant="standard"
              placeholder="필요한 서비스를 찾아보세요"
              InputProps={{
                disableUnderline: true,
              }}
              sx={{
                flexGrow: 1,
                marginRight: "1rem",
              }}
            />
            <Button sx={{ minWidth: "auto", padding: "0.5rem" }}>
              <SearchIcon sx={{ color: "#333", fontSize: "1.5rem" }} />
            </Button>
          </Box>

          {/* 추천 검색어 섹션 */}
          <Box sx={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <Typography sx={{ color: "#333", fontWeight: "bold", marginRight: "0.5rem" }}>
              🔍 추천검색어
            </Typography>
            <Stack direction="row" spacing={1} flexWrap="wrap">
              {["실업급여", "근로계약서", "육아휴직", "국민내일배움카드"].map((keyword) => (
                <Chip
                  key={keyword}
                  label={keyword}
                  clickable
                  sx={{
                    backgroundColor: "#f5f5f5",
                    color: "#333",
                    fontWeight: keyword === "" ? "bold" : "normal",
                    "&:hover": {
                      backgroundColor: "#c8f192",
                    },
                  }}
                />
              ))}
            </Stack>
          </Box>
        </Box>

        {/* 중간 여백 10% */}
        <Box sx={{ flex: "0 0 10%" }} />

        {/* 오른쪽 로그인 섹션 30% */}
        <Box
          sx={{
            flex: "0 0 30%",
            border: "2.5px solid #4caf50",
            borderRadius: "0.5rem",
            padding: "1.5rem",
            backgroundColor: "#f9f9f9",
          }}
        >
          <Typography
            sx={{
              color: "#333",
              fontWeight: "bold",
              fontSize: "1.2rem",
              marginBottom: "1rem",
            }}
          >
            미래24에 <Typography component="span" sx={{ color: "#4caf50", fontSize: "1.2rem", fontWeight: "bold"}}>로그인</Typography> 하시면 아래의 서비스를 이용할 수 있어요.
          </Typography>

          {/* 서비스 아이콘과 설명 */}
          <Stack direction="row" spacing={12}>
              <Box sx={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                  <CheckCircleOutlineIcon sx={{ color: "#4caf50" }} />
                  <Typography>내 신청 조회</Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                  <DescriptionIcon sx={{ color: "#4caf50" }} />
                  <Typography>증명서 발급</Typography>
              </Box>
          </Stack>
              <br />
          <Stack direction="row" spacing={4}>
              <Box sx={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                  <CardGiftcardIcon sx={{ color: "#4caf50" }} />
                  <Typography>놓치고 있는 혜택 확인</Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                  <CardGiftcardIcon sx={{ color: "#4caf50" }} />
                  <Typography>잡케어(직업추천, 경력관리)</Typography>
              </Box>
          </Stack>

          {/* 로그인 버튼 */}
          <Button
              variant="contained"
              sx={{
                  width: "100%", // 너비를 전체 컨테이너에 맞게 설정
                  display: "flex",
                  justifyContent: "center", // 수평 중앙 정렬
                  alignItems: "center", // 수직 중앙 정렬
                  fontWeight: "900",
                fontSize: "1.1rem",
                  marginTop: "1.5rem",
                  backgroundColor: "#4caf50",
                  "&:hover": {
                  backgroundColor: "#43a047",
                  },
              }}
              onClick={()=>{
                window.location.href = "http://localhost:5173/#AuthPersonal";
              }}
              >
              로그인
          </Button>
        </Box>

        {/* 오른쪽 여백 5% */}
        <Box sx={{ flex: "0 0 5%" }} />
      </Box>

      {/* 자주 찾는 서비스 섹션 */}
      <Box
        sx={{
          width: "100%",
          padding: "2rem 0",
          backgroundColor: "#f9f9f9",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "1rem",
        }}
      >
        {/* 제목 섹션 */}
        <Box sx={{ display: "flex", width: "90%", alignItems: "center" }}>
          <Typography sx={{ fontSize: "1.5rem", fontWeight: "bold", color: "#333" }}>
            지역 맞춤 서비스
          </Typography>
        </Box>

        {/* 서비스 카드 섹션 */}
        <Box
          sx={{
            width: "90%",
            display: "flex",
            alignItems: "center",
            overflowX: "auto",
            paddingBottom: "1rem",
            gap: "2rem",
          }}
        >
          {[
            { icon: <AssignmentTurnedInOutlinedIcon />},
            { icon: <SchoolOutlinedIcon />},
            { icon: <BusinessCenterOutlinedIcon />},
            { icon: <WorkOutlineOutlinedIcon />},
            { icon: <CardMembershipOutlinedIcon />},
          ].map((service, index) => (
            <Stack
              key={index}
              alignItems="center"
              spacing={1}
              sx={{
                minWidth: "120px",
                padding: "1rem",
                borderRadius: "50%",
                backgroundColor: "#ffffff",
                boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
              }}
            >
              <IconButton sx={{ color: "#4caf50", fontSize: "2rem" }}>
                {service.icon}
              </IconButton>
              <Typography sx={{ textAlign: "center", color: "#333", fontSize: "0.9rem" }}>
                {service.title}
              </Typography>
            </Stack>
          ))}

          {/* 더보기 화살표 */}
          <IconButton
            sx={{
              color: "#666",
              minWidth: "auto",
              padding: "1rem",
            }}
          >
            <ArrowForwardIosIcon />
          </IconButton>
        </Box>

        {/* 페이지 정보 */}
        <Typography sx={{ color: "#666", fontSize: "0.9rem" }}>1 / 5</Typography>
      </Box>
    </Box>
  );
}

export default SearchBar;