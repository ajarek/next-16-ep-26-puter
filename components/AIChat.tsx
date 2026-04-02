"use client"

import React, { useState, useRef, useEffect } from 'react'
import Script from 'next/script'
import { Send, User, Bot, Loader2, AlertCircle } from 'lucide-react'

interface Message {
  content: string;
  role: 'user' | 'ai';
}

const AIChat = () => {
  const [messages, setMessages] = useState<Message[]>([])
  const [inputValue, setInputValue] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSendMessage = async (e?: React.FormEvent) => {
    e?.preventDefault()
    
    const trimmedMessage = inputValue.trim()
    if (!trimmedMessage || isLoading) return

    const newMessages = [...messages, { content: trimmedMessage, role: 'user' as const }]
    setMessages(newMessages)
    setInputValue('')
    setError(null)
    setIsLoading(true)

    try {
      if (typeof window !== "undefined" && window.puter?.ai?.chat) {
        // Send the complete conversation history array, formatting it as expected.
        const response = await window.puter.ai.chat(newMessages)
        
        let responseContent = ""
        if (typeof response === "string") {
            responseContent = response
        } else if (response?.message?.content) {
            responseContent = response.message.content
        } else if (response?.message) {
            responseContent = response.message
        } else {
            responseContent = response.toString()
        }

        setMessages(prev => [...prev, { content: responseContent, role: 'ai' }])
      } else {
        throw new Error("Puter AI script not loaded yet. Please wait a moment and try again.")
      }
    } catch (err: unknown) {
      console.error("AI response error:", err)
      const errorMessage = err instanceof Error ? err.message : "Failed to get AI response. Please try again."
      setError(errorMessage)
    } finally {
      setIsLoading(false)
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  return (
    <div className='flex flex-col items-center py-8 px-4 w-full h-full max-w-4xl mx-auto min-h-[600px]'>
      <Script src='https://js.puter.com/v2/' strategy='lazyOnload' />

      <div className='text-center space-y-2 mb-8'>
        <h2 className='text-3xl font-bold tracking-tight text-slate-900 dark:text-white flex justify-center items-center gap-3'>
          <Bot className="w-8 h-8 text-blue-600 dark:text-blue-500" />
          AI Assistant
        </h2>
        <p className='text-slate-500 dark:text-slate-400'>
          Powered by Puter.js
        </p>
      </div>

      <div className='flex flex-col w-full bg-white dark:bg-slate-900 rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-xl grow  max-h-[80vh]'>
        
        {/* Chat Messages Area */}
        <div className='flex-1 overflow-y-auto p-4 sm:p-6 space-y-6 scroll-smooth'>
          {messages.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-slate-400 dark:text-slate-500 space-y-4">
              <div className="w-16 h-16 rounded-full bg-slate-50 dark:bg-slate-800 flex items-center justify-center shadow-inner">
                <Bot className="w-8 h-8 text-slate-300 dark:text-slate-600" />
              </div>
              <p className="text-sm font-medium">No messages yet. Start a conversation!</p>
            </div>
          ) : (
            messages.map((msg, index) => (
              <div 
                key={index} 
                className={`flex gap-4 animate-in fade-in slide-in-from-bottom-2 duration-300 ${
                  msg.role === 'user' ? 'justify-end' : 'justify-start'
                }`}
              >
                {msg.role === 'ai' && (
                  <div className="shrink-0 w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/40 flex items-center justify-center border border-blue-200 dark:border-blue-800/50 mt-1">
                    <Bot className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  </div>
                )}
                
                <div 
                  className={`relative px-5 py-3.5 max-w-[85%] sm:max-w-[75%] rounded-2xl text-sm leading-relaxed ${
                    msg.role === 'user' 
                      ? 'bg-blue-600 text-white rounded-tr-sm shadow-md' 
                      : 'bg-slate-50 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-100 dark:border-slate-700 rounded-tl-sm shadow-sm'
                  }`}
                >
                  <div className="whitespace-pre-wrap break-words">{msg.content}</div>
                </div>

                {msg.role === 'user' && (
                  <div className="shrink-0 w-8 h-8 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center mt-1">
                    <User className="w-5 h-5 text-slate-500 dark:text-slate-300" />
                  </div>
                )}
              </div>
            ))
          )}
          
          {isLoading && (
            <div className="flex gap-4 justify-start animate-pulse">
               <div className="shrink-0 w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/40 flex items-center justify-center border border-blue-200 dark:border-blue-800/50 mt-1">
                  <Bot className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                </div>
                <div className="px-5 py-4 bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 rounded-2xl rounded-tl-sm shadow-sm flex space-x-2 items-center">
                  <div className="w-2 h-2 bg-slate-300 dark:bg-slate-500 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-slate-300 dark:bg-slate-500 rounded-full animate-bounce" style={{ animationDelay: "150ms" }}></div>
                  <div className="w-2 h-2 bg-slate-300 dark:bg-slate-500 rounded-full animate-bounce" style={{ animationDelay: "300ms" }}></div>
                </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Error Message */}
        {error && (
          <div className="px-4 py-3 bg-red-50 dark:bg-red-900/20 border-y border-red-100 dark:border-red-900/30 flex items-start gap-3">
             <AlertCircle className="w-5 h-5 text-red-500 mt-0.5 shrink-0" />
             <p className="text-sm text-red-700 dark:text-red-400">{error}</p>
          </div>
        )}

        {/* Input Area */}
        <div className='p-4 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800'>
          <form 
            onSubmit={handleSendMessage}
            className='relative flex items-center rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 outline-none focus-within:ring-2 focus-within:ring-blue-500/50 focus-within:border-blue-500 transition-all shadow-sm'
          >
            <textarea
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Type your message..."
              disabled={isLoading}
              className='w-full bg-transparent py-4 pl-5 pr-14 outline-none resize-none max-h-32 text-sm text-slate-900 dark:text-slate-100 disabled:opacity-50 min-h-[56px] leading-[24px]'
              rows={1}
            />
            <div className="absolute top-1/2 right-3 -translate-y-1/2">
               <button
                  type="submit"
                  disabled={!inputValue.trim() || isLoading}
                  className="p-2 bg-blue-600 hover:bg-blue-700 disabled:bg-slate-200 disabled:dark:bg-slate-700 disabled:text-slate-400 disabled:dark:text-slate-500 text-white rounded-xl transition-all shadow-sm disabled:shadow-none hover:shadow-md active:scale-95 flex items-center justify-center"
                >
                  {isLoading ? (
                    <Loader2 className="w-5 h-5 animate-spin" />
                  ) : (
                    <Send className="w-5 h-5 ml-0.5" />
                  )}
                </button>
            </div>
          </form>
          <div className="text-center mt-3">
             <p className="text-xs text-slate-400 dark:text-slate-500">AI can make mistakes. Verify important information.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AIChat