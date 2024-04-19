import React from "react";
import Navigation from "../../components/Navigation/Navigation";
import CategoriesCrousel from "../../components/CategoriesCrousel/CategoriesCrousel";
import compact from "../../images/files/compact/3.png";
import dslr from "../../images/files/dslr/1.png";
import filmCamera from "../../images/files/film camera/5.png";
import mirrorless from "../../images/files/mirrorless/1.png";
import proffesional from "../../images/files/professional/1.png";
import heroImage from "../../images/files/compact/1.png";
import "./Home.css";
import NewArrivalCard from "../../components/Card/NewArrivalCard/NewArrivalCard";
import Footer from "../../components/Footer/Footer";
const Home = () => {
  return (
    <div>
      <Navigation />

      <section className="categories-section">
        <CategoriesCrousel src={compact} text={"compact"} />
        <CategoriesCrousel src={dslr} text={"dslr"} />
        <CategoriesCrousel src={filmCamera} text={"filmCamera"} />
        <CategoriesCrousel src={mirrorless} text={"Mirrorless"} />
        <CategoriesCrousel src={proffesional} text={"proffesional"} />
      </section>

      <div className="hero-img">
        <img src={heroImage} alt=""/>
      </div>
      <section className="newarrival__section">
        <NewArrivalCard src={filmCamera} collectiontext={"Christmas Collection"} collectiondesc={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vitae ante purus."}/>
        <NewArrivalCard src={dslr} collectiontext={"Christmas Collection"} collectiondesc={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vitae ante purus."}/>
      </section>
      <Footer/>
    </div>
  );
};

export default Home;
