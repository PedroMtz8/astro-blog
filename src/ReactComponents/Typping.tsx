import { Typewriter, Cursor  } from 'react-simple-typewriter'

export default function TypeAnimationText({ text }: { text: string }) {
  return(
    <>
      <Typewriter words={[text]} typeSpeed={50} delaySpeed={1500} deleteSpeed={80} loop />
      <Cursor cursorColor='#4FD1C5' />
    </>
  )
}
