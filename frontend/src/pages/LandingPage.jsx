import { useNavigate } from 'react-router-dom';
import useAuthStore from '../store/useAuthStore';

const LandingPage = () => {
    const navigate = useNavigate();
    const { login } = useAuthStore();

    const handleKakaoLogin = () => {
        // 실제로는 카카오 인증 URL로 리다이렉트 해야 함
        // 여기서는 테스트를 위해 바로 로그인 처리 후 대시보드 이동
        login({ name: '고동현', email: 'test@example.com' });
        navigate('/dashboard');
    };

    return (
        <div className="landing-container">
            <header>
                <h1>PreView AI</h1>
            </header>
            <main style={{ textAlign: 'center', marginTop: '100px' }}>
                <h2>AI 면접관과 함께하는 실전 모의 면접</h2>
                <p>이력서 기반 맞춤형 질문으로 완벽한 면접 준비를 시작하세요.</p>

                <div className="login-card" style={{ marginTop: '50px', padding: '20px', border: '1px solid #ddd' }}>
                    <h3>3초 만에 시작하기</h3>
                    <button
                        onClick={handleKakaoLogin}
                        style={{ backgroundColor: '#FEE500', border: 'none', padding: '10px 20px', cursor: 'pointer' }}
                    >
                        카카오로 시작하기
                    </button>
                </div>
            </main>
        </div>
    );
};

export default LandingPage;