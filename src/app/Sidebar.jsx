// 📁 src/app/Sidebar.jsx
import './Sidebar.css';
import { useNavigate } from 'react-router-dom';

export default function Sidebar() {
  const navigate = useNavigate();
  return (
    <div className="sidebar">
      <div className="logo">StoryBegins</div>
      <div className="menu">
        <div onClick={() => navigate('/')}>🏠 홈</div>
        <div onClick={() => navigate('/works')}>📚 라이브러리</div>
        <div onClick={() => navigate('/archive')}>🗂 보관함</div>
        <div onClick={() => navigate('/account')}>👤 계정</div>
      </div>
    </div>
  );
}