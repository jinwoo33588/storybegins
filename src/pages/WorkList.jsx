import { useState, useEffect } from 'react';
import WorkCard from '../components/WorkCard';

function WorkList() {
  const [works, setWorks] = useState(() => {
    const saved = localStorage.getItem('works');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('works', JSON.stringify(works));
  }, [works]);
  
  const handleDelete = (id) => {
    const confirmed = confirm('정말 삭제하시겠습니까?');
    if (!confirmed) return;

    const updated = works.filter((w) => w.id !== id);
    setWorks(updated);
  };

  const handleEdit = (id) => {
    const target = works.find((w) => w.id === id);
    if (!target) return;

    const newTitle = window.prompt('새 제목을 입력하세요', target.title);
    const newDesc = window.prompt('새 설명을 입력하세요', target.description);

    if (newTitle === null || newTitle.trim() === '') return;

    const updated = works.map((w) =>
      w.id === id ? { ...w, title: newTitle, description: newDesc } : w
    );
    setWorks(updated);
  };

  return (
    <div>
      <h2>작품 목록</h2>
      {works.length === 0 && <p>작품이 없습니다. 상단에서 추가해보세요!</p>}
      <div className="work-card-grid">
        {works.map((w) => (
          <WorkCard
            id={w.id}
            title={w.title}
            description={w.description}
            onDelete={handleDelete}
            onEdit={handleEdit}
          />
        ))}
      </div>
    </div>
  );
}

export default WorkList;











// // src/pages/WorkList.jsx Dummy Work
// import WorkCard from '../components/WorkCard';

// const dummyWorks = [
//   { id: 1, title: '마왕의 비서', description: '이세계에서 펼쳐지는 판타지 이야기' },
//   { id: 2, title: '하루 1일', description: '시간을 되돌리는 능력을 가진 소녀의 이야기' },
//   { id: 3, title: '시간의 파편', description: '과거를 바꾸려는 이들의 이야기' },
// ];

// function WorkList() {
//   return (
//     <div>
//       <h2 className="text-2xl font-semibold mb-4">라이브러리</h2>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
//         {dummyWorks.map((work) => (
//           <WorkCard
//             key={work.id}
//             id={work.id}
//             title={work.title}
//             description={work.description}
//           />
//         ))}
//       </div>
//     </div>
//   );
// }

// export default WorkList;