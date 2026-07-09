/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import QUESTIONS_DATA from './data.json';

interface Question {
  emojis: string;
  answer: string;
  options: string[];
  hints: string[];
  imageUrl: string;
}

const QUESTIONS = QUESTIONS_DATA as Question[];

export default function App() {
  // Game States
  const [isGameOpen, setIsGameOpen] = useState(false);
  const [isTyperfishOpen, setIsTyperfishOpen] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const [hint1Revealed, setHint1Revealed] = useState(false);
  const [hint2Revealed, setHint2Revealed] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isInstagramOpen, setIsInstagramOpen] = useState(false);

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
      setHint1Revealed(false);
      setHint2Revealed(false);
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
    setHint1Revealed(false);
    setHint2Revealed(false);
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
            className="flex items-center gap-2 bg-neutral-900/90 backdrop-blur rounded-full pl-4.5 pr-5.5 py-2.5"
          >
            <svg 
              id="brand-logo-svg"
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2.5" 
              strokeLinecap="round" 
              className="h-5.5 w-5.5 shrink-0 text-white"
            >
              {/* Left Ski */}
              <path d="M6 19 L11 5 C11.3 4.2 12 3.5 12.8 3.5 C13.5 3.5 14 4 14 4.8 L13.5 6" />
              {/* Right Ski */}
              <path d="M9 19 L14 5 C14.3 4.2 15 3.5 15.8 3.5 C16.5 3.5 17 4 17 4.8 L16.5 6" />
              {/* Crossed poles */}
              <path d="M4 16 L17 9" strokeWidth="1" opacity="0.5" />
              <path d="M6 8 L16 17" strokeWidth="1" opacity="0.5" />
            </svg>
            <span className="text-white text-sm font-medium tracking-wide select-none lowercase font-sans">
              ski
            </span>
          </div>

          {/* Center Pill (Hidden on Mobile) */}
          <div 
            id="nav-links-pill" 
            className="hidden md:flex items-center gap-1 bg-neutral-900/90 backdrop-blur rounded-full px-3 py-2"
          >
            <button 
              onClick={() => setIsContactOpen(true)}
              className="text-neutral-300 hover:text-white transition-colors text-sm px-5 py-2 rounded-full cursor-pointer"
            >
              holboo barih
            </button>
            <button 
              onClick={() => setIsInstagramOpen(true)}
              className="text-neutral-300 hover:text-white transition-colors text-sm px-5 py-2 rounded-full cursor-pointer"
            >
              instagram
            </button>
            <button 
              onClick={() => setIsGameOpen((prev) => !prev)}
              className="text-neutral-300 hover:text-white transition-colors text-sm px-5 py-2 rounded-full cursor-pointer"
            >
              proof of humanity
            </button>
          </div>
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

        {/* Typerfish Game Widget Card */}
        <div 
          id="typerfish-launcher-card"
          onClick={() => setIsTyperfishOpen(true)}
          className="absolute left-6 md:left-10 top-[66%] md:top-[64%] z-20 pointer-events-auto group cursor-pointer bg-neutral-900/90 backdrop-blur-md border border-white/10 rounded-xl p-2 w-[200px] md:w-[220px] hover:border-white/20 hover:bg-neutral-900 transition-all duration-300 shadow-2xl active:scale-98"
        >
          <div className="relative aspect-video rounded-lg overflow-hidden mb-1.5 bg-neutral-950">
            <img 
              src="https://share.google/a5Kr0CAitB24W0Fn6" 
              alt="typerfish challenge"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              onError={(e) => {
                // Beautiful fallback in case image direct access hits restriction
                e.currentTarget.style.display = 'none';
                const container = e.currentTarget.parentElement;
                if (container) {
                  const label = document.createElement('div');
                  label.className = 'absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-neutral-900 to-neutral-950 p-2 text-center';
                  label.innerHTML = `
                    <span class="text-2xl mb-0.5">🐟</span>
                    <span class="text-[10px] font-semibold text-white tracking-wider uppercase">typerfish</span>
                    <span class="text-[8px] text-white/40 uppercase mt-0.5">tap to type & race</span>
                  `;
                  container.appendChild(label);
                }
              }}
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="text-[10px] bg-white text-black px-2.5 py-1 rounded-full font-medium tracking-wider uppercase shadow-lg flex items-center gap-1">
                <svg className="w-2.5 h-2.5 fill-current" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
                play
              </span>
            </div>
          </div>
          <div className="flex items-center justify-between px-1">
            <div className="flex flex-col">
              <span className="text-[11px] font-medium text-white tracking-wide group-hover:text-white transition-colors">typerfish challenge</span>
              <span className="text-[9px] text-white/50 font-mono lowercase">typerfish.vercel.app</span>
            </div>
            <span className="text-xs text-neutral-400 group-hover:text-white transition-colors translate-x-0 group-hover:translate-x-0.5 duration-200">
              →
            </span>
          </div>
        </div>

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
              
              {isAnswered && selectedAnswer === currentQuestion.answer ? (
                <div className="relative h-32 w-full rounded-xl overflow-hidden mb-4 border border-emerald-500/40 bg-emerald-950/20 flex flex-col justify-end animate-in fade-in duration-300">
                  <img 
                    src={currentQuestion.imageUrl} 
                    alt={currentQuestion.answer}
                    referrerPolicy="no-referrer"
                    className="absolute inset-0 w-full h-full object-cover opacity-80"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-transparent pointer-events-none" />
                  <div className="relative z-10 p-3 flex items-center justify-between">
                    <span className="text-xs text-emerald-400 font-mono tracking-wider uppercase flex items-center gap-1">
                      ✓ {currentQuestion.answer}
                    </span>
                    <span className="text-[10px] bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded-full uppercase tracking-wider font-mono">
                      correct match
                    </span>
                  </div>
                </div>
              ) : (
                <div className="flex items-center justify-center bg-neutral-900/50 border border-white/5 rounded-xl py-6 mb-4 text-4xl select-none tracking-widest relative">
                  {currentQuestion.emojis}
                </div>
              )}

              {/* Hints Section */}
              <div className="mb-4">
                <div className="flex items-center gap-2 justify-between mb-2">
                  <span className="text-[10px] text-neutral-400 font-mono uppercase tracking-wider">hints:</span>
                  <div className="flex gap-1.5">
                    <button
                      type="button"
                      onClick={() => setHint1Revealed(true)}
                      disabled={hint1Revealed}
                      className={`text-[10px] px-2.5 py-1 rounded-full border transition-all cursor-pointer font-mono ${
                        hint1Revealed 
                          ? 'border-neutral-800 text-neutral-500 bg-transparent' 
                          : 'border-white/10 text-white/80 bg-neutral-900 hover:border-white/20'
                      }`}
                    >
                      {hint1Revealed ? 'hint 1' : 'show hint 1'}
                    </button>
                    <button
                      type="button"
                      onClick={() => setHint2Revealed(true)}
                      disabled={hint2Revealed}
                      className={`text-[10px] px-2.5 py-1 rounded-full border transition-all cursor-pointer font-mono ${
                        hint2Revealed 
                          ? 'border-neutral-800 text-neutral-500 bg-transparent' 
                          : 'border-white/10 text-white/80 bg-neutral-900 hover:border-white/20'
                      }`}
                    >
                      {hint2Revealed ? 'hint 2' : 'show hint 2'}
                    </button>
                  </div>
                </div>

                {/* Hint Text Reveal boxes */}
                {(hint1Revealed || hint2Revealed) && (
                  <div className="flex flex-col gap-1.5 bg-neutral-900/40 border border-white/5 rounded-xl p-3 animate-in fade-in slide-in-from-top-1 duration-200">
                    {hint1Revealed && (
                      <p className="text-[11px] text-white/80 leading-normal font-light lowercase">
                        <span className="text-white/40 font-mono mr-1">hint 1:</span> {currentQuestion.hints[0]}
                      </p>
                    )}
                    {hint2Revealed && (
                      <p className="text-[11px] text-white/80 leading-normal font-light lowercase">
                        <span className="text-white/40 font-mono mr-1">hint 2:</span> {currentQuestion.hints[1]}
                      </p>
                    )}
                  </div>
                )}
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

      {/* Typerfish Game Overlay Modal */}
      {isTyperfishOpen && (
        <div 
          id="typerfish-game-overlay"
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex flex-col items-center justify-center p-4 md:p-6 animate-in fade-in zoom-in-95 duration-300 pointer-events-auto"
        >
          {/* Top Control Bar */}
          <div className="w-full max-w-5xl flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-xs tracking-wider font-mono text-neutral-400 uppercase">
                typerfish connection established
              </span>
            </div>
            <button
              onClick={() => setIsTyperfishOpen(false)}
              className="flex items-center gap-1.5 px-4 py-2 rounded-full border border-white/10 bg-neutral-900/90 text-white hover:bg-white hover:text-black transition-all duration-200 cursor-pointer text-xs font-mono lowercase"
            >
              ✕ close game
            </button>
          </div>

          {/* Game Iframe Container */}
          <div className="w-full max-w-5xl flex-1 bg-neutral-950 border border-white/10 rounded-2xl overflow-hidden shadow-2xl relative">
            <iframe 
              src="https://typerfish.vercel.app/" 
              title="Typerfish Game"
              className="w-full h-full border-none"
              allow="autoplay; keyboard; clipboard-write"
            />
          </div>
        </div>
      )}

      {/* Contact Details Overlay Modal */}
      {isContactOpen && (
        <div 
          id="contact-overlay"
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in zoom-in-95 duration-200 pointer-events-auto"
          onClick={() => setIsContactOpen(false)}
        >
          <div 
            className="w-full max-w-[340px] bg-neutral-950 border border-white/10 rounded-2xl p-6 shadow-2xl relative flex flex-col text-white"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-5">
              <span className="text-xs tracking-wider text-neutral-400 font-medium uppercase font-mono">
                holboo barih
              </span>
              <button
                onClick={() => setIsContactOpen(false)}
                className="text-neutral-400 hover:text-white transition-colors cursor-pointer text-sm font-mono"
              >
                ✕
              </button>
            </div>

            <p className="text-xs text-neutral-400 mb-5 leading-normal lowercase font-light">
              doroh holboosoor shuud holbogdoh bolomjtoi:
            </p>

            <div className="flex flex-col gap-3">
              {/* Phone contact */}
              <a 
                href="tel:+97694141978"
                className="flex items-center justify-between p-3.5 rounded-xl border border-white/10 bg-neutral-900/40 hover:bg-neutral-900 hover:border-white/20 transition-all duration-200 group"
              >
                <div className="flex flex-col">
                  <span className="text-[10px] text-neutral-500 font-mono uppercase tracking-wider">утас</span>
                  <span className="text-sm font-medium text-white font-mono mt-0.5 group-hover:text-white">+976 9414 1978</span>
                </div>
                <span className="text-xs text-neutral-400 group-hover:text-white transition-all group-hover:translate-x-0.5 duration-200">
                  zalgah →
                </span>
              </a>

              {/* Email contact */}
              <a 
                href="mailto:orgiltseren814@gmail.com"
                className="flex items-center justify-between p-3.5 rounded-xl border border-white/10 bg-neutral-900/40 hover:bg-neutral-900 hover:border-white/20 transition-all duration-200 group"
              >
                <div className="flex flex-col">
                  <span className="text-[10px] text-neutral-500 font-mono uppercase tracking-wider">мэйл</span>
                  <span className="text-sm font-medium text-white font-mono mt-0.5 group-hover:text-white">orgiltseren814@gmail.com</span>
                </div>
                <span className="text-xs text-neutral-400 group-hover:text-white transition-all group-hover:translate-x-0.5 duration-200">
                  bichih →
                </span>
              </a>
            </div>

            <button
              onClick={() => setIsContactOpen(false)}
              className="mt-6 w-full bg-white text-black py-2.5 rounded-xl text-sm font-medium hover:bg-neutral-200 transition-colors cursor-pointer text-center lowercase"
            >
              haah
            </button>
          </div>
        </div>
      )}

      {/* Instagram Selection Overlay Modal */}
      {isInstagramOpen && (
        <div 
          id="instagram-overlay"
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in zoom-in-95 duration-200 pointer-events-auto"
          onClick={() => setIsInstagramOpen(false)}
        >
          <div 
            className="w-full max-w-[340px] bg-neutral-950 border border-white/10 rounded-2xl p-6 shadow-2xl relative flex flex-col text-white"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-5">
              <span className="text-xs tracking-wider text-neutral-400 font-medium uppercase font-mono">
                instagram сонгох
              </span>
              <button
                onClick={() => setIsInstagramOpen(false)}
                className="text-neutral-400 hover:text-white transition-colors cursor-pointer text-sm font-mono"
              >
                ✕
              </button>
            </div>

            <p className="text-xs text-neutral-400 mb-5 leading-normal lowercase font-light">
              зочлохыг хүссэн инстаграм хаягаа сонгоно уу:
            </p>

            <div className="flex flex-col gap-3">
              {/* Orgil9_ instagram */}
              <a 
                href="https://instagram.com/orgil9_"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3.5 rounded-xl border border-white/10 bg-neutral-900/40 hover:bg-neutral-900 hover:border-white/20 transition-all duration-200 group"
              >
                <div className="flex flex-col">
                  <span className="text-[10px] text-neutral-500 font-mono uppercase tracking-wider">оргил</span>
                  <span className="text-sm font-medium text-white font-mono mt-0.5 group-hover:text-white">@orgil9_</span>
                </div>
                <span className="text-xs text-neutral-400 group-hover:text-white transition-all group-hover:translate-x-0.5 duration-200">
                  зочлох →
                </span>
              </a>

              {/* Tamirmadsuey instagram */}
              <a 
                href="https://instagram.com/tamirmadsuey"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3.5 rounded-xl border border-white/10 bg-neutral-900/40 hover:bg-neutral-900 hover:border-white/20 transition-all duration-200 group"
              >
                <div className="flex flex-col">
                  <span className="text-[10px] text-neutral-500 font-mono uppercase tracking-wider">тамир</span>
                  <span className="text-sm font-medium text-white font-mono mt-0.5 group-hover:text-white">@tamirmadsuey</span>
                </div>
                <span className="text-xs text-neutral-400 group-hover:text-white transition-all group-hover:translate-x-0.5 duration-200">
                  зочлох →
                </span>
              </a>
            </div>

            <button
              onClick={() => setIsInstagramOpen(false)}
              className="mt-6 w-full bg-white text-black py-2.5 rounded-xl text-sm font-medium hover:bg-neutral-200 transition-colors cursor-pointer text-center lowercase"
            >
              haah
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

