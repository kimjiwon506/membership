import styled from '@emotion/styled'

export const FormWrapper = styled.field`
    padding: 0 10px;
`
export const FormLabel = styled.label`
    display: block;
    font-size: 20px;
    font-weight: 600;
`
export const FormInput = styled.input`
    display: block;
    width: 100%;
    border: none;
    border-bottom: 1px solid gray;

    &:disabled {
    }

    & + & {margin-top:10px;}
`
export const FormMessage = styled.span`
    display: block;
    margin-top:10px;
`