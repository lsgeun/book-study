import { useState, useEffect } from 'react';
import { emotionList, getFormattedDate } from '@/util';
import '@/pages/Editor.css';
import Button from '@/components/Button';
import { useNavigate } from 'react-router-dom';
import EmotionItem from '@/components/EmotionItem';

const Editor = ({ initData, onSubmit }) => {
  const [state, setState] = useState({
    date: getFormattedDate(new Date()),
    emotionId: 3,
    content: '',
  });

  useEffect(() => {
    if (initData) {
      setState({
        ...initData,
        date: getFormattedDate(new Date(parseInt(initData.date))),
      });
    }
  }, [initData]);

  const handleDateChange = e => {
    setState({
      ...state,
      date: e.target.value,
    });
  };

  const handleContentChange = e => {
    setState({
      ...state,
      content: e.target.value,
    });
  };

  const handleSubmit = () => {
    onSubmit(state);
  };

  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1);
  };

  const handleEmotionChange = emotionId => {
    setState({
      ...state,
      emotionId,
    });
  };

  return (
    <div className='editor'>
      <div className='editor-section'>
        <h4>오늘의 날짜</h4>
        <div className='input-wrapper'>
          <input type='date' value={state.date} onChange={handleDateChange} />
        </div>
      </div>
      <div className='editor-section'>
        <h4>오늘의 감정</h4>
        <div className='input-wrapper emotion-list-wrapper'>
          {emotionList.map(item => (
            <EmotionItem
              key={item.id}
              {...item}
              onClick={handleEmotionChange}
              isSelected={state.emotionId === item.id}
            />
          ))}
        </div>
      </div>
      <div className='editor-section'>
        <h4>오늘의 일기</h4>
        <div className='input-wrapper'>
          <textarea
            placeholder='오늘은 어땠나요?'
            value={state.content}
            onChange={handleContentChange}
          />
        </div>
      </div>
      <div className='editor-section bottom-section'>
        <Button text={'취소하기'} onClick={handleGoBack} />
        <Button text={'작성 완료'} type={'positive'} onClick={handleSubmit} />
      </div>
    </div>
  );
};

export default Editor;
