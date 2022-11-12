// import React, { useRef } from 'react'
// import { Button, Form, InputGroup } from 'react-bootstrap';

// const Child1 = ({ data, setData}) => {
//   const todoRef = useRef();

//   const insertTodo = () => {
//     const value = todoRef.current.value;
//     if (value == "") {
//       alert("할 일을 입력해주세요.");
//       return;
//     };

//     if (data.includes(value)) {
//       alert("이미 등록한 할 일 입니다.");
//       todoRef.current.value = "";
//       todoRef.current.focus();
//       return;
//     };

//     setData(value);
//     todoRef.current.value = "";
//     todoRef.curent.focus();
//   };

//   const keyInsert = (event) => {
//     // console.log(event)
//     if (event.keyCode === 13) {
//       insertTodo();
//     };
//   };

//   return (
//     <div>
//       <h1>자식1</h1>
//       <InputGroup className="mb-3" style={{ width: "300px" }}>
//         <Form.Control
//         ref={todoRef}
//         laceholder="할 일을 입력하세요."
//         aria-label="Recipient's username"
//         aria-describedby="basic-addon2"
//         onKeyUp={keyInsert}
//         />
//         <Button
//         variant="outline-secondary"
//         id="button-addon2"
//         onClick={insertTodo}
//         >
//           Button
//         </Button>
//       </InputGroup>
//     </div>  
//   );
// };

// export default Child1

import React, { useRef } from "react";
import { Button, Form, InputGroup } from "react-bootstrap";

const Child1 = ({ data, setData }) => {
  const todoRef = useRef();

  const insertTodo = () => {
    const value = todoRef.current.value;
    if (value == "") {
      alert("할일을 입력해주세요.");
      return;
    }

    if (data.includes(value)) {
      alert("이미 등록한 할일입니다.");
      todoRef.current.value = "";
      todoRef.current.focus();
      return;
    }

    setData(value);
    todoRef.current.value = "";
    todoRef.current.focus();
  };

  const keyInsert = (event) => {
    if (event.keyCode === 13) {
      insertTodo();
    }
  };

  return (
    <div>
      <h1>자식1</h1>
      <InputGroup className="mb-3" style={{ width: "300px" }}>
        <Form.Control
          ref={todoRef}
          placeholder="할일을 입력하세요."
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
          onKeyUp={keyInsert}
        />
        <Button
          variant="outline-secondary"
          id="button-addon2"
          onClick={insertTodo}
        >
          Button
        </Button>
      </InputGroup>
    </div>
  );
};
export default Child1;