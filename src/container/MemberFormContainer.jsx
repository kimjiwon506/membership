import React from 'react';

function MemberFormContainer(props) {
    return (
        <>
            <form>
                <h3>
                    <label htmlFor="id">아이디</label>
                </h3>
                <input type="text" id='id' name='id' title='ID' maxLength={20} />
                <span id='idMsg'>5~20자의 영문 소문자, 숫자와 특수기호(_),(-)만 사용 가능합니다.</span>
            </form>
        </>
    );
}

export default MemberFormContainer;