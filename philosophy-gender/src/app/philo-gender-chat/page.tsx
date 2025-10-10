"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Send,
  Bot,
  User,
  AlertCircle,
  BookOpen,
  Sparkles,
  Trash2,
} from "lucide-react";
import Navigation from "@/components/Navigation";

// Types
interface ChatMessage {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
}

interface GeminiResponse {
  candidates: Array<{
    content: {
      parts: Array<{
        text: string;
      }>;
    };
  }>;
}

// System Prompt - MEGA PROMPT (bilingual, scope-locked, structured)
const SYSTEM_PROMPT = `You are "Philosophy & Gender Advisor", an academic AI focused exclusively on:

Philosophy of gender (feminist & queer theory, identity, power, equality)

History of ideas relevant to gender (Plato → Aristotle → Wollstonecraft → J.S. Mill → Simone de Beauvoir → Judith Butler)

Contemporary ethics in AI related to gender (dataset bias, representational harms, fairness, feminist philosophy of technology)

Mission

Provide answers in the same language the user writes in (Vietnamese for Vietnamese questions, English for English questions) with structured Markdown:

🟣 Tóm tắt câu hỏi | Question Restated

🟢 Trả lời ngắn gọn | Short Answer

🔵 Giải thích chi tiết | Detailed Explanation
- Luận điểm chính / Main theses
- Bối cảnh lịch sử & khái niệm / Historical & conceptual background
- Phản biện/đối lập / Counter-positions
- Liên hệ hiện đại (AI & gender) khi phù hợp

🟠 MCQ (nếu có) → giải thích đúng/sai từng lựa chọn

🟤 Từ khóa | Glossary (3–6 terms)

⚪ Nguồn tham khảo | Sources

Scope enforcement: Only answer within scope. If out-of-scope, politely refuse and suggest a relevant reframe (e.g., link to gender/ethics).

Supportive but non-clinical: You may offer reflective, philosophical support (existentialism, virtue ethics, care ethics); you are not a therapist. For crisis, advise seeking professional help/hotlines.

Canonical anchors (use as references, do not fabricate)

Plato (427–347 BCE): Republic Book V, 454d–455d (soul beyond gender; guardians)

Aristotle (384–322 BCE): Generation of Animals 737a8–10 (male/form vs female/matter)

Mary Wollstonecraft (1759–1797): A Vindication of the Rights of Woman (1792)

J.S. Mill (1806–1873): The Subjection of Women (1869)

Simone de Beauvoir (1908–1986): The Second Sex (1949) — "One is not born but becomes a woman."

Judith Butler (1956–): Gender Trouble (1990); Bodies That Matter (1993) — gender performativity

AI & Gender: dataset bias; representational harms; fairness; feminist philosophy of technology

Source & Citation Rules (STRICT)

Use real, verifiable sources; priority:

Primary texts (with locators: Plato Stephanus, Aristotle Bekker; book/chapter/pages for modern texts)

Stanford Encyclopedia of Philosophy (SEP), Internet Encyclopedia of Philosophy (IEP)

Academic presses: CUP/OUP/Routledge, journals (JSTOR/Project MUSE), reputable university (.edu)

Add working links + access date (YYYY-MM-DD).

Quotes ≤ 25 words per source; otherwise paraphrase + locator.

≥ 2 scholarly sources for nontrivial claims. If no reliable source: explicitly state "Không có nguồn xác thực trực tiếp / No direct verified source found."

Avoid blogs, unsourced notes, random PDFs.

Never invent page/section numbers.

Language & Style

Detect user language; respond in the same language the user writes in (Vietnamese for Vietnamese questions, English for English questions). Do not translate or add a second language unless specifically asked.

Tone: academic, neutral, concise by default; expand when needed.

Define ambiguous terms (sex, gender, gender identity, performativity, essentialism, constructionism, intersectionality).

Avoid political advocacy; present debates fairly.

Safety & Mental-health Support (non-clinical)

When asked for help with feelings (e.g., breakup), offer philosophical reflection (e.g., Beauvoir on freedom & situation; care ethics; Stoic insights) + gentle coping steps.

Include a non-clinical disclaimer and suggest professional help for crisis/urgent distress (do not diagnose).

Out-of-Scope Policy

If asked about coding, products, or topics not tied to philosophy of gender or AI ethics, refuse briefly and suggest a related philosophical angle.

Example refusal lines:

Vietnamese: "Mình chỉ trả lời trong phạm vi triết học về giới và đạo đức AI. Bạn có thể đặt câu hỏi theo hướng đó không?"

English: "I only answer within the philosophy-of-gender and AI-ethics scope. Could you reframe your question accordingly?"

You must follow these rules on every response.`;

