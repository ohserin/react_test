import React from "react";
import Header from "../layout/Header";
import Contents from "../layout/Contents";
import Footer from "../layout/Footer";
import { gsap } from "gsap";

// function ReferDetail(props) {
//     console.log(props);
//     return (
//         <div>ReferDetail</div>
//     )
// }

class ReferDetail extends React.Component {
    componentDidMount() {
        const {location, history} = this.props;
        if(location.state === undefined) {
            history.push("/reference");
        }
        this.mainAnimation();
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
        }, 10)
    }


    render() {
        const {location} = this.props;
        console.log(location.state);

        if(location.state === undefined){
            return <div>잘못된 페이지 입니다.</div>
        } else {
            return (
                <>
                <Header color="light" />
                <Contents>
                    <section className="refer__cont">
                        <div className="container">
                            <div className="refer__inner">
                                <div className="refer__table">
                                 <h3>{location.state.title}</h3>
                                 <p>{location.state.desc}</p>
                                     <table className="table">
                                         <thead>
                                             <tbody>
                                                 <tr>
                                                     <th>특징</th>
                                                     <th>설명</th>
                                                 </tr>
                                             </tbody>
                                             <tr>
                                                 <td>요소</td>
                                                 <td>{location.state.element}</td>
                                             </tr>
                                             <tr>
                                                 <td>닫는 태그</td>
                                                 <td>{location.state.tag}</td>
                                             </tr>
                                             <tr>
                                                 <td>버전</td>
                                                 <td>{location.state.version}</td>
                                             </tr>
                                             <tr>
                                                 <td>시각적표현</td>
                                                 <td>{location.state.view}</td>
                                             </tr>
                                             <tr>
                                                 <td>사용성</td>
                                                 <td>{location.state.use}</td>
                                             </tr>
                                         </thead>
                                     </table>
                                 </div>
                                </div>
                            </div>
                    </section>
                </Contents>
                <Footer color="light" />
                </>
            )
        }
    }
}

export default ReferDetail;