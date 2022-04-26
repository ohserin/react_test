
import React from "react";
import Header from "../layout/Header";
import Contents from "../layout/Contents";
import Footer from "../layout/Footer";
import Title from "../layout/Title";
import Contact from "../layout/Contact";
import ScriptCont from "../includes/ScriptCont";
import Loading from "../basics/Loading";

import { gsap } from "gsap";
import axios from "axios";

class Script extends React.Component {
    state = {
        isLoading: true,
        ports: []
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
            gsap.to(".cont__title strong", {
                duration: 0.7,
                y: 0,
                opacity: 1,
                delay: 1.0,
                ease: "power4.out"
            });
            gsap.to(".cont__title em", {
                duration: 0.7,
                y: 0,
                opacity: 1,
                delay: 1.3,
                ease: "power4.out"
            });
            gsap.to(".script__inner", {
                duration: 0.7,
                y: 0,
                opacity: 1,
                delay: 1.5,
                ease: "power4.out"
            });
        }, 10)
    }
    
    getScripts = async () => {
        const lists = await axios.get("https://api.themoviedb.org/3/search/movie?api_key=a01a242dbe03135687e384cefe4bae93&query=bts");
        console.log(lists)
        this.setState({lists, isLoading: false});
        this.mainAnimation();
    }

    componentDidMount(){
        setTimeout(() => {
            document.getElementById("loading").classList.remove("loading__active");
            document.querySelector("body").style.background = "#F0EEEB";
            this.getScripts();
        }, 2000);
    }

    render(){
        const {isLoading, lists} = this.state;

        return (
            <>
                {isLoading ? (
                    <Loading color="light" />
                ) : (
                    <>
                       <>
                        <Header color="light" />
                        <Contents>
                            <Title title={["Script","book"]} color="light" />
                            <ScriptCont color = "light" lists={lists}/>
                            <Contact />
                        </Contents>
                        <Footer color="light" />
                        </>

                    </>
                )}
            </>
        )
    }
}







  


export default Script;