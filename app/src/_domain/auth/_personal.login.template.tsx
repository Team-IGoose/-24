import { Box, styled } from "@mui/material";
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
    width: '80%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    boxSizing: 'border-box',
});


const DescText = styled('span')({
    fontSize: '1.6rem',
    fontWeight: 'bold',
    color: '#000000',
    margin: '1rem 0',
});


function Template(): JSX.Element {

    return (
        <>
            <O.Header />
            <MainContainer>
                <LoginContainer>

                    <DescText>로그인</DescText>

                </LoginContainer>
            </MainContainer>
            <O.Footer />
        </>
    )
}
export default Template;
