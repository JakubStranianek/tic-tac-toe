import { Routes, Route } from "react-router-dom";
import StartGame from "./pages/StartGame";
import Board from "./pages/Board";

function App() {
  return (
    <div className="font-outfit h-screen bg-myBlack flex items-center justify-center">                       
        <Routes>
          <Route path="/" element={<StartGame />}></Route>
          <Route path="/in-game" element={<Board />}></Route>
        </Routes>
    </div>
  );
}

export default App;
