import "./App.css";
import Profile from "./components/Profile";
import Dialogs from "./components/Dialogs";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = (props) => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <div className="container">
          <div className="wrapper">
            <Sidebar />
            <Routes>
              <Route path="/dialogs" element={<Dialogs />} />
              <Route path="/profile" element={<Profile />} />s
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
