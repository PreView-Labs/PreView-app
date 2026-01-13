import { useNavigate } from 'react-router-dom';

const ResultReport = () => {
    const navigate = useNavigate();

    // Mock Data: 나중에 백엔드 API에서 받아올 데이터 구조
    const resultData = {
        score: 85,
        grade: 'B+',
        summary: '기술적인 이해도는 높으나 두괄식 답변 연습이 필요합니다.',
        strengths: ['REST API 개념 이해', '프로젝트 경험 구체적'],
        weaknesses: ['답변이 장황함', 'CS 기초 용어 혼동'],
        details: [
            { q: 'Redis의 사용 목적은?', a: '캐싱을 위해...', feedback: '정확한 답변입니다.' },
            { q: '데이터 정합성 해결은?', a: '음... 잘 모르겠습니다.', feedback: '트랜잭션 격리 수준에 대한 학습이 필요합니다.' },
        ]
    };

    return (
        <div className="result-container" style={{ padding: '40px 20px', maxWidth: '800px', margin: '0 auto' }}>
            <header style={{ marginBottom: '30px', textAlign: 'center' }}>
                <h2 style={{ fontSize: '1.8rem' }}>면접 결과 분석</h2>
                <p style={{ color: '#666' }}>수고하셨습니다! AI 면접관의 분석 결과입니다.</p>
            </header>

            {/* 종합 점수 카드 */}
            <section style={{
                background: '#fff',
                border: '1px solid #ddd',
                borderRadius: '12px',
                padding: '30px',
                textAlign: 'center',
                marginBottom: '30px',
                boxShadow: '0 4px 15px rgba(0,0,0,0.05)'
            }}>
                <div style={{ fontSize: '1.2rem', color: '#666' }}>종합 점수</div>
                <div style={{ fontSize: '3rem', fontWeight: 'bold', color: '#007BFF', margin: '10px 0' }}>
                    {resultData.score}점 <span style={{ fontSize: '1.5rem', color: '#333' }}>({resultData.grade})</span>
                </div>
                <div style={{ fontSize: '1.1rem', fontWeight: '500' }}>"{resultData.summary}"</div>
            </section>

            {/* 강점 & 보완점 */}
            <div style={{ display: 'flex', gap: '20px', marginBottom: '30px' }}>
                <section style={{ flex: 1, background: '#e8f5e9', padding: '20px', borderRadius: '8px' }}>
                    <h3 style={{ color: '#2e7d32', marginBottom: '10px' }}>👍 강점</h3>
                    <ul style={{ paddingLeft: '20px' }}>
                        {resultData.strengths.map((text, idx) => <li key={idx}>{text}</li>)}
                    </ul>
                </section>
                <section style={{ flex: 1, background: '#fff3e0', padding: '20px', borderRadius: '8px' }}>
                    <h3 style={{ color: '#ef6c00', marginBottom: '10px' }}>⚡ 보완할 점</h3>
                    <ul style={{ paddingLeft: '20px' }}>
                        {resultData.weaknesses.map((text, idx) => <li key={idx}>{text}</li>)}
                    </ul>
                </section>
            </div>

            {/* 하단 버튼 */}
            <div style={{ textAlign: 'center' }}>
                <button
                    onClick={() => navigate('/dashboard')}
                    style={{
                        padding: '15px 40px',
                        fontSize: '1.1rem',
                        background: '#007BFF',
                        color: '#fff',
                        border: 'none',
                        borderRadius: '8px',
                        cursor: 'pointer'
                    }}
                >
                    대시보드로 돌아가기
                </button>
            </div>
        </div>
    );
};

export default ResultReport;