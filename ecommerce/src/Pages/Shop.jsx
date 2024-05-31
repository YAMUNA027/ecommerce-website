import React from "react";
import Hero from "../Components/Hero/Hero";
import Popular from "../Components/Popular/Popular";
import Offers from "../Components/Offers/Offers";
import NewCollections from "../Components/NewCollections/NewCollections";
import Footer from "../Components/Footer/Footer";
import Navbar from "../Components/Navbar/Navbar";

const Shop = () => {
    return (
        <div>
            <Navbar/>
            <Hero/>
            <Popular/>
            <Offers/>
            <NewCollections/>
            <Footer/>
        </div>
    )
}

export default Shop
