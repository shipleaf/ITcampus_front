import React, { forwardRef } from 'react';
import styled from 'styled-components';
import { IoHomeOutline } from "react-icons/io5";
import { LuClipboardEdit } from "react-icons/lu";
import { CiStar } from "react-icons/ci";
import { FiEdit } from "react-icons/fi";
import { MdLogout } from "react-icons/md";
import { useRecoilState } from 'recoil';
import { loginState } from '../../../state/atoms'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 168px;
    border-radius: 10px;
    border: 1px solid #999;
    padding: 8px 0;
    position: absolute;
    right: 5px;
    top: 65px;
    background-color: #fff;
    z-index: 30000;
`;

const DropdownContainer = styled.div`
    width: 90%;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-top: 10px;

    & div {
        margin-left: 10px;
        font-size: 14px;
        height: 40px;
        color: #5c667b;
    }
`;

const LogoutButton = styled.button`
    border-top: 1px solid #999 !important;
    padding-top: 15px;
    width: 90%;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-top: 10px;
    border: none;
    background-color: #fff;
    cursor: pointer;

    & div {
        margin-left: 10px;
        font-size: 14px;
        height: 40px;
        color: #5c667b;
    }
`;

const UserDropdownMenu = forwardRef((props, ref) => {
    const [, setIsLoggedIn] = useRecoilState(loginState);

    const handleLogout = () => {
        setIsLoggedIn(false);
    };

    return (
        <Container ref={ref}>
            <DropdownContainer>
                <div style={{ width: '24px' }}>
                    <IoHomeOutline style={{ color: '#5c667b' }} size={20} />
                </div>
                <div>마이페이지</div>
            </DropdownContainer>
            <DropdownContainer>
                <div style={{ width: '24px' }}>
                    <LuClipboardEdit style={{ color: '#5c667b' }} size={20} />
                </div>
                <div>개인정보 수정</div>
            </DropdownContainer>
            <DropdownContainer>
                <div style={{ width: '24px' }}>
                    <CiStar style={{ color: '#5c667b' }} size={24} />
                </div>
                <div style={{ marginLeft: '12px' }}>스크랩</div>
            </DropdownContainer>
            <DropdownContainer>
                <div style={{ width: '24px' }}>
                    <FiEdit style={{ color: '#5c667b' }} size={20} />
                </div>
                <div>작성한 게시글</div>
            </DropdownContainer>
            <LogoutButton onClick={handleLogout}>
                <div style={{ width: '24px' }}>
                    <MdLogout style={{ color: '#5c667b' }} size={20} />
                </div>
                <div>로그아웃</div>
            </LogoutButton>
        </Container>
    );
});

export default UserDropdownMenu;
