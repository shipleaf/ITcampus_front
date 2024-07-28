import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchLicenseDetails } from '../APIs/licenseAPI';
import LicenseHeader from '../components/license/LicenseHeader';
import GuestHeader from '../components/header/GuestHeader';
import ScrapButtonDiv from '../components/modules/recruit/ScrapButtonDiv';
import styled from 'styled-components';
import LicenseBody from '../components/license/LicenseBody';
import OtherLicense from '../components/license/OtherLicense';

const ScrapContainer = styled.div`
    width: 8%;
`;

function ITLicenseDetails() {
    const { key } = useParams();
    const [licenseDetails, setLicenseDetails] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getLicenseDetails = async () => {
            try {
                const data = await fetchLicenseDetails(key);
                setLicenseDetails(data);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        getLicenseDetails();
    }, [key]);

    if (loading) {
        return <div>로딩중...</div>;
    }

    if (error) {
        return <div>에러 발생: {error.message}</div>;
    }

    if (!licenseDetails) {
        return <div>데이터를 불러오지 못했습니다.</div>;
    }

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
    );
}

export default ITLicenseDetails;
