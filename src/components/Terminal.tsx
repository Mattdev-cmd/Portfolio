import { useState, useRef, useEffect } from 'react';
import { Terminal as TerminalIcon, ArrowRight } from 'lucide-react';

interface HistoryItem {
  id: string;
  command?: string;
  output: React.ReactNode;
}

const COMMANDS = [
  'help',
  'about',
  'skills',
  'projects',
  'experience',
  'education',
  'certs',
  'socials',
  'theme',
  'game', 'rps',
  'quote',
  'clear',
];

const QUOTES = [
  "“Talk is cheap. Show me the code.” – Linus Torvalds",
  "“Programs must be written for people to read, and only secondarily for machines to execute.” – Harold Abelson",
  "“First, solve the problem. Then, write the code.” – John Johnson",
  "“Any fool can write code that a computer can understand. Good programmers write code that humans can understand.” – Martin Fowler",
  "“Experience is the name everyone gives to their mistakes.” – Oscar Wilde",
  "“Simplicity is the soul of efficiency.” – Austin Freeman",
  "“Make it work, make it right, make it fast.” – Kent Beck",
];

export default function Terminal() {
  const [history, setHistory] = useState<HistoryItem[]>([]);
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState<number>(-1);
  const [inputValue, setInputValue] = useState<string>('');
  const [theme, setTheme] = useState<'matrix' | 'cyberpunk' | 'amber' | 'mono'>('matrix');
  
  // Game state
  const [gameActive, setGameActive] = useState(false);
  const [targetNumber, setTargetNumber] = useState(0);
  const [attempts, setAttempts] = useState(0);
  // Rock Paper Scissors game state
  const [rpsActive, setRpsActive] = useState(false);
  const [rpsAttempts, setRpsAttempts] = useState(0);

  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Auto scroll to bottom
  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [history]);

  // Initial welcome message
  useEffect(() => {
    setHistory([
      {
        id: 'welcome',
        output: (
          <div className="space-y-2">
            <pre className="text-xs leading-none sm:text-sm font-bold opacity-90 select-none">
{`  ███╗   ███╗ █████╗ ████████╗████████╗██╗  ██╗███████╗██╗    ██╗
  ████╗ ████║██╔══██╗╚══██╔══╝╚══██╔══╝██║  ██║██╔════╝██║    ██║
  ██╔████╔██║███████║   ██║      ██║   ███████║█████╗  ██║ █╗ ██║
  ██║╚██╔╝██║██╔══██║   ██║      ██║   ██╔══██║██╔══╝  ██║███╗██║
  ██║ ╚═╝ ██║██║  ██║   ██║      ██║   ██║  ██║███████╗╚███╔███╔╝
  ╚═╝     ╚═╝╚═╝  ╚═╝   ╚═╝      ╚═╝   ╚═╝  ╚═╝╚══════╝ ╚══╝╚══╝ `}
            </pre>
            <p className="mt-4 font-bold text-base">Welcome to Matthew's Interactive CLI Resume (v1.0.0)</p>
            <p className="opacity-80">Type <span className="underline font-bold">help</span> to see a list of available commands, or explore my background interactively.</p>
            <p className="opacity-60 text-xs">Tip: Cycle command history with ↑/↓ keys or use Tab for autocomplete.</p>
          </div>
        ),
      },
    ]);
  }, []);

  // Focus input helper
  const focusInput = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  useEffect(() => {
    focusInput();
  }, []);

  // Theme helper styles
  const getThemeStyles = () => {
    switch (theme) {
      case 'matrix':
        return {
          bg: 'bg-black/95 border-emerald-500/30 text-emerald-400 shadow-[0_0_30px_rgba(16,185,129,0.15)]',
          prompt: 'text-emerald-500 font-bold',
          headerBg: 'bg-zinc-950 border-emerald-500/20',
          inputText: 'text-emerald-400 font-mono',
          badge: 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20',
          accentText: 'text-emerald-300 font-bold',
          scrollbar: 'scrollbar-matrix'
        };
      case 'cyberpunk':
        return {
          bg: 'bg-slate-950/95 border-pink-500/30 text-cyan-400 shadow-[0_0_30px_rgba(236,72,153,0.15)]',
          prompt: 'text-pink-500 font-bold',
          headerBg: 'bg-slate-900 border-pink-500/20',
          inputText: 'text-cyan-400 font-mono',
          badge: 'bg-pink-500/10 text-pink-400 border border-pink-500/20',
          accentText: 'text-purple-300 font-bold',
          scrollbar: 'scrollbar-cyberpunk'
        };
      case 'amber':
        return {
          bg: 'bg-black/95 border-amber-500/30 text-amber-500 shadow-[0_0_30px_rgba(245,158,11,0.15)]',
          prompt: 'text-amber-600 font-bold',
          headerBg: 'bg-neutral-950 border-amber-500/20',
          inputText: 'text-amber-500 font-mono',
          badge: 'bg-amber-500/10 text-amber-500 border border-amber-500/20',
          accentText: 'text-amber-400 font-bold',
          scrollbar: 'scrollbar-amber'
        };
      case 'mono':
        return {
          bg: 'bg-zinc-950/95 border-zinc-800 text-zinc-100 shadow-[0_0_30px_rgba(255,255,255,0.05)]',
          prompt: 'text-zinc-400 font-bold',
          headerBg: 'bg-zinc-900 border-zinc-800',
          inputText: 'text-zinc-100 font-mono',
          badge: 'bg-zinc-800 text-zinc-200 border border-zinc-700',
          accentText: 'text-white font-bold',
          scrollbar: 'scrollbar-mono'
        };
    }
  };

  const themeStyles = getThemeStyles();

  // Execute terminal commands
  const handleCommand = (cmdStr: string) => {
    const trimmed = cmdStr.trim();
    if (!trimmed) return;

    // Save to command history
    setCommandHistory(prev => [trimmed, ...prev.filter(c => c !== trimmed)].slice(0, 50));
    setHistoryIndex(-1);

    const historyId = Math.random().toString(36).substring(2, 9);
    
    // Check if in game mode
    if (gameActive) {
      handleGameInput(trimmed, historyId);
      return;
    }
    // Check if RPS game active
    if (rpsActive) {
      handleRpsInput(trimmed, historyId);
      return;
    }

    const args = trimmed.split(' ');
    const commandName = args[0].toLowerCase();
    const commandArg = args[1]?.toLowerCase();

    let outputNode: React.ReactNode;

    switch (commandName) {
      case 'help':
        outputNode = (
          <div className="space-y-2">
            <p className={themeStyles.accentText}>Available Commands:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-2 text-sm max-w-2xl">
              <div><span className="font-bold underline">about</span> - Brief bio & focus</div>
              <div><span className="font-bold underline">skills</span> - Tech stack breakdown</div>
              <div><span className="font-bold underline">projects</span> - Showcase of github work</div>
              <div><span className="font-bold underline">experience</span> - Internship detail summary</div>
              <div><span className="font-bold underline">education</span> - Schools & degrees</div>
              <div><span className="font-bold underline">certs</span> - Credentials & certifications</div>
              <div><span className="font-bold underline">socials</span> - GitHub, email, & phone</div>
              <div><span className="font-bold underline">theme [name]</span> - Change terminal skin</div>
              <div><span className="font-bold underline">game</span> - Start target guessing game</div>
              <div><span className="font-bold underline">rps</span> - Start rock paper scissors game</div>
              <div><span className="font-bold underline">quote</span> - Inspirational tech quote</div>
              <div><span className="font-bold underline">clear</span> - Wipe console contents</div>
            </div>
            <p className="text-xs opacity-60 mt-2">Themes: <span className="font-semibold">matrix</span>, <span className="font-semibold">cyberpunk</span>, <span className="font-semibold">amber</span>, <span className="font-semibold">mono</span></p>
          </div>
        );
        break;

      case 'about':
        outputNode = (
          <div className="space-y-3 max-w-3xl leading-relaxed">
            <p className="text-lg font-bold">Matthew Angelo Padayao</p>
            <p className="text-sm opacity-95">
              I am a Bachelor of Science in Information Technology graduate specializing in modern web design and system integration. 
              I design and develop responsive, user-friendly applications using React, Node.js, and TypeScript, with a key interest in writing robust, structured code.
            </p>
            <div className="flex flex-wrap gap-4 text-xs">
              <span className="font-bold">📍 Location: Parañaque City, Philippines</span>
              <span className="font-bold">💻 Focus: Web Development & IoT automation</span>
            </div>
          </div>
        );
        break;

      case 'skills':
        outputNode = (
          <div className="space-y-4 max-w-4xl">
            <p className={themeStyles.accentText}>Technical Skill Matrix:</p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="border border-white/10 p-3 bg-white/5 rounded">
                <p className="font-bold mb-2">Frontend Tools</p>
                <div className="flex flex-wrap gap-2">
                  {['React', 'TypeScript', 'Tailwind CSS', 'Vue', 'HTML5/CSS3', 'Vite'].map(s => (
                    <span key={s} className={`px-2 py-0.5 rounded text-xs ${themeStyles.badge}`}>{s}</span>
                  ))}
                </div>
              </div>
              <div className="border border-white/10 p-3 bg-white/5 rounded">
                <p className="font-bold mb-2">Backend & APIs</p>
                <div className="flex flex-wrap gap-2">
                  {['Node.js', 'FastAPI', 'Express', 'Django', 'REST APIs'].map(s => (
                    <span key={s} className={`px-2 py-0.5 rounded text-xs ${themeStyles.badge}`}>{s}</span>
                  ))}
                </div>
              </div>
              <div className="border border-white/10 p-3 bg-white/5 rounded">
                <p className="font-bold mb-2">Databases</p>
                <div className="flex flex-wrap gap-2">
                  {['MongoDB', 'PostgreSQL', 'MySQL', 'SQLite', 'Firebase'].map(s => (
                    <span key={s} className={`px-2 py-0.5 rounded text-xs ${themeStyles.badge}`}>{s}</span>
                  ))}
                </div>
              </div>
              <div className="border border-white/10 p-3 bg-white/5 rounded">
                <p className="font-bold mb-2">Dev Tools & Platforms</p>
                <div className="flex flex-wrap gap-2">
                  {['Git/GitHub', 'Android Studio', 'AWS', 'Figma'].map(s => (
                    <span key={s} className={`px-2 py-0.5 rounded text-xs ${themeStyles.badge}`}>{s}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );
        break;

      case 'projects':
        outputNode = (
          <div className="space-y-4 max-w-4xl">
            <p className={themeStyles.accentText}>GitHub Project Index:</p>
            <div className="space-y-3">
              {[
                { name: 'AI Speech Guidance Assistant', desc: 'AI speech assistant with real-time feedback and speech recognition.', tech: 'Python, AI/ML', url: 'https://github.com/Mattdev-cmd/AI-Speech-Guidance-Assistant' },
                { name: 'Visitor Management System', desc: 'Secure tracking of guest entries/exits with structured records.', tech: 'JS, HTML, CSS', url: 'https://github.com/Mattdev-cmd/visitor-management-system' },
                { name: 'PetFeeder', desc: 'Intelligent IoT pet feeding automat with scheduling capabilities.', tech: 'Python, IoT, Automation', url: 'https://github.com/Mattdev-cmd/PetFeeder' },
                { name: 'Optical Mark Recognition System', desc: 'Computer vision automated form processor and exam scorer.', tech: 'Dart, OpenCV', url: 'https://github.com/Mattdev-cmd/Optical-Mark-Recognition-System' },
                { name: 'HOA Tracker Application', desc: 'Financial tracker for HOA monthly dues and updates.', tech: 'Node.js, MongoDB', url: 'https://github.com/Mattdev-cmd/HOA-Tracker-Application' },
                { name: 'Intelligent Residential Vehicle Control System', desc: 'Smart gates monitoring and vehicle tracking logic.', tech: 'JS, Node.js, IoT', url: 'https://github.com/Mattdev-cmd/Intelligent-Residential-Vehicle-Control-System' },
              ].map((p, idx) => (
                <div key={idx} className="border-l-2 border-white/20 pl-3 py-1">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-sm text-white">{p.name}</span>
                    <span className="text-xs opacity-60">[{p.tech}]</span>
                  </div>
                  <p className="text-xs opacity-80 my-1">{p.desc}</p>
                  <a href={p.url} target="_blank" rel="noopener noreferrer" className="text-xs underline hover:opacity-85 break-all">
                    Link: {p.url}
                  </a>
                </div>
              ))}
            </div>
          </div>
        );
        break;

      case 'experience':
        outputNode = (
          <div className="space-y-4 max-w-4xl">
            <p className={themeStyles.accentText}>Work Experience Summary:</p>
            <div className="space-y-4">
              <div className="border-l-2 border-emerald-500 pl-3">
                <div className="flex flex-wrap items-baseline gap-2">
                  <span className="font-bold text-base text-white">Data Encoder/Technical Support Intern</span>
                  <span className="text-sm opacity-85">@ JLA Diagnostics</span>
                </div>
                <p className="text-xs opacity-60">Feb 2025 - Aug 2025 • On-site</p>
                <ul className="list-disc list-inside text-xs opacity-80 mt-1.5 space-y-1">
                  <li>Managed database entries and maintained system files securely</li>
                  <li>Handled hardware troubleshooting and technical support calls</li>
                  <li>Created and updated documentation for team databases</li>
                </ul>
              </div>

              <div className="border-l-2 border-blue-500 pl-3">
                <div className="flex flex-wrap items-baseline gap-2">
                  <span className="font-bold text-base text-white">Tech Support Intern</span>
                  <span className="text-sm opacity-85">@ Transient Manpower Services, Inc.</span>
                </div>
                <p className="text-xs opacity-60">Jun 2024 - Aug 2024 • On-site</p>
                <ul className="list-disc list-inside text-xs opacity-80 mt-1.5 space-y-1">
                  <li>Organized digital file cabinets and structural archive databases</li>
                  <li>Facilitated support ticket completions and resolved user concerns</li>
                  <li>Assisted in local network checks and system settings operations</li>
                </ul>
              </div>
            </div>
          </div>
        );
        break;

      case 'education':
        outputNode = (
          <div className="space-y-4 max-w-4xl">
            <p className={themeStyles.accentText}>Education Timeline:</p>
            <div className="space-y-3">
              <div>
                <p className="font-bold text-white text-base">Bachelor of Science in Information Technology</p>
                <p className="text-sm opacity-90">Infotech College of Arts and Sciences</p>
                <p className="text-xs opacity-60">2024 - 2025 | Parañaque City</p>
              </div>
              <div className="border-t border-white/5 pt-2">
                <p className="font-bold text-white">Secondary Education</p>
                <p className="text-sm opacity-90">Parañaque National High School Main</p>
                <p className="text-xs opacity-60">2021 - 2022</p>
              </div>
              <div className="border-t border-white/5 pt-2">
                <p className="font-bold text-white">Elementary Education</p>
                <p className="text-sm opacity-90">San Dionisio Elementary School</p>
                <p className="text-xs opacity-60">2014 - 2015</p>
              </div>
            </div>
          </div>
        );
        break;

      case 'certs':
        outputNode = (
          <div className="space-y-2 max-w-4xl">
            <p className={themeStyles.accentText}>Certifications & Credentials:</p>
            <ul className="list-disc list-inside space-y-1 text-sm opacity-90">
              <li><span className="font-semibold">Contact Center Servicing NC II</span> - Technical Education and Skills Development Authority (2024)</li>
              <li><span className="font-semibold">Computer System Servicing NC II</span> - Technical Education and Skills Development Authority (2024)</li>
              <li><span className="font-semibold">Visual Graphic Design Certification</span> (2024)</li>
            </ul>
          </div>
        );
        break;

      case 'socials':
        outputNode = (
          <div className="space-y-2">
            <p className={themeStyles.accentText}>Contact Links:</p>
            <div className="space-y-1 text-sm opacity-95">
              <p>Email: <a href="mailto:matthewangelopadayao2@gmail.com" className="underline hover:opacity-85">matthewangelopadayao2@gmail.com</a></p>
              <p>Phone: <a href="tel:+639943025722" className="underline hover:opacity-85">+63 994 302 5722</a></p>
              <p>GitHub: <a href="https://github.com/Mattdev-cmd" target="_blank" rel="noopener noreferrer" className="underline hover:opacity-85">github.com/Mattdev-cmd</a></p>
            </div>
          </div>
        );
        break;

      case 'theme':
        if (!commandArg) {
          outputNode = <p className="text-yellow-500">Usage: theme [matrix | cyberpunk | amber | mono]</p>;
        } else if (['matrix', 'cyberpunk', 'amber', 'mono'].includes(commandArg)) {
          setTheme(commandArg as any);
          outputNode = <p>Theme updated to <span className="font-bold underline">{commandArg}</span>.</p>;
        } else {
          outputNode = <p className="text-red-500">Theme '{commandArg}' not recognized. Try matrix, cyberpunk, amber, or mono.</p>;
        }
        break;

      case 'game':
        const randomNum = Math.floor(Math.random() * 100) + 1;
        setTargetNumber(randomNum);
        setAttempts(0);
        setGameActive(true);
        outputNode = (
          <div className="space-y-2 border border-yellow-500/20 p-3 bg-yellow-500/5 rounded">
            <p className="text-yellow-400 font-bold">🎮 Guess the Number Activated!</p>
            <p>I have chosen a random number between <span className="font-bold">1 and 100</span>.</p>
            <p>Type your guess below. Enter <span className="font-bold underline">exit</span> at any time to cancel.</p>
          </div>
        );
        break;

      case 'rps':
        setRpsActive(true);
        setRpsAttempts(0);
        outputNode = (
          <div className="space-y-2 border border-purple-500/20 p-3 bg-purple-500/5 rounded">
            <p className="text-purple-400 font-bold">🪨✂️📄 Rock Paper Scissors Activated!</p>
            <p>Type 'rock', 'paper', or 'scissors' to play. Type <span className="font-bold underline">exit</span> to quit.</p>
          </div>
        );
        break;

      case 'quote':
        const randomIndex = Math.floor(Math.random() * QUOTES.length);
        outputNode = <p className="italic opacity-90">{QUOTES[randomIndex]}</p>;
        break;

      case 'clear':
        setHistory([]);
        setInputValue('');
        return;

      default:
        outputNode = (
          <p className="text-red-400">
            Command not recognized: <span className="font-bold">{commandName}</span>. Type <span className="underline font-bold">help</span> for a list of valid commands.
          </p>
        );
        break;
    }

    setHistory(prev => [
      ...prev,
      { id: historyId, command: cmdStr, output: outputNode }
    ]);
    setInputValue('');
  };

  // Game Logic Parser
  const handleGameInput = (guessStr: string, historyId: string) => {
    const trimmed = guessStr.trim().toLowerCase();

    if (trimmed === 'exit' || trimmed === 'quit') {
      setGameActive(false);
      setHistory(prev => [
        ...prev,
        {
          id: historyId,
          command: guessStr,
          output: <p className="text-yellow-500">Game exited. Target number was {targetNumber}.</p>
        }
      ]);
      setInputValue('');
      return;
    }

    const guessNum = parseInt(trimmed, 10);
    let outputNode: React.ReactNode;

    if (isNaN(guessNum)) {
      outputNode = <p className="text-red-400">Please enter a valid number or type 'exit'.</p>;
    } else {
      const nextAttempts = attempts + 1;
      setAttempts(nextAttempts);

      if (guessNum === targetNumber) {
        setGameActive(false);
        outputNode = (
          <div className="text-green-400 font-bold space-y-1">
            <p>🎉 Correct! The number was {targetNumber}.</p>
            <p>You guessed it in {nextAttempts} attempts!</p>
          </div>
        );
      } else if (guessNum < targetNumber) {
        outputNode = <p>Too low! Try again (Guess #{nextAttempts + 1}).</p>;
      } else {
        outputNode = <p>Too high! Try again (Guess #{nextAttempts + 1}).</p>;
      }
    }

    setHistory(prev => [
      ...prev,
      { id: historyId, command: guessStr, output: outputNode }
    ]);
    setInputValue('');
  };

  // RPS Logic Parser
  const handleRpsInput = (inputStr: string, historyId: string) => {
    const trimmed = inputStr.trim().toLowerCase();

    if (trimmed === 'exit' || trimmed === 'quit') {
      setRpsActive(false);
      setHistory(prev => [
        ...prev,
        {
          id: historyId,
          command: inputStr,
          output: <p className="text-purple-500">RPS game exited after {rpsAttempts} rounds.</p>
        }
      ]);
      setInputValue('');
      return;
    }

    const choices = ['rock', 'paper', 'scissors'];
    if (!choices.includes(trimmed)) {
      setHistory(prev => [
        ...prev,
        {
          id: historyId,
          command: inputStr,
          output: <p className="text-red-400">Invalid choice. Pick rock, paper, or scissors.</p>
        }
      ]);
      setInputValue('');
      return;
    }

    const computerChoice = choices[Math.floor(Math.random() * 3)];
    const winMap: Record<string, string> = { rock: 'scissors', paper: 'rock', scissors: 'paper' };
    let resultNode: React.ReactNode;
    if (trimmed === computerChoice) {
      resultNode = <p className="text-yellow-400">Tie! Both chose {trimmed}.</p>;
    } else if (winMap[trimmed] === computerChoice) {
      resultNode = <p className="text-green-400">You win! {trimmed} beats {computerChoice}.</p>;
    } else {
      resultNode = <p className="text-red-400">You lose! {computerChoice} beats {trimmed}.</p>;
    }

    setRpsAttempts(prev => prev + 1);
    setHistory(prev => [
      ...prev,
      { id: historyId, command: inputStr, output: (
        <> 
          {resultNode}
          <p className="text-xs opacity-60">Play again or type <span className="font-bold underline">exit</span>.</p>
        </>
      ) }
    ]);
    setInputValue('');
  };

  // Autocomplete tab handler
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Tab') {
      e.preventDefault();
      if (!inputValue.trim()) return;

      const matches = COMMANDS.filter(cmd => cmd.startsWith(inputValue.toLowerCase()));

      if (matches.length === 1) {
        setInputValue(matches[0]);
      } else if (matches.length > 1) {
        // Output autocomplete options
        const historyId = Math.random().toString(36).substring(2, 9);
        setHistory(prev => [
          ...prev,
          {
            id: historyId,
            command: inputValue,
            output: <p className="opacity-60 text-xs">Matches: {matches.join(', ')}</p>
          }
        ]);
      }
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (commandHistory.length === 0) return;
      
      const nextIndex = historyIndex + 1;
      if (nextIndex < commandHistory.length) {
        setHistoryIndex(nextIndex);
        setInputValue(commandHistory[nextIndex]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      const nextIndex = historyIndex - 1;
      if (nextIndex >= 0) {
        setHistoryIndex(nextIndex);
        setInputValue(commandHistory[nextIndex]);
      } else {
        setHistoryIndex(-1);
        setInputValue('');
      }
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleCommand(inputValue);
  };

  return (
    <section id="terminal" className="bg-black py-24 px-6 relative">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(16,185,129,0.04),transparent_30%)]" />
      
      <div className="max-w-4xl mx-auto">
        <div className="mb-12 text-center sm:text-left">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-slate-500 dark:text-gray-500">
            PLAYGROUND
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Interactive Console
          </h2>
          <p className="text-gray-400 text-lg">
            Don't like scrolling? Query my profile directly using the CLI command prompt below.
          </p>
        </div>

        {/* Terminal frame */}
        <div
          onClick={focusInput}
          className={`flex flex-col h-[500px] border rounded-xl overflow-hidden transition-all duration-300 font-mono text-sm leading-relaxed ${themeStyles.bg}`}
        >
          {/* Windows Header bar */}
          <div className={`flex items-center px-4 py-3 border-b select-none shrink-0 ${themeStyles.headerBg}`}>
            <div className="flex gap-2">
              <span className="w-3.5 h-3.5 rounded-full bg-[#ff5f56]" />
              <span className="w-3.5 h-3.5 rounded-full bg-[#ffbd2e]" />
              <span className="w-3.5 h-3.5 rounded-full bg-[#27c93f]" />
            </div>
            <div className="flex-1 flex items-center justify-center gap-1.5 text-xs opacity-75 font-semibold -ml-12 text-white">
              <TerminalIcon size={12} />
              <span>guest@mattdev.cmd:~ (bash)</span>
            </div>
          </div>

          {/* Console logs */}
          <div
            ref={containerRef}
            className="flex-1 p-6 overflow-y-auto space-y-4 scrollbar-thin scroll-smooth"
          >
            {history.map((item) => (
              <div key={item.id} className="space-y-1">
                {item.command !== undefined && (
                  <div className="flex items-center gap-2">
                    <span className={themeStyles.prompt}>
                      guest@mattdev.cmd:~$
                    </span>
                    <span>{item.command}</span>
                  </div>
                )}
                <div className="opacity-95 pl-1">{item.output}</div>
              </div>
            ))}
          </div>

          {/* Prompt line */}
          <form
            onSubmit={handleSubmit}
            className={`flex items-center gap-2 px-6 py-4 border-t border-white/5 bg-black/40 shrink-0`}
          >
            <span className={themeStyles.prompt}>
              {gameActive ? 'game-input' : 'guest@mattdev.cmd'}:~$
            </span>
            <input
              ref={inputRef}
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleKeyDown}
              className={`flex-1 bg-transparent border-none outline-none focus:ring-0 p-0 text-sm caret-current ${themeStyles.inputText}`}
              placeholder={gameActive ? "Enter your guess..." : "Type 'help'..."}
              autoComplete="off"
              autoCorrect="off"
              autoCapitalize="off"
              spellCheck="false"
            />
            <button
              type="submit"
              className={`p-1.5 rounded-md hover:bg-white/10 transition text-white/50 hover:text-white`}
            >
              <ArrowRight size={16} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
