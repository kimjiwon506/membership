import React, { forwardRef } from 'react';

import * as S from "./Form.styled";

const FormContext = React.createContext();

const value = {}

export const Form = forwardRef(function Form(props){
    <FormContext.Provider value={value}>
        {props.children}
    </FormContext.Provider>
}) 

const Root = forwardRef(function Root(props){
        return (
        <S.Root ref={props.ref} action=''>
            {props.children}
        </S.Root>
    )
});

const Field = forwardRef(function Field(props){
        return (
        <fieldset>{props.children}</fieldset>
    )
})

const Label = forwardRef(function Label(props){
    return <label htmlFor="">{props.children}</label>
})

const Control = forwardRef(function Control(props){
    return <input ref={props.ref} type={props.type} placeholder={props.placeholder} />
});

const TextMessage = function TextMessage(props){
    return <p>{props.children}</p>
}

Form.Root = Root;
Form.Field = Field;
Form.Label = Label;
Form.Control = Control;
Form.TextMessage = TextMessage;