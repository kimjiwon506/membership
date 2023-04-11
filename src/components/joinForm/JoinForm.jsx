import React, { forwardRef, useState } from 'react';

import * as S from "./JoinForm.styled";

const defaultValue = {};
const JoinFormContext = React.createContext(defaultValue);

export function JoinForm({children, title, isInvalid, isRequired, isDisabled, className, ...props}) {
    const value = {isDisabled, isInvalid}

    return (
        <JoinFormContext.Provider value={value}>
            <S.FormWrapper className={className} {...props}>
                {children}
            </S.FormWrapper>
        </JoinFormContext.Provider>
    );
}

function Label({className, children, htmlFor, ...props }) {
    return (
        <S.FormLabel htmlFor={htmlFor} className={className} {...props}>{children}</S.FormLabel>
    )
}
function Input({ type, id, name, value, maxLength, className, children, htmlFor, ...props }) {
    return (
        <S.FormInput type={type} id={id} name={name} maxLength={maxLength} value={value} {...props} />
    )
}
function Message({id, children}){
    return (
        <S.FormMessage id={id}>{children}</S.FormMessage>
    )
}

JoinForm.Label = Label;
JoinForm.Input = Input;
JoinForm.Message = Message;