import { Container, Heading, VStack } from '@chakra-ui/react'
import Searchinput from './Searchinput'
import Transactionform from './Transactionform'
function App() {

  return (
    <Container>
      <VStack spacing={4} align='stretch'>

      <Heading> Bank of Flatiron</Heading>
        <Searchinput/>
        <Transactionform/>
        <div>table</div>

      </VStack>
      </Container>
  
    
  )

  
  }
    
     
export default App
