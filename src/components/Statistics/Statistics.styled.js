import styled from 'styled-components'

export const Wrapper = styled.section`
background-color:#f2f2f2;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

export const List = styled.ul`
display: flex;
flex-direction: row;
list-style: none;
`;

const getRandomColor = function () {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

export const ListItem = styled.li`
border: 1px solid black;
padding: 20px 20px;
background-color: ${getRandomColor};
`


export const Title = styled.h2`
text-transform: uppercase;
`

