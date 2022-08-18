import { useState } from "react";
import NoteContext from "./context";
const NoteState = ({ children }) => {
  const [search, setSearch] = useState("");
  const [show, setShow] = useState(false);
  const [query, setQuery] = useState("");
  return (
    <NoteContext.Provider
      value={{
        search,
        setSearch,
        show,
        setShow,
        query,
        setQuery,
      }}
    >
      {children}
    </NoteContext.Provider>
  );
};
export default NoteState;
