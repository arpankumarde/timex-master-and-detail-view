import react, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Footer, Navbar } from "./components";
import { Home, Item, NoPage } from "./pages";


function App() {
  const [top, setTop] = useState(false);

  return (
    <BrowserRouter>
      <Navbar setTop={setTop} />
      <Routes>
        <Route path="/" element={<Home top={top} />} />
        <Route path="/item" element={<Home top={top} />} />
        <Route path="/items" element={<Home top={top} />} />
        <Route path="/item/:id" element={<Item />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
