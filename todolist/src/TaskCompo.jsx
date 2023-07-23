import React, { useState } from 'react'

function TaskCompo({children, maxchars}) {
    const [fullText, setFullText] = useState(false);
    const text = fullText ? children : children.substring(0, maxchars);

    if(children.lenght <= maxchars) return <div>{children}</div>;
    return <div style={{width: '400px', marginTop: '10em'}}>
        <hr/>
        {text}
     <button onClick={()=> setFullText((prevState)=> !prevState)}>{fullText ? "Show Less" : "See More"}</button>
    </div>;
}

export default TaskCompo