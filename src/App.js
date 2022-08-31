import { useState } from "react";
import Publication from "./components/Publication"
import Search from "./components/Search"


function App() {
  const [inpFiltr, setInpFiltr] = useState("")

  return (
    <div className="App">
      <Search setInpFiltr={setInpFiltr} />
      <Publication inpFiltr={inpFiltr} />
    </div>
  );
}

export default App;
