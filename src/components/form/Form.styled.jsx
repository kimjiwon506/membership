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
    cursor: ${(props) => props.readOnly && 'pointer'};
    border: none;
    padding: 5px;
    outline: none;
    border-bottom: 1px solid #ccc;
    margin-bottom: 5px;
    
    &::placeholder {
        color: #ccc;
    }
`
export const TextMessage = styled.p`
    font-size: 12px;
    color: #555;
`

export const Submit = styled.button`
    width: 100%;
    padding: 15px 24px;
    border-radius: 8px;
    font-size: 16px;
    background: orange;
    color: white;
`