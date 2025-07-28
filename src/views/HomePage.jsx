import React from "react";
import NewsList from "../components/news/NewsList";
import CategoryNews from "../components/news/Category";

const HomePage = () => {
  return (
    <div className="home-page">
      {" "}
      {/* Anda bisa menambahkan kelas CSS Tailwind di sini nanti */}
      {/* Tambahkan elemen lain jika diperlukan, seperti judul halaman */}
      <div className="flex flex-col gap-10">
        <CategoryNews />
        <div className="flex flex-col">
          <h2 className="text-2xl font-bold text-center my-6">
            Berita Utama Terbaru
          </h2>
          <NewsList />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
