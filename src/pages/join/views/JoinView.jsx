import React, { useState } from 'react';
import { JoinForm } from 'components/joinForm/JoinForm';

function JoinView() {
    const [inputValue, setInputValue] = useState({email:'', name:''});

    const onChangeEmail = (e) => {
        setInputValue({...inputValue, email: e.target.value})
    }

    const onChangePassWord = (e) => {
        setInputValue({...inputValue, name: e.target.value})
    }

    return (
        <>
            <JoinForm>
                <JoinForm.Label>이메일 회원가입</JoinForm.Label>
                <fieldset className='joinFildset'>
                    <div style={{ marginBottom:'10px' }}>
                        <JoinForm.Input value={inputValue.email} placeholder="이메일주소" onChange={onChangeEmail} disabled />
                        <JoinForm.Message>정확한 이메일을 입력해주세요.</JoinForm.Message>
                    </div>
                    <div style={{ marginBottom:'10px' }}>
                        <JoinForm.Input value={inputValue.name} placeholder="이름" onChange={onChangePassWord} />
                        <JoinForm.Message>정확한 이메일을 입력해주세요.</JoinForm.Message>
                    </div>
                </fieldset>
            </JoinForm>
        </>
    );
}

export default JoinView;