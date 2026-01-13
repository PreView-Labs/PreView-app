import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import useInterviewStore from '../store/useInterviewStore';

const InterviewRoom = () => {
    const navigate = useNavigate();
    const { messages, addMessage, endInterview } = useInterviewStore();
    const [input, setInput] = useState('');
    const [isAiTyping, setIsAiTyping] = useState(false);
    const chatEndRef = useRef(null);

    // 자동 스크롤
    useEffect(() => {
        chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages, isAiTyping]);

    // 초기 AI 질문 로딩 (Mock)
    useEffect(() => {
        if (messages.length === 0) {
            setIsAiTyping(true);
            setTimeout(() => {
                addMessage({ id: 1, sender: 'ai', text: '안녕하세요. 제출하신 이력서를 보고 질문드립니다. 프로젝트에서 사용한 Redis의 주된 용도는 무엇이었나요?' });
                setIsAiTyping(false);
            }, 1500);
        }
    }, []);

    const handleSend = () => {
        if (!input.trim()) return;

        // 1. 사용자 메시지 추가
        addMessage({ id: Date.now(), sender: 'user', text: input });
        setInput('');
        setIsAiTyping(true);

        // 2. AI 응답 요청 (Mock Latency)
        setTimeout(() => {
            addMessage({ id: Date.now() + 1, sender: 'ai', text: '답변 감사합니다. 그렇다면 Redis 사용 시 데이터 정합성 문제는 어떻게 해결하셨나요?' });
            setIsAiTyping(false);
        }, 2000);
    };

    const handleFinish = () => {
        if (window.confirm('정말 종료하시겠습니까? 결과 분석이 시작됩니다.')) {
            endInterview();
            navigate(`/interview/result/temp-id`);
        }
    };

    return (
        <div className="chat-room">
            <header style={{ display: 'flex', justifyContent: 'space-between', padding: '10px', background: '#eee' }}>
                <span>AI 면접관 (압박형) - 진행 중</span>
                <button onClick={handleFinish} style={{ color: 'red' }}>면접 종료</button>
            </header>

            <div className="chat-log" style={{ height: '70vh', overflowY: 'auto', padding: '20px' }}>
                {messages.map((msg) => (
                    <div key={msg.id} style={{ textAlign: msg.sender === 'user' ? 'right' : 'left', margin: '10px 0' }}>
                        <div style={{
                            display: 'inline-block',
                            padding: '10px',
                            borderRadius: '10px',
                            background: msg.sender === 'user' ? '#007BFF' : '#E5E5EA',
                            color: msg.sender === 'user' ? '#fff' : '#000'
                        }}>
                            {msg.text}
                        </div>
                    </div>
                ))}
                {isAiTyping && <div style={{ color: '#aaa' }}>AI가 입력 중입니다...</div>}
                <div ref={chatEndRef} />
            </div>

            <div className="input-area" style={{ display: 'flex', padding: '10px' }}>
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                    style={{ flex: 1, padding: '10px' }}
                    placeholder="답변을 입력하세요..."
                />
                <button onClick={handleSend} style={{ marginLeft: '10px' }}>전송</button>
            </div>
        </div>
    );
};

export default InterviewRoom;