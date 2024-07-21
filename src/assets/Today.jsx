import React from 'react';

const Today = () => {

const today = new Date();

    return `${today.getFullYear()}. ${today.getMonth() + 1}. ${today.getDate()}`
}

export default Today;