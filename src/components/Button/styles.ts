//documento de estilização do botão
import styled from 'styled-components'

interface ButtonContainerProps {
    variant: string
}

export const ButtonContainer = styled.button <ButtonContainerProps>`
    background-color: ${(props) => props.theme[props.variant]};
    color: black;
    padding: 2px 6px 2px 6px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 14px;
    margin: 4px 2px;
    cursor: pointer;
    border-radius: 4px;
    border-color: white;
    border: 0.1px solid;
    outline: none;
    
`