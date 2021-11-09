import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import About from "../Components/About";
import Services from "../Components/Services";
import Contact from "../Components/Contact";
import Faq from "../Components/Faq";

function Homepage () {
    return (
        <body>
            <Header></Header>
            <About></About>
            <Services></Services>
            <Contact></Contact>
            <Faq></Faq>
            <Footer></Footer>
        </body>
    )
};

export default Homepage;