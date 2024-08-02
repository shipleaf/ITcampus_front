import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Top from "../components/post/Top";
import StudyPost from "../components/post/StudyPost";
import { fetchStudyList, searchStudy } from "../APIs/studyAPI";
import GuestHeader from "../components/modules/header/GuestHeader";
import UserHeader from "../components/modules/header/UserHeader";
import { useRecoilValue } from 'recoil';
import { loginState } from "../state/atoms";
import Modal from 'react-modal';
import LoginModal from "../components/login/LoginModal";

function StudyList() {
    const [posts, setPosts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [isFilterActive,] = useState(false);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const postsPerPage = 7;
    const [isModalOpen, setIsModalOpen] = useState(false);

    const isLoggedIn = useRecoilValue(loginState);

    const getStudies = async (query = '') => {
        try {
            let response;
            if (query) {
                response = await searchStudy(query);
            } else {
                response = await fetchStudyList();
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
        getStudies();
    }, []);

    useEffect(() => {
        localStorage.setItem('isLoggedIn', JSON.stringify(isLoggedIn));
    }, [isLoggedIn]);

    useEffect(() => {
        window.scrollTo(0, 0); // 페이지 변경 후 스크롤 맨 위로
    }, [currentPage]);

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

    const handleWriteClick = () => {
        if (isLoggedIn) {
            window.location.href = '/createstudypost';
        } else {
            setIsModalOpen(true);
        }
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const handleSearch = (query) => {
        setLoading(true);
        getStudies(query);
        setCurrentPage(1);
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
                <Top title='스터디 게시판' onSearch={handleSearch} />
                <WriteContainer>
                    <Write onClick={handleWriteClick}>글쓰기</Write>
                </WriteContainer>
                {loading ? (
                    <p>Loading...</p>
                ) : error ? (
                    <p>{error}</p>
                ) : currentPosts.length === 0 ? (
                    <p>No posts available</p>
                ) : (
                    currentPosts.map((post) => (
                        <StudyPost
                            key={post.key}
                            studyKey={post.key}
                            {...post}
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
                <Modal
                    isOpen={isModalOpen}
                    onRequestClose={closeModal}
                    style={customStyles}
                    contentLabel="로그인 모달"
                >
                    <LoginModal closeModal={closeModal} />
                </Modal>
            </Container>
        </>
    );
}

export default StudyList;

const Container = styled.div`
    display : flex;
    width: 60%;
    flex-direction: column;
    margin: 20px auto;
`

const Pagination = styled.div`
    display: flex;
    justify-content: center;
    margin: 20px 0;
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
    color: ${(props) => (props.active ? '#fff' : '#000')};
    border: 1px solid #ddd;
    padding: 10px 20px;
    margin: 0 5px;
    margin-bottom: 30px;
    cursor: pointer;
    border-radius: 5px;
    &:hover {
        background: #36bef1;
        color: #fff;
    }
`
const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};
