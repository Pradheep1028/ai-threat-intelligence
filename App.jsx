import React, { useState } from 'react'
import axios from 'axios'
import Result from './pages/Result'
import './styles/index.css'

axios.defaults.baseURL = 'http://localhost:4000';

export default function App() {
  const [indicator, setIndicator] = useState('');
  const [type, setType] = useState('domain');
  const [result, setResult] = useState(null);

  const lookup = async (e) => {
    e.preventDefault();
    const res = await axios.post('/api/lookup', { indicator, type });
    setResult(res.data);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">AI Threat Intelligence Assistant</h1>
      <form onSubmit={lookup} className="flex gap-2">
        <select className="border p-2" value={type} onChange={e=>setType(e.target.value)}>
          <option value="domain">Domain</option>
          <option value="ip">IP</option>
          <option value="url">URL</option>
          <option value="hash">Hash</option>
        </select>
        <input className="border p-2 flex-1" placeholder="example.com"
               value={indicator} onChange={e=>setIndicator(e.target.value)} />
        <button className="bg-blue-600 text-white px-4">Lookup</button>
      </form>

      {result && <Result data={result} />}
    </div>
  );
}