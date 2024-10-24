import styled from "styled-components";

export const BannerContainer = styled.div`
    height: 23rem;
    display: flex;
    justify-content: center;
    margin-top: 10rem;
    `;

export const BannerTextContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    
    & h2{
        color: ${(props) => props.theme["primary-500"]};
        font-size: 3.5rem;
    }
`