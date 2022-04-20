import React from "react";
import Header from "../layout/Header";
import Contents from "../layout/Contents";
import Footer from "../layout/Footer";
import Title from "../layout/Title";
import Contact from "../layout/Contact";
import YoutubeCont from "../includes/YoutubeCont";

function Youtube(){
    return (
        <>
            <Header />
            <Contents>
                <Title title={["Youtube","book"]} />
                <YoutubeCont />
                <Contact />
            </Contents>
            <Footer />
        </>
    )
}

export default Youtube;