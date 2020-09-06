import React from 'react';
import stylesheet from "./home.css";

const Home = ({title="Zen Management", subtitle="Improve The Flow"})=>{
  return (
    <section className={"home"}>
      <div className="main_banner">
          <section className="banner_text">
              <h1 className={"main_banner_title"}>{title}</h1>
              <h3 className={"main_banner_subtitle"}>{subtitle}</h3>
          </section>
      </div>
    </section>
  )
}

export default Home;