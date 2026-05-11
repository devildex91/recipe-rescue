import { useState } from "react";
import "./index.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import MainSection from "./components/MainSection";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div id="gridContainer">
      <Navbar />
      <Header />
      <MainSection />
      <Footer />
    </div>
  );
}
