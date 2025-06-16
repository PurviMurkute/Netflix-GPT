import React from "react";
import Header from "../components/Header";

const Home = () => {
  return (
    <div className="relative">
      <div
        className="min-h-screen min-w-screen bg-cover bg-center absolute inset-0"
        style={{
          backgroundImage:
            "url('https://cdn.mos.cms.futurecdn.net/rDJegQJaCyGaYysj2g5XWY.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>

            <Header />
      </div>
    </div>
  );
};

export default Home;
