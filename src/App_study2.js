import React, { useState } from "react";

const App = () => {
    // useState
    // useEffect
    // useMemo
    // useRef

    const [list, setList] = useState([0, 0, 0]);

    const changeList = (index) => {
        const tempList = [...list];
        tempList[index] = tempList[index] + 1;
        setList(tempList);
    };


    return (
        <div>
            <div>{list[0]}</div>
            <div>{list[1]}</div>
            <div>{list[2]}</div>
            <button onClick={() => changeList(0)}>0번 변경</button>
            <button onClick={() => changeList(1)}>1번 변경</button>
            <button onClick={() => changeList(2)}>2번 변경</button>
        </div>
    )
}

export default App;
