import { Box, Divider, styled } from "@mui/material";
import O from "../component/organism/_index";
import { useNavigate } from "react-router-dom";

const MainContainer = styled(Box)({
    width: '100vw',
    height: '100vh',
    backgroundColor: '#ffffff',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
});

const ServiceContainer = styled(Box)({
    width: '80%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    boxSizing: 'border-box',
});

const MenuContainer = styled(Box)({
    width: '18rem',
    height: '100%',
    display: 'flex',
    color: '#000000',
    flexDirection: 'column',
    boxSizing: 'border-box',
    paddingTop: '1.2rem',
});

const ContentContainer = styled(Box)({
    width: '100%',
    height: '100%',
    display: 'flex',
    color: '#000000',
    flexDirection: 'column',
    boxSizing: 'border-box',
    paddingTop: '2rem',
});

const MenuText = styled('span')({
    fontSize: '1.8rem',
    fontWeight: 'bold',
    color: '#000000',
    margin: '1rem 0',
    marginBottom: '2rem',
});

const ItemText = styled('span')({
    fontSize: '1rem',
    fontWeight: 'bold',
    color: '#000000',
    margin: '1rem 0',
    cursor: "pointer"
});


function Template(): JSX.Element {
    const navigate = useNavigate();

    return (
        <>
            <O.Header />
            <MainContainer>
                <ServiceContainer>
                    <Box display='flex' flexDirection='row'>
                        {/* 메뉴 영역 */}
                        <MenuContainer>
                            <MenuText>지역미래</MenuText>
                            <Divider />
                            <ItemText onClick={() => {navigate("/localEduProcess")}}>-지역인재교육과정</ItemText>
                            <Divider />
                            <ItemText onClick={() => {navigate("/femaleSupport")}}>-경력단절여성취업지원</ItemText>
                            <Divider />
                            <ItemText onClick={() => {navigate("/localEduInfo")}}>-내지역교육현황정보</ItemText>
                            <Divider />
                            <ItemText onClick={() => {navigate("/youthPolicy")}}>
                                <span>-</span>
                                <span style={{ color: '#4d65e1', textDecoration: 'underline' }}>청소년지원현황</span>
                            </ItemText>
                            <Divider />
                        </MenuContainer>
                        
                        {/* 콘텐츠 영역 */}
                        <ContentContainer>
                            대충 콘텐츠 영역
                        </ContentContainer>
                    </Box>
                </ServiceContainer>
            </MainContainer>
            <O.Footer />
        </>
    )
}
export default Template;