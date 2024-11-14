import { AppBar, Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";
import M from "../../molecule/_index";
import { useNavigate } from "react-router-dom";

const NavbarContainer = styled(AppBar)({
  display: "flex",
  width: "100%",
  // height: '80px',
  justifyContent: "center",
  position: "relative",
  color: "inherit",
  backgroundColor: "#fff",
  borderBottom: "1px solid #e0e0e0",
  boxShadow: "none",
  whiteSpace: "nowrap",
});

const MenuContainer = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-around",
  margin: "0 10rem",
});

const personal = {
  menu: ["취업패키지", "창업패키지", "지역미래", "지역혁신", "지역도약"],
  route: ["/intro", "/intro", "/localFutureInfo", "/localPledge", "/intro"],
  drop: [
    [
      "미래취업로드맵",
      "채용종합정보",
      "지역채용지원서비스",
      "지역업종분포현황",
    ],
    [
      "미래창업로드맵",
      "지역상권분석 서비스",
      "K-StartUp 사업공고",
      "창업교육지원사업",
      "해외시장진출정보",
    ],
    [
      "지역인재교육과정",
      "경력단절여성취업지원",
      "내지역교육현황정보",
      "청소년지원정책",
    ],
    [
      "지역발전공약현황",
      "지역특색관광사업",
      "지역기업분석정보",
      "중소기업지원사업현황",
    ],
    ["지역소통커뮤니티", "복지사업현황", "도시문제분석"],
  ],
};

// const company = {
//   menu: [
//     "지역미래분석",
//     "지역인재양성",
//     "기업지원",
//     "지역소통공간",
//     "미래혁신도약정책",
//   ],
//   drop: [
//     ["지역문제분석", "지역문제해결현황", "지역맞춤형과제추천서비스"],
//     ["지역특화 전문인재현황", "지역인재채용"],
//     [
//       "중소기업지원사업현황",
//       "K-StartUp 사업공고",
//       "해외시장진출정보",
//       "국가과제매칭서비스",
//     ],
//     ["지역소통커뮤니티", "기업소통공간"],
//     ["지역미래정책", "지역혁신정책", "지역도약정책"],
//   ],
// };

function Header(): JSX.Element {
  const data = personal;
  const navigate = useNavigate();

  const handleMenuClick = (index: number) => {
    const targetRoute = data.route[index];
    if (targetRoute) {
      navigate(targetRoute);
    }
  };

  return (
    <NavbarContainer>
      <M.Top />
      <M.Type />
      <MenuContainer>
        <M.Logo location={""} />
        {data.menu.map((menu, index) => (
          <M.Menu
            key={index}
            menu={menu}
            onClick={() => handleMenuClick(index)}
          />
        ))}
        <MenuIcon fontSize="large" sx={{ cursor: "pointer" }} />
      </MenuContainer>
    </NavbarContainer>
  );
}

export default Header;
