import { Box, Button, styled, Typography } from "@mui/material";
import O from "../component/organism/_index";
import images from "../../common/assets/image/_index";

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

const NoticeContainer = styled(Box)({
    width: '100%',
    padding: '1rem',
    border: '1px solid #ccc',
    borderRadius: '0.8rem',
    display: 'flex',
    boxSizing: 'border-box'
});

const JoinContainer = styled(Box)({
    width: '100%',
    padding: '1rem',
    marginTop: '4rem',
    borderRadius: '0.8rem',
    display: 'flex',
    justifyContent: 'flex-start',
    backgroundColor: '#e8fcf0',
    color: '#333333',
    boxSizing: 'border-box'
});

const DescText = styled('span')({
    fontSize: '1.6rem',
    fontWeight: 'bold',
    color: '#000000',
    margin: '1rem 0',
});

const List = styled('ul')({
    paddingLeft: '1.5rem',
    margin: 0,
});

const ListItem = styled('li')({
    fontSize: '1rem',
    color: '#333',
    lineHeight: '1.5',
    listStyleType: 'disc',
});

const BtnGroup = styled(Box)({
    display: 'grid',
    width: '100%',
    gridTemplateColumns: '1fr 1fr',
    gridTemplateRows: '1fr 1fr 1fr',
    gap: '1rem',
    marginTop: '1.5rem',
});

const LoginBtn = styled(Button)({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    height: '100%',
    padding: '1rem',
    backgroundColor: '#f5f5f5',
    color: '#000000',
    fontWeight: 'bold',
    borderRadius: '0.8rem',
    textTransform: 'none',
    boxSizing: 'border-box',

    '&:hover': {
        border: '2px solid #4d65e1',
        color: '#4d65e1',
    },
    
    '&:hover .m': {
        color: '#4d65e1',
        textDecoration: 'underline',
    },
    '&:hover .s': {
        color: '#4d65e1',
    },
});

const ArrowImage = styled('img')({
    width: '1.5rem',
    height: '1.5rem',
});

const LoginImage = styled('img')({
    width: '1.2rem',
    height: '1.2rem',
    borderRadius: '0.3rem',
    margin: '0.1rem',
});

const CircleIcon = styled(Box)(({ bgColor }: { bgColor: string }) => ({
    width: '3rem',
    height: '3rem',
    minWidth: '3rem',
    minHeight: '3rem',
    borderRadius: '50%',
    backgroundColor: bgColor,
    marginLeft: '1rem',
    marginRight: '1.5rem',
}));

const MainText = styled('span')({
    fontSize: '1rem',
    fontWeight: 'bold',
    alignSelf: 'flex-start',
    lineHeight: '1.2',
    margin: 0,
    color: 'inherit',
});

const SubText = styled('span')({
    fontSize: '0.8rem',
    fontWeight: 'lighter',
    textAlign: 'left',
    lineHeight: '1.8',
    marginTop: '0.7rem',
    color: 'inherit',
});

