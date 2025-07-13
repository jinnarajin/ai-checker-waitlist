import React, { useState } from "react";
import "./AIChecker.css";

export default function AIChecker() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const handleCheck = async () => {
    setLoading(true);
    setResult("");
    try {
      const res = await fetch("http://localhost:3001/check", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text: input }),
      });
      const data = await res.json();
      setResult(data.result);
    } catch (e) {
      setResult("에러 발생: " + e.message);
    }
    setLoading(false);
  };

  return (
    <div className="aichecker-main-container">
      <h1 style={{ textAlign: "center" }}>ai-checker 한글 문장 검사</h1>
      <p style={{ textAlign: "center", color: "#666", marginBottom: 32 }}>
        문장을 입력하고 AI 체크 결과를 확인해보세요.<br/>
      </p>
      <div className="aichecker-flex">
        <div className="aichecker-left">
          <textarea
            className="aichecker-textarea"
            rows={4}
            value={input}
            onChange={e => setInput(e.target.value)}
            placeholder="여기에 한글 문장을 입력하세요"
          />
        </div>
        <div className="aichecker-result">
          <b>AI 체크 결과:</b>
          <div style={{ whiteSpace: 'pre-wrap' }}>{result}</div>
        </div>
      </div>
      <button
        className="aichecker-btn"
        onClick={handleCheck}
        disabled={loading || !input.trim()}
      >
        {loading ? "확인 중..." : "AI 체크"}
      </button>
    </div>
  );
} 