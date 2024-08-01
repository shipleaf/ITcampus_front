import React from 'react'
import styled from 'styled-components'

function LicenseHeader({ licenseDetails }) {

    if (!licenseDetails) {
        return null;
    }

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const year = date.getFullYear();
        const month = date.getMonth() + 1;
        const day = date.getDate();
        return `${year}. ${month}. ${day}.`;
    };

    const formattedResultDate = formatDate(licenseDetails.resultdate);
    const formattedExamStartDate = formatDate(licenseDetails.exam_startdate);
    const formattedExamEndDate = formatDate(licenseDetails.exam_enddate);


    return (
        <Frame>
            <Title>IT 자격증</Title>
            <Divder />
            <div style={{ display: 'flex', flexDirection: 'row', borderRadius: '10px', border: '1px solid #79BFFF', backgroundColor: '#fff' }}>
                <Container>
                    <Header>
                        {licenseDetails.title}
                    </Header>
                    <LeftContainer>
                        <ContentContainer>
                            <Toc>응시 자격</Toc>
                            <Content dangerouslySetInnerHTML={{ __html: licenseDetails.qualification }}>
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
                                <a href={licenseDetails.link} target="_blank" rel="noopener noreferrer">
                                    {licenseDetails.link}
                                </a>
                            </Content>
                        </ContentContainer>
                    </LeftContainer>
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
        </Frame >
    )
}

export default LicenseHeader

const Frame = styled.div`
    width: 60%;
    margin: 20px auto;
    font-family: Arial, sans-serif;
`


const Divder = styled.div`
    margin: 10px auto;  
    width: 99%;
    height: 2px;
    background-color: black;
`

const Title = styled.div`
    font-size: 20px;
    font-weight: 700;
    width: 62%;
    padding: 15px;
    margin-left: 10px;
    font-family: "Noto Sans KR", sans-serif;
`

const LeftContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 80%;
    justify-content: space-between;
`

const Container = styled.div`
    width : 65%;
    padding: 20px;
    border-radius: 10px;
`
const Content = styled.div`
    margin-left: 15px;
    font-family: "Noto Sans KR", sans-serif;
`
const Header = styled.div`
font-family: "Noto Sans KR", sans-serif;
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
    font-family: "Noto Sans KR", sans-serif;
`

const InstitutionInfoContainer = styled.div`
`

const LogoContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const StyledLogo = styled.img`
    max-width: 150px;
    max-height: 150px;
    padding: 10px;
    padding-top: 20px;
    object-fit: contain;
`

const BodyContainer = styled.div`
    flex:1;
    border-left: 1px solid #79BFFF;

`
const InstitutionBody = styled.div`
    padding: 20px;
`
const Head = styled.div`
    font-weight: bold;
    font-family: "Noto Sans KR", sans-serif;
`
const Body = styled.div`
    
`
const InstitutionContent = styled(Content)`
    margin-left: 0;
    font-weight: 600;
    font-family: "Noto Sans KR", sans-serif;
`
const InstitutionToc = styled(Toc)`
    width: 100px;
    font-size: 15px;
    font-family: "Noto Sans KR", sans-serif;
`
