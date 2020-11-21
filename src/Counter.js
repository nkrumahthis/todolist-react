import React, {useState} from 'react'

const Counter = () =>{
    const [rap, setRap] = useState(0)
    return(
        <div>
            <p>You rapped {rap} times </p>
            <button onClick={() => setRap(rap + 1)}>Click me</button>
        </div>
    )
}

export default Counter;