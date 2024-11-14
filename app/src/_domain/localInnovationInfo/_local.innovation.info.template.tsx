import { Box, Button, Divider, Paper, Step, StepContent, StepIconProps, StepLabel, Stepper, styled, Typography } from "@mui/material";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import O from "../component/organism/_index";
import { useNavigate } from "react-router-dom";
import React from "react";

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
    justifyContent: 'center',
    alignItems: 'flex-start',
    color: '#000000',
    flexDirection: 'column',
    boxSizing: 'border-box',
    paddingTop: '2rem',
    paddingLeft: '4rem',
});

const MenuText = styled('span')({
    fontSize: '1.8rem',
    fontWeight: 'bold',
    color: '#000000',
    margin: '1rem 0',
    marginBottom: '1rem',
});

const ItemText = styled('span')({
    fontSize: '1rem',
    fontWeight: 'bold',
    color: '#000000',
    margin: '1rem 0',
    cursor: "pointer"
});


function CustomStepIconComponent(props: StepIconProps) {
    const { active = false, completed = false, icon } = props;

    const CustomStepIcon = styled('div')<{ ownerState: { active: boolean; completed: boolean } }>(
        ({ ownerState }) => ({
            color: ownerState.active ? '#2cae62' : '#62d491',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '24px',
            height: '24px',
            borderRadius: '50%',
            border: `2px solid ${ownerState.active ? '#2cae62' : '#62d491'}`,
        })
    );

    return (
        <CustomStepIcon ownerState={{ active, completed }}>
            {completed ? <CheckCircleIcon fontSize="small" /> : icon}
        </CustomStepIcon>
    );
}



const steps = [
    {
        label: (
            <span>
            <span style={{ fontWeight: 'bold', fontSize: '1.2rem', color: '#fc4700' }}>
                지역혁신
            </span>
            이란 무엇인가요?
            </span>
        ),
        description: `지역기업 분석정보와 중소기업지원사업 현황 정보 제공을 통해 지역 기업의 발전 가능성 현황을 보여주고 지역의 핵심 가치를 공유합니다.
                    지역발전공약현황 및 지역특색사업현황 정보를 제공하여 지역이 가진 경쟁력을 알리고 앞으로 어떤 로드맵을 그리고 있는지 공유합니다.

                    •지역발전 혁신공약 현황 정보 제공
                    •지역특색관광사업 개발
                    •지역기업 분석 및 지역 내 중소기업 지원사업현황 진행 정보 제공`,
    },
    {
        label: '지역발전공약현황',
        description: '대충 해당 페이지에 대한 설명',
    },
    {
        label: '지역특색관광사업',
        description:'대충 해당 페이지에 대한 설명',
    },
    {
        label: '지역기업분석정보',
        description:'대충 해당 페이지에 대한 설명',
    },
    {
        label: '중소기업지원사업현황',
        description:'대충 해당 페이지에 대한 설명',
    },
  ];

function Template(): JSX.Element {
    const navigate = useNavigate();
    const [activeStep, setActiveStep] = React.useState(0);

    const handleNext = () => {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };
  
    const handleBack = () => {
      setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };
  
    const handleReset = () => {
      setActiveStep(0);
    };

    return (
        <>
            <O.Header />
            <MainContainer>
                <ServiceContainer>
                    <Box display='flex' flexDirection='row'>
                        {/* 메뉴 영역 */}
                        <MenuContainer>
                            <MenuText>지역혁신</MenuText>
                            <Divider />
                            <ItemText onClick={() => {navigate("/localFutureInfo")}}>
                                <span>-</span>
                                <span style={{ color: '#4d65e1', textDecoration: 'underline' }}>About지역혁신</span>
                            </ItemText>
                            <Divider />
                            <ItemText onClick={() => {navigate("/localPledge")}}>-지역발전공약현황</ItemText>
                            <Divider />
                            <ItemText onClick={() => {navigate("/localTourism")}}>-지역특색관광사업</ItemText>
                            <Divider />
                            <ItemText onClick={() => {navigate("/localEnterpriseInfo")}}>-지역기업분석정보</ItemText>
                            <Divider />
                            <ItemText onClick={() => {navigate("/enterpriseSupport")}}>-중소기업지원사업현황</ItemText>
                            <Divider />
                        </MenuContainer>
                        
                        {/* 콘텐츠 영역 */}
                        <ContentContainer>
                            <Box sx={{ maxWidth: '40rem' }}>
                                <Stepper activeStep={activeStep} orientation="vertical">
                                    {steps.map((step, index) => (
                                    <Step key={index}>
                                        <StepLabel
                                            StepIconComponent={CustomStepIconComponent}
                                            optional={
                                                index === steps.length - 1 ? (
                                                    <Typography variant="caption">마지막</Typography>
                                                ) : null
                                            }
                                        >
                                            <span style={{ fontWeight: 'bold' }}>{step.label}</span>
                                        </StepLabel>
                                        <StepContent>
                                            <Typography sx={{ whiteSpace: 'pre-line' }}>{step.description}</Typography>
                                            <Box sx={{ mb: 2 }}>
                                                <Button
                                                    variant="contained"
                                                    onClick={handleNext}
                                                    sx={{ mt: 1, mr: 1, backgroundColor: '#62d491' }}
                                                >
                                                    {index === steps.length - 1 ? '모두 확인했어요' : '계속 확인하기'}
                                                </Button>
                                                <Button
                                                    disabled={index === 0}
                                                    onClick={handleBack}
                                                    sx={{ mt: 1, mr: 1 }}
                                                >
                                                    뒤로
                                                </Button>
                                            </Box>
                                        </StepContent>
                                    </Step>
                                ))}
                            </Stepper>
                                {activeStep === steps.length && (
                                    <Paper square elevation={0} sx={{ p: 3 }}>
                                    <Typography>모든 정보를 확인 했습니다</Typography>
                                    <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
                                        처음으로
                                    </Button>
                                    </Paper>
                                )}
                            </Box>
                        </ContentContainer>
                    </Box>
                </ServiceContainer>
            </MainContainer>
            <O.Footer />
        </>
    )
}
export default Template;