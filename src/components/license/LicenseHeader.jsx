import React from 'react'
import styled from 'styled-components'

const Title = styled.div`

`
const Container = styled.div`
    width: 600px;
    padding: 20px;
    border-radius: 10px;
`
const Content = styled.div`
    margin-left: 15px;
`
const Header = styled.div`
    font-size: 25px;
    font-weight: bold;
    border-bottom: 1px solid #ccc;
    padding-bottom: 20px;
`
const ContentContainer = styled.div`
    margin-top: 15px;
    display: flex;
    flex-direction: row;
    align-items: center;
`
const Toc = styled.div`
    color: #999;
    width: 120px;
`

const InstitutionInfoContainer = styled.div`
    
`

const LogoContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
const StyledLogo = styled.img`
    width: 70%;
    padding: 20px;
    padding-top: 50px;
`
const BodyContainer = styled.div`
    width: 300px;
    border-left: 1px solid #79BFFF;

`
const InstitutionBody = styled.div`
    padding: 20px;
`
const Head = styled.div`
    font-weight: bold;
`
const Body = styled.div`
    
`
const InstitutionContent = styled(Content)`
    margin-left: 0;
    font-weight: 600;
`
const InstitutionToc = styled(Toc)`
    font-size: 15px;
`

function LicenseHeader({licenseDetails}) {

    if (!licenseDetails) {
        return null;
    }

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const year = date.getFullYear();
        const month = date.getMonth() + 1; // 월은 0부터 시작하므로 1을 더합니다.
        const day = date.getDate();
        return `${year}년 ${month}월 ${day}일`;
    };

    const formattedResultDate = formatDate(licenseDetails.resultdate);
    const formattedExamStartDate = formatDate(licenseDetails.exam_startdate);
    const formattedExamEndDate = formatDate(licenseDetails.exam_enddate);


    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <Title>IT 자격증</Title>
            <div style={{ display: 'flex', flexDirection: 'row', borderRadius: '10px', border: '1px solid #79BFFF', backgroundColor: '#fff' }}>
                <Container>
                    <Header>
                        정보처리기사 1차(필기)
                    </Header>
                    <ContentContainer>
                        <Toc>응시 자격</Toc>
                        <Content>
                            {licenseDetails.qualification}
                        </Content>
                    </ContentContainer>
                    <ContentContainer>
                        <Toc>응시 수수료</Toc>
                        <Content>
                            {licenseDetails.fee}
                        </Content>
                    </ContentContainer>
                    <ContentContainer>
                        <Toc>응시 일정</Toc>
                        <Content>
                            {formattedExamStartDate} ~ {formattedExamEndDate}
                        </Content>
                    </ContentContainer>
                    <ContentContainer>
                        <Toc>합격 발표일</Toc>
                        <Content>
                            {formattedResultDate}
                        </Content>
                    </ContentContainer>
                    <ContentContainer>
                        <Toc>합격 기준</Toc>
                        <Content>
                            {licenseDetails.pass_standard}
                        </Content>
                    </ContentContainer>
                    <ContentContainer>
                        <Toc>접수 홈페이지</Toc>
                        <Content>
                            {licenseDetails.link}
                        </Content>
                    </ContentContainer>
                </Container>
                <BodyContainer>
                    <InstitutionInfoContainer>
                        <LogoContainer>
                            <StyledLogo src={licenseDetails.logo} />
                        </LogoContainer>
                        <InstitutionBody>
                            <Head>
                                정보
                            </Head>
                            <Body>
                                <ContentContainer>
                                    <InstitutionToc>자격명</InstitutionToc>
                                    <InstitutionContent>{licenseDetails.qualification_name}</InstitutionContent>
                                </ContentContainer>
                                <ContentContainer>
                                    <InstitutionToc>관련부처</InstitutionToc>
                                    <InstitutionContent>{licenseDetails.relate_department}</InstitutionContent>
                                </ContentContainer>
                                <ContentContainer>
                                    <InstitutionToc>시행기관</InstitutionToc>
                                    <InstitutionContent>{licenseDetails.agency}</InstitutionContent>
                                </ContentContainer>
                            </Body>
                        </InstitutionBody>
                    </InstitutionInfoContainer>
                </BodyContainer>
            </div>
        </div >
    )
}

export default LicenseHeader
