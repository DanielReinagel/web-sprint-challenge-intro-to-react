// Write your Character component here
import styled from 'styled-components';

const BlueP = styled.p`
    color: yellow;
    text-shadow: 1px 1px 5px black;
    font-size: 2rem;
`;

function Character(props){
    console.log(props.character);
    return (
        <BlueP>{props.character.name}</BlueP>
    );
}

export default Character;