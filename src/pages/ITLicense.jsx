import React, { useState, useEffect } from "react";
import styled from "styled-components";
import GuestHeader from "../components/header/GuestHeader";
import { Link } from "react-router-dom";
import Top from "../components/post/Top";
import Post from "../components/post/Post";
import CustomSelect from "../components/filter/CustomSelect";
import FilterButton from "../components/filter/FilterButton";
import { fetchLicenseList } from "../APIs/licenseListAPI";

function ITLicense() {
    const [posts, setPosts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [sortOption, setSortOption] = useState('scrap');
    const [sortOrder, setSortOrder] = useState('desc');
    const [isFilterActive, setIsFilterActive] = useState(false);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const postsPerPage = 7;

    useEffect(() => {
        const getLicense = async () => {
            try {
                const response = await fetchLicenseList();
                if (response.status >= 200 && response.status < 300) {
                    setPosts(response.data);
                }
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        getLicense();
    }, []);

    const today = new Date();

    const sortedPosts = [...posts].sort((a, b) => {
        if (sortOption === 'startdate') {
            return sortOrder === 'desc'
                ? new Date(b.startDate) - new Date(a.startDate)
                : new Date(a.startDate) - new Date(b.startDate);
        } else if (sortOption === 'enddate') {
            return sortOrder === 'desc'
                ? new Date(b.endDate) - new Date(a.endDate)
                : new Date(a.endDate) - new Date(b.endDate);
        } else if (sortOption === 'scrap') {
            return sortOrder === 'desc'
                ? b.scrap - a.scrap
                : a.scrap - b.scrap;
        }
        return 0;
    });

    const filteredPosts = sortedPosts.filter(post => {
        if (!isFilterActive) return true;
        const startDate = new Date(post.startDate);
        const endDate = new Date(post.endDate);
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

    const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

    return (
        <>
            <GuestHeader />
            <Top title='IT 자격증' />
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
                <p>Error loading posts: {error.message}</p>
            ) : currentPosts.map((post) => (
                <StyledLink to={`/licensedetails/${post.key}`} key={post.key}>
                    <Post
                        key={post.key}
                        title={post.title}
                        body={post.body}
                        writer={post.agency}
                        pic1={post.pic1}
                        scrapCount={post.scrapCount}
                        startdate={post.startdate}
                        enddate={post.enddate}
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

export default ITLicense;

const SortContainer = styled.div`
    display: flex;
    width: 60%;
    margin: 20px auto;
    margin-bottom: 40px;
    align-items: center;
`;

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
`;

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
`;

const StyledLink = styled(Link)`
    text-decoration: none;
    color: inherit;
    &:hover {
        text-decoration: none;
    }
`
