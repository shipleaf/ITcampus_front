import React, { useState } from 'react';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import { deleteCompanyDetails, deleteSupportDetails, deleteLicenseDetails, deleteRecruitDetails } from '../APIs/adminAPI';

function AdminMainPage() {
    const [companyKey, setCompanyKey] = useState('');
    const [supportKey, setSupportKey] = useState('');
    const [recruitKey, setRecruitKey] = useState('');
    const [licenseKey, setLicenseKey] = useState('');

    const navigate = useNavigate();

    const handleCompanyKeyChange = (e) => setCompanyKey(e.target.value);
    const handleSupportKeyChange = (e) => setSupportKey(e.target.value);
    const handleRecruitKeyChange = (e) => setRecruitKey(e.target.value);
    const handleLicenseKeyChange = (e) => setLicenseKey(e.target.value);

    const handleNavigate = (path, key) => {
        if (key.trim() === '') {
            alert('Key를 입력해주세요.');
        } else {
            navigate(path.replace(':key', key));
        }
    };

    const handleDelete = async (deleteFunction, key, itemName) => {
        if (key.trim() === '') {
            alert('Key를 입력해주세요.');
            return;
        }
        const confirmDelete = window.confirm(`${itemName}을(를) 삭제하시겠습니까?`);
        if (confirmDelete) {
            try {
                await deleteFunction(key);
                alert(`${itemName} 삭제 성공`);
            } catch (error) {
                alert(`${itemName} 삭제 실패: ${error.message}`);
            }
        }
    };

    return (
        <Container>
            <Title>관리자 페이지</Title>
            <Container2>
                <PartContainer>
                    <Header>상세페이지 추가</Header>
                    <ContentB>
                        <StyledLink to="/admincompanydetail">기업상세 추가</StyledLink>
                    </ContentB>
                    <ContentB>
                        <StyledLink to="/adminsupportdetail">학생지원 추가</StyledLink>
                    </ContentB>
                    <ContentB>
                        <StyledLink to="/adminlicensedetail">자격증 추가</StyledLink>
                    </ContentB>
                    <ContentB>
                        <StyledLink to="/adminrecruitdetail">채용공고 추가</StyledLink>
                    </ContentB>
                </PartContainer>
                <PartContainer>
                    <Header>이동 및 삭제</Header>
                    <Content>기업상세</Content>
                    <KeyInput placeholder="Key 입력" value={companyKey} onChange={handleCompanyKeyChange} />
                    <ButtonContainer>
                        <ActionButton onClick={() => handleNavigate('/companydetails/:key', companyKey)}>이동</ActionButton>
                        <ActionButton onClick={() => handleDelete(deleteCompanyDetails, companyKey, '기업상세')}>삭제</ActionButton>
                    </ButtonContainer>
                    <Content>학생지원</Content>
                    <KeyInput placeholder="Key 입력" value={supportKey} onChange={handleSupportKeyChange} />
                    <ButtonContainer>
                        <ActionButton onClick={() => handleNavigate('/governmentsupportdetails/:key', supportKey)}>이동</ActionButton>
                        <ActionButton onClick={() => handleDelete(deleteSupportDetails, supportKey, '학생지원')}>삭제</ActionButton>
                    </ButtonContainer>
                    <Content>자격증</Content>
                    <KeyInput placeholder="Key 입력" value={licenseKey} onChange={handleLicenseKeyChange} />
                    <ButtonContainer>
                        <ActionButton onClick={() => handleNavigate('/licensedetails/:key', licenseKey)}>이동</ActionButton>
                        <ActionButton onClick={() => handleDelete(deleteLicenseDetails, licenseKey, '자격증')}>삭제</ActionButton>
                    </ButtonContainer>
                    <Content>채용공고</Content>
                    <KeyInput placeholder="Key 입력" value={recruitKey} onChange={handleRecruitKeyChange} />
                    <ButtonContainer>
                        <ActionButton onClick={() => handleNavigate('/recruitmentdetails/:key', recruitKey)}>이동</ActionButton>
                        <ActionButton onClick={() => handleDelete(deleteRecruitDetails, recruitKey, '채용공고')}>삭제</ActionButton>
                    </ButtonContainer>
                    <Header>정보게시판</Header>
                </PartContainer>
                <PartContainer>
                    <Header>정보/스터디게시판</Header>
                    <ContentB>
                        <StyledLink to="/admininfoboard">정보게시판 보기</StyledLink>
                    </ContentB>
                    <ContentB>
                        <StyledLink to="/adminstudyboard">스터디게시판 보기</StyledLink>
                    </ContentB>
                </PartContainer>
            </Container2>
        </Container>
    );
};

export default AdminMainPage;

const Container = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    padding: 50px;
    flex-direction: column;
    align-items: center;
`

const Title = styled.div`
    font-size: 50px;
`

const Container2 = styled.div`
    display: flex;
    width: 100%;
    margin-top: 50px;
`

const PartContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 25%;
    align-items: center;
    margin: 0 25px;
`

const Header = styled.div`
    font-size: 30px;
    font-weight: bold;
    margin: 5px;
    text-align: center;
`

const Content = styled.div`
    font-size: 20px;
    margin: 20px;
`

const ContentB = styled.button`
    font-size: 20px;
    margin: 20px;
    border: none;
    background-color: #7ac0c0;
    color:white;
    
    &:hover{
        background-color: #4b7199;
    }
`

const KeyInput = styled.textarea`
    width: 80%;
    height: 20px;
    margin: 10px 0;
    padding: 10px;
    font-size: 16px;
    border: 1px solid #ddd;
    border-radius: 4px;
    resize: none;
`

const ButtonContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 80%;
`

const ActionButton = styled.button`
    width: 48%;
    padding: 10px;
    font-size: 16px;
    border: none;
    border-radius: 4px;
    background-color: #007bff;
    color: white;
    cursor: pointer;
    text-align: center;

    &:hover {
        background-color: #7abaff;
    }
`

const StyledLink = styled(Link)`
    text-decoration: none;
    color: inherit;
    &:hover {
        text-decoration: none;
    }
`
