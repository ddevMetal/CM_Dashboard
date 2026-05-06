function Header() {
  return (
    <header className="bg-gray-900 border-b border-gray-800 px-6 py-4 flex items-center justify-between">
      <div>
        <p className="text-xs text-gray-500 uppercase tracking-widest">CM_theBuilder</p>
        <h1 className="text-xl font-bold text-white">CM_Dashboard</h1>
      </div>
      <span className="text-xs text-green-400 border border-green-800 px-3 py-1 rounded-full">
        V1 — Static
      </span>
    </header>
  )
}
export default Header
