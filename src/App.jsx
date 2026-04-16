import { Route, Routes } from "react-router";
import Explore from "./pages/Explore";
import Home from "./pages/Home";
import Profile from "./pages/Profile";

function App() {
  return(
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  )
}
export default App;