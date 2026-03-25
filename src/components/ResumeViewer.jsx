import { motion, AnimatePresence } from 'framer-motion'

const ResumeViewer = ({ isOpen, onClose }) => {
  const resumeUrl = '/resume.pdf'

  const handleDownload = () => {
    const link = document.createElement('a')
    link.href = resumeUrl
    link.download = 'Rohit_Tiwari_Resume.pdf'
    link.click()
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
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
          />
          
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed inset-4 md:inset-8 z-50 bg-black rounded-2xl border border-white/20 shadow-2xl overflow-hidden flex flex-col"
          >
            {/* Header */}
            <div className="flex justify-between items-center p-4 border-b border-white/10">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
                  📄
                </div>
                <div>
                  <h2 className="text-lg font-semibold">Resume</h2>
                  <p className="text-xs text-gray-400">Rohit Tiwari</p>
                </div>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={handleDownload}
                  className="px-4 py-2 bg-purple-500/20 hover:bg-purple-500/30 rounded-lg text-sm transition-all flex items-center gap-2"
                >
                  ⬇️ Download
                </button>
                <button
                  onClick={onClose}
                  className="w-10 h-10 rounded-lg bg-white/10 hover:bg-white/20 transition-all"
                >
                  ✕
                </button>
              </div>
            </div>

            {/* PDF Viewer - Using Native browser PDF viewer */}
            <object
              data={resumeUrl}
              type="application/pdf"
              className="w-full h-full"
            >
              <div className="flex items-center justify-center h-full flex-col gap-4">
                <p className="text-gray-400">Unable to display PDF</p>
                <a
                  href={resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-purple-500 rounded-lg"
                >
                  Click to open PDF
                </a>
              </div>
            </object>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

export default ResumeViewer