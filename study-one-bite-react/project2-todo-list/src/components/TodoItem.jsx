import React, { useContext } from 'react';
import '@/components/TodoItem.css';
import { TodoDispatchContext } from '@/context/TodoDispatchContext';

const TodoItem = ({ id, content, isDone, createdDate }) => {
  console.log(`${id} TodoItem 업데이트`);
  const { onUpdate, onDelete } = useContext(TodoDispatchContext);
  const onChangeCheckbox = () => {
    onUpdate(id);
  };

  const onClickDelete = () => {
    onDelete(id);
  };

  return (
    <div className='todo-item'>
      <div className='checkbox-col'>
        <input onChange={onChangeCheckbox} checked={isDone} type='checkbox' />
      </div>
      <div className='title-col'>{content}</div>
      <div className='date-col'>
        {new Date(createdDate).toLocaleDateString()}
      </div>
      <div className='btn-col'>
        <button onClick={onClickDelete}>삭제</button>
      </div>
    </div>
  );
};

export default React.memo(TodoItem);
