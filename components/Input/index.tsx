
import { useState } from 'react';

type InputProps = JSX.IntrinsicElements["input"] & {
  label: string
}

export const Input = (props: InputProps) => {
  const { label, ...rest } = props

  const [text, setText] = useState("")
  
}
