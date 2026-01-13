import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useInterviewStore from '../store/useInterviewStore';
// import api from '../api/axios'; // 실제 API 연동 시 사용

const InterviewSetup = () => {
    const navigate = useNavigate();
    const { startInterview } = useInterviewStore();

    const [job, setJob] = useState('Backend');
    const [persona, setPersona] = useState('kind');
    const [resume, setResume] = useState(null);

    const handleStart = async () => {
        if (!resume) {
            alert('이력서를 업로드해주세요!');
            return;
        }

        // 1. 서버에 설정 정보 및 파일 전송 (FormData)
        // const formData = new FormData();
        // formData.append('file', resume);
        // formData.append('job', job);
        // const res = await api.post('/interviews', formData);

        // 2. 면접 시작 상태로 변경 후 이동
        startInterview(Date.now()); // 임시 ID
        navigate(`/interview/room/${Date.now()}`);
    };

    return (
        <div className="setup-container">
            <h2>면접 설정</h2>

            <div className="form-group">
                <label>이력서 업로드 (PDF)</label>
                <input type="file" accept=".pdf" onChange={(e) => setResume(e.target.files[0])} />
            </div>

            <div className="form-group">
                <label>지원 직무</label>
                <div>
                    {['Backend', 'Frontend', 'AI'].map(role => (
                        <button
                            key={role}
                            onClick={() => setJob(role)}
                            style={{ background: job === role ? '#ddd' : '#fff' }}
                        >
                            {role}
                        </button>
                    ))}
                </div>
            </div>

            <div className="form-group">
                <label>면접관 페르소나</label>
                <label><input type="radio" name="persona" value="kind" checked={persona === 'kind'} onChange={() => setPersona('kind')} /> 친절한</label>
                <label><input type="radio" name="persona" value="hard" checked={persona === 'hard'} onChange={() => setPersona('hard')} /> 압박(Hard)</label>
            </div>

            <button onClick={handleStart} style={{ marginTop: '20px', width: '100%', padding: '10px' }}>면접 시작하기</button>
        </div>
    );
};

export default InterviewSetup;