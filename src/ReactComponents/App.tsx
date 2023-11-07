import { ChakraProvider } from '@chakra-ui/react'
import Example from './Example'
import MyModal from './Modal'
import { useState, useEffect } from 'react'

export default function App(){
  const [mounted, setMounted] = useState(false);
  console.log('mounted', mounted);
  useEffect(() => {
    setMounted(true);
  }, [])

  if (!mounted) return null

  return (
    <ChakraProvider>
      <Example />
      <MyModal />
    </ChakraProvider>
  )
}