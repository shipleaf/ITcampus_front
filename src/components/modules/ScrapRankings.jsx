import React from 'react'
import styled from 'styled-components'
import { FaStar } from "react-icons/fa";

const ScrapRankingsContainer = styled.div`
    width: 330px;
    height: 190px;
    background-color: #007fff;
    border-radius: 10px;
`

const ScrapRankingsHeader = styled.div`
    font-size: 17px;
    color: #fff;
    font-weight: bold;
    position: relative;
    left: 15px;
    top: 15px;
`

const ScrapRankingsContents = styled.div`
    padding: 15px;
    color: #fff;
    margin-top: 15px;
`

const CompanyItem = styled.div`
    margin: 8px 0;
    color: #aaa;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const ScrapCount = styled.span`
    display: flex;
    align-items: center;
    color: #fff;
`

function ScrapRankings() {
    const topCompanies = [
        { rank: 1, name: '우아한 형제들', scraps: 120 },
        { rank: 2, name: '쿠팡', scraps: 110 },
        { rank: 3, name: '토스 엔지니어', scraps: 100 }
    ];

    return (
        <div>
            <ScrapRankingsContainer>
                <ScrapRankingsHeader>
                    스크랩 많은 기업
                </ScrapRankingsHeader>
                <ScrapRankingsContents>
                    {topCompanies.map(company => (
                        <CompanyItem key={company.rank}>
                            <div>
                                {company.rank}. {company.name}
                            </div>
                            <ScrapCount>
                                <FaStar style={{color: '#ffff00'}}/>
                                {company.scraps}
                            </ScrapCount>
                        </CompanyItem>
                    ))}
                </ScrapRankingsContents>
            </ScrapRankingsContainer>
        </div>
    )
}

export default ScrapRankings;
