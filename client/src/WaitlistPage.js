import React from "react";
import Waitlist from "./Waitlist";

export default function WaitlistPage() {
  return (
    <div style={{ maxWidth: 500, margin: "40px auto", fontFamily: "sans-serif", background: "#fff", borderRadius: 8, boxShadow: "0 2px 8px #eee", padding: 32 }}>
      <h1 style={{ textAlign: "center" }}>서비스 대기자 신청</h1>
      <p style={{ textAlign: "center", color: "#666", marginBottom: 32 }}>
        100명 초과 시 자동으로 대기자 명단에 등록됩니다.<br/>
        서버 수용 인원이 늘어나면 순서대로 연락드려요!
      </p>
      <Waitlist />
    </div>
  );
} 