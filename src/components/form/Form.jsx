import React, { forwardRef } from 'react';

import * as S from "./Form.styled";

const FormContext = React.createContext();

const value = {}

export const Form = forwardRef(function Form(props){
    <FormContext.Provider value={value}>
        {props.children}
    </FormContext.Provider>
}) 

const Root = forwardRef(function Root(props,ref){
        return (
        <S.Root ref={ref} action={props.action}>
            {props.children}
        </S.Root>
    )
});

const Field = forwardRef(function Field(props, ref){
        return (
        <S.Field ref={ref}>{props.children}</S.Field>
    )
})

const Label = forwardRef(function Label(props, ref){
    return <S.Label ref={ref}  htmlFor={props.html}>{props.children}</S.Label>
})

const Control = forwardRef(function Control(props, ref){
    return <S.Control ref={ref} type={props.type} placeholder={props.placeholder} defaultValue={props.value || ''} onClick={props.onClick} readOnly={props.readOnly}  />
});

const Submit = function Submit(props){
    return <S.Submit onClick={props.onClick}>{props.children}</S.Submit>
}

const TextMessage = function TextMessage(props){
    return <S.TextMessage>{props.children}</S.TextMessage>
}

Form.Root = Root;
Form.Field = Field;
Form.Label = Label;
Form.Control = Control;
Form.TextMessage = TextMessage;
Form.Submit = Submit;