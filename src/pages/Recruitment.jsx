import React, { useState, useEffect } from "react";
import styled from "styled-components";
import GuestHeader from "../components/header/GuestHeader";
import Top from "../components/post/Top";
import RecruitmentPost from "../components/post/RecruitmentPost";
import CustomSelect from "../components/filter/CustomSelect";
import FilterButton from "../components/filter/FilterButton";
import star from '../assets/scrap.png';
import DetailSearch from "../components/filter/DetailSearch";

function Recruitment() {
    const dummyPosts = [
        {
            title: "[공지] 12기 중앙 해커톤 안내",
            detail: "이러쿵저러쿵... 해커톤에 대한 자세한 내용... 이러쿵저러쿵... 해커톤에 대한 자세한 내용... 이러쿵저러쿵... 해커톤에 대한 자세한 내용... 이러쿵저러쿵... 해커톤에 대한 자세한 내용... 이러쿵저러쿵... 해커톤에 대한 자세한 내용...",
            writer: "멋쟁이사자처럼 대학",
            img: star,
            job: "프론트엔드",
            stack: "C++",
            experience: "신입",
            education: "대학교졸업(2,3년)",
            employmentType: "정규직",
            scrap: 215,
            startDate: "2024. 7. 5",
            endDate: "2024. 7. 14"
        },
        {
            title: "[공지] 13기 중앙 해커톤 안내",
            detail: "이러쿵저러쿵... 해커톤에 대한 자세한 내용... 이러쿵저러쿵... 해커톤에 대한 자세한 내용... 이러쿵저러쿵... 해커톤에 대한 자세한 내용... 이러쿵저러쿵... 해커톤에 대한 자세한 내용... 이러쿵저러쿵... 해커톤에 대한 자세한 내용...",
            writer: "멋쟁이사자처럼 대학",
            img: star,
            job: "백엔드",
            stack: "Java",
            experience: "1~3년",
            education: "대학교졸업(4년)",
            employmentType: "계약직",
            scrap: 180,
            startDate: "2024. 8. 1",
            endDate: "2024. 8. 10"
        },
        {
            title: "[공지] 12기 중앙 해커톤 안내",
            detail: "이러쿵저러쿵... 해커톤에 대한 자세한 내용... 이러쿵저러쿵... 해커톤에 대한 자세한 내용... 이러쿵저러쿵... 해커톤에 대한 자세한 내용... 이러쿵저러쿵... 해커톤에 대한 자세한 내용... 이러쿵저러쿵... 해커톤에 대한 자세한 내용...",
            writer: "멋쟁이사자처럼 대학",
            img: star,
            job: "프론트엔드",
            stack: "C++",
            experience: "신입",
            education: "대학교졸업(2,3년)",
            employmentType: "정규직",
            scrap: 215,
            startDate: "2024. 7. 22",
            endDate: "2024. 7. 30"
        },
        {
            title: "[공지] 12기 중앙 해커톤 안내",
            detail: "이러쿵저러쿵... 해커톤에 대한 자세한 내용... 이러쿵저러쿵... 해커톤에 대한 자세한 내용... 이러쿵저러쿵... 해커톤에 대한 자세한 내용... 이러쿵저러쿵... 해커톤에 대한 자세한 내용... 이러쿵저러쿵... 해커톤에 대한 자세한 내용...",
            writer: "멋쟁이사자처럼 대학",
            img: star,
            job: "프론트엔드",
            stack: "C++",
            experience: "신입",
            education: "대학교졸업(2,3년)",
            employmentType: "정규직",
            scrap: 215,
            startDate: "2024. 7. 5",
            endDate: "2024. 7. 14"
        },
        {
            title: "[공지] 13기 중앙 해커톤 안내",
            detail: "이러쿵저러쿵... 해커톤에 대한 자세한 내용... 이러쿵저러쿵... 해커톤에 대한 자세한 내용... 이러쿵저러쿵... 해커톤에 대한 자세한 내용... 이러쿵저러쿵... 해커톤에 대한 자세한 내용... 이러쿵저러쿵... 해커톤에 대한 자세한 내용...",
            writer: "멋쟁이사자처럼 대학",
            img: star,
            job: "백엔드",
            stack: "Java",
            experience: "1~3년",
            education: "대학교졸업(4년)",
            employmentType: "계약직",
            scrap: 180,
            startDate: "2024. 8. 1",
            endDate: "2024. 8. 10"
        },
        {
            title: "[공지] 14기 중앙 해커톤 안내",
            detail: "이러쿵저러쿵... 해커톤에 대한 자세한 내용... 이러쿵저러쿵... 해커톤에 대한 자세한 내용... 이러쿵저러쿵... 해커톤에 대한 자세한 내용... 이러쿵저러쿵... 해커톤에 대한 자세한 내용... 이러쿵저러쿵... 해커톤에 대한 자세한 내용...",
            writer: "멋쟁이사자처럼 대학",
            img: star,
            job: "앱개발",
            stack: "Kotlin",
            experience: "3~5년",
            education: "대학교졸업(4년)",
            employmentType: "인턴",
            scrap: 150,
            startDate: "2024. 9. 1",
            endDate: "2024. 9. 10"
        },
        {
            title: "[공지] 15기 중앙 해커톤 안내",
            detail: "이러쿵저러쿵... 해커톤에 대한 자세한 내용... 이러쿵저러쿵... 해커톤에 대한 자세한 내용... 이러쿵저러쿵... 해커톤에 대한 자세한 내용... 이러쿵저러쿵... 해커톤에 대한 자세한 내용... 이러쿵저러쿵... 해커톤에 대한 자세한 내용...",
            writer: "멋쟁이사자처럼 대학",
            img: star,
            job: "게임개발",
            stack: "Unity",
            experience: "5~7년",
            education: "대학교졸업(4년)",
            employmentType: "정규직",
            scrap: 300,
            startDate: "2024. 10. 1",
            endDate: "2024. 10. 10"
        },
        {
            title: "[공지] 16기 중앙 해커톤 안내",
            detail: "이러쿵저러쿵... 해커톤에 대한 자세한 내용... 이러쿵저러쿵... 해커톤에 대한 자세한 내용... 이러쿵저러쿵... 해커톤에 대한 자세한 내용... 이러쿵저러쿵... 해커톤에 대한 자세한 내용... 이러쿵저러쿵... 해커톤에 대한 자세한 내용...",
            writer: "멋쟁이사자처럼 대학",
            img: star,
            job: "웹개발",
            stack: "React",
            experience: "신입",
            education: "대학교졸업(2,3년)",
            employmentType: "정규직",
            scrap: 200,
            startDate: "2024. 11. 1",
            endDate: "2024. 11. 10"
        },
        {
            title: "[공지] 17기 중앙 해커톤 안내",
            detail: "이러쿵저러쿵... 해커톤에 대한 자세한 내용... 이러쿵저러쿵... 해커톤에 대한 자세한 내용... 이러쿵저러쿵... 해커톤에 대한 자세한 내용... 이러쿵저러쿵... 해커톤에 대한 자세한 내용... 이러쿵저러쿵... 해커톤에 대한 자세한 내용...",
            writer: "멋쟁이사자처럼 대학",
            img: star,
            job: "데이터 분석",
            stack: "Python",
            experience: "2~4년",
            education: "대학교졸업(4년)",
            employmentType: "계약직",
            scrap: 220,
            startDate: "2024. 12. 1",
            endDate: "2024. 12. 10"
        },
        {
            title: "[공지] 18기 중앙 해커톤 안내",
            detail: "이러쿵저러쿵... 해커톤에 대한 자세한 내용... 이러쿵저러쿵... 해커톤에 대한 자세한 내용... 이러쿵저러쿵... 해커톤에 대한 자세한 내용... 이러쿵저러쿵... 해커톤에 대한 자세한 내용... 이러쿵저러쿵... 해커톤에 대한 자세한 내용...",
            writer: "멋쟁이사자처럼 대학",
            img: star,
            job: "정보보안",
            stack: "Cybersecurity",
            experience: "4~6년",
            education: "대학교졸업(4년)",
            employmentType: "정규직",
            scrap: 175,
            startDate: "2024. 12. 15",
            endDate: "2024. 12. 25"
        },
        {
            title: "[공지] 19기 중앙 해커톤 안내",
            detail: "이러쿵저러쿵... 해커톤에 대한 자세한 내용... 이러쿵저러쿵... 해커톤에 대한 자세한 내용... 이러쿵저러쿵... 해커톤에 대한 자세한 내용... 이러쿵저러쿵... 해커톤에 대한 자세한 내용... 이러쿵저러쿵... 해커톤에 대한 자세한 내용...",
            writer: "멋쟁이사자처럼 대학",
            img: star,
            job: "QA/테스터",
            stack: "Selenium",
            experience: "1~3년",
            education: "대학교졸업(2,3년)",
            employmentType: "인턴",
            scrap: 160,
            startDate: "2025. 1. 5",
            endDate: "2025. 1. 15"
        },
        {
            title: "[공지] 20기 중앙 해커톤 안내",
            detail: "이러쿵저러쿵... 해커톤에 대한 자세한 내용... 이러쿵저러쿵... 해커톤에 대한 자세한 내용... 이러쿵저러쿵... 해커톤에 대한 자세한 내용... 이러쿵저러쿵... 해커톤에 대한 자세한 내용... 이러쿵저러쿵... 해커톤에 대한 자세한 내용...",
            writer: "멋쟁이사자처럼 대학",
            img: star,
            job: "개발PM",
            stack: "Project Management",
            experience: "5~7년",
            education: "대학교졸업(4년)",
            employmentType: "정규직",
            scrap: 250,
            startDate: "2025. 2. 1",
            endDate: "2025. 2. 10"
        },
        {
            title: "[공지] 21기 중앙 해커톤 안내",
            detail: "이러쿵저러쿵... 해커톤에 대한 자세한 내용... 이러쿵저러쿵... 해커톤에 대한 자세한 내용... 이러쿵저러쿵... 해커톤에 대한 자세한 내용... 이러쿵저러쿵... 해커톤에 대한 자세한 내용... 이러쿵저러쿵... 해커톤에 대한 자세한 내용...",
            writer: "멋쟁이사자처럼 대학",
            img: star,
            job: "네트워크 엔지니어",
            stack: "Cisco",
            experience: "3~5년",
            education: "대학교졸업(2,3년)",
            employmentType: "계약직",
            scrap: 130,
            startDate: "2025. 3. 1",
            endDate: "2025. 3. 10"
        }
    ];

    const [currentPage, setCurrentPage] = useState(1);
    const [sortOption, setSortOption] = useState('scrap');
    const [sortOrder, setSortOrder] = useState('desc');
    const [isFilterActive, setIsFilterActive] = useState(false);
    const [selectedFilters, setSelectedFilters] = useState({
        job: [],
        stack: [],
        experience: [],
        education: [],
        employmentType: []
    });

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
        const filterKeys = Object.keys(selectedFilters);
        for (let key of filterKeys) {
            if (selectedFilters[key].length > 0 && !selectedFilters[key].includes(post[key])) {
                return false;
            }
        }

        if (isFilterActive) {
            const startDate = new Date(post.startDate);
            const endDate = new Date(post.endDate);
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

    const handleFilterChange = (category, values) => {
        setSelectedFilters(prevFilters => ({
            ...prevFilters,
            [category]: values
        }));
    };

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
            {currentPosts.map((post, index) => (
                <RecruitmentPost
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

export default Recruitment;

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
