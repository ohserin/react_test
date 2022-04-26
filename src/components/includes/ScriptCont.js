import React from 'react';
import ScriptList from '../includes/ScriptList';

function ScriptCont(props) {

  return (
    <section className={`script__cont ${props.color}`}>
      <div className="container">
        <div className="script__inner">
        <ScriptList items={props.lists}  />
        
          {/* <div className="script">
            <figure>
              <img src="img/script01.png" alt="이미지1" />
              {<img src="img/script02.png" alt="이미지2" />}
            </figure>
            <div className="num">
              <span className="active">1</span>
              <span>2</span>
              <span>3</span>
              <span>4</span>
              <span>5</span>
              <span>6</span>
              <span>7</span>
              <span>8</span>
            </div>
            <div className="desc">
              <h2>animationRequestFrame</h2>
              <p>레이아웃은 사이트를 만드는데 가장 기본적이 요소입니다. 레이아웃만 제대로 만들 수 있다면 사이트의 제작에 50%는 끝나다고 보셔도 됩니다. 그만큼 레이아웃 제작은 상당히 중요합니다. 사이트의 제작에 50%는 끝나다고 보셔도 됩니다. 그만큼 레이아웃 제작은 상당히 중요합니다.</p>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  )
}

export default ScriptCont