import React from "react";
import { useNavigate } from "react-router-dom";
import "./MainHome.css";

export default function MainHome() {
  const navigate = useNavigate();
  return (
    <div className="mainhome-main-container">
      <h1 style={{ textAlign: "center" }}>AI 서비스 데모</h1>
      <p style={{ textAlign: "center", color: "#666", marginBottom: 32 }}>
        이 서비스는 AI 문장 검사와 대기자(Waitlist) 신청 기능을 제공합니다.<br/>
        AI 문장 검사로 문법 오류를 확인하고, 서버 수용 인원이 늘어나면 대기자 명단에 순서대로 연락드려요!
      </p>
      <div className="mainhome-btn-group">
        <button className="mainhome-btn" onClick={() => navigate("/aichecker")}>AI 문장 검사</button>
        <button className="mainhome-btn" onClick={() => navigate("/waitlist")}>Waitlist 신청</button>
      </div>
    </div>
  );
} 