// 📁 src/app/router.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Home from '../pages/Home';
import WorkList from '../pages/WorkList';
import WorkInfo from '../pages/WorkInfo';
import Archive from '../pages/Archive';
import Account from '../pages/Account';
import ScriptEditor from '../pages/ScriptEditor';
import WebtoonEditor from '../pages/WebtoonEditor';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="works" element={<WorkList />} />
          <Route path="works/:id" element={<WorkInfo />} />
          <Route path="archive" element={<Archive />} />
          <Route path="account" element={<Account />} />
          <Route path="works/:id/script" element={<ScriptEditor />} />
          <Route path="works/:id/layout" element={<WebtoonEditor />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
