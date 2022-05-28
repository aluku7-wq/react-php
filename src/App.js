/** @format */

import "./App.css";
import AddUser from "./components/AddUser";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ViewUsers from "./components/ViewUsers";
import ViewById from "./components/ViewById";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ViewUsers />} />
        <Route path="/adduser" element={<AddUser />} />
        <Route path="/users/:id" element={<ViewById />} />
      </Routes>
    </Router>
  );
}

export default App;