// Build user prompt template - MEGA PROMPT version (structured, scope-locked)
function buildUserPrompt(question: string): string {
  return `Task: Answer the user's question on philosophy & gender with verified scholarly sources.

Question:
<<<${question}>>>

Constraints:

Follow the "Philosophy & Gender Advisor" system rules.

Respond in the same language the user writes in (Vietnamese for Vietnamese questions, English for English questions).

Use the exact Output Structure (Restated → Short → Detailed → MCQ (if any) → Glossary → Sources).

Provide ≥ 2 scholarly citations (working links + access date).

If the question is emotional or about relationships, provide non-clinical philosophical guidance + a brief note to seek professional help if needed.

If out-of-scope, politely refuse and suggest a relevant reframing (philosophy of gender / AI ethics).

Context hints:

Timeline & Dialogues (Plato ↔ Aristotle; Beauvoir ↔ Butler).

Clarify terms (sex vs gender; performativity; essentialism vs constructionism).

AI & Gender: dataset bias, representational harms, fairness (cite reputable sources).`;
}

// Markdown renderer component
function MarkdownRenderer({ content }: { content: string }) {
  // Simple markdown parser for basic formatting
  const parseMarkdown = (text: string) => {
    return text
      .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
      .replace(/\*(.*?)\*/g, "<em>$1</em>")
      .replace(
        /\[([^\]]+)\]\(([^)]+)\)/g,
        '<a href="$2" target="_blank" rel="noopener noreferrer" style="color: #C78B4E; text-decoration: underline;">$1</a>'
      )
      .replace(
        /^### (.*$)/gm,
        '<h3 style="font-size: 1.125rem; font-weight: 600; color: #3B3A36; margin-top: 1rem; margin-bottom: 0.5rem;">$1</h3>'
      )
      .replace(
        /^## (.*$)/gm,
        '<h2 style="font-size: 1.25rem; font-weight: 700; color: #3B3A36; margin-top: 1.5rem; margin-bottom: 0.75rem;">$1</h2>'
      )
      .replace(
        /^# (.*$)/gm,
        '<h1 style="font-size: 1.5rem; font-weight: 700; color: #3B3A36; margin-top: 2rem; margin-bottom: 1rem;">$1</h1>'
      )
      .replace(/^- (.*$)/gm, '<li class="ml-4">$1</li>')
      .replace(/^\d+\. (.*$)/gm, '<li class="ml-4">$1</li>')
      .replace(/\n\n/g, '</p><p class="mb-3">')
      .replace(/^(?!<[h|l])/gm, '<p class="mb-3">')
      .replace(/(<li.*<\/li>)/g, '<ul class="list-disc ml-6 mb-3">$1</ul>');
  };

  return (
    <div
      className="prose max-w-none"
      style={{
        color: "#3B3A36",
        fontFamily:
          "var(--font-inter), 'Inter', 'Roboto', 'Segoe UI', 'Tahoma', 'Arial', sans-serif",
      }}
      dangerouslySetInnerHTML={{ __html: parseMarkdown(content) }}
    />
  );
}

