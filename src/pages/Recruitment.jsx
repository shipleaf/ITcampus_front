import React, { useState, useEffect, useCallback } from "react";
import styled from "styled-components";
import { fetchRecruitmentList } from "../APIs/RecruitmentAPI";
import { Link } from "react-router-dom";
import GuestHeader from "../components/header/GuestHeader";
import Top from "../components/post/Top";
import RecruitmentPost from "../components/post/RecruitmentPost";
import CustomSelect from "../components/filter/CustomSelect";
import FilterButton from "../components/filter/FilterButton";
import DetailSearch from "../components/filter/DetailSearch";

function Recruitment() {
    const [posts, setPosts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [sortOption, setSortOption] = useState('scrap');
    const [sortOrder, setSortOrder] = useState('desc');
    const [isFilterActive, setIsFilterActive] = useState(false);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const [selectedFilters, setSelectedFilters] = useState({
        job: [],
        stack: [],
        experience: [],
        education: [],
        employmentType: []
    });

    useEffect(() => {
        const getCompanies = async () => {
            try {
                const response = await fetchRecruitmentList();
                if (response.status >= 200 && response.status < 300) {
                    setPosts(response.data);
                }
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        getCompanies();
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
                : new Date(a.enddate) - new Date(b.endDate);
        } else if (sortOption === 'scrap') {
            return sortOrder === 'desc'
                ? b.scrap - a.scrap
                : a.scrap - b.scrap;
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

    const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

    return (
        <>
            <GuestHeader />
            <Top title='채용 공고' />
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
                <p>Error loading posts: {error.message}</p>
            ) : currentPosts.map((post) => (
                <StyledLink to={`/recruitmentdetails/${post.key}`} key={post.key}>
                    <RecruitmentPost
                        key={post.key}
                        title={post.title}
                        body={post.body}
                        companyname={post.companyname}
                        pic1={post.pic1}
                        scrap={post.scrap}
                        startdate={post.startdate}
                        enddate={post.enddate}
                        recruit_part={post.recruit_part}
                        stack={post.stack}
                        experience={post.experience}
                        education={post.education}
                        work_type={post.work_type}
                        width={post.width}
                    />
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
    );
}

export default Recruitment;

const SortContainer = styled.div`
    display: flex;
    width: 60%;
    margin: 20px auto;
    margin-bottom: 40px;
    align-items: center;
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
