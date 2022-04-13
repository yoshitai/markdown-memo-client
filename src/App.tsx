import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import { NotFound } from './NotFound';
import { Home } from './components/pages/Home';
import { NewMarkdown } from './components/pages/NewMarkdown';
import { MemoManagement } from './components/pages/MemoManagement';
import { EditMarkdown } from './components/pages/EditMarkdown';

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/home" element={<Home />}>
          <Route path='list' element={<MemoManagement/>} />
          <Route path="new" element={<NewMarkdown />} />
          <Route path=":memo_title" element={<EditMarkdown />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

const About = () => {
  return (
    <>
      <Link to="/home">ホーム画面</Link>
    </>
  );
};

export default App;
