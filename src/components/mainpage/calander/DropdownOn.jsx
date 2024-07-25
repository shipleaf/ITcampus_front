import React from 'react';
import { IoIosArrowUp } from "react-icons/io";

function DropdownOn() {
    return (
        <div style={{ fontSize: '14px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', padding: '20px' }}>
            내 캘린더
            <IoIosArrowUp size={20} />
        </div>
    )
}

export default DropdownOn
