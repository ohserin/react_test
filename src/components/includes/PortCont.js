import React from "react";

function PortItem ({id, category, image, link, title}){
    return (
    <article className="port__item">
        <figure className="img">
            <a href={link}><img src={image}alt={`port0${id}`} /></a>
        </figure>
        <div className="text">
            <h3>{category}</h3>
        <p>{title}</p>
        </div>
    </article>
    )
}




function PortCont(props){
    return (
        <section className="port__cont">
            <div className="container">
                <div className="port__inner">
                    {props.port.map((port) => (
                        <PortItem
                        key={port.id}
                        id={port.id}
                        category={port.category}
                        image={port.image}
                        link={port.link}
                        title={port.title}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}
export default PortCont;