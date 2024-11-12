import { useState, useRef } from 'react';
import { AppBar, Toolbar, Typography, MenuItem, IconButton, Box } from '@mui/material';
import { styled, keyframes } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import images from '../../../common/assets/image/_index';
import M from '../molecule/_index';

const slideInAnimation = keyframes`
  from {
    width: 0;
    left: 0;
  }
  to {
    width: 100%;
    left: 0;
  }
`;

const NavLink = styled(Typography)({
  margin: "0 30px",
  cursor: "pointer",
  fontSize: "18px",
  position: "relative",
  "&::after": {
    content: '""',
    position: "absolute",
    left: 0,
    width: "0",
    height: "3px",
    backgroundColor: "green",
    transition: "width 0.3s ease-in-out",
  },
  "&:hover::after": {
    width: "100%",
    animation: `${slideInAnimation} 0.3s forwards`,
  },
});

const DropdownContainer = styled(Box)({
  position: "absolute",
  top: "80px",
  left: 0,
  width: "100%", // 화면 너비에 맞춤
  padding: "20px 0",
  display: "flex",
  justifyContent: "center", // 중앙 정렬
  gap: "57px",
  backgroundColor: "#fff",
  boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
  zIndex: 10,
  overflow: "hidden", // 스크롤 제거
});

const NavbarContainer = styled(AppBar)({
  display: 'flex',
  width: '100%',
  // height: '80px',
  justifyContent: 'center',
  position: "relative",
  color: "inherit",
  backgroundColor: "#fff",
  borderBottom: "1px solid #e0e0e0",
  boxShadow: "none",
});

const CenteredToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "center",
  gap: "30px",
});

const LogoContainer = styled(Box)({
  display: "flex",
  alignItems: "center",
  cursor: "pointer",
});

const MenuContainer = styled(Box)({
  display: "flex",
  gap: "60px",
  position: "relative",
  fontWeight: 900,
  WebkitTextStroke: "0.3px black", // 윤곽선 추가
});

const personal = {
  menu: ['취업패키지', '창업패키지', '지역미래', '지역혁신', '지역도약'],
  drop: [
    ['미래취업로드맵', '채용종합정보', '지역채용지원서비스', '지역업종분포현황'],
    ['미래창업로드맵', '지역상권분석 서비스', 'K-StartUp 사업공고', '창업교육지원사업', '해외시장진출정보'],
    ['지역인재교육과정', '경력단절여성취업지원', '내지역교육현황정보', '청소년지원정책'],
    ['지역발전공약현황', '지역특색관광사업', '지역기업분석정보', '중소기업지원사업현황'],
    ['지역소통커뮤니티', '복지사업현황', '도시문제분석'],
  ],
};

const company = {
  menu: ['지역미래분석', '지역인재양성', '기업지원', '지역소통공간', '미래혁신도약정책'],
  drop: [
    ['지역문제분석', '지역문제해결현황', '지역맞춤형과제추천서비스'],
    ['지역특화 전문인재현황', '지역인재채용'],
    ['중소기업지원사업현황', 'K-StartUp 사업공고', '해외시장진출정보', '국가과제매칭서비스'],
    ['지역소통커뮤니티', '기업소통공간'],
    ['지역미래정책', '지역혁신정책', '지역도약정책'],
  ],
};

function Name(): JSX.Element {
  const [openDropdown, setOpenDropdown] = useState(false);
  const [userType, setUserType] = useState("company"); // "personal" 또는 "company"
  const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const data = userType === "personal" ? personal : company;

  const handleMenuOpen = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
    }
    setOpenDropdown(true);
  };

  const handleMenuClose = () => {
    setOpenDropdown(false);
  };

  const handleMouseLeaveNavbar = () => {
    closeTimeoutRef.current = setTimeout(handleMenuClose, 200);
  };

  const handleMouseEnterDropdown = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
    }
  };

  return (
    <NavbarContainer >
      <CenteredToolbar>
        <M.Logo location={"대구광역시"} />
          {data.menu.map((menu) => (
            <M.Menu menu={menu} />
          ))}

        <IconButton edge="end" color="inherit" >
          <MenuIcon />
        </IconButton>
      </CenteredToolbar>

      {openDropdown && (
        <DropdownContainer onMouseLeave={handleMenuClose} >
          {data.drop.map((menuGroup, index) => (
            <Box key={index} sx={{ width: userType === 'company' ? '160px' : '140px' }}>
              {menuGroup.map((item, idx) => (
                <MenuItem key={idx}>{item}</MenuItem>
              ))}
            </Box>
          ))}
        </DropdownContainer>
      )}
    </NavbarContainer>
  );
}

export default Name;
