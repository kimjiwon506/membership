import styled from '@emotion/styled'

export const Root = styled.form`
    padding: 0 10px;
`
export const Field = styled.fieldset`
    margin: 10px 0;
`
export const Label = styled.label`
    display: block;
    margin-bottom: 10px;
`
export const Control = styled.input`
    width: ${(props) => props.type === ("text" || "textarea") && "100%" };
    border: none;
    padding: 5px;
    outline: none;
    border-bottom: 1px solid #ccc;
    margin-bottom: 5px;
`
export const TextMessage = styled.p``

export const Submit = styled.button`
    width: 100%;
`