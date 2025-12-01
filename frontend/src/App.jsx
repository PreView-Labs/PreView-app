import { useEffect, useState } from 'react';

const App = () => {
    const [message, setMessage] = useState("백엔드 연결 대기 중...");

    useEffect(() => {
        // 도메인 없이 '/api/...'
        fetch('/api/hello')
            .then(response => response.text())
            .then(data => setMessage(data))
            .catch(error => {
                console.error('Error:', error);
                setMessage("백엔드 연결 실패 ㅠㅠ");
            });
    }, []);

    return (
        <>
            <h1>Side Project: AI Interviewer</h1>
            <div className="card">
                <h2>서버 응답 결과:</h2>
                <p style={{ color: 'blue', fontWeight: 'bold' }}>{message}</p>
            </div>
        </>
    );
};

export default App;