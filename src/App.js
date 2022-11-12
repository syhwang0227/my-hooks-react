import React, { useState } from "react";
import Child1 from "./components/Child1";
import Child2 from "./components/Child2";

const App = () => {
    const [todoList, setTodoList] = useState([]);

    const addTodo = (todo) => {
        const tempTodoList = [...todoList];
        tempTodoList.push(todo);
        setTodoList(tempTodoList);
        // setCount((prev) => prev + 1);
    };

    const deleteTodo = (index) => {
        const tempTodoList = [...todoList];
        tempTodoList.splice(index, 1);
        setTodoList(tempTodoList)
    };

    return (
        <div>
            <h1>부모</h1>
            {/* <button onClick={() => setCount((prev) => prev + 1)}>증가</button> */}
            <hr />
            <Child1 data={todoList} setData={addTodo} />
            <Child2 data={todoList} deleteData={deleteTodo}/>
            {/* <button onClick={onReset}>삭제</button> */}
        </div>
    );
};

export default App;
