import React from 'react';

const Home = ({title="Welcome to the home section"})=>{
  return (
    <section className={"home"}>
      <h1>{title}</h1>
    </section>
  )
}

export default Home;