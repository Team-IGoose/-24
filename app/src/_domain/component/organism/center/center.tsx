import React, { useState } from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  Chip,
  Stack,
  ToggleButton,
  ToggleButtonGroup,
  Menu,
  MenuItem,
  IconButton,
} from "@mui/material";
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
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

function SearchBar(): JSX.Element {
  const [searchType, setSearchType] = useState<string>("개인");
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
        <Box
          sx={{
            flex: "0 0 40%",
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
          }}
        >
          {/* 검색 타입 선택 버튼 */}
          <ToggleButtonGroup
            value={searchType}
            exclusive
            onChange={handleSearchTypeChange}
          >
            {["통합검색", "취창업 검색", "미래혁신도약 검색"].map((type) => (
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
                      backgroundColor: "#e8f5e9",
                    },
                  },
                  "&:hover": {
                    backgroundColor: "#e8f5e9",
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
                "&:hover": {
                  backgroundColor: "#e8f5e9",
                },
              }}
            >
              {selectedCategory} ▼
            </Button>
            <Menu
              anchorEl={anchorEl}
              open={open}
              onClose={() => handleDropdownClose()}
            >
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
            <Button
              sx={{
                minWidth: "auto",
                padding: "0.5rem",
                "&:hover": {
                  backgroundColor: "#e8f5e9",
                },
              }}
            >
              <SearchIcon sx={{ color: "#333", fontSize: "1.5rem" }} />
            </Button>
          </Box>

          {/* 추천 검색어 섹션 */}
          <Box sx={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <Typography
              sx={{ color: "#333", fontWeight: "bold", marginRight: "0.5rem" }}
            >
              🔍 추천검색어
            </Typography>
            <Stack direction="row" spacing={1} flexWrap="wrap">
              {[
                "지역취업로드맵",
                "지역창업로드맵",
                "지역발전공약현황",
                "지역인재양성과정",
              ].map((keyword) => (
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
            transition: "box-shadow 0.3s ease",
            "&:hover": {
              boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)",
            },
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
            미래24에{" "}
            <Typography
              component="span"
              sx={{ color: "#4caf50", fontSize: "1.2rem", fontWeight: "bold" }}
            >
              로그인
            </Typography>{" "}
            하시면 아래의 서비스를 이용할 수 있어요.
          </Typography>

          {/* 서비스 아이콘과 설명 */}
          <Stack direction="row" spacing={4}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                width: "12rem",
              }}
            >
              <CheckCircleOutlineIcon sx={{ color: "#4caf50" }} />
              <Typography>지역특화채용 조회</Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                width: "12rem",
              }}
            >
              <DescriptionIcon sx={{ color: "#4caf50" }} />
              <Typography>지역창업분석 서비스</Typography>
            </Box>
          </Stack>
          <br />
          <Stack direction="row" spacing={4}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                width: "12rem",
              }}
            >
              <CardGiftcardIcon sx={{ color: "#4caf50" }} />
              <Typography>미래혁신도약 지원내역</Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                width: "12rem",
              }}
            >
              <CardGiftcardIcon sx={{ color: "#4caf50" }} />
              <Typography>우리아이 라이프 로드맵</Typography>
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
            onClick={() => {
              window.location.href = "http://localhost:5173/#AuthType";
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
          justifyContent: "center",
        }}
      >
        {/* 제목 섹션 */}
        <Box
          sx={{
            display: "flex",
            width: "90%",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography
            sx={{ fontSize: "1.7rem", fontWeight: "bold", color: "#333" }}
          >
            이주를 고민하고 계신가요?
          </Typography>
        </Box>

        {/* 서비스 카드 섹션 */}
        <Box
          sx={{
            width: "90%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            overflowX: "auto",
            paddingBottom: "1rem",
            gap: "2rem",
          }}
        >
          <IconButton
            sx={{
              color: "#666",
              minWidth: "auto",
              padding: "1rem",
              "&:hover": {
                color: "#4caf50",
              },
            }}
          >
            <ArrowBackIosIcon />
          </IconButton>
          {[
            {
              icon: (
                <AssignmentTurnedInOutlinedIcon sx={{ fontSize: "3rem" }} />
              ),
              label: "이주 케어 및 정보제공 서비스",
            },
            {
              icon: <SchoolOutlinedIcon sx={{ fontSize: "3rem" }} />,
              label: "지역 맞춤형 내 성장 로드맵",
            },
            {
              icon: <BusinessCenterOutlinedIcon sx={{ fontSize: "3rem" }} />,
              label: "권역별 우수채용 정보",
            },
            {
              icon: <WorkOutlineOutlinedIcon sx={{ fontSize: "3rem" }} />,
              label: "권역별 혁신공약 현황",
            },
            {
              icon: <CardMembershipOutlinedIcon sx={{ fontSize: "3rem" }} />,
              label: "권역별 미래지원정책 정보",
            },
          ].map((service, index) => (
            <Box
              key={index}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "0.5rem",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                width: "13rem",
                "&:hover": {
                  transform: "scale(1.05)",
                  boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)",
                },
                cursor: "pointer",
                "&:active": {
                  transform: "scale(0.95)",
                },
              }}
            >
              <Stack
                alignItems="center"
                spacing={1}
                sx={{
                  width: "140px",
                  height: "140px",
                  borderRadius: "50%",
                  backgroundColor: "#ffffff",
                  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  transition: "background-color 0.3s ease",
                  "&:hover": {
                    backgroundColor: "#e8f5e9",
                  },
                }}
              >
                <IconButton sx={{ color: "#4caf50" }}>
                  {service.icon}
                </IconButton>
              </Stack>
              <Typography
                sx={{ fontSize: "1.1rem", fontWeight: "bold", color: "#333" }}
              >
                {service.label}
              </Typography>
            </Box>
          ))}

          {/* 더보기 화살표 */}
          <IconButton
            sx={{
              color: "#666",
              minWidth: "auto",
              padding: "1rem",
              "&:hover": {
                color: "#4caf50",
              },
            }}
          >
            <ArrowForwardIosIcon />
          </IconButton>
        </Box>
      </Box>

      {/* 지원 제도 섹션 */}
      <Box
        sx={{
          width: "100%",
          padding: "2rem 0",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "1rem",
        }}
      >
        {/* 제목 섹션 */}
        <Box sx={{ display: "flex", width: "90%", alignItems: "center" }}>
          <Typography
            sx={{ fontSize: "2rem", fontWeight: "bold", color: "#333" }}
          >
            지원 제도
          </Typography>
        </Box>
        <Box>
          <Typography
            sx={{ fontSize: "1rem", fontWeight: "bold", color: "#333" }}
          >
            지역 미래혁신도약정책과 관련한 다양한 지원 제도를 소개해 드려요.
            아래에서 궁금하신 주제를 클릭해 주세요.
          </Typography>
        </Box>

        <ToggleButtonGroup
          value={searchType}
          exclusive
          onChange={handleSearchTypeChange}
          sx={{
            justifyContent: "flex-start",
            marginLeft: "11rem",
            width: "100%",
          }}
        >
          {["개인", "기업/기관"].map((type) => (
            <ToggleButton
              key={type}
              value={type}
              sx={{
                fontSize: "1.4rem",
                textTransform: "none",
                fontWeight: searchType === type ? "bold" : "normal",
                color: searchType === type ? "#4caf50" : "#666",
                border: "none",
                "&.Mui-selected": {
                  color: "#4caf50",
                  backgroundColor: "transparent",
                  border: "none",
                  "&:hover": {
                    backgroundColor: "#e8f5e9",
                  },
                },
                "&:hover": {
                  backgroundColor: "#e8f5e9",
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

        {/* 카드 섹션 */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "1.5rem",
            width: "90%",
          }}
        >
          {(searchType === "개인"
            ? [
                {
                  title: "취업은 하고 싶은데, 어떻게 해야 할지 모르겠어요",
                  description:
                    "기초 취업능력 키우기, 1:1 상담, 나에게 맞는 지원 추천 등",
                  backgroundColor: "#cfe2ff",
                },
                {
                  title: "취업하기 위해 공부하거나 자격증을 따고 싶어요",
                  description: "취업과 이직에 도움이 되는 교육 / 훈련 받기",
                  backgroundColor: "#e6f7e5",
                },
                {
                  title: "내게 맞는 일자리를 찾고 싶어요",
                  description: "일자리 추천, 다양한 일 경험, 취업지원금 등",
                  backgroundColor: "#fdeee8",
                },
                {
                  title:
                    "출산/육아를 위해 일을 쉬거나 근무 시간을 줄여야 할 것 같아요",
                  description:
                    "출산(유산, 사산 포함) 급여, 육아휴직, 육아기 근로시간 단축 등",
                  backgroundColor: "#d7e9ff",
                },
                {
                  title:
                    "최근에 어쩔 수 없이 퇴사했어요. 조만간 퇴사할 것 같아요",
                  description: "실업급여, 재취업 수당 등",
                  backgroundColor: "#e6f7e5",
                },
                {
                  title: "나이는 좀 있지만, 다시 취업을 하고 싶습니다",
                  description:
                    "경력직을 위한 경력설계 컨설팅, 공공 일자리, 취업 지원금, 취업 능력 키우기 등",
                  backgroundColor: "#fdeee8",
                },
                {
                  title: "전 장애가 있는데, 어떤 도움을 받을 수 있을까요?",
                  description:
                    "장애인의 취업을 위한 단계별 통합 지원 프로그램, 교육/훈련 등",
                  backgroundColor: "#d7e9ff",
                },
                {
                  title: "취업은 하고 싶은데, 어떻게 해야 할지 모르겠어요",
                  description:
                    "기초 취업능력 키우기, 1:1 상담, 나에게 맞는 지원 추천 등",
                  backgroundColor: "#cfe2ff",
                },

                {
                  title: "나이는 좀 있지만, 다시 취업을 하고 싶습니다",
                  description:
                    "경력직을 위한 경력설계 컨설팅, 공공 일자리, 취업 지원금, 취업 능력 키우기 등",
                  backgroundColor: "#fdeee8",
                },
                {
                  title: "전 장애가 있는데, 어떤 도움을 받을 수 있을까요?",
                  description:
                    "장애인의 취업을 위한 단계별 통합 지원 프로그램, 교육/훈련 등",
                  backgroundColor: "#d7e9ff",
                },
                {
                  title: "취업은 하고 싶은데, 어떻게 해야 할지 모르겠어요",
                  description:
                    "기초 취업능력 키우기, 1:1 상담, 나에게 맞는 지원 추천 등",
                  backgroundColor: "#cfe2ff",
                },
                {
                  title: "취업하기 위해 공부하거나 자격증을 따고 싶어요",
                  description: "취업과 이직에 도움이 되는 교육 / 훈련 받기",
                  backgroundColor: "#e6f7e5",
                },
                {
                  title: "내게 맞는 일자리를 찾고 싶어요",
                  description: "일자리 추천, 다양한 일 경험, 취업지원금 등",
                  backgroundColor: "#fdeee8",
                },
                {
                  title:
                    "출산/육아를 위해 일을 쉬거나 근무 시간을 줄여야 할 것 같아요",
                  description:
                    "출산(유산, 사산 포함) 급여, 육아휴직, 육아기 근로시간 단축 등",
                  backgroundColor: "#d7e9ff",
                },
                {
                  title:
                    "최근에 어쩔 수 없이 퇴사했어요. 조만간 퇴사할 것 같아요",
                  description: "실업급여, 재취업 수당 등",
                  backgroundColor: "#e6f7e5",
                },

                {
                  title: "기타 제도",
                  description:
                    "고용보험 등 고용 관련 기업의 의무와 알아두면 좋은 다양한 제도",
                  backgroundColor: "#e6f7e5",
                },
              ]
            : [
                {
                  title: "채 용",
                  description:
                    "다양한 채용 지원금과 채용 서비스, 일 경험 프로그램 등",
                  backgroundColor: "#cfe2ff",
                },
                {
                  title: "교육/훈련",
                  description:
                    "채용 예정이거나 이미 근무 중인 직원의 직무능력 향상을 위한 지원",
                  backgroundColor: "#e6f7e5",
                },
                {
                  title: "출산/육아",
                  description:
                    "출산휴가, 육아휴직, 육아를 위한 근로시간 단축을 부여한 기업에 대한 지원",
                  backgroundColor: "#fdeee8",
                },
                {
                  title: "유연 근무",
                  description:
                    "근로시간 단축, 원격 근무 등 유연하고 스마트하게 일하는 기업을 위한 지원",
                  backgroundColor: "#d7e9ff",
                },
                {
                  title: "고용 유지",
                  description:
                    "어려운 회사사정에도 불구하고 직원의 고용유지를 위해 노력한 기업을 위한 지원",
                  backgroundColor: "#e6f7e5",
                },
                {
                  title: "재취업 지원",
                  description:
                    "직원의 재취업을 지원하는 제도 - 중장년 내일센터, 생애경력설계, 새출발크레딧 등",
                  backgroundColor: "#fdeee8",
                },
                {
                  title: "장애인 고용",
                  description:
                    "장애인을 채용했거나, 채용하기 위해 노력한 기업을 위한 지원",
                  backgroundColor: "#d7e9ff",
                },
                {
                  title: "외국인 고용",
                  description:
                    "내국인 채용을 위해 노력했으나 채용하지 못한 기업을 위한 고용허가제(사업주) 지원",
                  backgroundColor: "#e6f7e5",
                },
                {
                  title: "유연 근무",
                  description:
                    "근로시간 단축, 원격 근무 등 유연하고 스마트하게 일하는 기업을 위한 지원",
                  backgroundColor: "#d7e9ff",
                },
                {
                  title: "고용 유지",
                  description:
                    "어려운 회사사정에도 불구하고 직원의 고용유지를 위해 노력한 기업을 위한 지원",
                  backgroundColor: "#e6f7e5",
                },
                {
                  title: "재취업 지원",
                  description:
                    "직원의 재취업을 지원하는 제도 - 중장년 내일센터, 생애경력설계, 새출발크레딧 등",
                  backgroundColor: "#fdeee8",
                },
                {
                  title: "장애인 고용",
                  description:
                    "장애인을 채용했거나, 채용하기 위해 노력한 기업을 위한 지원",
                  backgroundColor: "#d7e9ff",
                },
                {
                  title: "외국인 고용",
                  description:
                    "내국인 채용을 위해 노력했으나 채용하지 못한 기업을 위한 고용허가제(사업주) 지원",
                  backgroundColor: "#e6f7e5",
                },
                {
                  title: "유연 근무",
                  description:
                    "근로시간 단축, 원격 근무 등 유연하고 스마트하게 일하는 기업을 위한 지원",
                  backgroundColor: "#d7e9ff",
                },
                {
                  title: "고용 유지",
                  description:
                    "어려운 회사사정에도 불구하고 직원의 고용유지를 위해 노력한 기업을 위한 지원",
                  backgroundColor: "#e6f7e5",
                },
                {
                  title: "재취업 지원",
                  description:
                    "직원의 재취업을 지원하는 제도 - 중장년 내일센터, 생애경력설계, 새출발크레딧 등",
                  backgroundColor: "#fdeee8",
                },
              ]
          ).map((item, index) => (
            <Box
              key={index}
              sx={{
                padding: "1.5rem",
                borderRadius: "0.5rem",
                backgroundColor: item.backgroundColor,
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                "&:hover": {
                  transform: "scale(1.05)",
                  boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)",
                },
                cursor: "pointer",
                "&:active": {
                  transform: "scale(0.95)",
                },
              }}
            >
              <Typography
                sx={{
                  fontWeight: "bold",
                  fontSize: "1rem",
                  marginBottom: "0.5rem",
                }}
              >
                {item.title}
              </Typography>
              <Typography sx={{ fontSize: "0.9rem", color: "#555" }}>
                {item.description}
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
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}

export default SearchBar;
