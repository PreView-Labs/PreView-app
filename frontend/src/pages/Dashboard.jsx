import { useNavigate } from 'react-router-dom';
import useAuthStore from '../store/useAuthStore';

const Dashboard = () => {
    const { user } = useAuthStore();
    const navigate = useNavigate();

    // Mock Data: 지난 면접 기록
    const historyList = [
        { id: 1, date: '2025.12.01', job: 'Backend', score: 85 },
        { id: 2, date: '2025.11.20', job: 'Frontend', score: 72 },
    ];

    return (
        <div className="dashboard-container">
            <h2>안녕하세요, {user?.name || '지원자'}님!</h2>

            <div className="cta-section" style={{ margin: '40px 0', textAlign: 'center' }}>
                <button
                    onClick={() => navigate('/interview/setup')}
                    className="cta-button"
                >
                    + 새 면접 시작하기
                </button>
            </div>

            <section>
                <h3>지난 면접 기록</h3>
                <ul>
                    {historyList.map((item) => (
                        <li key={item.id}>
                            <div className="info">
                                <strong>[{item.job}] 모의 면접</strong>
                                <span>{item.date}</span>
                            </div>
                            <div className="score-box">
                                <span className="score">{item.score}점</span>
                                <button onClick={() => navigate(`/interview/result/${item.id}`)}>상세보기</button>
                            </div>
                        </li>
                    ))}
                </ul>
            </section>
        </div>
    );
};

export default Dashboard;