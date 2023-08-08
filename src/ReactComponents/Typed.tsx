import Typed from 'react-typed';

export default function TypedText({ text }: { text: string }) {
  return(
    <Typed
      strings={[text]}
      typeSpeed={50}
      backSpeed={70}
      backDelay={1500}
      loop
    />
  )
}
