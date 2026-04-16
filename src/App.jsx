import { Route, Routes } from "react-router";
import Explore from "./pages/Explore";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import MainLayout from "./layouts/MainLayout";

function App() {
  return(
    
      <MainLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
      </MainLayout>
  
  )
}
export default App;