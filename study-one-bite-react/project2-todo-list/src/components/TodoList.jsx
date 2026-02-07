import { useState, useMemo, useContext } from 'react';
import TodoItem from '@/components/TodoItem';
import '@/components/TodoList.css';
import { TodoStateContext } from '@/context/TodoStateContext';

const TodoList = () => {
  const { todo } = useContext(TodoStateContext);

  const [search, setSearch] = useState('');
  const onChangeSearch = e => {
    setSearch(e.target.value);
  };

  const getSearchResult = () => {
    return search === ''
      ? todo
      : todo.filter(item =>
          item.content.toLowerCase().includes(search.toLowerCase()),
        );
  };

  const analyzeTodo = useMemo(() => {
    const totalCount = todo.length;
    const doneCount = todo.filter(item => item.isDone).length;
    const notDoneCount = totalCount - doneCount;

    return {
      totalCount,
      doneCount,
      notDoneCount,
    };
  }, [todo]);
  const { totalCount, doneCount, notDoneCount } = analyzeTodo;

  return (
    <div className='todo-list'>
      <h4>Todo List 🌱</h4>
      <div>
        <div>총 개수: {totalCount}</div>
        <div>완료된 할 일: {doneCount}</div>
        <div>아직 완료하지 못한 할 일: {notDoneCount}</div>
      </div>
      <input
        value={search}
        onChange={onChangeSearch}
        className='searchbar'
        placeholder='검색어를 입력하세요.'
      />
      <div className='list-wrapper'>
        {getSearchResult().map(item => (
          <TodoItem key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default TodoList;
