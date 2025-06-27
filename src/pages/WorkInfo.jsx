// WorkInfo 페이지에서 URL 파라미터(ID)를 기반으로 작품 정보 로딩

// src/pages/WorkInfo.jsx
import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './WorkInfo.css';

function WorkInfo() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [work, setWork] = useState(null);

  useEffect(() => {
    const saved = localStorage.getItem('works');
    if (!saved) return;

    const data = JSON.parse(saved);
    const found = data.find((w) => w.id === Number(id)); // ✅ Number(id) 중요
    setWork(found);
  }, [id]);

  if (!work) return <div>존재하지 않는 작품입니다.</div>;

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-2">{work.title}</h2>
      <p className="text-gray-700">{work.description}</p>

      <button
        className="edit-script-btn"
        onClick={() => navigate(`/works/${id}/script`)}
      >
        ✍ 스크립트 작성하기
      </button>
    </div>
  );
}

export default WorkInfo;
