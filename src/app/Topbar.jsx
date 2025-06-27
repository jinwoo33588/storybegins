// Topbar.jsx - CreateWorkModal 연동 추가
import { useState } from 'react';
import CreateWorkModal from '../components/CreateWorkModal.jsx';
import './Topbar.css';
import '../components/CreateWorkModal.css';


function Topbar() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCreateWork = (newWork) => {
    const saved = JSON.parse(localStorage.getItem('works')) || [];
    const updated = [...saved, newWork];
    localStorage.setItem('works', JSON.stringify(updated));
    setIsModalOpen(false);
    window.location.reload(); // 간단하게 갱신
  };

  return (
    <div className="topbar">
      <input
        type="text"
        placeholder="검색..."
        className="search-input"
      />
      <button className="create-btn" onClick={() => setIsModalOpen(true)}>
        + 새 작품 만들기
      </button>
      {isModalOpen && (
        <div className="modal-wrapper" onClick={() => setIsModalOpen(false)}>
          <div onClick={(e) => e.stopPropagation()}>
            <CreateWorkModal
              isOpen={isModalOpen}
              onClose={() => setIsModalOpen(false)}
              onCreate={handleCreateWork}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default Topbar;