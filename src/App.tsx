/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';

interface Question {
  emojis: string;
  answer: string;
  options: string[];
}

const QUESTIONS: Question[] = [
  {
    emojis: '🍏 👓 📱 💻',
    answer: 'steve jobs',
    options: ['bill gates', 'steve jobs', 'tim cook', 'elon musk']
  },
  {
    emojis: '👽 🔌 🚘 🚀',
    answer: 'elon musk',
    options: ['jeff bezos', 'elon musk', 'richard branson', 'nikola tesla']
  },
  {
    emojis: '⚡ 👓 🪄 🦉',
    answer: 'harry potter',
    options: ['gandalf', 'percy jackson', 'harry potter', 'sherlock holmes']
  },
  {
    emojis: '🎨 🌌 👂 🌻',
    answer: 'vincent van gogh',
    options: ['pablo picasso', 'vincent van gogh', 'claude monet', 'andy warhol']
  },
  {
    emojis: '🏀 🐐 🔴 🐂',
    answer: 'michael jordan',
    options: ['kobe bryant', 'lebron james', 'michael jordan', 'shaquille o\'neal']
  },
  {
    emojis: '👑 🎤 💃 🐝',
    answer: 'beyoncé',
    options: ['rihanna', 'taylor swift', 'beyoncé', 'madonna']
  }
];

