import { createSignal } from "solid-js"

interface Props {
  count: number
}

export const Counter = (props:Props)=>{
  const [count, setCount] = createSignal(props.count)
  const handleClick = ()=>{
    setCount(count() + 1)
  }
  return <div onClick={handleClick}>{count()}</div>
}