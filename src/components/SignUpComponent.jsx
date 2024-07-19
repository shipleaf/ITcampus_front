import React, { useState } from 'react';
import styled from 'styled-components';

const SignInHeader = styled.div`
    margin-bottom: 10%;
`;

const LoginForm = styled.form`
    font-size: 15px;
    padding-top: 80px;
    padding-bottom: 100px;
    width: 35%;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid #00ACEE;
    border-radius: 10px;
`;

const Input = styled.input`
    width: 100%;
    border: none;
    border-bottom: 1px solid #000;
    margin-bottom: 10%;
    padding-bottom: 10px;
    &:focus{
        outline: none;
    }
`;

const InputDiv = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`;

const BirthDiv = styled(InputDiv)`
    width: 80%;
`;

const SignInButton = styled.button`
    width: 60%;
    height: 50px;
    color: #fff;
    background-color: #00ACEE;
    border: none;
    border-radius: 10px;
    cursor: pointer;
`;

const SignUpButton = styled.button`
    width: 60%;
    height: 50px;
    color: #00ACEE;
    background-color: #fff;
    border: 1px solid #00ACEE;
    border-radius: 10px;
    cursor: pointer;
`;

const HRComponent = styled.div`
    font-size: 12px;
    width: 60%;
    display: flex;
    margin: 15px auto;
    justify-content: space-between;
    & hr {
        width: 150px;
        height: 0;
    }
    & hr.left {
        margin-right: 30px;
    }
    & hr.right {
        margin-left: 30px;
    }
`;

const Label = styled.label``;

const GenderDiv = styled(InputDiv)`
    width: 40%;
    display: flex;
    justify-content: space-between;
    padding-right: 30%;
`;

function SignUpComponent({ setIsLoggedIn }) {
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');
    const [passwordCheck, setPasswordCheck] = useState('');
    const [name, setName] = useState('');
    const [year, setYear] = useState('');
    const [month, setMonth] = useState('');
    const [day, setDay] = useState('');
    const [job, setJob] = useState('');
    const [gender, setGender] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();
        
        if (password !== passwordCheck) {
            alert('비밀번호가 일치하지 않습니다!');
            return;
        }

        const formattedMonth = month.padStart(2, '0');
        const formattedDay = day.padStart(2, '0');
        const birthDate = `${year}${formattedMonth}${formattedDay}`;

        const registData = {
            id,
            password,
            birthDate,
            name,
            passwordCheck,
            job,
            gender
        };

        console.log(registData);

        try {
            const response = await fetch('http://localhost:8080/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(registData),
                registData: 'include', // 쿠키를 포함하도록 설정
            });

            if (!response.ok) {
                throw new Error('로그인에 실패했습니다!');
            }

            const result = await response.json();
            console.log('로그인 성공:', result);
            setIsLoggedIn(true);
        } catch (error) {
            alert(error.message);
        }
    };

    return (
        <div>
            <LoginForm onSubmit={handleLogin}>
                <SignInHeader>회원가입</SignInHeader>
                <div id="logincomp" style={{ width: '60%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <InputDiv className="loginId">
                        <Input
                            type="text"
                            maxLength="10"
                            id="username"
                            value={id}
                            onChange={(event) => setId(event.target.value)}
                            placeholder='아이디'
                        />
                    </InputDiv>
                </div>
                <div id="passwordcomp" style={{ width: '60%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <InputDiv className="loginPassword">
                        <Input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(event) => setPassword(event.target.value)}
                            placeholder='비밀번호'
                        />
                    </InputDiv>
                </div>
                <div id="passwordcheckcomp" style={{ width: '60%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <InputDiv className='loginId'>
                        <Input
                            type="password"
                            maxLength="10"
                            id="passwordCheck"
                            value={passwordCheck}
                            onChange={(event) => setPasswordCheck(event.target.value)}
                            placeholder='비밀번호 확인'
                        />
                    </InputDiv>
                </div>
                <div id="usernamecomp" style={{ width: '60%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <InputDiv className='loginId'>
                        <Input
                            type="text"
                            maxLength="10"
                            id="username"
                            value={name}
                            onChange={(event) => setName(event.target.value)}
                            placeholder='이름'
                        />
                    </InputDiv>
                </div>
                <div id='birthcomp' style={{ width: '60%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <BirthDiv className='birthComponent'>
                        <Input
                            className='year'
                            type="text"
                            maxLength="4"
                            id="year"
                            value={year}
                            onChange={(event) => setYear(event.target.value)}
                        />
                        <div>년</div>
                        <Input
                            className='month'
                            type="text"
                            maxLength="2"
                            id="month"
                            value={month}
                            onChange={(event) => setMonth(event.target.value)}
                        />
                        <div>월</div>
                        <Input
                            className='day'
                            type="text"
                            maxLength="2"
                            id="day"
                            value={day}
                            onChange={(event) => setDay(event.target.value)}
                        />
                        <div>일</div>
                    </BirthDiv>
                </div>
                <div style={{ width: '60%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingBottom: '15px' }}>
                    <div style={{ color: '#999', fontSize: '14px' }}>성별</div>
                    <GenderDiv>
                        <Label>
                            <input type="radio" name="gender" value="male" onChange={(event) => setGender(event.target.value)} />
                            남성
                        </Label>
                        <Label>
                            <input type="radio" name="gender" value="female" onChange={(event) => setGender(event.target.value)}/>
                            여성
                        </Label>
                    </GenderDiv>
                </div>
                <div style={{ width: '60%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '15px' }}>
                    <InputDiv className="loginPassword">
                        <Input
                            type="text"
                            id="job"
                            value={job}
                            onChange={(event) => setJob(event.target.value)}
                            placeholder='직업(없으면 "없음" 입력)'
                        />
                    </InputDiv>
                </div>
                <SignInButton type="submit">회원가입</SignInButton>
                <HRComponent>
                    <hr className='left' />
                    <div>또는</div>
                    <hr className='right' />
                </HRComponent>
                <SignUpButton>로그인</SignUpButton>
            </LoginForm>
        </div>
    );
}

export default SignUpComponent;
