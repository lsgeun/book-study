import { useContext, useRef, useState } from 'react';
import '@/components/TodoEditor.css';
import { TodoDispatchContext } from '@/context/TodoDispatchContext';

const TodoEditor = () => {
  const { onCreate } = useContext(TodoDispatchContext);

  const [content, setContent] = useState('');
  const onChangeContent = e => {
    setContent(e.target.value);
  };

  const inputRef = useRef();
  const onClick = () => {
    if (!content) {
      inputRef.current.focus();
      return;
    }

    setContent('');
    onCreate(content);
  };

  const [isComposing, setIsComposing] = useState(false);
  const onKeyDown = e => {
    if (isComposing) {
      return;
    }

    if (e.key === 'Enter') {
      onClick();
    }
  };

  return (
    <div className='todo-editor'>
      <h4>새로운 Todo 작성하기 ✏️</h4>
      <div className='editor-wrapper'>
        <input
          ref={inputRef}
          value={content}
          onChange={onChangeContent}
          onKeyDown={onKeyDown}
          onCompositionStart={() => setIsComposing(true)}
          onCompositionEnd={() => setIsComposing(false)}
          placeholder='새로운 Todo...'
        />
        <button type='button' onClick={onClick}>
          추가
        </button>
      </div>
    </div>
  );
};

export default TodoEditor;
