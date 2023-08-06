import { ChakraProvider as Provider, extendTheme } from '@chakra-ui/react'


const theme = extendTheme({
  colors: {
    purple: {
      '100': '#BE2AED',
      '200': '#6100FF'
    }
  }
})

export default function ChakraProvider({children}: any) {
  return (
    <Provider>{children}</Provider>
  )
}