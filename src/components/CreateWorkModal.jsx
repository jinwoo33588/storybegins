// ✅ CreateWorkModal.jsx: 작품 생성 모달 컴포넌트
import { useState } from 'react';
import './CreateWorkModal.css';

function CreateWorkModal({ isOpen, onClose, onCreate }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = () => {
    if (!title.trim()) return alert('제목을 입력하세요.');

    const newWork = {
      id: Date.now(),
      title,
      description,
    };

    onCreate(newWork); // WorkList에 전달
    setTitle('');
    setDescription('');
    onClose(); // 모달 닫기
  };

  if (!isOpen) return null;

  return (
    
      <div className="modal">
        <h3>새 작품 만들기</h3>
        <input
          type="text"
          placeholder="작품 제목"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="작품 설명"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
        <div className="modal-buttons">
          <button onClick={handleSubmit}>저장</button>
          <button onClick={onClose}>취소</button>
        </div>
      </div>
    
  );
}

export default CreateWorkModal;
