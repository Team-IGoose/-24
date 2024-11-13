import { Box, Button, styled } from "@mui/material";
import O from "../component/organism/_index";

const LoginTypeContainer = styled(Box)({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100vw',
    height: '100vh',
    backgroundColor: '#ffff',
    color: '#0000',
});

const LoginTypeBtn = styled(Button)(({ bgColor }: { bgColor: string }) => ({
    display: 'flex',
    flexDirection: 'column',
    margin: '0 2.5rem',
    padding: '1.5rem 2rem',
    backgroundColor: bgColor,
    color: '#fff',
    fontSize: '1rem',
    borderRadius: '8px',
}));

const MainText = styled('span')({
    fontSize: '1.5rem',
    fontWeight: 'bold',
});

const SubText = styled('span')({
    fontSize: '1rem',
});



function Template(): JSX.Element {

    return (
        <>
        <O.Name />
        <LoginTypeContainer>
            <LoginTypeBtn bgColor='#62D491'>
                <MainText>개인</MainText>
                <SubText>로그인</SubText>
            </LoginTypeBtn>
            <LoginTypeBtn bgColor='#4d65e1'>
                <MainText>기업</MainText>
                <SubText>로그인</SubText>
            </LoginTypeBtn>
        </LoginTypeContainer>
        </>
    )
}
export default Template;