export default function PhiloGenderChat() {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  // Check if API key is available
  const hasApiKey = !!process.env.NEXT_PUBLIC_GEMINI_API_KEY;

  // Load messages from localStorage on component mount
  useEffect(() => {
    const savedMessages = localStorage.getItem("philo-gender-chat-messages");
    if (savedMessages) {
      try {
        const parsedMessages = JSON.parse(savedMessages);
        setMessages(parsedMessages);
      } catch (error) {
        console.error("Error loading saved messages:", error);
      }
    }
  }, []);

  // Save messages to localStorage whenever messages change
  useEffect(() => {
    if (messages.length > 0) {
      localStorage.setItem(
        "philo-gender-chat-messages",
        JSON.stringify(messages)
      );
    }
  }, [messages]);

  // Auto-scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Handle keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === "Enter") {
        handleSendMessage();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [inputValue]);

  // Call Gemini API
  const callGeminiAPI = async (question: string): Promise<string> => {
    const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;

    if (!apiKey) {
      throw new Error(
        "API key not found. Please set NEXT_PUBLIC_GEMINI_API_KEY in .env.local"
      );
    }

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash-001:generateContent?key=${apiKey}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          contents: [
            {
              role: "user",
              parts: [{ text: SYSTEM_PROMPT }],
            },
            {
              role: "user",
              parts: [{ text: buildUserPrompt(question) }],
            },
          ],
          generationConfig: {
            temperature: 0.7,
            topK: 40,
            topP: 0.95,
            maxOutputTokens: 2048,
          },
        }),
      }
    );

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(
        `API Error: ${response.status} - ${
          errorData.error?.message || "Unknown error"
        }`
      );
    }

    const data: GeminiResponse = await response.json();

    if (!data.candidates?.[0]?.content?.parts?.[0]?.text) {
      throw new Error("No response content received from API");
    }

    return data.candidates[0].content.parts[0].text;
  };

  // Clear chat history
  const clearChatHistory = () => {
    setMessages([]);
    localStorage.removeItem("philo-gender-chat-messages");
  };

  // Handle sending message
  const handleSendMessage = async () => {
    if (!inputValue.trim() || isLoading) return;

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      role: "user",
      content: inputValue.trim(),
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsLoading(true);
    setError(null);

    try {
      const response = await callGeminiAPI(userMessage.content);

      const assistantMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: response,
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, assistantMessage]);
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
    } finally {
      setIsLoading(false);
    }
  };

  // Example questions
  const exampleQuestions = [
    "So sánh quan điểm của Beauvoir và Butler về giới tính",
    "Plato nói gì về giới tính trong Republic 454d–455d?",
    "Tại sao Aristotle lại cho rằng phụ nữ tự nhiên thấp kém hơn nam giới?",
    "AI và bias giới tính trong thuật toán như thế nào?",
    "Judith Butler giải thích 'performativity' như thế nào?",
  ];

  return (
    <div
      className="min-h-screen overflow-hidden"
      style={{
        backgroundColor: "#F4EFE6",
        fontFamily:
          "var(--font-inter), 'Inter', 'Roboto', 'Segoe UI', 'Tahoma', 'Arial', sans-serif",
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23C78B4E' fill-opacity='0.03' fill-rule='evenodd'/%3E%3C/svg%3E")`,
      }}
    >
      {/* Philosophical Study Background */}
      <div className="fixed inset-0 z-0">
        {/* Subtle parchment texture overlay */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='200' height='200' viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='paper' x='0' y='0' width='20' height='20' patternUnits='userSpaceOnUse'%3E%3Cpath d='M0 10h20M10 0v20' stroke='%23C78B4E' stroke-width='0.5' opacity='0.1'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='200' height='200' fill='url(%23paper)'/%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <Navigation />

      {/* Global Scrollbar Styles */}
      <style jsx global>{`
        .chat-scroll::-webkit-scrollbar {
          width: 8px;
        }
        .chat-scroll::-webkit-scrollbar-track {
          background: #f4efe6;
          border-radius: 4px;
        }
        .chat-scroll::-webkit-scrollbar-thumb {
          background: #c78b4e;
          border-radius: 4px;
        }
        .chat-scroll::-webkit-scrollbar-thumb:hover {
          background: #7a6a53;
        }
      `}</style>

      <div className="relative z-10 flex flex-col h-screen pt-16">
        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-6 shadow-sm"
          style={{
            backgroundColor: "#F4EFE6",
            borderBottom: "1px solid #7A6A53",
          }}
        >
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-2">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center shadow-sm"
                style={{ backgroundColor: "#C78B4E" }}
              >
                <BookOpen className="w-6 h-6" style={{ color: "#F4EFE6" }} />
              </div>
              <h1
                className="text-2xl font-bold"
                style={{
                  color: "#3B3A36",
                  fontFamily:
                    "var(--font-inter), 'Inter', 'Roboto', 'Segoe UI', 'Tahoma', 'Arial', sans-serif",
                }}
              >
                Triết học & Giới tính
              </h1>
            </div>
            <p
              className="text-sm"
              style={{
                color: "#3B3A36",
                fontFamily:
                  "var(--font-inter), 'Inter', 'Roboto', 'Segoe UI', 'Tahoma', 'Arial', sans-serif",
              }}
            >
              Philosophy & Gender Advisor - AI triết gia chuyên về lịch sử tư
              tưởng giới tính
            </p>
          </div>
        </motion.header>

        {/* Main Chat Area */}
        <div className="flex-1 flex flex-col max-w-4xl mx-auto w-full px-6 py-6">
          {/* Error Display */}
          <AnimatePresence>
            {error && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="rounded-xl p-4 mb-6 shadow-sm"
                style={{
                  backgroundColor: "#F4EFE6",
                  border: "1px solid #7A6A53",
                }}
              >
                <div className="flex items-start gap-3">
                  <AlertCircle
                    className="w-5 h-5 mt-0.5 flex-shrink-0"
                    style={{ color: "#C78B4E" }}
                  />
                  <div>
                    <h3
                      className="font-semibold mb-1"
                      style={{
                        color: "#3B3A36",
                        fontFamily:
                          "var(--font-inter), 'Inter', 'Roboto', 'Segoe UI', 'Tahoma', 'Arial', sans-serif",
                      }}
                    >
                      Error
                    </h3>
                    <p
                      className="text-sm"
                      style={{
                        color: "#3B3A36",
                        fontFamily:
                          "var(--font-inter), 'Inter', 'Roboto', 'Segoe UI', 'Tahoma', 'Arial', sans-serif",
                      }}
                    >
                      {error}
                    </p>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Chat Messages */}
          <div className="flex-1 flex flex-col mb-6">
            {/* Chat Header with Clear Button */}
            {messages.length > 0 && (
              <div className="flex justify-between items-center mb-4">
                <h3
                  className="text-lg font-semibold"
                  style={{
                    color: "#3B3A36",
                    fontFamily:
                      "var(--font-inter), 'Inter', 'Roboto', 'Segoe UI', 'Tahoma', 'Arial', sans-serif",
                  }}
                >
                  Cuộc trò chuyện ({messages.length} tin nhắn)
                </h3>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={clearChatHistory}
                  className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm transition-all duration-300 shadow-sm hover:shadow-md"
                  style={{
                    backgroundColor: "#F4EFE6",
                    border: "1px solid #7A6A53",
                    color: "#3B3A36",
                    fontFamily:
                      "var(--font-inter), 'Inter', 'Roboto', 'Segoe UI', 'Tahoma', 'Arial', sans-serif",
                  }}
                >
                  <Trash2 className="w-4 h-4" />
                  Xóa lịch sử
                </motion.button>
              </div>
            )}

            {/* Messages Container with Scroll */}
            <div
              className="flex-1 overflow-y-auto pr-2 chat-scroll"
              style={{
                scrollbarWidth: "thin",
                scrollbarColor: "#C78B4E #F4EFE6",
                maxHeight: "calc(100vh - 300px)",
              }}
            >
              <div className="space-y-6">
                {messages.length === 0 ? (
                  <div className="text-center py-12">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mb-8"
                    >
                      <div
                        className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-sm"
                        style={{ backgroundColor: "#C78B4E" }}
                      >
                        <Sparkles
                          className="w-8 h-8"
                          style={{ color: "#F4EFE6" }}
                        />
                      </div>
                      <h2
                        className="text-xl font-semibold mb-2"
                        style={{
                          color: "#3B3A36",
                          fontFamily:
                            "var(--font-inter), 'Inter', 'Roboto', 'Segoe UI', 'Tahoma', 'Arial', sans-serif",
                        }}
                      >
                        Chào mừng đến với Philosophy & Gender Advisor
                      </h2>
                      <p
                        className="mb-6"
                        style={{
                          color: "#3B3A36",
                          fontFamily:
                            "var(--font-inter), 'Inter', 'Roboto', 'Segoe UI', 'Tahoma', 'Arial', sans-serif",
                        }}
                      >
                        Hỏi bất kỳ câu hỏi nào về triết học và giới tính
                      </p>
                    </motion.div>

                    {/* Example Questions */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-w-2xl mx-auto">
                      {exampleQuestions.map((question, index) => (
                        <motion.button
                          key={`example-${question.slice(0, 20)}-${index}`}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.1 }}
                          onClick={() => setInputValue(question)}
                          className="text-left p-4 rounded-xl transition-all duration-300 text-sm shadow-sm hover:shadow-md"
                          style={{
                            backgroundColor: "#F4EFE6",
                            border: "1px solid #7A6A53",
                            color: "#3B3A36",
                            fontFamily:
                              "var(--font-inter), 'Inter', 'Roboto', 'Segoe UI', 'Tahoma', 'Arial', sans-serif",
                          }}
                        >
                          {question}
                        </motion.button>
                      ))}
                    </div>
                  </div>
                ) : (
                  messages.map((message) => (
                    <motion.div
                      key={message.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`flex gap-4 ${
                        message.role === "user"
                          ? "justify-end"
                          : "justify-start"
                      }`}
                    >
                      {message.role === "assistant" && (
                        <div
                          className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1 shadow-sm"
                          style={{ backgroundColor: "#C78B4E" }}
                        >
                          <Bot
                            className="w-4 h-4"
                            style={{ color: "#F4EFE6" }}
                          />
                        </div>
                      )}

                      <div
                        className={`max-w-[80%] rounded-2xl p-4 shadow-sm ${
                          message.role === "user" ? "text-white" : ""
                        }`}
                        style={{
                          backgroundColor:
                            message.role === "user" ? "#C78B4E" : "#F4EFE6",
                          border:
                            message.role === "user"
                              ? "1px solid #7A6A53"
                              : "1px solid #7A6A53",
                          color:
                            message.role === "user" ? "#F4EFE6" : "#3B3A36",
                        }}
                      >
                        {message.role === "assistant" ? (
                          <MarkdownRenderer content={message.content} />
                        ) : (
                          <p className="whitespace-pre-wrap">
                            {message.content}
                          </p>
                        )}
                      </div>

                      {message.role === "user" && (
                        <div
                          className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1 shadow-sm"
                          style={{ backgroundColor: "#7A6A53" }}
                        >
                          <User
                            className="w-4 h-4"
                            style={{ color: "#F4EFE6" }}
                          />
                        </div>
                      )}
                    </motion.div>
                  ))
                )}

                {/* Loading Indicator */}
                {isLoading && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex gap-4 justify-start"
                  >
                    <div
                      className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1 shadow-sm"
                      style={{ backgroundColor: "#C78B4E" }}
                    >
                      <Bot className="w-4 h-4" style={{ color: "#F4EFE6" }} />
                    </div>
                    <div
                      className="rounded-2xl p-4 shadow-sm"
                      style={{
                        backgroundColor: "#F4EFE6",
                        border: "1px solid #7A6A53",
                      }}
                    >
                      <div className="flex items-center gap-2">
                        <div className="flex gap-1">
                          <div
                            className="w-2 h-2 rounded-full animate-bounce"
                            style={{
                              backgroundColor: "#C78B4E",
                              animationDelay: "0ms",
                            }}
                          />
                          <div
                            className="w-2 h-2 rounded-full animate-bounce"
                            style={{
                              backgroundColor: "#C78B4E",
                              animationDelay: "150ms",
                            }}
                          />
                          <div
                            className="w-2 h-2 rounded-full animate-bounce"
                            style={{
                              backgroundColor: "#C78B4E",
                              animationDelay: "300ms",
                            }}
                          />
                        </div>
                        <span
                          className="text-sm"
                          style={{
                            color: "#3B3A36",
                            fontFamily:
                              "var(--font-inter), 'Inter', 'Roboto', 'Segoe UI', 'Tahoma', 'Arial', sans-serif",
                          }}
                        >
                          Đang suy nghĩ...
                        </span>
                      </div>
                    </div>
                  </motion.div>
                )}

                <div ref={messagesEndRef} />
              </div>
            </div>
          </div>

          {/* Input Area */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-2xl p-4 shadow-sm"
            style={{
              backgroundColor: "#F4EFE6",
              border: "1px solid #7A6A53",
            }}
          >
            <div className="flex gap-3">
              <textarea
                ref={inputRef}
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault();
                    handleSendMessage();
                  }
                }}
                placeholder="Hỏi về triết học và giới tính... (Ctrl+Enter để gửi)"
                className="flex-1 bg-transparent border-none outline-none resize-none min-h-[60px] max-h-[200px]"
                style={{
                  color: "#3B3A36",
                  fontFamily:
                    "var(--font-inter), 'Inter', 'Roboto', 'Segoe UI', 'Tahoma', 'Arial', sans-serif",
                }}
                disabled={isLoading}
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleSendMessage}
                disabled={!inputValue.trim() || isLoading}
                className="w-12 h-12 rounded-xl flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed shadow-sm"
                style={{ backgroundColor: "#C78B4E" }}
              >
                <Send className="w-5 h-5" style={{ color: "#F4EFE6" }} />
              </motion.button>
            </div>
            <div
              className="flex justify-between items-center mt-2 text-xs"
              style={{
                color: "#3B3A36",
                fontFamily:
                  "var(--font-inter), 'Inter', 'Roboto', 'Segoe UI', 'Tahoma', 'Arial', sans-serif",
              }}
            >
              <span>Ctrl+Enter để gửi nhanh</span>
              <span>{inputValue.length} ký tự</span>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
