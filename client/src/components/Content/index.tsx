import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Profile from "./Profile";
import Discover from "./Discover";
import Messages from "./Messages";
import Settings from "./Settings";

const index = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/discover" element={<Discover />} />
      <Route path="/messages" element={<Messages />} />
      <Route path="/settings" element={<Settings />} />
    </Routes>
  );
};

export default index;
