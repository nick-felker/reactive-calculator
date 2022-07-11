import styled from "styled-components";
import {
    Button,

} from './../../ui';


interface Props{

}

function ButtonsField({}:Props){
    return(
        <>
            <ExternalWrapper>
                Buttons field
                <Button text="hey"/>
            </ExternalWrapper>
        </>
    )
}


const ExternalWrapper = styled.div`

`

export default ButtonsField;