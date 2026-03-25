import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const CertificateViewer = ({ isOpen, onClose, certificate }) => {
  const [error, setError] = useState(false)

  if (!certificate) return null

  const pdfUrl = certificate.pdfPath
  const fullPdfUrl = pdfUrl.startsWith('http') ? pdfUrl : window.location.origin + pdfUrl

  const handleDownload = () => {
    const link = document.createElement('a')
    link.href = fullPdfUrl
    link.download = `${certificate.name.replace(/\s+/g, '_')}.pdf`
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/90 backdrop-blur-md z-50"
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[95%] md:w-[85%] lg:w-[75%] h-[85vh] bg-black rounded-2xl border border-yellow-500/30 shadow-2xl z-50 overflow-hidden flex flex-col"
          >
            {/* Header */}
            <div className="flex justify-between items-center px-4 md:px-6 py-3 md:py-4 bg-black border-b border-yellow-500/30">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg bg-gradient-to-r from-yellow-500 to-yellow-600 flex items-center justify-center">
                  <span className="text-sm md:text-base">📜</span>
                </div>
                <div>
                  <h3 className="text-sm md:text-base font-bold text-white">{certificate.name}</h3>
                  <p className="text-xs text-gray-400">{certificate.issuer} • {certificate.date}</p>
                </div>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={handleDownload}
                  className="px-3 md:px-4 py-1.5 md:py-2 bg-yellow-500 rounded-lg text-black text-sm font-bold hover:bg-yellow-400 transition"
                >
                  ⬇️ Download
                </button>
                <button
                  onClick={onClose}
                  className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-white/10 hover:bg-white/20 transition text-gray-400 hover:text-white"
                >
                  ✕
                </button>
              </div>
            </div>

            {/* PDF Viewer */}
            <div className="flex-1 bg-gray-900">
              {!error ? (
                <iframe
                  src={fullPdfUrl}
                  className="w-full h-full border-0"
                  title={certificate.name}
                  onError={() => setError(true)}
                />
              ) : (
                <div className="flex items-center justify-center h-full flex-col gap-4">
                  <p className="text-gray-400">Unable to display PDF</p>
                  <button
                    onClick={handleDownload}
                    className="px-4 py-2 bg-yellow-500 rounded-lg text-black font-bold"
                  >
                    Download Certificate
                  </button>
                </div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

export default CertificateViewer