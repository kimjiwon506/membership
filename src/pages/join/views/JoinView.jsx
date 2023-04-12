import React from 'react';
import { Form } from 'components/form/Form';
import Modal from 'components/modal/Modal';

import DaumPostcode from 'react-daum-postcode';

import * as S from "./JoinView.styled";


function JoinView() {
    const onCompletePost = () => {}
    const isOpenModal = () => {}
    return (
        <S.Wrapper>
            <Form.Root action="">
                <h3>이메일 회원가입</h3>
                <Form.Field>
                    <S.Box>
                        <Form.Control type="text" placeholder="이메일주소"></Form.Control>
                        <Form.TextMessage>이메일을 정확하게 입력해주세요</Form.TextMessage>
                    </S.Box>
                    <S.Box>
                        <Form.Control type="text" placeholder="이름"></Form.Control>
                        <Form.TextMessage>이름을 정확하게 입력해주세요</Form.TextMessage>
                    </S.Box>
                    <S.Box>
                        <Form.Control type="text" placeholder="비밀번호(8-16자리 영문,숫자,특수문자 조합)"></Form.Control>
                        <Form.TextMessage>비밀번호를 정확하게 입력해주세요</Form.TextMessage>
                    </S.Box>
                    <S.Box>
                        <Form.Control type="text" placeholder="비밀번호 확인"></Form.Control>
                        <Form.TextMessage>비밀번호가 다릅니다</Form.TextMessage>
                    </S.Box>
                    <S.Box>
                        <Modal>
                            <Modal.Portal>
                            <Form.Control type="text" placeholder="주소찾기" onClick={isOpenModal} readOnly="readOnly" />
                                <Modal.Item>
                                <DaumPostcode
                                    onComplete={onCompletePost}
                                ></DaumPostcode>
                                </Modal.Item>
                            </Modal.Portal>
                        </Modal>
                        <Form.Control type="text" placeholder="상세주소"></Form.Control>
                    </S.Box>
                    <S.Space />
                    <Form.Submit>회원가입</Form.Submit>
                </Form.Field>
            </Form.Root>
        </S.Wrapper>
    );
}

export default JoinView;