import React from 'react'
import LicenseHeader from '../components/license/LicenseHeader';
import GuestHeader from '../components/header/GuestHeader';
import ScrapButtonDiv from '../components/modules/recruit/ScrapButtonDiv';
import styled from 'styled-components';
// import { fetchLicenseDetails } from '../APIs/licenseAPI';
import LicenseBody from '../components/license/LicenseBody';
import OtherLicense from '../components/license/OtherLicense';

const ScrapContainer = styled.div`
    width: 8%;
`

function ITLicenseDetails() {
    const licenseDetails = {
        key: 1,
        title: "2024 국가공인 자격증 시험",
        startdate: "2024-08-01T00:00:00.000Z",
        enddate: "2024-12-31T23:59:59.000Z",
        exam_startdate: "2024-10-01T00:00:00.000Z",
        exam_enddate: "2024-10-02T00:00:00.000Z",
        resultdate: "2025-01-15T00:00:00.000Z",
        logo: "https://i.namu.wiki/i/PXBVCr9eOrl_MyjJsjpo61rNoYBAuJBPR8g2o7-rPmJKoEh-i7UDZLZsjiXG5nD8k3Texn2Y_p5Lzajj_r3aGg.svg",
        pic1: "pic1.jpg",
        pic2: "pic2.jpg",
        pic3: "pic3.jpg",
        pic4: "pic4.jpg",
        pic5: "pic5.jpg",
        body: "이 시험은 국가에서 공인된 자격증을 취득할 수 있는 기회를 제공합니다.",
        pass_standard: "60점 이상",
        workview: "자격증 취득 후 다양한 경로로 진로를 개척할 수 있습니다.",
        qualification: "고등학교 졸업 이상",
        testinfo: ["필기 시험과 실기 시험으로 구성됩니다.", "1. 현행 시스템 분석 및 설계 능력 확인", "2. 데이터 입출력 구현", "3. 통합 구현"
            , "1. 현행 시스템 분석 및 설계 능력 확인", "2. 데이터 입출력 구현", "3. 통합 구현", "1. 현행 시스템 분석 및 설계 능력 확인", "2. 데이터 입출력 구현", "3. 통합 구현"
            , "1. 현행 시스템 분석 및 설계 능력 확인", "2. 데이터 입출력 구현", "3. 통합 구현", "1. 현행 시스템 분석 및 설계 능력 확인", "2. 데이터 입출력 구현", "3. 통합 구현"
        ],
        problems: "https://example.com/problems",
        qualification_name: "국가공인 자격증",
        relate_department: "교육부",
        agency: "교육부",
        link: "https://example.com/apply",
        fee: "50,000원"
    };
    return (
        <div style={{ backgroundColor: '#f1f4f7' }}>
            <GuestHeader />
            <LicenseHeader licenseDetails={licenseDetails} />
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <ScrapContainer>
                    <ScrapButtonDiv />
                </ScrapContainer>
            </div>
            <LicenseBody licenseDetails={licenseDetails} />
            <OtherLicense />
        </div>
    )
}

export default ITLicenseDetails;
