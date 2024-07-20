import React, { useState } from "react";
import styled from "styled-components";
import GuestHeader from '../../components/header/GuestHeader';
import Top from "../../components/post/Top";
import Post from "../../components/post/Post";
import star from '../../assets/scrap.png'; 

function ITLicense(){
    const dummyPosts = [
        {
            title: "[공지] 12기 중앙 해커톤 안내",
            detail: "이러쿵저러쿵... 해커톤에 대한 자세한 내용...이러쿵저러쿵... 해커톤에 대한 자세한 내용...이러쿵저러쿵... 해커톤에 대한 자세한 내용...이러쿵저러쿵... 해커톤에 대한 자세한 내용...이러쿵저러쿵... 해커톤에 대한 자세한 내용...이러쿵저러쿵... 해커톤에 대한 자세한 내용...",
            writer: "멋쟁이사자처럼 대학",
            img: star,
            scrap: 215,
            startDate: "2024. 7. 5",
            endDate: "2024. 7. 14"
        },
        {
            title: "[공지] 13기 중앙 해커톤 안내",
            detail: "이러쿵저러쿵... 해커톤에 대한 자세한 내용...이러쿵저러쿵... 해커톤에 대한 자세한 내용...이러쿵저러쿵... 해커톤에 대한 자세한 내용...이러쿵저러쿵... 해커톤에 대한 자세한 내용...이러쿵저러쿵... 해커톤에 대한 자세한 내용...이러쿵저러쿵... 해커톤에 대한 자세한 내용...",
            writer: "멋쟁이사자처럼 대학",
            img: star,
            scrap: 180,
            startDate: "2024. 8. 1",
            endDate: "2024. 8. 10"
        },
        {
            title: "[공지] 14기 중앙 해커톤 안내",
            detail: "이러쿵저러쿵... 해커톤에 대한 자세한 내용...이러쿵저러쿵... 해커톤에 대한 자세한 내용...이러쿵저러쿵... 해커톤에 대한 자세한 내용...이러쿵저러쿵... 해커톤에 대한 자세한 내용...이러쿵저러쿵... 해커톤에 대한 자세한 내용...이러쿵저러쿵... 해커톤에 대한 자세한 내용...",
            writer: "멋쟁이사자처럼 대학",
            img: star,
            scrap: 215,
            startDate: "2024. 7. 5",
            endDate: "2024. 7. 14"
        },
        {
            title: "[공지] 15기 중앙 해커톤 안내",
            detail: "이러쿵저러쿵... 해커톤에 대한 자세한 내용...이러쿵저러쿵... 해커톤에 대한 자세한 내용...이러쿵저러쿵... 해커톤에 대한 자세한 내용...이러쿵저러쿵... 해커톤에 대한 자세한 내용...이러쿵저러쿵... 해커톤에 대한 자세한 내용...이러쿵저러쿵... 해커톤에 대한 자세한 내용...",
            writer: "멋쟁이사자처럼 대학",
            img: star,
            scrap: 180,
            startDate: "2024. 8. 1",
            endDate: "2024. 8. 10"
        },
        {
            title: "[공지] 16기 중앙 해커톤 안내",
            detail: "이러쿵저러쿵... 해커톤에 대한 자세한 내용...이러쿵저러쿵... 해커톤에 대한 자세한 내용...이러쿵저러쿵... 해커톤에 대한 자세한 내용...이러쿵저러쿵... 해커톤에 대한 자세한 내용...이러쿵저러쿵... 해커톤에 대한 자세한 내용...이러쿵저러쿵... 해커톤에 대한 자세한 내용...",
            writer: "멋쟁이사자처럼 대학",
            img: star,
            scrap: 215,
            startDate: "2024. 7. 5",
            endDate: "2024. 7. 14"
        },
        {
            title: "[공지] 17기 중앙 해커톤 안내",
            detail: "이러쿵저러쿵... 해커톤에 대한 자세한 내용...이러쿵저러쿵... 해커톤에 대한 자세한 내용...이러쿵저러쿵... 해커톤에 대한 자세한 내용...이러쿵저러쿵... 해커톤에 대한 자세한 내용...이러쿵저러쿵... 해커톤에 대한 자세한 내용...이러쿵저러쿵... 해커톤에 대한 자세한 내용...",
            writer: "멋쟁이사자처럼 대학",
            img: star,
            scrap: 180,
            startDate: "2024. 8. 1",
            endDate: "2024. 8. 10"
        },
        {
            title: "[공지] 18기 중앙 해커톤 안내",
            detail: "이러쿵저러쿵... 해커톤에 대한 자세한 내용...이러쿵저러쿵... 해커톤에 대한 자세한 내용...이러쿵저러쿵... 해커톤에 대한 자세한 내용...이러쿵저러쿵... 해커톤에 대한 자세한 내용...이러쿵저러쿵... 해커톤에 대한 자세한 내용...이러쿵저러쿵... 해커톤에 대한 자세한 내용...",
            writer: "멋쟁이사자처럼 대학",
            img: star,
            scrap: 215,
            startDate: "2024. 7. 5",
            endDate: "2024. 7. 14"
        },
        {
            title: "[공지] 19기 중앙 해커톤 안내",
            detail: "이러쿵저러쿵... 해커톤에 대한 자세한 내용...이러쿵저러쿵... 해커톤에 대한 자세한 내용...이러쿵저러쿵... 해커톤에 대한 자세한 내용...이러쿵저러쿵... 해커톤에 대한 자세한 내용...이러쿵저러쿵... 해커톤에 대한 자세한 내용...이러쿵저러쿵... 해커톤에 대한 자세한 내용...",
            writer: "멋쟁이사자처럼 대학",
            img: star,
            scrap: 180,
            startDate: "2024. 8. 1",
            endDate: "2024. 8. 10"
        },
        {
            title: "[공지] 18기 중앙 해커톤 안내",
            detail: "이러쿵저러쿵... 해커톤에 대한 자세한 내용...이러쿵저러쿵... 해커톤에 대한 자세한 내용...이러쿵저러쿵... 해커톤에 대한 자세한 내용...이러쿵저러쿵... 해커톤에 대한 자세한 내용...이러쿵저러쿵... 해커톤에 대한 자세한 내용...이러쿵저러쿵... 해커톤에 대한 자세한 내용...",
            writer: "멋쟁이사자처럼 대학",
            img: star,
            scrap: 215,
            startDate: "2024. 7. 5",
            endDate: "2024. 7. 14"
        },
        {
            title: "[공지] 19기 중앙 해커톤 안내",
            detail: "이러쿵저러쿵... 해커톤에 대한 자세한 내용...이러쿵저러쿵... 해커톤에 대한 자세한 내용...이러쿵저러쿵... 해커톤에 대한 자세한 내용...이러쿵저러쿵... 해커톤에 대한 자세한 내용...이러쿵저러쿵... 해커톤에 대한 자세한 내용...이러쿵저러쿵... 해커톤에 대한 자세한 내용...",
            writer: "멋쟁이사자처럼 대학",
            img: star,
            scrap: 180,
            startDate: "2024. 8. 1",
            endDate: "2024. 8. 10"
        },{
            title: "[공지] 18기 중앙 해커톤 안내",
            detail: "이러쿵저러쿵... 해커톤에 대한 자세한 내용...이러쿵저러쿵... 해커톤에 대한 자세한 내용...이러쿵저러쿵... 해커톤에 대한 자세한 내용...이러쿵저러쿵... 해커톤에 대한 자세한 내용...이러쿵저러쿵... 해커톤에 대한 자세한 내용...이러쿵저러쿵... 해커톤에 대한 자세한 내용...",
            writer: "멋쟁이사자처럼 대학",
            img: star,
            scrap: 215,
            startDate: "2024. 7. 5",
            endDate: "2024. 7. 14"
        },
        {
            title: "[공지] 19기 중앙 해커톤 안내",
            detail: "이러쿵저러쿵... 해커톤에 대한 자세한 내용...이러쿵저러쿵... 해커톤에 대한 자세한 내용...이러쿵저러쿵... 해커톤에 대한 자세한 내용...이러쿵저러쿵... 해커톤에 대한 자세한 내용...이러쿵저러쿵... 해커톤에 대한 자세한 내용...이러쿵저러쿵... 해커톤에 대한 자세한 내용...",
            writer: "멋쟁이사자처럼 대학",
            img: star,
            scrap: 180,
            startDate: "2024. 8. 1",
            endDate: "2024. 8. 10"
        },{
            title: "[공지] 18기 중앙 해커톤 안내",
            detail: "이러쿵저러쿵... 해커톤에 대한 자세한 내용...이러쿵저러쿵... 해커톤에 대한 자세한 내용...이러쿵저러쿵... 해커톤에 대한 자세한 내용...이러쿵저러쿵... 해커톤에 대한 자세한 내용...이러쿵저러쿵... 해커톤에 대한 자세한 내용...이러쿵저러쿵... 해커톤에 대한 자세한 내용...",
            writer: "멋쟁이사자처럼 대학",
            img: star,
            scrap: 215,
            startDate: "2024. 7. 5",
            endDate: "2024. 7. 14"
        },
        {
            title: "[공지] 19기 중앙 해커톤 안내",
            detail: "이러쿵저러쿵... 해커톤에 대한 자세한 내용...이러쿵저러쿵... 해커톤에 대한 자세한 내용...이러쿵저러쿵... 해커톤에 대한 자세한 내용...이러쿵저러쿵... 해커톤에 대한 자세한 내용...이러쿵저러쿵... 해커톤에 대한 자세한 내용...이러쿵저러쿵... 해커톤에 대한 자세한 내용...",
            writer: "멋쟁이사자처럼 대학",
            img: star,
            scrap: 180,
            startDate: "2024. 8. 1",
            endDate: "2024. 8. 10"
        },
        {
            title: "[공지] 108기 중앙 해커톤 안내",
            detail: "108기 뉴비",
            writer: "우리 대학",
            img: star,
            scrap: 600,
            startDate: "2024. 7. 9",
            endDate: "2027. 8. 10"
        },
    ];

    const [currentPage, setCurrentPage] = useState(1); 
    const [sortOption, setSortOption] = useState('scrap');
    const [sortOrder, setSortOrder] = useState('desc'); 
    const postsPerPage = 7; 

    // 정렬 함수
    const sortedPosts = [...dummyPosts].sort((a, b) => {
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

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = sortedPosts.slice(indexOfFirstPost, indexOfLastPost);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const handleSortChange = (e) => {
        setSortOption(e.target.value);
        setCurrentPage(1);
    };

    const handleSortOrderChange = (e) => {
        setSortOrder(e.target.value);
        setCurrentPage(1);
    };

    const totalPages = Math.ceil(dummyPosts.length / postsPerPage);

    return (
        <>
            <GuestHeader />
            <Top />
            <SortContainer>
                <Select value={sortOption} onChange={handleSortChange}>
                    <option value="startdate">응시 시작일</option>
                    <option value="enddate">응시 종료일</option>
                    <option value="scrap">스크랩</option>
                </Select>
                <Select value={sortOrder} onChange={handleSortOrderChange}>
                    <option value="desc">내림차순</option>
                    <option value="asc">오름차순</option>
                </Select>
            </SortContainer>
            {currentPosts.map((post, index) => (
                <Post
                    key={index}
                    {...post}
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
    );
}

export default ITLicense;

const SortContainer = styled.div`
    display: flex;
    width: 60%;
    margin: 20px auto;
    align-items: center;
`;

const Select = styled.select`
    margin-left: 10px;
    padding: 5px;
    border-radius: 5px;
    border: 1px solid #ddd;
`;

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