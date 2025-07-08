// server.js
const express = require('express');
const cors = require('cors');
const app = express();
const port = 3001;
app.use(cors());
app.use(express.json());

// 메모리 waitlist (실제 서비스에서는 DB 사용 권장)
const waitlist = [];

app.post('/waitlist', (req, res) => {
  const { name, email } = req.body;
  if (!name || !email) {
    return res.status(400).json({ error: "이름과 이메일을 모두 입력해 주세요." });
  }
  // 중복 이메일 방지
  if (waitlist.find(w => w.email === email)) {
    return res.status(400).json({ error: "이미 신청된 이메일입니다." });
  }
  const entry = { name, email, status: waitlist.length < 100 ? 'confirmed' : 'wait' };
  waitlist.push(entry);
  res.json({ success: true, status: entry.status });
});

app.post('/check', (req, res) => {
  const { text } = req.body;
  if (!text) {
    return res.status(400).json({ result: "입력값이 없습니다." });
  }
  if (text.includes("error")) {
    res.json({ result: "문법 오류 발견" });
  } else {
    res.json({ result: "문법 오류 없음" });
  }
});

app.get('/', (req, res) => {
  res.send('ai-checker 서버가 실행 중입니다.');
});

app.listen(port, () => {
  console.log(`ai-checker 서버가 http://localhost:${port} 에서 실행 중입니다.`);
});

