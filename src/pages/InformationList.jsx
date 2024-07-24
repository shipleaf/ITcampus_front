import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import GuestHeader from "../components/header/GuestHeader";
import Top from "../components/post/Top";
import StudyPost from "../components/post/StudyPost";
import star from "../assets/scrap.png"

function InformationList(){
    const dummyPosts = [
        {
            title : "[이벤트] 멋사 장학금 이벤트 (~6/19)",
            detail : "혹시 멋대생이라면 누구나 받을 수 있는 '무제한'멋사 장학금을 아세요?",
            writer : "정준용",
            datecreate : "2024. 7. 15",
            commentNum  : "10"
        },
        {
            title : "멋사",
            detail : "가나다라마바사아자차카타파하",
            writer : "정준용",
            datecreate : "2024. 7. 15",
            img : star
        },
        {
            title : "[이벤트] 멋사 장학금 이벤트 (~6/19)",
            detail : "가나다라마바사아자차카타파하가나다라마바사아자차카타파하",
            writer : "정준용",
            datecreate : "2024. 8. 15"
        },
        {
            title : "생각이 안니네",
            detail : "가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하",
            writer : "정준용",
            datecreate : "2026. 7. 12"
        },
        {
            title : "[이벤트] 멋사 장학금 이벤트 (~6/19)",
            detail : "혹시 멋대생이라면 누구나 받을 수 있는 '무제한'멋사 장학금을 아세요?",
            writer : "정준용",
            datecreate : "2024. 7. 15"
        },
        {
            title : "[이벤트] 멋사 장학금 이벤트 (~6/19)",
            detail : "혹시 멋대생이라면 누구나 받을 수 있는 '무제한'멋사 장학금을 아세요?",
            writer : "정준용",
            datecreate : "2024. 7. 15"
        },
        {
            title : "[이벤트] 멋사 장학금 이벤트 (~6/19)",
            detail : "혹시 멋대생이라면 누구나 받을 수 있는 '무제한'멋사 장학금을 아세요?",
            writer : "정준용",
            datecreate : "2024. 7. 15"
        },{
            title : "[이벤트] 멋사 장학금 이벤트 (~6/19)",
            detail : "혹시 멋대생이라면 누구나 받을 수 있는 '무제한'멋사 장학금을 아세요?",
            writer : "정준용",
            datecreate : "2024. 7. 15",
            img : star
        },{
            title : "[이벤트] 멋사 장학금 이벤트 (~6/19)",
            detail : "혹시 멋대생이라면 누구나 받을 수 있는 '무제한'멋사 장학금을 아세요?",
            writer : "정준용",
            datecreate : "2024. 7. 15"
        },{
            title : "[이벤트] 멋사 장학금 이벤트 (~6/19)",
            detail : "혹시 멋대생이라면 누구나 받을 수 있는 '무제한'멋사 장학금을 아세요?",
            writer : "정준용",
            datecreate : "2024. 7. 15"
        },{
            title : "[이벤트] 멋사 장학금 이벤트 (~6/19)",
            detail : "혹시 멋대생이라면 누구나 받을 수 있는 '무제한'멋사 장학금을 아세요?",
            writer : "정준용",
            datecreate : "2024. 7. 15"
        },{
            title : "[이벤트] 멋사 장학금 이벤트 (~6/19)",
            detail : "혹시 멋대생이라면 누구나 받을 수 있는 '무제한'멋사 장학금을 아세요?",
            writer : "정준용",
            datecreate : "2024. 7. 15"
        },{
            title : "[이벤트] 멋사 장학금 이벤트 (~6/19)",
            detail : "혹시 멋대생이라면 누구나 받을 수 있는 '무제한'멋사 장학금을 아세요?",
            writer : "정준용",
            datecreate : "2024. 7. 15"
        },{
            title : "[이벤트] 멋사 장학금 이벤트 (~6/19)",
            detail : "혹시 멋대생이라면 누구나 받을 수 있는 '무제한'멋사 장학금을 아세요?",
            writer : "정준용",
            datecreate : "2024. 7. 15"
        },{
            title : "[이벤트] 멋사 장학금 이벤트 (~6/19)",
            detail : "혹시 멋대생이라면 누구나 받을 수 있는 '무제한'멋사 장학금을 아세요?",
            writer : "정준용",
            datecreate : "2024. 7. 15"
        },{
            title : "[이벤트] 멋사 장학금 이벤트 (~6/19)",
            detail : "혹시 멋대생이라면 누구나 받을 수 있는 '무제한'멋사 장학금을 아세요?",
            writer : "정준용",
            datecreate : "2024. 7. 15"
        },{
            title : "[이벤트] 멋사 장학금 이벤트 (~6/19)",
            detail : "혹시 멋대생이라면 누구나 받을 수 있는 '무제한'멋사 장학금을 아세요?",
            writer : "정준용",
            datecreate : "2024. 7. 15"
        },{
            title : "[이벤트] 멋사 장학금 이벤트 (~6/19)",
            detail : "혹시 멋대생이라면 누구나 받을 수 있는 '무제한'멋사 장학금을 아세요?",
            writer : "정준용",
            datecreate : "2024. 7. 15"
        },
    ];

    const [currentPage, setCurrentPage] = useState(1); 
    const [isFilterActive,] = useState(false);
    const postsPerPage = 7; 

    const filteredPosts = dummyPosts.filter((post) => {
        if (!isFilterActive) return true;
    
        // 예시 조건: 포스트의 제목이 "example"을 포함하는 경우만 필터링
        return post.title.includes("example");
    });
    

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };


    const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

    return (
        <>
            <GuestHeader/>
            <Top title='정보 게시판' />
            <WriteContainer>
                <Write> 글쓰기</Write>
            </WriteContainer>
            {currentPosts.map((post, index) => (
                <StyledLink to={`/informationdetails/${post.key}`}>
                <StudyPost
                    key={index}
                    {...post}
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

export default InformationList;


const Pagination = styled.div`
    display: flex;
    justify-content: center;
    margin: 20px 0;
`;

const WriteContainer = styled.div`
    display :flex;
    width: 60%;
    height: 40px;
    margin : 5px auto;
    justify-content: flex-end;
`
const Write = styled.button`
    display : flex;
    width: 100px;
    height: 100%;
    justify-content: center;
    align-items: center;
    padding : 5px auto;
    font-weight: bold;
    border :none;
    background-color: #00ACEE;
    border-radius: 10px;
    color : white;
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
`;

const StyledLink = styled(Link)`
    text-decoration: none;
    color: inherit;
    &:hover {
        text-decoration: none;
    }
`