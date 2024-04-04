import { useState } from "react";

export function TextArea({ textAreaValue, handleTextChange }) {
  // const [textarea, setTextarea] = useState(
  //     "The content of a textarea goes in the value attribute"
  //   );

  //   const handleChange = (event) => {
  //     setTextarea(event.target.value)
  //   }

  return (
    <form>
      <textarea value={textAreaValue} onChange={handleTextChange} />
    </form>
  );
}
