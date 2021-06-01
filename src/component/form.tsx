import { Lexer } from "@jlguenego/lexer";
import { useEffect, useState } from "react";

import {
  blank,
  keywords,
  operators,
  separators,
  identifier,
} from "../utils/rules";

const Form = () => {
  const [val, setVal] = useState("");
  const [valToken, setValToken] = useState({});

  const handleChange = (event: any) => {
    setVal(event.target.value);
  };

  const handleSubmit = (event: any) => {
    const rules = [blank, ...keywords, ...operators, ...separators, identifier];
    const tokenSequence = new Lexer(rules).tokenize(val);

    setValToken(tokenSequence);
    console.log("tokenSequence: ", valToken);
    event.preventDefault();
  };

  useEffect(() => {
    console.log(val);
  }, [val]);

  return (
    <>
      <form onSubmit={handleSubmit} className="form">
        <textarea value={val} onChange={handleChange}>
          Write a javascript code
        </textarea>
        <button type="submit">Show</button>
      </form>
      {valToken ? (
        <div className="tokenSequence">{JSON.stringify(valToken)}</div>
      ) : (
        ""
      )}
    </>
  );
};

export default Form;
