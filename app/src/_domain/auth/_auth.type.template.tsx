import { Box, Button, styled } from "@mui/material";
import O from "../component/organism/_index";

const LoginTypeContainer = styled(Box)({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100vw',
    height: '100vh',
    backgroundColor: '#ffff',
    color: '#0000',
});

const ContentContainer = styled(Box)({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '80%',
    backgroundColor: '#ffff',
    color: '#0000',
});

const ButtonContainer = styled(Box)({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100vw',
    marginTop: '1rem',
    backgroundColor: '#ffff',
    color: '#0000',
});

const LoginTypeBtn = styled(Button)(({ bgColor }: { bgColor: string }) => ({
    display: 'flex',
    flexDirection: 'column',
    margin: '0 2.5rem',
    padding: '3rem 3.5rem',
    backgroundColor: bgColor,
    color: '#fff',
    fontSize: '1rem',
    borderRadius: '8px',
}));

const DescText = styled('span')({
    fontSize: '1.6rem',
    fontWeight: 'bold',
    color: '#000000',
    margin: '1rem 0',
    alignSelf: 'flex-start',
});

const MainText = styled('span')({
    fontSize: '2rem',
    fontWeight: 'bold',
});

const SubText = styled('span')({
    fontSize: '1.5rem',
});



function Template(): JSX.Element {

    return (
        <>
        <O.Name />
        <LoginTypeContainer>
            <ContentContainer>
                <DescText>로그인 유형을 선택해 주세요</DescText>
                <ButtonContainer>
                    <LoginTypeBtn bgColor='#62D491'>
                        <MainText>개인</MainText>
                        <SubText>로그인</SubText>
                    </LoginTypeBtn>
                    <LoginTypeBtn bgColor='#4d65e1'>
                        <MainText>기업</MainText>
                        <SubText>로그인</SubText>
                    </LoginTypeBtn>
                </ButtonContainer>
            </ContentContainer>
        </LoginTypeContainer>
        </>
    )
}
export default Template;
