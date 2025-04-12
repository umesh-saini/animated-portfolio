"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Bot, Send, User, Minimize2, Maximize2 } from "lucide-react"
import SectionHeading from "@/components/section-heading"

interface Message {
  role: "user" | "assistant"
  content: string
}

export default function AIAssistant() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "Hi there! I'm Umesh's AI assistant. Ask me anything about Umesh's skills, projects, or experience!",
    },
  ])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [isMinimized, setIsMinimized] = useState(false)
  const [isMounted, setIsMounted] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim() || isLoading) return

    // Add user message
    const userMessage = { role: "user" as const, content: input }
    setMessages((prev) => [...prev, userMessage])
    setInput("")
    setIsLoading(true)

    try {
      // Call the AI API route
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          messages: [...messages, userMessage],
        }),
      })

      const data = await response.json()

      // Add AI response
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: data.response || "Sorry, I couldn't process that request.",
        },
      ])
    } catch (error) {
      console.error("Error:", error)
      // Add a fallback response if the API call fails
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "I'm having trouble connecting to my knowledge base. Please try asking something about Umesh's skills, projects, or experience.",
        },
      ])
    } finally {
      setIsLoading(false)
    }
  }

  if (!isMounted) return null

  return (
    <section id="ai-assistant" className="py-20">
      <SectionHeading title="AI Assistant" subtitle="Chat with my AI to learn more about me" />

      <div className="mt-12">
        <div className="max-w-3xl mx-auto">
          <Card className="border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-lg overflow-hidden">
            <CardHeader className="p-4 flex flex-row items-center justify-between bg-muted/50">
              <div className="flex items-center gap-2">
                <div className="bg-primary/20 p-1 rounded-full">
                  <Bot className="h-5 w-5 text-primary" />
                </div>
                <CardTitle className="text-lg">Umesh's AI Assistant</CardTitle>
              </div>
              <Button variant="ghost" size="icon" onClick={() => setIsMinimized(!isMinimized)} className="h-8 w-8">
                {isMinimized ? <Maximize2 className="h-4 w-4" /> : <Minimize2 className="h-4 w-4" />}
              </Button>
            </CardHeader>

            {!isMinimized && (
              <>
                <CardContent className="p-4">
                  <div className="h-[350px] overflow-y-auto space-y-4 p-2">
                    {messages.map((message, index) => (
                      <div
                        key={index}
                        className={`flex ${message.role === "assistant" ? "justify-start" : "justify-end"}`}
                      >
                        <div
                          className={`flex gap-2 max-w-[80%] ${
                            message.role === "assistant"
                              ? "bg-muted rounded-lg p-3"
                              : "bg-primary text-primary-foreground rounded-lg p-3"
                          }`}
                        >
                          <div className="flex-shrink-0 mt-1">
                            {message.role === "assistant" ? <Bot className="h-5 w-5" /> : <User className="h-5 w-5" />}
                          </div>
                          <div>{message.content}</div>
                        </div>
                      </div>
                    ))}
                    {isLoading && (
                      <div className="flex justify-start">
                        <div className="bg-muted rounded-lg p-3 flex gap-2 max-w-[80%]">
                          <Bot className="h-5 w-5" />
                          <div className="flex items-center gap-1">
                            <div
                              className="h-2 w-2 bg-primary rounded-full animate-bounce"
                              style={{ animationDelay: "0ms" }}
                            ></div>
                            <div
                              className="h-2 w-2 bg-primary rounded-full animate-bounce"
                              style={{ animationDelay: "300ms" }}
                            ></div>
                            <div
                              className="h-2 w-2 bg-primary rounded-full animate-bounce"
                              style={{ animationDelay: "600ms" }}
                            ></div>
                          </div>
                        </div>
                      </div>
                    )}
                    <div ref={messagesEndRef} />
                  </div>
                </CardContent>

                <CardFooter className="p-4 pt-0">
                  <form onSubmit={handleSubmit} className="w-full flex gap-2">
                    <Input
                      placeholder="Ask me anything about Umesh..."
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      className="flex-1"
                      disabled={isLoading}
                    />
                    <Button type="submit" size="icon" disabled={isLoading}>
                      <Send className="h-4 w-4" />
                    </Button>
                  </form>
                </CardFooter>
              </>
            )}
          </Card>
        </div>
      </div>
    </section>
  )
}
