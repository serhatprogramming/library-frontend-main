import { useState } from "react";
import { useMutation } from "@apollo/client";
import { ALL_AUTHORS, SET_BIRTH_YEAR } from "./queries";

const BirthForm = ({ authorNames }) => {
  const [name, setName] = useState(authorNames[0]);
  const [born, setBorn] = useState("");

  const [setBornYear] = useMutation(SET_BIRTH_YEAR, {
    refetchQueries: [{ query: ALL_AUTHORS }],
  });

  const submit = (event) => {
    event.preventDefault();
    setBornYear({ variables: { name, setBornTo: parseInt(born) } });
    setName(authorNames[0]);
    setBorn("");
  };

  return (
    <div>
      <h2>Set birthyear</h2>
      <form onSubmit={submit}>
        <select value={name} onChange={(event) => setName(event.target.value)}>
          {authorNames.map((a) => (
            <option key={a} value={a}>
              {a}
            </option>
          ))}
        </select>
        <div>
          born
          <input
            value={born}
            onChange={({ target }) => setBorn(target.value)}
          />
        </div>
        <button type="submit">update author</button>
      </form>
    </div>
  );
};

export default BirthForm;
