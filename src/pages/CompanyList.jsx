import React, { useState } from "react";
import styled from "styled-components";
import GuestHeader from "../components/header/GuestHeader";
import Top from "../components/post/Top";
import CompanyPost from "../components/post/CompanyPost";
import CustomSelect from "../components/filter/CustomSelect";
import star from '../assets/scrap.png';

function CompanyList() {
    const dummyPosts = [
        {
            company: "가",
            detail: "#프리한 복장 가능 #정시출근 #편균 연령 40대이상 외 13가지",
            img: star,
            scrap: 215,
        },
        {
            company: "다",
            detail: "#프리한 복장 가능 #정시출근 #편균 연령 40대이상 외 13가지",
            img: star,
            scrap: 200,
        },
        {
            company: "현대자동차(주)",
            detail: "#프리한 복장 가능 #정시출근 #편균 연령 40대이상 외 13가지",
            img: star,
            scrap: 150,
        },
        {
            company: "현대자동차(주)",
            detail: "#프리한 복장 가능 #정시출근 #편균 연령 40대이상 외 13가지fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff",
            img: star,
            scrap: 5,
        },
        {
            company: "현대자동차(주)",
            detail: "#프리한 복장 가능 #정시출근 #편균 연령 40대이상 외 13가지",
            img: star,
            scrap: 900,
        }
    ];

    const [currentPage, setCurrentPage] = useState(1);
    const [sortOption, setSortOption] = useState('company');
    const [sortOrder, setSortOrder] = useState('asc');
    const postsPerPage = 7;

    const sortedPosts = [...dummyPosts].sort((a, b) => {
        if (sortOption === 'scrap') {
            return sortOrder === 'desc'
                ? b.scrap - a.scrap
                : a.scrap - b.scrap;
        } else if (sortOption === 'company') {
            return sortOrder === 'desc'
                ? b.company.localeCompare(a.company)
                : a.company.localeCompare(b.company);
        }
        return 0;
    });

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = sortedPosts.slice(indexOfFirstPost, indexOfLastPost);

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

    const totalPages = Math.ceil(sortedPosts.length / postsPerPage);

    return (
        <>
            <GuestHeader />
            <Top title='정부 지원' />
            <SortContainer>
                <Right>
                    <CustomSelect
                        selectedOption={sortOption}
                        options={[
                            { value: "scrap", label: "스크랩" },
                            { value: "company", label: "가나다 순" }
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
                <CompanyPost
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

export default CompanyList;

const SortContainer = styled.div`
    display: flex;
    width: 60%;
    margin: 20px auto;
    margin-bottom: 40px;
    align-items: center;
`;

const Right = styled.div`
    display: flex;
    flex: 1;
    flex-direction: row;
    justify-content: flex-end;
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
