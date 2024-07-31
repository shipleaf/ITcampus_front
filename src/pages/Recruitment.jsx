import React, { useState, useEffect, useCallback } from "react";
import styled from "styled-components";
import { fetchRecruitmentList, searchRecruit } from "../APIs/RecruitmentAPI";
import GuestHeader from "../components/modules/header/GuestHeader";
import UserHeader from '../components/modules/header/UserHeader';
import Top from "../components/post/Top";
import RecruitmentPost from "../components/post/RecruitmentPost";
import CustomSelect from "../components/filter/CustomSelect";
import FilterButton from "../components/filter/FilterButton";
import DetailSearch from "../components/filter/DetailSearch";
import { loginState } from "../state/atoms";
import { useRecoilValue } from "recoil";

function Recruitment() {
    const [posts, setPosts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [sortOption, setSortOption] = useState('scrap');
    const [sortOrder, setSortOrder] = useState('desc');
    const [isFilterActive, setIsFilterActive] = useState(false);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const isLoggedIn = useRecoilValue(loginState);

    const [selectedFilters, setSelectedFilters] = useState({
        job: [],
        stack: [],
        experience: [],
        education: [],
        employmentType: []
    });

    const getRecruitments = async (query = '') => {
        try {
            let response;
            if (query) {
                response = await searchRecruit(query);
            } else {
                response = await fetchRecruitmentList();
            }

            if (response.status >= 200 && response.status < 300) {
                setPosts(response.data);
                setError(null);  // Reset the error state
            }
        } catch (error) {
            if (query && error.response && error.response.status === 404) {
                setError('검색결과 없음');
                setPosts([]);
            } else {
                setError('에러 내용: ' + (error.response ? error.response.statusText : error.message));
            }
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getRecruitments();
    }, []);

    const postsPerPage = 7;
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
        const filterKeys = Object.keys(selectedFilters);
        for (let key of filterKeys) {
            if (selectedFilters[key].length > 0 && !selectedFilters[key].includes(post[key])) {
                return false;
            }
        }

        if (isFilterActive) {
            const startDate = new Date(post.startdate);
            const endDate = new Date(post.enddate);
            return startDate <= today && today <= endDate;
        }

        return true;
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

    const handleFilterChange = useCallback((category, values) => {
        setSelectedFilters(prevFilters => ({
            ...prevFilters,
            [category]: values
        }));
        setCurrentPage(1);
    }, []);

    const handleSearch = (query) => {
        setLoading(true);
        getRecruitments(query);
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
                <Top title='채용 공고' onSearch={handleSearch} />
                <DetailSearch onFilterChange={handleFilterChange} />
                <SortContainer>
                    <FilterButton onClick={handleFilterToggle} isActive={isFilterActive} prop='지원 가능' />
                    <Right>
                        <CustomSelect
                            selectedOption={sortOption}
                            options={[
                                { value: "startdate", label: "채용 시작일" },
                                { value: "enddate", label: "지원 종료일" },
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
                    <p>No posts available</p>
                ) : (
                    currentPosts.map((post) => (
                            <RecruitmentPost
                                key={post.key}
                                postKey={post.key}
                                title={post.title}
                                body={post.body}
                                companyname={post.companyname}
                                pic1={post.pic1}
                                scrapCount={post.scrapCount}
                                startdate={post.startdate}
                                enddate={post.enddate}
                                recruit_part={post.recruit_part}
                                stack={post.stack}
                                experience={post.experience}
                                education={post.education}
                                work_type={post.work_type}
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

export default Recruitment;

const SortContainer = styled.div`
    display: flex;
    width: 100%;
    margin: 20px auto;
    margin-bottom: 40px;
    align-items: center;
`

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 60%;
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
