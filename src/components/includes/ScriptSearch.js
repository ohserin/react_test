import React, {useRef} from 'react'  //rfec

function ScriptSearch({ onSearch }) {
    const inputRef = useRef()

    const handelSearch = () => {
        const value = inputRef.current.value;
        onSearch(value)
      
    }


    const onClick = () => {
        handelSearch();
    }

    const onKeyPress = (event) => {
        if(event.key === "Enter"){
            handelSearch();
        }
     }
 
 
 
    return (
    <div className='script__search container'>
        <h2>검색하기</h2>
        <input
        ref={inputRef}
        type="search"
         placeholder='검색하세요!'
        onKeyPress={onKeyPress} 
        />

        <button type='submit' 
        onClick={onClick}>검색</button>
    </div>
  )
}

export default ScriptSearch