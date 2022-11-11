import React, { useEffect, useMemo, useRef, useState } from 'react';

const App = () => {

//   const [count, setCount] = useState(10);

//   const changeCount = (num) => {
//     setCount(prev => prev + num)

//   };

//   return (
//     <div>
//       <div>{count}</div>
//       <button onClick={() => changeCount(-1)}>감소</button>  {/* 데이터가 아닌 함수를 넣음 */}
//       <button onClick={() => changeCount(1)}>증가</button>
//     </div>
//   );
// };

  // const [count, setCount] = useState(0);

  // useEffect(() => {
  //   console.log("화면 로딩 완료");  // useEffect는 마지막에 실행된다.
  // }, [count])5
  // console.log("테스트1");

  // const randomNum = useMemo(() => Math.random(), [count]);
  // const randomNum = useMemo(() => Math.random(), [count]);
  // const randomNum = Math.random();  // 랜덤으로 발생

  // // 함수 만드는 방법 1.
  // const func = () => true;

  // // 함수 만드는 방법 2.
  // const func1 = () => {
  //   return true;
  // }

  const inputRef = useRef();

  return (
    // <div>
    //   <div>{randomNum}</div>
    //   <div>{count}</div>
    //   <button onClick={() => setCount((prev => prev + 1))}>증가</button>
    // </div>
    <div>
      <input ref={inputRef}/>
      {/* <button onClick={() => alert(inputRef.current.value)}>인풋 내용 체크</button> */}
      <button onClick={() => {
        alert(inputRef.current.value);
        inputRef.current.value = "";
        inputRef.current.fucus();
      }}>
      인풋 내용 체크
      </button>

    </div>
  );
};






// function App() {
//   return <div></div>;
// }

export default App;


// 같지만 미묘하게 다르다.
// 방법 1.
// const App = () => {
//   return <div></div>
// };

// 방법 2.
// function App() {
//   return <div></div>;
// }