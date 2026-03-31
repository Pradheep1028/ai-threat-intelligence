import React from 'react'

export default function Result({ data }) {
  return (
    <div className="mt-6 p-4 border rounded bg-white">
      <h2 className="text-lg font-semibold">{data.indicator}</h2>
      <p>Type: {data.type}</p>
      <p className="font-bold mt-2">Reputation Score: {data.reputation.score} ({data.reputation.labels.join(', ')})</p>

      <h3 className="mt-4 font-semibold">LLM Summary</h3>
      <p>{data.llm_summary}</p>

      <h4 className="mt-4 font-semibold">OSINT Data</h4>
      <pre className="bg-gray-100 p-2 rounded text-xs">{JSON.stringify(data.osint, null, 2)}</pre>
    </div>
  )
}