import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Screen from "./Components/Screen";
function App() {
  return (
    <Router>
      <Routes>
        <Route index element={<Screen />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
