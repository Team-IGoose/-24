import { Box, styled, Typography } from "@mui/material";
import O from "../component/organism/_index";

const MainContainer = styled(Box)({
    width: '100vw',
    height: '100vh',
    backgroundColor: '#ffffff',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
});

const LoginContainer = styled(Box)({
    width: '70%',
    height: '100%',
    display: 'flex',
  });

const DescText = styled('span')({
    fontSize: '1.8rem',
    fontWeight: 'bold',
    color: '#000000',
    margin: '1rem 0',
});

function Template(): JSX.Element {
return (
    <>
        <O.Name />
        <MainContainer>
            <LoginContainer>
                <DescText>로그인해주세요</DescText>
            </LoginContainer>
        </MainContainer>
    </>
)
}
export default Template;
