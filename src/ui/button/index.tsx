import styled from "styled-components";



interface Props{
    text: string;
}

function Button({text}:Props){
    return (
        <>
            <ExternalWrapper>
                {text}
            </ExternalWrapper>



        </>
    )
}

const ExternalWrapper = styled.button`
    cursor: pointer;

`

export default Button;