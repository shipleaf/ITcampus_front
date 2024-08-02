import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Top from "../components/post/Top";
import StudyPost from "../components/post/StudyPost";
// import { fetchStudyList, searchStudy } from "../APIs/studyAPI"; // 주석 처리된 API 호출
import GuestHeader from "../components/modules/header/GuestHeader";
import UserHeader from "../components/modules/header/UserHeader";
import { useRecoilValue } from 'recoil';
import { loginState } from "../state/atoms";
import Modal from 'react-modal';
import LoginModal from "../components/login/LoginModal";

const dummyData = [
    {
        "key": 1,
        "id": "testuser1",
        "title": "JavaScript 스터디 모집",
        "body": "JavaScript를 공부할 초보자를 모집합니다. 많은 참여 부탁드립니다.",
        "date": "2024-07-31T12:05:25.000Z",
        "pic1": {
            "type": "Buffer",
            "data": [166, 39, 53, 142, 152]
        },
        "pic2": {
            "type": "Buffer",
            "data": [166, 39, 54, 142, 152]
        }
    },
    {
        "key": 2,
        "id": "testuser2",
        "title": "Python 스터디 모집",
        "body": "Python을 함께 공부할 초보자들을 모집합니다.",
        "date": "2024-07-31T12:05:26.000Z",
        "pic1": {
            "type": "Buffer",
            "data": [166, 39, 53, 142, 152]
        },
        "pic2": {
            "type": "Buffer",
            "data": [166, 39, 54, 142, 152]
        }
    },
    // 더미 데이터를 더 추가할 수 있습니다.
    {
        "key": 3,
        "id": "testuser3",
        "title": "React 스터디 모집",
        "body": "React를 공부할 초보자를 모집합니다. 많은 참여 부탁드립니다.",
        "date": "2024-07-31T12:05:27.000Z",
        "pic1": {
            "type": "Buffer",
            "data": [166, 39, 53, 142, 152]
        },
        "pic2": {
            "type": "Buffer",
            "data": [166, 39, 54, 142, 152]
        }
    },
    {
        "key": 5,
        "id": "testuser4",
        "title": "Java 스터디 모집",
        "body": "Java를 공부할 초보자를 모집합니다. 많은 참여 부탁드립니다.",
        "date": "2024-07-31T12:05:28.000Z",
        "pic1": {
            "type": "Buffer",
            "data": [166, 39, 53, 142, 152]
        },
        "pic2": {
            "type": "Buffer",
            "data": [166, 39, 54, 142, 152]
        }
    }
    ,
    {
        "key": 6,
        "id": "testuser4",
        "title": "Java 스터디 모집",
        "body": "Java를 공부할 초보자를 모집합니다. 많은 참여 부탁드립니다.",
        "date": "2024-07-31T12:05:28.000Z",
        "pic1": {
            "type": "Buffer",
            "data": [166, 39, 53, 142, 152]
        },
        "pic2": {
            "type": "Buffer",
            "data": [166, 39, 54, 142, 152]
        }
    },
    {
        "key": 7,
        "id": "testuser4",
        "title": "Java 스터디 모집",
        "body": "Java를 공부할 초보자를 모집합니다. 많은 참여 부탁드립니다.",
        "date": "2024-07-31T12:05:28.000Z",
        "pic1": {
            "type": "Buffer",
            "data": [166, 39, 53, 142, 152]
        },
        "pic2": {
            "type": "Buffer",
            "data": [166, 39, 54, 142, 152]
        }
    },
    {
        "key": 8,
        "id": "testuser4",
        "title": "Java 스터디 모집",
        "body": "Java를 공부할 초보자를 모집합니다. 많은 참여 부탁드립니다.",
        "date": "2024-07-31T12:05:28.000Z",
        "pic1": {
            "type": "Buffer",
            "data": [166, 39, 53, 142, 152]
        },
        "pic2": {
            "type": "Buffer",
            "data": [166, 39, 54, 142, 152]
        }
    },
    {
        "key": 9,
        "id": "testuser4",
        "title": "Java 스터디 모집",
        "body": "Java를 공부할 초보자를 모집합니다. 많은 참여 부탁드립니다.",
        "date": "2024-07-31T12:05:28.000Z",
        "pic1": {
            "type": "Buffer",
            "data": [166, 39, 53, 142, 152]
        },
        "pic2": {
            "type": "Buffer",
            "data": [166, 39, 54, 142, 152]
        }
    },
    {
        "key": 10,
        "id": "testuser4",
        "title": "Java 스터디 모집",
        "body": "Java를 공부할 초보자를 모집합니다. 많은 참여 부탁드립니다.",
        "date": "2024-07-31T12:05:28.000Z",
        "pic1": {
            "type": "Buffer",
            "data": [166, 39, 53, 142, 152]
        },
        "pic2": {
            "type": "Buffer",
            "data": [166, 39, 54, 142, 152]
        }
    },
    {
        "key": 11,
        "id": "testuser4",
        "title": "Java 스터디 모집",
        "body": "Java를 공부할 초보자를 모집합니다. 많은 참여 부탁드립니다.",
        "date": "2024-07-31T12:05:28.000Z",
        "pic1": {
            "type": "Buffer",
            "data": [166, 39, 53, 142, 152]
        },
        "pic2": {
            "type": "Buffer",
            "data": [166, 39, 54, 142, 152]
        }
    },
    {
        "key": 12,
        "id": "testuser4",
        "title": "Java 스터디 모집",
        "body": "Java를 공부할 초보자를 모집합니다. 많은 참여 부탁드립니다.",
        "date": "2024-07-31T12:05:28.000Z",
        "pic1": {
            "type": "Buffer",
            "data": [166, 39, 53, 142, 152]
        },
        "pic2": {
            "type": "Buffer",
            "data": [166, 39, 54, 142, 152]
        }
    },
    {
        "key": 13,
        "id": "testuser4",
        "title": "Java 스터디 모집",
        "body": "Java를 공부할 초보자를 모집합니다. 많은 참여 부탁드립니다.",
        "date": "2024-07-31T12:05:28.000Z",
        "pic1": {
            "type": "Buffer",
            "data": [166, 39, 53, 142, 152]
        },
        "pic2": {
            "type": "Buffer",
            "data": [166, 39, 54, 142, 152]
        }
    },
    {
        "key": 14,
        "id": "testuser4",
        "title": "Java 스터디 모집",
        "body": "Java를 공부할 초보자를 모집합니다. 많은 참여 부탁드립니다.",
        "date": "2024-07-31T12:05:28.000Z",
        "pic1": {
            "type": "Buffer",
            "data": [166, 39, 53, 142, 152]
        },
        "pic2": {
            "type": "Buffer",
            "data": [166, 39, 54, 142, 152]
        }
    },
    {
        "key": 15,
        "id": "testuser4",
        "title": "Java 스터디 모집",
        "body": "Java를 공부할 초보자를 모집합니다. 많은 참여 부탁드립니다.",
        "date": "2024-07-31T12:05:28.000Z",
        "pic1": {
            "type": "Buffer",
            "data": [166, 39, 53, 142, 152]
        },
        "pic2": {
            "type": "Buffer",
            "data": [166, 39, 54, 142, 152]
        }
    }
];

function StudyList() {
    const [posts, setPosts] = useState([]); // 주석 처리된 API 호출 대신 더미 데이터를 사용할 것이므로 초기 상태를 빈 배열로 설정합니다.
    const [currentPage, setCurrentPage] = useState(1);
    const [isFilterActive,] = useState(false);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const postsPerPage = 7;
    const [isModalOpen, setIsModalOpen] = useState(false);

    const isLoggedIn = useRecoilValue(loginState);

    // 주석 처리된 API 호출을 주석 처리하고 더미 데이터를 사용하는 함수
    const getStudies = async (query = '') => {
        try {
            setLoading(true);
            let response;
            if (query) {
                // 주석 처리된 검색 API 호출
                // response = await searchStudy(query);
                // setPosts(response.data);

                // 더미 데이터 사용
                const filteredData = dummyData.filter(post =>
                    post.title.includes(query) || post.body.includes(query)
                );
                response = { data: filteredData, status: 200 };
            } else {
                // 주석 처리된 기본 목록 API 호출
                // response = await fetchStudyList();
                
                // 더미 데이터 사용
                response = { data: dummyData, status: 200 };
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
        console.log("Scrolling to top");
        window.scrollTo(0, 0);
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
