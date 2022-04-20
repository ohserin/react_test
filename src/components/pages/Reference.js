import React from "react";
import Header from "../layout/Header";
import Contents from "../layout/Contents";
import Footer from "../layout/Footer";
import Title from "../layout/Title";
import Contact from "../layout/Contact";
import ReferCont from "../includes/ReferCont";

function Reference(){
    return (
        <>
            <Header color="light" />
            <Contents>
                <Title title={["reference","book"]} color="light" />
                <ReferCont color="light" />
                <Contact />
            </Contents>
            <Footer color="light" />
        </>
    )
}

export default Reference;