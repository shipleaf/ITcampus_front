import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import GuestHeader from "../components/modules/header/GuestHeader";
import UserHeader from "../components/modules/header/UserHeader";
import { useRecoilValue } from "recoil";
import { loginState } from "../state/atoms";
import Top from "../components/post/Top";
import StudyPost from "../components/post/StudyPost";
import { fetchInfoList, searchInfo } from "../APIs/infoAPI";

function InformationList() {
    const [posts, setPosts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [isFilterActive,] = useState(false);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const isLoggedIn = useRecoilValue(loginState);
    const postsPerPage = 7;

    const navigate = useNavigate();

    const goToPost = (link) => {
        navigate(link);
    };

    const getInfos = async (query = '') => {
        try {
            let response;
            if (query) {
                response = await searchInfo(query);
            } else {
                response = await fetchInfoList();
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
                setError('에러: ' + (error.response ? error.response.statusText : error.message));
            }
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getInfos();
    }, []);

    const filteredPosts = posts.filter((post) => {
        if (!isFilterActive) return true;
        return post.title.includes("example");
    });

    const sortedPosts = filteredPosts.sort((a, b) => b.key - a.key);

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = sortedPosts.slice(indexOfFirstPost, indexOfLastPost);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const handleSearch = (query) => {
        setLoading(true);
        getInfos(query);
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
                <Top title='정보 게시판' onSearch={handleSearch} />
                <WriteContainer>
                    <Write onClick={() => goToPost('/createInfopost')}> 글쓰기</Write>
                </WriteContainer>
                {loading ? (
                    <p>Loading...</p>
                ) : error ? (
                    <p>{error}</p>
                ) : currentPosts.length === 0 ? (
                    <p>현재 정보게시판의 게시글이 없습니다</p>
                ) : (
                    currentPosts.map((post) => (
                        <StyledLink to={`/informationdetails/${post.key}`} key={post.key}>
                            <StudyPost
                                key={post.key}
                                postKey={post.key}
                                {...post}
                            />
                        </StyledLink>
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

export default InformationList;

const Pagination = styled.div`
    display: flex;
    justify-content: center;
    margin: 20px 0;
`

const Container = styled.div`
    display: flex;
    width: 60%;
    flex-direction: column;
    margin: 20px auto;
`

const WriteContainer = styled.div`
    display: flex;
    width: 100%;
    height: 40px;
    margin: 5px auto;
    justify-content: flex-end;
`

const Write = styled.button`
    display: flex;
    width: 100px;
    height: 100%;
    justify-content: center;
    align-items: center;
    padding: 5px auto;
    font-weight: bold;
    border: none;
    background-color: #00acee;
    border-radius: 10px;
    color: white;
    cursor: pointer;
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
