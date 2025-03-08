"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

export default function CodeDemo() {
  const [html, setHtml] = useState('<div class="box">Hello Nexus!</div>')
  const [css, setCss] = useState(
    ".box {\n  background-color: #1E90FF;\n  color: white;\n  padding: 20px;\n  border-radius: 8px;\n  text-align: center;\n  font-weight: bold;\n}",
  )
  const [js, setJs] = useState(
    "// Add some JavaScript\nconst box = document.querySelector('.box');\nbox.addEventListener('click', () => {\n  box.style.backgroundColor = '#FFD700';\n  box.style.color = '#2F2F2F';\n  box.textContent = 'You clicked me!';\n});",
  )
  const [output, setOutput] = useState("")

  useEffect(() => {
    updateOutput()
  }, [html, css, js])

  const updateOutput = () => {
    const combinedOutput = `
      <html>
        <head>
          <style>${css}</style>
        </head>
        <body>
          ${html}
          <script>${js}</script>
        </body>
      </html>
    `
    setOutput(combinedOutput)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white dark:bg-[#2F2F2F] rounded-xl shadow-lg overflow-hidden"
    >
      <div className="border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 p-4">
        <h3 className="text-lg font-bold text-[#2F2F2F] dark:text-white">Try Coding</h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
        <div className="space-y-4">
          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="text-sm font-medium text-[#2F2F2F] dark:text-white">HTML</label>
            </div>
            <textarea
              value={html}
              onChange={(e) => setHtml(e.target.value)}
              className="w-full h-24 p-2 text-sm font-mono bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-md"
            />
          </div>
          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="text-sm font-medium text-[#2F2F2F] dark:text-white">CSS</label>
            </div>
            <textarea
              value={css}
              onChange={(e) => setCss(e.target.value)}
              className="w-full h-24 p-2 text-sm font-mono bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-md"
            />
          </div>
          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="text-sm font-medium text-[#2F2F2F] dark:text-white">JavaScript</label>
            </div>
            <textarea
              value={js}
              onChange={(e) => setJs(e.target.value)}
              className="w-full h-24 p-2 text-sm font-mono bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-md"
            />
          </div>
          <Button onClick={updateOutput} className="w-full bg-[#1E90FF] hover:bg-[#1E90FF]/90 text-white">
            Run Code
          </Button>
        </div>
        <div>
          <div className="flex justify-between items-center mb-2">
            <label className="text-sm font-medium text-[#2F2F2F] dark:text-white">Output</label>
          </div>
          <div className="w-full h-[calc(100%-28px)] bg-white border border-gray-200 dark:border-gray-700 rounded-md overflow-hidden">
            <iframe srcDoc={output} title="output" sandbox="allow-scripts" className="w-full h-full" />
          </div>
        </div>
      </div>
    </motion.div>
  )
}

