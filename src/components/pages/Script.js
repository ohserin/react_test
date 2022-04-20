
import React from "react";
import Header from "../layout/Header";
import Contents from "../layout/Contents";
import Footer from "../layout/Footer";
import Title from "../layout/Title";
import Contact from "../layout/Contact";
import ScriptCont from "../includes/ScriptCont";

function Script(){
    return (
        <>
            <Header color="light" />
            <Contents>
                <Title title={["Script","book"]} color="light" />
                <ScriptCont color="light" />
                <Contact />
            </Contents>
            <Footer color="light" />
        </>
    )
}

export default Script;