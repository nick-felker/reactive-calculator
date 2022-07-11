import styled from "styled-components";
import {
  ButtonsField,
  ResultBar,
  Header,
} from './components'


function App() {

  return(
    <>
      <ExternalWrapper>
          <Header/>
          <ResultBar/>
          <ButtonsField/>
      </ExternalWrapper>
    </>
  )
            
}

 
const ExternalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`


export default App;

