import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useNavigate, useLocation } from "react-router-dom";
import GuestHeader from "../components/modules/header/GuestHeader";
import UserHeader from "../components/modules/header/UserHeader";
import { useRecoilValue } from "recoil";
import { loginState } from "../state/atoms";
import Top from "../components/post/Top";
import CompanyPost from "../components/post/CompanyPost";
import CustomSelect from "../components/filter/CustomSelect";
import { fetchCompanyList, fetchCompanyDetails, searchCompany } from "../APIs/companyAPI";

function CompanyList() {
    const [posts, setPosts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [sortOption, setSortOption] = useState('company');
    const [sortOrder, setSortOrder] = useState('asc');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [, setSelectedCompany] = useState(null);
    const isLoggedIn = useRecoilValue(loginState);
    const postsPerPage = 7;

    useEffect(() => {
        localStorage.setItem('isLoggedIn', JSON.stringify(isLoggedIn));
    }, [isLoggedIn]);

    const navigate = useNavigate();
    const location = useLocation();
    const [searchTerm, setSearchTerm] = useState(new URLSearchParams(location.search).get('query') || '');

    const getCompanies = async (query = '') => {
        try {
            let response;
            if (query) {
                response = await searchCompany(query);
            } else {
                response = await fetchCompanyList();
            }

            if (200 <= response.status && response.status < 300) {
                setPosts(response.data);
                setError(null);
            }
        } catch (error) {
            if (query && error.response && error.response.status === 404) {
                setError('검색 결과 없음');
                setPosts([]);
            } else {
                setError('에러 내용: ' + (error.response ? error.response.statusText : error.message));
            }
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        const query = new URLSearchParams(location.search).get('query');
        setSearchTerm(query || '');
        getCompanies(query);
    }, [location.search]);

    useEffect(() => {
        if (searchTerm) {
            navigate(`/companylist?query=${searchTerm}`);
            setCurrentPage(1);
        } else {
            navigate(`/companylist`);
        }
    }, [searchTerm, navigate]);

    useEffect(() => {
        window.scrollTo(0, 0); // 페이지 변경 후 스크롤 맨 위로
    }, [currentPage]);

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

    const handleSearch = (query) => {
        setSearchTerm(query);
    };

    const totalPages = Math.ceil(sortedPosts.length / postsPerPage);

    return (
        <>
            {isLoggedIn ? (
                <UserHeader />
            ) : (
                <GuestHeader />
            )}
            <Container>
                <Top title='기업 소개' onSearch={handleSearch} searchQuery={searchTerm} />
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
                    <p>회사 정보 불러오기 실패: {error}</p>
                ) : (
                    <>
                        {currentPosts.map((post) => (
                            <CompanyPost
                                key={post.companyID}
                                postKey={post.companyID}
                                {...post}
                                onClick={() => handleCompanyClick(post.companyID)}
                            />
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
    display: flex;
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
    color: ${(props) => (props.active ? '#fff' : '#000')};
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
