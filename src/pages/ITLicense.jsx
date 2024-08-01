import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useNavigate, useLocation } from "react-router-dom";
import GuestHeader from "../components/modules/header/GuestHeader";
import UserHeader from "../components/modules/header/UserHeader";
import { useRecoilValue } from "recoil";
import { loginState } from "../state/atoms";
import Top from "../components/post/Top";
import Post from "../components/post/Post";
import CustomSelect from "../components/filter/CustomSelect";
import FilterButton from "../components/filter/FilterButton";
import { fetchLicenseList, searchLicense, fetchLicenseDetails } from "../APIs/licenseAPI";

function ITLicense() {
    const [posts, setPosts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [sortOption, setSortOption] = useState('scrap');
    const [sortOrder, setSortOrder] = useState('desc');
    const [isFilterActive, setIsFilterActive] = useState(false);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [, setSelectedLicense] = useState(null);
    const isLoggedIn = useRecoilValue(loginState);
    const postsPerPage = 7;

    const navigate = useNavigate();
    const location = useLocation();
    const [searchTerm, setSearchTerm] = useState('');

    const getLicenses = async (query = '') => {
        try {
            let response;
            if (query) {
                response = await searchLicense(query);
            } else {
                response = await fetchLicenseList();
            }
            if (response.status >= 200 && response.status < 300) {
                setPosts(response.data);
                setError(null);  
            }
            setError(null);
        } catch (error) {
            if (query && error.response && error.response.status === 404) {
                setError('검색결과 없음');
                setPosts([]);
            } else {
                setError('에러: ' + (error.response ? error.response.statusText : error.message));
            }
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        const query = new URLSearchParams(location.search).get('query');
        setSearchTerm(query || '');
        getLicenses(query);
    }, [location.search]);

    const handleSearch = (query) => {
        navigate(`/licenselist?query=${query}`);
    };

    const today = new Date();

    const sortedPosts = [...posts].sort((a, b) => {
        if (sortOption === 'startdate') {
            return sortOrder === 'desc'
                ? new Date(b.startdate) - new Date(a.startdate)
                : new Date(a.startdate) - new Date(b.startdate);
        } else if (sortOption === 'enddate') {
            return sortOrder === 'desc'
                ? new Date(b.enddate) - new Date(a.enddate)
                : new Date(a.enddate) - new Date(b.enddate);
        } else if (sortOption === 'scrap') {
            return sortOrder === 'desc'
                ? b.scrapCount - a.scrapCount
                : a.scrapCount - b.scrapCount;
        }
        return 0;
    });

    const filteredPosts = sortedPosts.filter(post => {
        if (!isFilterActive) return true;
        const startDate = new Date(post.startdate);
        const endDate = new Date(post.enddate);
        return startDate <= today && today <= endDate;
    });

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

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

    const handleFilterToggle = () => {
        setIsFilterActive(!isFilterActive);
        setCurrentPage(1);
    };

    const handleLicenseClick = async (licenseId) => {
        try {
            const response = await fetchLicenseDetails(licenseId);
            setSelectedLicense(response.data);
        } catch (error) {
            setError(error);
        }
    };

    const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

    return (
        <>
            {isLoggedIn ? (
                <UserHeader />
            ) : (
                <GuestHeader />
            )}
            <Container>
                <Top title='IT 자격증' onSearch={handleSearch} searchQuery={searchTerm} /> {/* 검색어 전달 */}
                <SortContainer>
                    <FilterButton onClick={handleFilterToggle} isActive={isFilterActive} prop='응시가능' />
                    <Right>
                        <CustomSelect
                            selectedOption={sortOption}
                            options={[
                                { value: "startdate", label: "응시 시작일" },
                                { value: "enddate", label: "응시 종료일" },
                                { value: "scrap", label: "스크랩" }
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
                    <p>{error}</p>
                ) : currentPosts.length === 0 ? (
                    <p>자격증 정보 불러오기 실패</p>
                ) : (
                    currentPosts.map((post) => (
                        <Post
                            key={post.key}
                            itKey={post.key}
                            title={post.title}
                            body={post.body}
                            agency={post.agency}
                            logo={post.logo}
                            scrapCount={post.scrapCount}
                            startdate={new Date(post.startdate).toLocaleDateString('ko-KR')}
                            enddate={new Date(post.enddate).toLocaleDateString('ko-KR')}
                            onClick={handleLicenseClick}
                        />
                    ))
                )}
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
            </Container>
        </>
    );
}

export default ITLicense;

const SortContainer = styled.div`
    display: flex;
    width: 100%;
    margin: 20px auto;
    margin-bottom: 40px;
    align-items: center;
`

const Container = styled.div`
    display:flex;
    flex-direction: column;
    width: 60%;
    margin: 20px auto;
`

const Right = styled.div`
    display: flex;
    flex:1;
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