export default function App() {
  // Game States
  const [isGameOpen, setIsGameOpen] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [isFinished, setIsFinished] = useState(false);

  const currentQuestion = QUESTIONS[currentQuestionIndex];

  const handleAnswerSelect = (option: string) => {
    if (isAnswered) return;
    setSelectedAnswer(option);
    setIsAnswered(true);
    if (option === currentQuestion.answer) {
      setScore((prev) => prev + 1);
    }
  };

  const handleNext = () => {
    if (currentQuestionIndex < QUESTIONS.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
      setSelectedAnswer(null);
      setIsAnswered(false);
    } else {
      setIsFinished(true);
    }
  };

  const handleRestart = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setSelectedAnswer(null);
    setIsAnswered(false);
    setIsFinished(false);
  };

  return (
    <section 
      id="hero-section" 
      className="relative h-screen w-full overflow-hidden bg-black font-sans select-none"
    >
      {/* Background Video */}
      <video
        id="hero-bg-video"
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-60"
        autoPlay
        loop
        muted
        playsInline
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260418_063509_7d167302-4fd4-480b-8260-18ab572333d4.mp4"
      />

      {/* Dark Overlay Gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black pointer-events-none z-10" />

      {/* Navbar Overlay */}
      <div className="absolute z-20 px-6 md:px-10 pt-6 top-0 left-0 right-0">
        <nav id="navbar" className="flex items-center justify-between gap-4 max-w-7xl mx-auto w-full">
          
          {/* Left Pill (Logo & Brand Name) */}
          <div 
            id="brand-logo-pill" 
            className="flex items-center gap-2 bg-neutral-900/90 backdrop-blur rounded-full pl-4 pr-6 py-3"
          >
            <svg 
              id="brand-logo-svg"
              viewBox="0 0 256 256" 
              className="h-5 w-5 shrink-0"
              fill="#ffffff"
            >
              <path d="M 128 192 L 128 256 L 64.5 256 L 32 223 L 0 192 L 0 128 L 64 128 Z M 256 192 L 256 256 L 192.5 256 L 160 223 L 128 192 L 128 128 L 192 128 Z M 128 64 L 128 128 L 64.5 128 L 32 95 L 0 64 L 0 0 L 64 0 Z M 256 64 L 256 128 L 192.5 128 L 160 95 L 128 64 L 128 0 L 192 0 Z" />
            </svg>
            <span className="text-white text-sm font-normal tracking-tight select-none">
              securify
            </span>
          </div>

          {/* Center Pill (Hidden on Mobile) */}
          <div 
            id="nav-links-pill" 
            className="hidden md:flex items-center gap-1 bg-neutral-900/90 backdrop-blur rounded-full px-3 py-2"
          >
            <a 
              href="#platform" 
              className="text-neutral-300 hover:text-white transition-colors text-sm px-5 py-2 rounded-full"
            >
              platform
            </a>
            <a 
              href="#solutions" 
              className="text-neutral-300 hover:text-white transition-colors text-sm px-5 py-2 rounded-full"
            >
              solutions
            </a>
            <a 
              href="#company" 
              className="text-neutral-300 hover:text-white transition-colors text-sm px-5 py-2 rounded-full"
            >
              company
            </a>
            <a 
              href="#support" 
              className="text-neutral-300 hover:text-white transition-colors text-sm px-5 py-2 rounded-full"
            >
              support
            </a>
          </div>

          {/* Right Button */}
          <button 
            id="get-started-btn" 
            className="bg-white text-black text-sm font-medium rounded-full px-6 py-3 hover:bg-neutral-200 transition-colors cursor-pointer shrink-0"
          >
            get started
          </button>
        </nav>
      </div>

      {/* Foreground Content Wrapper */}
      <div className="relative z-10 h-full w-full">
        
        {/* Three Giant Staggered Headline Words */}
        <h1 
          id="heading-protect" 
          className="hero-title absolute text-white font-medium text-[13vw] left-6 md:left-10 top-[16%] select-none tracking-tighter"
        >
          protect
        </h1>
        
        <h1 
          id="heading-your" 
          className="hero-title absolute text-white font-medium text-[13vw] right-6 md:right-10 top-[36%] select-none tracking-tighter"
        >
          your
        </h1>
        
        <h1 
          id="heading-data" 
          className="hero-title absolute text-white font-medium text-[13vw] left-[18%] md:left-[28%] top-[56%] select-none tracking-tighter"
        >
          data
        </h1>

        {/* Description Paragraph */}
        <p 
          id="hero-description" 
          className="absolute left-6 md:left-10 top-[46%] max-w-[280px] text-[15px] leading-snug text-white/90 select-none font-light"
        >
          Namaig Orgil gedeg. 111r surguuliin 8b angid suraltsdag. Chuluut tsagaaraa mtb buyu uuliin dugui unah durtai. Mun motocross sonirhdog.
        </p>

        {/* Stat Block - Top-Right */}
        <div 
          id="stat-top-right" 
          className="absolute right-6 md:right-24 top-[14%] flex flex-col items-end"
        >
          <div className="flex items-center gap-4">
            <div className="diagonal-divider rotate-[20deg] opacity-40 hidden md:block"></div>
            <span className="text-4xl md:text-5xl font-medium tracking-tight text-white">
              +65k
            </span>
          </div>
          <p className="text-xs md:text-sm text-white/70 mt-1 text-right lowercase block">
            startups use
          </p>
        </div>

        {/* Stat Block - Bottom-Left */}
        <div 
          id="stat-bottom-left" 
          className="absolute left-6 md:left-20 bottom-20 md:bottom-24 flex flex-col items-start"
        >
          <div className="flex items-center gap-4">
            <span className="text-4xl md:text-5xl font-medium tracking-tight text-white">
              +1.5b
            </span>
            <div className="diagonal-divider rotate-[-20deg] opacity-40 hidden md:block"></div>
          </div>
          <p className="text-xs md:text-sm text-white/70 mt-1 lowercase block">
            gb data was protected
          </p>
        </div>

        {/* Stat Block - Bottom-Right */}
        <div 
          id="stat-bottom-right" 
          className="absolute right-6 md:right-20 bottom-16 md:bottom-20 flex flex-col items-end"
        >
          <div className="flex items-center gap-4">
            <div className="diagonal-divider rotate-[-20deg] opacity-40 hidden md:block"></div>
            <span className="text-4xl md:text-5xl font-medium tracking-tight text-white">
              +300k
            </span>
          </div>
          <p className="text-xs md:text-sm text-white/70 mt-1 text-right lowercase block">
            downloads
          </p>
        </div>
      </div>

      {/* Floating Guessing Game Trigger */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 pointer-events-auto">
        <button
          id="toggle-game-btn"
          onClick={() => setIsGameOpen(!isGameOpen)}
          className={`flex items-center gap-2.5 px-5 py-3 rounded-full border border-white/10 backdrop-blur-md transition-all duration-300 ${
            isGameOpen 
              ? 'bg-white text-black hover:bg-neutral-200' 
              : 'bg-neutral-900/90 text-white hover:bg-neutral-800'
          }`}
        >
          <span className="relative flex h-2 w-2">
            <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${isGameOpen ? 'bg-black' : 'bg-emerald-400'}`}></span>
            <span className={`relative inline-flex rounded-full h-2 w-2 ${isGameOpen ? 'bg-black' : 'bg-emerald-500'}`}></span>
          </span>
          <span className="text-xs font-medium tracking-wider uppercase font-sans">
            {isGameOpen ? 'close challenge' : 'proof of humanity'}
          </span>
        </button>
      </div>

      {/* Emoji guessing game interactive card */}
      {isGameOpen && (
        <div 
          id="game-modal"
          className="absolute bottom-22 left-1/2 -translate-x-1/2 z-30 w-[92%] max-w-[360px] bg-neutral-950/95 backdrop-blur-xl border border-white/10 rounded-2xl p-5 shadow-2xl flex flex-col text-white pointer-events-auto animate-in fade-in slide-in-from-bottom-5 duration-300"
        >
          <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4">
            <span className="text-xs tracking-wider text-neutral-400 font-medium uppercase">
              challenge terminal v1.0
            </span>
            <span className="text-xs bg-neutral-800 text-neutral-300 px-2.5 py-0.5 rounded-full font-mono">
              {!isFinished ? `level ${currentQuestionIndex + 1}/${QUESTIONS.length}` : 'completed'}
            </span>
          </div>

          {!isFinished ? (
            <div className="flex flex-col">
              <p className="text-xs text-neutral-400 mb-3 text-center lowercase">
                guess the public figure from these emojis:
              </p>
              
              <div className="flex items-center justify-center bg-neutral-900/50 border border-white/5 rounded-xl py-6 mb-4 text-4xl select-none tracking-widest">
                {currentQuestion.emojis}
              </div>

              <div className="grid grid-cols-1 gap-2 mb-4">
                {currentQuestion.options.map((option) => {
                  const isSelected = selectedAnswer === option;
                  const isCorrectAnswer = option === currentQuestion.answer;
                  
                  let buttonStyle = "border-white/10 bg-neutral-900/60 hover:bg-neutral-900 hover:border-white/30 text-neutral-200";
                  if (isAnswered) {
                    if (isCorrectAnswer) {
                      buttonStyle = "border-emerald-500 bg-emerald-950/40 text-emerald-300";
                    } else if (isSelected) {
                      buttonStyle = "border-rose-500 bg-rose-950/40 text-rose-300";
                    } else {
                      buttonStyle = "border-white/5 bg-neutral-950/40 text-neutral-500 opacity-60";
                    }
                  }

                  return (
                    <button
                      key={option}
                      disabled={isAnswered}
                      onClick={() => handleAnswerSelect(option)}
                      className={`w-full py-2.5 px-4 rounded-xl border text-left text-sm transition-all duration-200 lowercase font-medium ${buttonStyle}`}
                    >
                      <div className="flex items-center justify-between">
                        <span>{option}</span>
                        {isAnswered && isCorrectAnswer && (
                          <span className="text-xs text-emerald-400 font-mono">✓</span>
                        )}
                        {isAnswered && isSelected && !isCorrectAnswer && (
                          <span className="text-xs text-rose-400 font-mono">✗</span>
                        )}
                      </div>
                    </button>
                  );
                })}
              </div>

              {isAnswered && (
                <button
                  onClick={handleNext}
                  className="w-full bg-white text-black py-2.5 rounded-xl text-sm font-medium hover:bg-neutral-200 transition-colors cursor-pointer text-center lowercase"
                >
                  {currentQuestionIndex < QUESTIONS.length - 1 ? 'next level' : 'view stats'}
                </button>
              )}
            </div>
          ) : (
            <div className="flex flex-col items-center py-4 text-center">
              <div className="h-12 w-12 bg-emerald-500/10 border border-emerald-500/30 rounded-full flex items-center justify-center mb-3">
                <span className="text-xl">🏆</span>
              </div>
              <h3 className="text-base font-medium mb-1 lowercase">verification successful</h3>
              <p className="text-xs text-neutral-400 mb-4 max-w-[220px] leading-relaxed lowercase">
                your human signature is verified. you scored {score} out of {QUESTIONS.length}!
              </p>
              
              <div className="w-full bg-neutral-900/50 border border-white/5 rounded-xl p-3 mb-5">
                <div className="flex justify-between items-center text-xs text-neutral-400 lowercase mb-1">
                  <span>score:</span>
                  <span className="font-mono text-white font-medium">{Math.round((score / QUESTIONS.length) * 100)}%</span>
                </div>
                <div className="w-full bg-neutral-800 h-1.5 rounded-full overflow-hidden">
                  <div 
                    className="bg-white h-full transition-all duration-500" 
                    style={{ width: `${(score / QUESTIONS.length) * 100}%` }}
                  />
                </div>
              </div>

              <button
                onClick={handleRestart}
                className="w-full bg-white text-black py-2.5 rounded-xl text-sm font-medium hover:bg-neutral-200 transition-colors cursor-pointer text-center lowercase"
              >
                play again
              </button>
            </div>
          )}
        </div>
      )}
    </section>
  );
}