function Template(): JSX.Element {
return (
    <>
        <O.Header />
        <MainContainer>
            <LoginContainer>

                <DescText>로그인 방식을 선택해 주세요</DescText>

                <NoticeContainer>
                    <Typography color="black" marginX={'0.8rem'} whiteSpace={'nowrap'} fontWeight={'bold'}>📣 안내</Typography>
                    <List>
                        <ListItem>ID/PW로 로그인한 경우 민원신청 시 추가 본인 인증이 필요합니다.</ListItem>
                        <ListItem>일반사업자 및 사무대행기관으로 로그인 시 사업자용 인증서를 사용하여 주시기 바랍니다. (대표자개인인증서 사용 불가)</ListItem>
                        <ListItem>보건복지분야 공동인증서는 개인/기업 사업장 회원 대상 무료로 제공합니다.</ListItem>
                    </List>
                </NoticeContainer>

                <BtnGroup>
                    <LoginBtn>
                        <Box display='flex' flexDirection='row' alignItems="center">
                            <CircleIcon bgColor="#19b3bd"/>
                            <Box display='flex' flexDirection='column' justifyContent='center'>
                                <MainText className="m">간편인증</MainText>
                                <SubText className="s">카카오, KB 국민은행, 페이코, 통신사PASS, 삼성PASS, 네이버, 신한은행, 토스, 뱅크샐러드, 하나은행, NH인증서를 이용하여 로그인 할 수 있습니다.</SubText>
                                <Box display='flex' flexDirection='row'>
                                    <LoginImage src={images.Kakao} alt="kakao" />
                                    <LoginImage src={images.KB} alt="kb" />
                                    <LoginImage src={images.Payco} alt="payco" />
                                    <LoginImage src={images.Pass} alt="pass" />
                                    <LoginImage src={images.SamsungPass} alt="samsungpass" />
                                    <LoginImage src={images.Naver} alt="naver" />
                                    <LoginImage src={images.Shinhan} alt="shinhan" />
                                    <LoginImage src={images.Toss} alt="toss" />
                                    <LoginImage src={images.BankSalad} alt="banksalad" />
                                    <LoginImage src={images.Hana} alt="hana" />
                                    <LoginImage src={images.NH} alt="nh" />
                                </Box>
                            </Box>
                        </Box>
                        <ArrowImage src={images.RArrow} alt="Right Arrow" />
                    </LoginBtn>
                    <LoginBtn>
                        <Box display='flex' flexDirection='row' alignItems="center">
                            <CircleIcon bgColor="#39425d"/>
                            <Box display='flex' flexDirection='column' justifyContent='center'>
                                <MainText className="m">공동인증서</MainText>
                                <SubText className="s"><span style={{ color: 'red' }}>회원인증서 관리 메뉴에서 공동인증서를 등록</span>해주셔야 이용이 가능해요.</SubText>
                                <SubText className="s" style={{ marginTop: 0 }}>처음 로그인 하는 경우, 다른 인증 수단을 선택해 주세요.</SubText>
                            </Box>
                        </Box>
                        <ArrowImage src={images.RArrow} alt="Right Arrow" />
                    </LoginBtn>
                    <LoginBtn>
                        <Box display='flex' flexDirection='row' alignItems="center">
                            <CircleIcon bgColor="#504b4b"/>
                            <Box display='flex' flexDirection='column' justifyContent='center'>
                                <MainText className="m">금융인증서</MainText>
                                <SubText className="s">간편비밀번호(PIN)•패턴•지문등을 이용하여 로그인 해 보세요.</SubText>
                            </Box>
                        </Box>
                        <ArrowImage src={images.RArrow} alt="Right Arrow" />
                    </LoginBtn>
                    <LoginBtn>
                        <Box display='flex' flexDirection='row' alignItems="center">
                            <CircleIcon bgColor="#3662ad"/>
                            <Box display='flex' flexDirection='column' justifyContent='center'>
                                <MainText className="m">아이핀인증</MainText>
                                <SubText className="s">본인 아이핀정보로 인증 후 로그인 할 수 있습니다.</SubText>
                            </Box>
                        </Box>
                        <ArrowImage src={images.RArrow} alt="Right Arrow" />
                    </LoginBtn>
                    <LoginBtn>
                        <Box display='flex' flexDirection='row' alignItems="center">
                            <CircleIcon bgColor="#39425d"/>
                            <Box display='flex' flexDirection='column' justifyContent='center'>
                                <MainText className="m">아이디/비밀번호</MainText>
                                <SubText className="s">아이디/비밀번호를 이용하여 로그인 해 보세요.</SubText>
                            </Box>
                        </Box>
                        <ArrowImage src={images.RArrow} alt="Right Arrow" />
                    </LoginBtn>
                </BtnGroup>

                <JoinContainer>
                    <Typography
                        sx={{
                            fontSize: '2rem',
                            marginLeft: '3rem',
                            marginRight: '1.5rem',
                            marginTop: '0.6rem',
                            fontWeight: 'bold',
                            whiteSpace: 'nowrap',
                        }}
                    >
                        미래24<br />회원가입
                    </Typography>
                    <Box display='flex' flexDirection='column'>
                        <Typography
                            sx={{
                                marginTop: '1.2rem',
                                whiteSpace: 'nowrap'
                            }}
                        >
                            아직 미래24 회원이 아니신가요? 회원가입 하고 지역맞춤형 취업지원 서비스를 편리하게 이용해 보세요.
                        </Typography>
                    </Box>
                </JoinContainer>

            </LoginContainer>
        </MainContainer>
        <O.Footer />
    </>
)
}
export default Template;
