// ScriptEditor.jsx - 작품별 장면/대사 작성 페이지
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './ScriptEditor.css';

function ScriptEditor() {
  const { id } = useParams();
  const [scenes, setScenes] = useState([]);
  const [newLine, setNewLine] = useState('');

  useEffect(() => {
    const saved = localStorage.getItem(`script-${id}`);
    if (saved) setScenes(JSON.parse(saved));
  }, [id]);

  const handleAddLine = () => {
    if (!newLine.trim()) return;
    const updated = [...scenes, { id: Date.now(), text: newLine }];
    setScenes(updated);
    setNewLine('');
    localStorage.setItem(`script-${id}`, JSON.stringify(updated));
  };

  const handleDeleteLine = (lineId) => {
    const updated = scenes.filter((line) => line.id !== lineId);
    setScenes(updated);
    localStorage.setItem(`script-${id}`, JSON.stringify(updated));
  };
  console.log("ScriptEditor 진입", id);

  return (
    <div className="script-editor">
      <h2>📝 스크립트 작성 (작품 ID: {id})</h2>
      <p>스크립트 페이지 로딩됨 ✅</p>
      <div className="script-input">
        <textarea
          rows="3"
          placeholder="장면 또는 대사를 입력하세요"
          value={newLine}
          onChange={(e) => setNewLine(e.target.value)}
        />
        <button onClick={handleAddLine}>추가</button>
      </div>

      <ul className="script-list">
        {scenes.map((line) => (
          <li key={line.id}>
            <span>{line.text}</span>
            <button onClick={() => handleDeleteLine(line.id)}>삭제</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ScriptEditor;
