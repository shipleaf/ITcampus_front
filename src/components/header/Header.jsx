import React, { useEffect } from 'react';
import GuestHeader from '../modules/header/GuestHeader';
import UserHeader from '../modules/header/UserHeader';
import { useRecoilState } from 'recoil';
import { loginState } from '../../state/atoms';

function Header() {
    const [isLoggedIn, setIsLoggedIn] = useRecoilState(loginState);

    useEffect(() => {
        const storedIsLoggedIn = localStorage.getItem('isLoggedIn');
        if (storedIsLoggedIn === 'true') {
            setIsLoggedIn(true);
        } else {
            setIsLoggedIn(false);
        }
    }, [setIsLoggedIn]);

    return (
        <div>
            {isLoggedIn ? (
                <UserHeader />
            ) : (
                <GuestHeader />
            )}
        </div>
    );
}

export default Header;
