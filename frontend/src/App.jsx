import { Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Dashboard from './pages/Dashboard';
import InterviewSetup from './pages/InterviewSetup';
import InterviewRoom from './pages/InterviewRoom';
import ResultReport from './pages/ResultReport';
import Layout from './components/common/Layout'; // 헤더 등을 포함한 레이아웃

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<LandingPage />} />
            {/* 로그인 후 접근 가능한 페이지들 (Layout 적용) */}
            <Route element={<Layout />}>
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/interview/setup" element={<InterviewSetup />} />
                <Route path="/interview/room/:id" element={<InterviewRoom />} />
                <Route path="/interview/result/:id" element={<ResultReport />} />
            </Route>
        </Routes>
    );
};

export default App;