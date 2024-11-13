import { Box, Button, Checkbox, Divider, FormControlLabel, styled, TextField } from "@mui/material";
import O from "../component/organism/_index";

const MainContainer = styled(Box)({
    width: '100vw',
    height: '100vh',
    backgroundColor: '#ffffff',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
});

const SubContainer = styled(Box)({
    width: '80%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    boxSizing: 'border-box',
});

const LoginContainer = styled(Box)({
    width: '80%',
    color: '#000000',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    boxSizing: 'border-box',
});


const DescText = styled('span')({
    fontSize: '1.6rem',
    fontWeight: 'bold',
    color: '#000000',
    margin: '1rem 0',
});

const InputField = styled(TextField)({
    width: '20rem',
    marginBottom: '1rem',
});

const InputDesc = styled('span')({
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    height: '3rem',
    fontSize: '1rem',
    fontWeight: 'bold',
    alignSelf: 'flex-start',
    lineHeight: '1.2',
    margintTop: '1.2rem',
    marginBottom: '1rem',
    marginRight: '3rem',
    color: '#000000',
});

const LoginButton = styled(Button)({
    marginTop: '1rem',
    padding: '0.8rem',
    fontSize: '1rem',
    borderRadius: '0.8rem',
    backgroundColor: '#4d65e1',
    color: '#fff',
    '&:hover': {
        backgroundColor: '#3b4db7',
    },
});

const ActionButton = styled(Button)({
    fontSize: '0.9rem',
    color: '#333333',
    marginTop: '0.5rem',
});


function Template(): JSX.Element {

    return (
        <>
            <O.Header />
            <MainContainer>
                <SubContainer>

                    <DescText>로그인</DescText>

                    <Divider sx={{ marginBottom: '4rem' }} />

                    <Box display='flex' justifyContent='center' >
                        <LoginContainer>
                            <Box display='flex' flexDirection='row'>
                                <Box display='flex' flexDirection='column'>
                                    
                                    <InputDesc sx={{ marginBottom: '1.7rem' }}>👤아이디</InputDesc>
                                    <InputDesc>🔒비밀번호</InputDesc>

                                </Box>

                                <Box display='flex' flexDirection='column'>
                                    
                                    <InputField
                                        label="개인회원 ID"
                                        variant="outlined"
                                        fullWidth
                                    />

                                    <InputField
                                        label="개인회원 비밀번호"
                                        variant="outlined"
                                        type="password"
                                        fullWidth
                                    />

                                    <FormControlLabel
                                        control={<Checkbox color="primary" />}
                                        label="아이디 저장"
                                    />

                                    <LoginButton fullWidth>
                                        로그인
                                    </LoginButton>

                                    <Box display="flex" justifyContent="space-between">
                                        <ActionButton>아이디 찾기</ActionButton>
                                        <ActionButton>비밀번호 찾기</ActionButton>
                                    </Box>

                                </Box>

                            </Box>
                        </LoginContainer>
                    </Box>

                </SubContainer>
            </MainContainer>
            <O.Footer />
        </>
    )
}
export default Template;
