import { Outlet } from 'react-router-dom';
import Header from './Header.jsx';

const Layout = () => {
    return (
        <div className="layout">
            <Header />
            <main style={{ minHeight: 'calc(100vh - 60px)', background: '#f5f5f5' }}>
                {/* Outlet 위치에 각 페이지 컴포넌트(Dashboard, InterviewRoom 등)가 렌더링 됩니다 */}
                <Outlet />
            </main>
        </div>
    );
};

export default Layout;