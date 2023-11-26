import { useState } from "react";
import './accordian.css';

export default function Accordian() {
    const [expand, setExpand] = useState(false);

    function toggleExpand() {
        console.log("previous State", expand);
        setExpand(!expand);
    }

    return (
        <div className="accordian">
            <button onClick={toggleExpand}> Accordian <span>{expand ? '-' : '+'}</span> </button>
            
            {expand && <div className="content"> this is a content </div>}
        </div>
    );
}