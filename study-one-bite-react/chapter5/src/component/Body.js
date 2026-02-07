import { useRef, useState } from 'react';
import './Body.css';

// 내부 컴포넌트
function Viewer({ number }) {
  return <div>{number % 2 === 0 ? <h3>짝수</h3> : <h3>홀수</h3>}</div>;
}

function Body({ name, location, favorList = [], children }) {
  console.log('Update!');

  // 1. 정적 값 블록
  const numA = 1;
  const numB = 2;
  const strA = '안녕';
  const strB = '리액트';
  const boolA = true;
  const boolB = false;
  const objA = { a: 1, b: 2 };

  // 2. 카운터 상태 및 로직 블록
  const [count, setCount] = useState(0);
  function onIncrease() {
    setCount(count + 1);
  }

  // 3. 단일 입력 필드 상태 블록 (text)
  const [text, setText] = useState('');
  function handleOnChange(e) {
    console.log('수정값:', e.target.value);
    setText(e.target.value);
  }

  // 4. 날짜 입력 필드 상태 블록 (date)
  const [date, setDate] = useState('');
  function handleOnChange2(e) {
    console.log('수정값:', e.target.value);
    setDate(e.target.value);
  }

  // 5. 드롭다운/셀렉트 상태 블록 (option)
  const [option, setOption] = useState('');
  function handleOnChange3(e) {
    console.log('수정값:', e.target.value);
    setOption(e.target.value);
  }

  // 6. 텍스트 영역 상태 블록 (text2)
  const [text2, setText2] = useState('');
  function handleOnChange4(e) {
    console.log('수정값:', e.target.value);
    setText2(e.target.value);
  }

  // 7. 복합 폼 상태 및 공통 핸들러 블록
  const [state, setState] = useState({
    name: '',
    gender: '',
    birth: '',
    bio: '',
  });
  function handleOnChange5(e) {
    console.log('현재 수정 대상:', e.target.name);
    console.log('수정값:', e.target.value);
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  }

  const [number, setNumber] = useState(0);
  function onIncrease() {
    setNumber(number + 1);
  }
  function onDecrease() {
    setNumber(number - 1);
  }

  // 8. 기타/일반 이벤트 핸들러 블록
  function handleOnClick() {
    alert('버튼을 클릭하셨군요!');
  }
  function handleOnClick2(e) {
    console.log(e);
    console.log(e.target.name);
  }

  const [text3, setText3] = useState('');
  const textRef = useRef();
  const handleOnChang6 = e => {
    setText3(e.target.value);
  };
  const handleOnClick3 = () => {
    if (text.length < 5) {
      textRef.current.focus();
    } else {
      alert(text3);
      setText3('');
    }
  };

  return (
    <div className='body'>
      <h1>body</h1>
      <h2>{numA + numB}</h2>
      <h2>{strA + strB}</h2>
      <h2>{String(boolA || boolB)}</h2>
      <h2>objA.a: {objA.a}</h2>
      <h2>objA.b: {objA.b}</h2>
      <h2>props.name: {name}</h2>
      <h2>
        {name}(props.name)은 {location}(props.location)에 거주합니다.
      </h2>
      <br />
      <h2>{favorList.length}개의 음식을 좋아합니다.</h2>
      <h2>{children}</h2>
      <button onClick={handleOnClick}>클릭하세요.</button>
      <button name='A버튼' onClick={handleOnClick2}>
        A 버튼
      </button>
      <button name='B버튼' onClick={handleOnClick2}>
        B 버튼
      </button>
      <hr />
      <h2>{count}</h2>
      <button onClick={onIncrease}>+</button>
      <hr />
      <input value={text} onChange={handleOnChange} />
      <div>{text}</div>
      <hr />
      <input type='date' value={date} onChange={handleOnChange2} />
      <hr />
      <select value={option} onChange={handleOnChange3}>
        <option key={'1번'}>1번</option>
        <option key={'2번'}>2번</option>
        <option key={'3번'}>3번</option>
      </select>
      <hr />
      <textarea value={text2} onChange={handleOnChange4} />
      <hr />
      <div>
        <input
          name='name'
          value={state.name}
          onChange={handleOnChange5}
          placeholder='이름'
        />
      </div>
      <div>
        <select name='gender' value={state.gender} onChange={handleOnChange5}>
          <option key={''}></option>
          <option key={'남성'}>남성</option>
          <option key={'여성'}>여성</option>
        </select>
      </div>
      <div>
        <input
          name='birth'
          type='date'
          value={state.birth}
          onChange={handleOnChange5}
        />
      </div>
      <div>
        <textarea name='bio' value={state.bio} onChange={handleOnChange5} />
      </div>
      <hr />
      <h2>{number}</h2>
      <Viewer number={number} />

      <div>
        <button onClick={onDecrease}>-</button>
        <button onClick={onIncrease}>+</button>
      </div>
      <hr />
      <div>
        <input ref={textRef} value={text3} onChange={handleOnChang6} />
        <button onClick={handleOnClick3}>작성 완료</button>
      </div>
    </div>
  );
}

export default Body;
