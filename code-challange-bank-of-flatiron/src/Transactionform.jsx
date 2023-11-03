import { Button, Input, SimpleGrid, VStack } from "@chakra-ui/react"


const Transactionform = () => {
  return (
    <VStack>
      <SimpleGrid>
        <Input/>
      </SimpleGrid>
      <Button>Add transaction</Button>
    </VStack>
  )
}

export default Transactionform