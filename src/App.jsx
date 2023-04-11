import { useState } from "react";
import Channel from "./components/Channel";
import Channels from "./components/Channels";
import Sidebar from "./components/Sidebar";
function App() {
  return (
    <>
      <Sidebar />
      <Channels />
      <Channel />
    </>
  );
}

export default App;
