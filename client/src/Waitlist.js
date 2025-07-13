import React, { useState } from "react";
import "./Waitlist.css";

export default function Waitlist() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    if (!name.trim() || !email.trim()) {
      setError("이름과 이메일을 모두 입력해 주세요.");
      return;
    }
    try {
      const res = await fetch("http://localhost:3001/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email }),
      });
      if (res.ok) {
        setSubmitted(true);
      } else {
        const data = await res.json();
        setError(data.error || "신청 중 오류가 발생했습니다.");
      }
    } catch (e) {
      setError("서버와 통신 중 오류가 발생했습니다.");
    }
  };

  if (submitted) {
    return <div className="waitlist-success">신청이 완료되었습니다! 대기자 명단에 등록되었습니다.</div>;
  }

  return (
    <form onSubmit={handleSubmit} className="waitlist-container waitlist-form">
      <div className="waitlist-title">Waitlist 신청</div>
      <div className="waitlist-desc">
        이름과 이메일을 입력해 주세요.<br />
        100명 초과 시 자동으로 대기자 명단에 등록됩니다.
      </div>
      <input
        type="text"
        placeholder="이름"
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <input
        type="email"
        placeholder="이메일"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <button type="submit">신청</button>
      {error && <div className="waitlist-error">{error}</div>}
    </form>
  );
} 