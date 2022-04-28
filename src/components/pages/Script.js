import React, { useEffect, useState } from "react";
import Header from "../layout/Header";
import Contents from "../layout/Contents";
import Footer from "../layout/Footer";
import Title from "../layout/Title";
import Contact from "../layout/Contact";
import ScriptList from "../includes/ScriptList";
import ScriptSearch from "../includes/ScriptSearch";

import Loading from "../basics/Loading";
import { gsap } from "gsap";
import YoutubeSearch from "../includes/YoutubeSearch";

   const mainAnimation = () => {
    document.getElementById("loading").classList.remove("loading__active");
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

    function Script(){
        const [videos, setVideos] = useState([]);

        const search = (query)=> {
            var requestOptions = {
                method: 'GET',
                redirect: 'follow'
              };
              
              fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_MOVIE}&query=${query}`, requestOptions)
                .then(response => response.json())
                .then(result => setVideos(result.items))
                .catch(error => console.log('error', error));
        }

        useEffect(() => {
            var requestOptions = {
                method: 'GET',
                redirect: 'follow'
              };
              
              fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_MOVIE}&query=bts`, requestOptions)
                .then(response => response.json())
                .then(result => {
                    console.log(result)
                    setVideos(result.results);
                    mainAnimation();
                })
                .catch(error => console.log('error', error));
        }, []);
        

        return (

            <>
                    {/* <Loading color="light" /> */}
                        <Header />
                        <Contents>
                            <Title title={["Script","book"]}/>
                            <section className="script__cont">
                            <div className="container">
                                <div className="script__inner">
                                    <ScriptSearch onSearch={search} />
                                    <ScriptList videos={videos} />
                                    </div>
                                    </div>
                                    </section>
                            <Contact />
                        </Contents>
                        <Footer />
                        </>
        )
    }








  


export default Script;