import React from "react";
import Header from "../layout/Header";
import Contents from "../layout/Contents";
import Footer from "../layout/Footer";
import ContactCont from "../includes/ContactCont";


function Contact(){
    return (
        <>
            <Header />
            <Contents>
                <ContactCont />
            </Contents>
            <Footer />
        </>
    )
}

export default Contact;