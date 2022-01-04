import React from "react";
const Home = props => {
  return (
    <>
      <main className="mainWrapper relative">
        {props.children}
      </main>
    </>
  );
};

export default Home;
