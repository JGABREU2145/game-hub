import { useState } from "react";
import { Button, ButtonGroup } from "@chakra-ui/react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <ButtonGroup>
        <Button onClick={() => setCount(count + 1)}>Increment</Button>
        <Button onClick={() => setCount(count - 1)}>Decrement</Button>
      </ButtonGroup>
    </div>
  );
}

export default App;
