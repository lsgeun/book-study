import '@/App.css';
import { Link, Route, Routes } from 'react-router-dom';
import Home from '@/pages/Home';
import New from '@/pages/New';
import Diary from '@/pages/Diary';
import Editor from '@/pages/Editor';
import { useReducer, useRef } from 'react';

function reducer(state, action) {
  switch (action.type) {
    case 'CREATE': {
      return [...state, action.data];
    }
    default: {
      return state;
    }
  }
}

function App() {
  const [data, dispatch] = useReducer(reducer, []);
  const idRef = useRef(0);

  const onCreate = (date, content, emotionId) => {
    dispatch({
      type: 'CREATE',
      data: {
        id: idRef.current,
        date: new Date(date).getTime(),
        content,
        emotionId,
      },
    });
    idRef.current += 1;
  };

  return (
    <>
      <div className='app'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/new' element={<New />} />
          <Route path='/diary/:id' element={<Diary />} />
          <Route path='/edit' element={<Editor />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
