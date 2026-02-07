import React from 'react';
import '@/components/EmotionItem.css';

const EmotionItem = ({ id, img, name, onClick, isSelected }) => {
  const handleOnClick = () => {
    onClick(id);
  };

  return (
    <div
      className={[
        'emotion-item',
        isSelected ? `emotion-item-on-${id}` : `emotion-item-off`,
      ].join(' ')}
      onClick={handleOnClick}
    >
      <img alt={`emotion${id}`} src={img} />
      <span>{name}</span>
    </div>
  );
};

export default EmotionItem;
