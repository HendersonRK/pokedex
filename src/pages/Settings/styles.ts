import styled from "styled-components";

export const SettingsContainer = styled.div`
    height: 37.5rem;
    display: flex;
    justify-content: center;
`

export const SettingsTextContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    
    & h2{
        color: ${(props) => props.theme["primary-500"]};
        font-size: 3.5rem;
    }
`