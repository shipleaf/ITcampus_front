import React, { useState, useEffect } from "react";
import { fetchCompanyList,fetchCompanyDetails } from "../APIs/companyAPI";
import { Link } from "react-router-dom";
import styled from "styled-components";
import GuestHeader from "../components/header/GuestHeader";
import Top from "../components/post/Top";
import CompanyPost from "../components/post/CompanyPost";
import CustomSelect from "../components/filter/CustomSelect";

function CompanyList() {
    const [posts, setPosts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [sortOption, setSortOption] = useState('company');
    const [sortOrder, setSortOrder] = useState('asc');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [, setSelectedCompany] = useState(null);
    const postsPerPage = 7;
    
    useEffect(() => {
        const getCompanies = async () => {
            try {
                const response = await fetchCompanyList();
                if(200<=response.status && response.status < 300){
                    setPosts(response.data);
                    console.log('API response data:', response.data);
                }
                
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        getCompanies();
    }, []);

    const handleCompanyClick = async (companyId) => {
        try {
            const response = await fetchCompanyDetails(companyId);
            setSelectedCompany(response.data);
        } catch (error) {
            setError(error);
        }
    };

    const sortedPosts = [...posts].sort((a, b) => {
        if (sortOption === 'scrap') {
            return sortOrder === 'desc' ? b.scrapCount - a.scrapCount : a.scrapCount - b.scrapCount;
        } else if (sortOption === 'company') {
            return sortOrder === 'desc' ? b.companyName.localeCompare(a.companyName) : a.companyName.localeCompare(b.companyName);
        }
        return 0;
    });

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = sortedPosts.slice(indexOfFirstPost, indexOfLastPost);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const handleSortChange = (value) => {
        setSortOption(value);
        setCurrentPage(1);
    };
    

    const handleSortOrderChange = (value) => {
        setSortOrder(value);
        setCurrentPage(1);
    };

    const totalPages = Math.ceil(sortedPosts.length / postsPerPage);

    return (
        <>
            <GuestHeader />
            <Container>
                <Top title='기업 소개' />
                <SortContainer>
                <Right>
                    <CustomSelect
                        selectedOption={sortOption}
                        options={[
                            { value: "scrap", label: "스크랩" },
                            { value: "company", label: "가나다 순" }
                        ]}
                        onOptionSelect={handleSortChange}
                    />
                    <CustomSelect
                        selectedOption={sortOrder}
                        options={[
                            { value: "desc", label: "내림차순" },
                            { value: "asc", label: "오름차순" }
                        ]}
                        onOptionSelect={handleSortOrderChange}
                    />
                </Right>
                </SortContainer>
                {loading ? (
                  <p>Loading...</p>
                 ) : error ? (
                <p>회사 정보 불러오기 실패: {error.message}</p>
                ) : (
                    <>
                        {currentPosts.map((post) => (
                            <StyledLink to={`/companydetails/${post.companyID}`}>
                            <CompanyPost 
                        key={post.companyID}
                         {...post}
                         onClick={handleCompanyClick} >
                            </CompanyPost >
                            </StyledLink>
                    ))}
                    <Pagination>
                        {Array.from({ length: totalPages }, (_, index) => (
                            <PageNumber
                                key={index + 1}
                                onClick={() => handlePageChange(index + 1)}
                                active={index + 1 === currentPage}
                            >
                                {index + 1}
                            </PageNumber>
                        ))}
                    </Pagination>
                </>
            )}
            </Container>
        </>
    );
}

export default CompanyList;

const SortContainer = styled.div`
    display: flex;
    width: 100%;
    margin: 20px auto;
    margin-bottom: 40px;
    align-items: center;
`

const Container = styled.div`
    display : flex;
    width: 60%;
    flex-direction: column;
    margin: 20px auto;
`

const Right = styled.div`
    display: flex;
    flex: 1;
    flex-direction: row;
    justify-content: flex-end;
`

const Pagination = styled.div`
    display: flex;
    justify-content: center;
    margin: 20px 0;
`

const PageNumber = styled.button`
    background: ${(props) => (props.active ? '#36bef1' : '#fff')};
    border: 1px solid #ddd;
    padding: 10px 20px;
    margin: 0 5px;
    cursor: pointer;
    border-radius: 5px;
    &:hover {
        background: #36bef1;
        color: #fff;
    }
`

const StyledLink = styled(Link)`
    text-decoration: none;
    color: inherit;
    &:hover {
        text-decoration: none;
    }
`