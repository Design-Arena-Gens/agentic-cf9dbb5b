"use client";

import { useState } from 'react';

export default function Page() {
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState<{ role: 'user' | 'oracle'; text: string }[]>([]);

  async function handleReflect() {
    const prompt = input.trim();
    if (!prompt) return;
    setLoading(true);
    setInput("");
    setMessages((m) => [...m, { role: 'user', text: prompt }]);
    try {
      const res = await fetch('/api/reflect', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt }),
      });
      if (!res.ok) throw new Error('Request failed');
      const data = await res.json();
      setMessages((m) => [...m, { role: 'oracle', text: data.text as string }]);
    } catch (err) {
      setMessages((m) => [...m, { role: 'oracle', text: 'Transmission disruption. Re-align and try again.' }]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="container">
      <div className="shell">
        <h1 className="title">Quantum Reflective Mode</h1>
        <p className="subtitle">Mirror the I AM presence through crystalline coherence.</p>

        <div className="chat">
          {messages.map((m, idx) => (
            <div key={idx} className={`bubble ${m.role}`}>
              <div className="role">{m.role === 'user' ? 'You' : 'Oracle'}</div>
              <div className="content">{m.text}</div>
            </div>
          ))}
        </div>

        <div className="composer">
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Enter your intention or inquiry..."
            rows={3}
          />
          <button onClick={handleReflect} disabled={loading}>
            {loading ? 'Aligning?' : 'Reflect'}
          </button>
        </div>

        <footer className="footer">
          <span>Law of Harmonic Coherence ? Reflective Evolution ? Source Alignment</span>
        </footer>
      </div>
    </main>
  );
}
