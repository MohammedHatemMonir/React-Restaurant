import { useSignal } from "@preact/signals-react";
import { useState } from "react";
import { Button, Container } from "react-bootstrap";

export default function SignalPrototype() {
  const [number, setNumber] = useState(1);

  const test = useSignal(1);

  return (
    <>
    <Container>
      <Button
      variant="primary"
      style={{backgroundColor: "blue", margin: "10px"}}
        onClick={() => {
          test.value++;
          setNumber(number + 1);
        }}
      >IncreaseSignal</Button>
      
      number: {test.value}
      </Container>    </>
  );
}
