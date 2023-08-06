import { ChakraProvider } from '@chakra-ui/react'
import Example from './Example'
import MyModal from './Modal'

export default function App(){
  return (
    <ChakraProvider>
      <Example />
      <MyModal />
    </ChakraProvider>
  )
}