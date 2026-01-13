import { useNavigate } from 'react-router-dom';
import useAuthStore from '../../store/useAuthStore'; // 경로 주의

const Header = () => {
    const navigate = useNavigate();
    const { user, logout } = useAuthStore();

    const handleLogout = () => {
        logout();
        navigate('/');
    };

    return (
        <header style={{
            height: '60px',
            borderBottom: '1px solid #eee',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '0 20px',
            background: '#fff'
        }}>
            <h1
                onClick={() => navigate('/dashboard')}
                style={{ fontSize: '1.2rem', color: '#007BFF', cursor: 'pointer' }}
            >
                PreView AI
            </h1>

            <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                {user ? (
                    <>
                        <span style={{ fontSize: '0.9rem' }}>{user.name}님</span>
                        <button
                            onClick={handleLogout}
                            style={{ padding: '5px 10px', fontSize: '0.8rem', border: '1px solid #ddd', background: 'none', borderRadius: '4px' }}
                        >
                            로그아웃
                        </button>
                    </>
                ) : (
                    <button onClick={() => navigate('/')}>로그인</button>
                )}
            </div>
        </header>
    );
};

export default Header;