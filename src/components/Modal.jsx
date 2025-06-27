// src/components/Modal.jsx
import './Modal.css';

export default function Modal({ visible, onClose, onSubmit }) {
  if (!visible) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    const title = e.target.title.value;
    const description = e.target.description.value;
    onSubmit({ title, description });
  };

  return (
    <div className="modal-overlay">
      <div className="modal-box">
        <h3>새 작품 만들기</h3>
        <form onSubmit={handleSubmit}>
          <input name="title" placeholder="작품 제목" required />
          <textarea name="description" placeholder="설명" rows="3" />
          <div className="modal-actions">
            <button type="submit">생성</button>
            <button type="button" onClick={onClose}>취소</button>
          </div>
        </form>
      </div>
    </div>
  );
}
