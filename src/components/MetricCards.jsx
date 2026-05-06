function MetricCards({ projects }) {
  const total = projects.length
  const live = projects.filter(p => p.status === 'live').length
  const inProgress = projects.filter(p => p.status === 'in-progress').length
  const planned = projects.filter(p => p.status === 'planned').length

  const cards = [
    { label: 'Total Projects', value: total, color: 'text-white' },
    { label: 'Live', value: live, color: 'text-green-400' },
    { label: 'In Progress', value: inProgress, color: 'text-yellow-400' },
    { label: 'Planned', value: planned, color: 'text-blue-400' },
  ]

  return (
    <div className="grid grid-cols-2 gap-4 mb-8 md:grid-cols-4">
      {cards.map(card => (
        <div key={card.label} className="bg-gray-900 border border-gray-800 rounded-lg p-4">
          <p className="text-xs text-gray-500 uppercase tracking-widest mb-1">{card.label}</p>
          <p className={`text-3xl font-bold ${card.color}`}>{card.value}</p>
        </div>
      ))}
    </div>
  )
}

export default MetricCards
