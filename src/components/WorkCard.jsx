import { useNavigate } from 'react-router-dom';
import './WorkCard.css';

function WorkCard({ id, title, description, onDelete, onEdit }) {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/works/${id}`);
  };

  return (
    <div onClick={handleCardClick} className="work-card">
      <div onClick={handleCardClick} className="work-card-content">
        <div className="thumbnail"></div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <div className="work-card-actions">
      <button onClick={(e) => { e.stopPropagation(); onEdit?.(id); }}>✏ 수정</button>
      <button onClick={(e) => { e.stopPropagation(); onDelete?.(id); }}>🗑 삭제</button>
      </div>
    </div>
  );
}

export default WorkCard;
