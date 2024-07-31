import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { fetchSupportList, searchSupport } from "../APIs/supportAPI";
import GuestHeader from "../components/modules/header/GuestHeader";
import UserHeader from "../components/modules/header/UserHeader";
import { useRecoilValue } from "recoil";
import { loginState } from "../state/atoms";
import Top from "../components/post/Top";
import Post from "../components/post/Post";
import CustomSelect from "../components/filter/CustomSelect";
import FilterButton from "../components/filter/FilterButton";

function GovernmentSupport() {
    const [posts, setPosts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [sortOption, setSortOption] = useState('scrapCount');
    const [sortOrder, setSortOrder] = useState('desc');
    const [isFilterActive, setIsFilterActive] = useState(false);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const isLoggedIn = useRecoilValue(loginState);
    const postsPerPage = 7;

    const getSupports = async (query = '') => {
        try {
            let response;
            if (query) {
                response = await searchSupport(query);
            } else {
                response = await fetchSupportList();
            }

            if (response.status >= 200 && response.status < 300) {
                setPosts(response.data);
                setError(null); 
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
        getSupports();
    }, []);

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
        } else if (sortOption === 'scrapCount') {
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

    const handleSearch = (query) => {
        setLoading(true);
        getSupports(query);
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
                <Top title='정부 지원' onSearch={handleSearch} />
                <SortContainer>
                    <FilterButton onClick={handleFilterToggle} isActive={isFilterActive} prop='지원중' />
                    <Right>
                        <CustomSelect
                            selectedOption={sortOption}
                            options={[
                                { value: "startdate", label: "지원 시작일" },
                                { value: "enddate", label: "지원 종료일" },
                                { value: "scrapCount", label: "스크랩" }
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
                    <p>학생지원 정보 불러오기 실패</p>
                ) : (
                    currentPosts.map((post) => (
                            <Post
                                key={post.key}
                                supKey={post.key}
                                title={post.title}
                                body={post.body}
                                agency={post.agency}
                                startdate={post.startdate}
                                enddate={post.enddate}
                                pic1={post.pic1}
                                scrapCount={post.scrapCount}
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

export default GovernmentSupport;

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
