import React, { useState } from "react";
import { Box, Button, TextField, Typography, Chip, Stack, ToggleButton, ToggleButtonGroup, Menu, MenuItem } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

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
        flexDirection: "column",
        alignItems: "center",
        gap: "1.5rem",
        padding: "2rem",
      }}
    >
    {/* 검색 타입 선택 버튼 */}
    <ToggleButtonGroup
        value={searchType}
        exclusive
        onChange={handleSearchTypeChange}
        sx={{
            // marginBottom: "1rem",
        }}
        >
        {["통합검색", "일자리 검색", "직업훈련 검색"].map((type) => (
            <ToggleButton
            key={type}
            value={type}
            sx={{
                // display: "flex",
                // border: "none",
                fontSize: "1.2rem",
                // fontWeight: "bold",
                // backgroundColor: "none",
                // "&:hover": {
                //     backgroundColor: "transparent",
                //     border: "none"
                // },
                // outline: "none",
                // boxShadow: "none"

                justifyContent: "flex-start",
                textTransform: "none",
                fontWeight: searchType === type ? "bold" : "normal",
                color: searchType === type ? "#4caf50" : "#666",
                border: "none", // 기본 테두리 제거
                "&.Mui-selected": {
                color: "#4caf50",
                backgroundColor: "transparent",
                border: "none", // 선택된 상태에서도 테두리 없앰
                "&:hover": {
                    backgroundColor: "transparent",
                },
                },
                "&:hover": {
                backgroundColor: "transparent", // hover 시 배경 제거
                border: "none",
                },
                "&.Mui-focusVisible": {
                outline: "none", // 클릭 후 생기는 아웃라인 제거
                border: "none",
                },
                "&:focus": {
                outline: "none", // focus 상태에서의 아웃라인 제거
                boxShadow: "none", // focus 상태에서의 그림자 제거
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
          maxWidth: "600px",
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
          }}
        >
          <SearchIcon sx={{ color: "#333", fontSize: "1.5rem" }} />
        </Button>
      </Box>

      {/* 추천 검색어 섹션 */}
      <Box sx={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
        <Typography sx={{ color: "#333", fontWeight: "bold" }}>
          🔍 추천검색어
        </Typography>
        <Stack direction="row" spacing={1} flexWrap="wrap">
          {["실업급여", "근로계약서", "육아휴직", "국민내일배움카드", "일자리채움 청년지원금", "직업훈련"].map((keyword) => (
            <Chip
              key={keyword}
              label={keyword}
              clickable
              sx={{
                backgroundColor: keyword === "" ? "#e8f5e9" : "#f5f5f5",
                color: "#333",
                fontWeight: keyword === "" ? "bold" : "normal",
                "&:hover": {
                  backgroundColor: "#e0e0e0",
                },
              }}
            />
          ))}
        </Stack>
      </Box>
    </Box>
  );
}

export default SearchBar;
