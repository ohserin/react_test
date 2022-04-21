import React from "react";
import Header from "../layout/Header";
import Contents from "../layout/Contents";
import Footer from "../layout/Footer";
import Title from "../layout/Title";
import Contact from "../layout/Contact";
import YoutubeCont from "../includes/YoutubeCont";
import Loading from "../basics/Loading";
import { gsap } from "gsap";

class Youtube extends React.Component {
state = {
    isLoading: true,
}

mainAnimation = () => {
    setTimeout(() => {
        gsap.to("#header", {
            duration: 0.8, 
            top: 0,
        });
        gsap.to("#footer", {
            duration: 0.8, 
            bottom: 0,
            delay: 0.2,
        });
        gsap.to(".youtube__inner", {
            duration: 0.7,
            y: 0,
            opacity: 1,
            delay: 1.0,
            ease: "power4.out"
        });
    }, 10)
}

getSite = () => {
    setTimeout(() => {
        console.log("두번째 시작")
        this.setState({isLoading: false});
        this.mainAnimation();
    }, 1600)
}

componentDidMount(){
    setTimeout(() => {
        document.getElementById("loading").classList.remove("loading__active");
        this.getSite();
    }, 2000);
}


render(){
    const {isLoading} = this.state;

    return (
        <>
            {isLoading ? (
                <Loading />
            ) : (
            <>
            <Header />
                <Contents>
                    <Title title={["Youtube","book"]} />
                    <YoutubeCont />
                    <Contact />
                </Contents>
            <Footer />
            </>
            )}
        </>
    )
}
}


export default Youtube;