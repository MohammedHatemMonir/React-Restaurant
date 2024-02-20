import { useSignal } from "@preact/signals-react";
import { useState } from "react";

export default function SignalPrototype() {
  const [number, setNumber] = useState(1);

  const test = useSignal(1);

  return (
    <>
      <button
        onClick={() => {
          test.value++;
          setNumber(number + 1);
        }}
      ></button>
      {test.value}
      number: {number}
    </>
  );
}
