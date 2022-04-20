import React from "react";
import Header from "../layout/Header";
import Contents from "../layout/Contents";
import Footer from "../layout/Footer";
import AboutCont from "../includes/AboutCont";
import Title from "../layout/Title";
import Contact from "../layout/Contact";

function About(){
    return (
        <>
            <Header color="light" />
            <Contents>
                <Title title={["About","me"]} color="light" />
                <AboutCont color="light" />
                <Contact />
            </Contents>
            <Footer color="light" />
        </>
    )
}

export default About;