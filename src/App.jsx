import { useState } from "react";
import Container from "./components";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Raffer from "./components/Raffer";

export default function App() {
  
  return (
    <div className="font-poppins text-white select-none">
      <Header />
      <Container>
        <Raffer />
      </Container>
      <Footer />
    </div>
  )
}