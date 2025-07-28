import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/layout/Header";
import HomePage from "./views/HomePage";
import "./App.css";

function App() {
  return (
    <Router>
      {/* Menggunakan kelas-kelas Tailwind untuk styling dasar body/container */}
      <div className="min-h-screen flex flex-col">
        <Header /> {/* Komponen Header kita */}
        <main className="flex-grow container mx-auto p-4">
          {" "}
          {/* Menggunakan Tailwind untuk padding dan centering */}
          <Routes>
            <Route path="/" element={<HomePage />} />
            {/* Rute-rute lain akan ditambahkan di sini nantinya */}
            {/* Contoh: <Route path="/article/:id" element={<ArticleDetailPage />} /> */}
            {/* Contoh: <Route path="/category/:name" element={<CategoryPage />} /> */}
          </Routes>
        </main>
        {/* Jika Anda punya komponen Footer, bisa diletakkan di sini */}
        {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;
