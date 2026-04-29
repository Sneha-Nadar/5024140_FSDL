import { useRef } from "react";

export default function FormPage() {
  const inputRef = useRef();

  return (
    <div>
      <h1>Form</h1>
      <input ref={inputRef} placeholder="Type..." />
      <button onClick={() => alert(inputRef.current.value)}>
        Submit
      </button>
    </div>
  );
}