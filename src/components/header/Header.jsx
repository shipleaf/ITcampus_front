import React from 'react';
import GuestHeader from '../modules/header/GuestHeader';
import UserHeader from '../modules/header/UserHeader'
import { useRecoilValue } from 'recoil';
import { loginState } from '../../state/atoms';

function Header() {

    const isLoggedIn = useRecoilValue(loginState);

    return (
        <div>
            {isLoggedIn ? (
                <UserHeader />
            ) : (
                <GuestHeader />
            )}
        </div>
    )
}

export default Header;  