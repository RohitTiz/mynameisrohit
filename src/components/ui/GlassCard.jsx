const GlassCard = ({ children, className = "", hover = false }) => {
  return (
    <div className={`backdrop-blur-md bg-white/5 border border-white/10 rounded-xl ${hover ? 'transition-all duration-300 hover:shadow-[0_0_30px_rgba(168,85,247,0.3)] hover:scale-105' : ''} ${className}`}>
      {children}
    </div>
  )
}

export default GlassCard