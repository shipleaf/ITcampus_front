import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import GuestHeader from "../components/modules/header/GuestHeader";
import UserHeader from "../components/modules/header/UserHeader";
import { useRecoilValue } from "recoil";
import { loginState } from "../state/atoms";
import Top from "../components/post/Top";
import Post from "../components/post/Post";
import CustomSelect from "../components/filter/CustomSelect";
import FilterButton from "../components/filter/FilterButton";
import star from '../assets/scrap.png';

function CorporateProgram() {
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
        }, {
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
        }, {
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
    const [isFilterActive, setIsFilterActive] = useState(false);
    const isLoggedIn = useRecoilValue(loginState);
    const postsPerPage = 7;

    const today = new Date();

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
            {isLoggedIn ? (
                <UserHeader />
            ) : (
                <GuestHeader />
            )}
            <Container>
                <Top title='기업 프로그램' />
                <SortContainer>
                    <FilterButton onClick={handleFilterToggle} isActive={isFilterActive} prop='진행중' />
                    <Right>
                        <CustomSelect
                            selectedOption={sortOption}
                            options={[
                                { value: "startdate", label: "모집 시작일" },
                                { value: "enddate", label: "모집 마감일" },
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
                {currentPosts.map((post, index) => (
                    <StyledLink to={`/corporatedetails/${post.key}`}>
                        <Post
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
            </Container>
        </>
    );
}

export default CorporateProgram;

const SortContainer = styled.div`
    display: flex;
    width: 100%;
    margin: 20px auto;
    margin-bottom: 40px;
    align-items: center;
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
const Container = styled.div`
    width: 60%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0 auto;
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