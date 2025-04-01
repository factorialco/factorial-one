import { Button } from "@/components/Actions/Button"
import { Input } from "@/ui/input"
import { useState } from "react"

// Example component to show how to test with storybook
export const ExampleTest = () => {
  const [number1, setNumber1] = useState(0)
  const [number2, setNumber2] = useState(0)

  const [result, setResult] = useState(0)

  return (
    <div className="flex flex-col gap-2">
      <Input
        type="number"
        aria-label="Number 1"
        onChange={(e) => setNumber1(Number(e.target.value))}
      />
      <Input
        type="number"
        aria-label="Number 2"
        onChange={(e) => setNumber2(Number(e.target.value))}
      />
      <Button label="Click me" onClick={() => setResult(number1 + number2)} />
      <p>Result: {result}</p>
    </div>
  )
}
