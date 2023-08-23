import styled from 'styled-components'

export const FriendItem = styled.li`
width: 300px;
list-style: none;

display: flex;
flex-direction:row;
align-items: center;
gap: 20px;
padding: 30px 10px;
margin-bottom: 20px;

border: 1px solid gray;
box-shadow: 0px 1px 6px rgba(46, 47, 66, 0.08), 0px 1px 1px rgba(46, 47, 66, 0.16), 0px 2px 1px rgba(46, 47, 66, 0.08);
`

export const FriendsList = styled.ul`
display: flex;
flex-direction:column;
align-items: center;
justify-content: center;
`

const statusColor = ({online}) =>{
    return online ? "green" : "red"
}


export const Status = styled.span`
width: 20px;
height: 20px;
border-radius: 50%;
background-color: ${statusColor}
`


