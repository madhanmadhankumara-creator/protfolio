import React, { useState, useEffect, useRef } from 'react';
import { 
  X, 
  Rocket, 
  Play, 
  RotateCcw, 
  Trophy, 
  Shield, 
  Zap, 
  Radio, 
  Volume2, 
  VolumeX,
  Compass,
  Sparkles
} from 'lucide-react';

interface AstraNovaGameModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AstraNovaGameModal: React.FC<AstraNovaGameModalProps> = ({ isOpen, onClose }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [gameState, setGameState] = useState<'menu' | 'playing' | 'gameover' | 'victory'>('menu');
  const [score, setScore] = useState<number>(0);
  const [shields, setShields] = useState<number>(100);
  const [distanceKm, setDistanceKm] = useState<number>(0);
  const [soundEnabled, setSoundEnabled] = useState<boolean>(true);
  const [highScore, setHighScore] = useState<number>(0);

  // Audio Synth via Web Audio API
  const audioCtxRef = useRef<AudioContext | null>(null);

  const playSound = (type: 'thrust' | 'collect' | 'hit' | 'win') => {
    if (!soundEnabled) return;
    try {
      if (!audioCtxRef.current) {
        audioCtxRef.current = new (window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext)();
      }
      const ctx = audioCtxRef.current;
      if (ctx.state === 'suspended') {
        ctx.resume();
      }
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain);
      gain.connect(ctx.destination);

      const now = ctx.currentTime;
      if (type === 'collect') {
        osc.type = 'sine';
        osc.frequency.setValueAtTime(587.33, now); // D5
        osc.frequency.exponentialRampToValueAtTime(880, now + 0.15); // A5
        gain.gain.setValueAtTime(0.15, now);
        gain.gain.linearRampToValueAtTime(0.01, now + 0.15);
        osc.start(now);
        osc.stop(now + 0.15);
      } else if (type === 'hit') {
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(140, now);
        osc.frequency.linearRampToValueAtTime(40, now + 0.25);
        gain.gain.setValueAtTime(0.2, now);
        gain.gain.linearRampToValueAtTime(0.01, now + 0.25);
        osc.start(now);
        osc.stop(now + 0.25);
      } else if (type === 'thrust') {
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(180, now);
        osc.frequency.linearRampToValueAtTime(260, now + 0.08);
        gain.gain.setValueAtTime(0.08, now);
        gain.gain.linearRampToValueAtTime(0.01, now + 0.08);
        osc.start(now);
        osc.stop(now + 0.08);
      } else if (type === 'win') {
        osc.type = 'sine';
        osc.frequency.setValueAtTime(440, now);
        osc.frequency.exponentialRampToValueAtTime(880, now + 0.3);
        gain.gain.setValueAtTime(0.2, now);
        gain.gain.linearRampToValueAtTime(0.01, now + 0.4);
        osc.start(now);
        osc.stop(now + 0.4);
      }
    } catch {
      // Audio fallback silent
    }
  };

  useEffect(() => {
    if (!isOpen) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    let currentShields = 100;
    let currentScore = 0;
    let currentDistance = 0;

    // Ship State
    const ship = {
      x: canvas.width / 2,
      y: canvas.height - 70,
      width: 32,
      height: 40,
      vx: 0,
      speed: 6.5
    };

    // Stars background
    const stars: { x: number; y: number; size: number; speed: number; brightness: number }[] = [];
    for (let i = 0; i < 70; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2 + 0.5,
        speed: Math.random() * 2.5 + 1,
        brightness: Math.random() * 0.8 + 0.2
      });
    }

    // Hazards (Meteoroids)
    interface Hazard {
      x: number;
      y: number;
      radius: number;
      speed: number;
      rot: number;
      rotSpeed: number;
    }
    const hazards: Hazard[] = [];

    // Probes (Collectibles)
    interface Probe {
      x: number;
      y: number;
      radius: number;
      speed: number;
      pulse: number;
    }
    const probes: Probe[] = [];

    // Controls
    const keys: Record<string, boolean> = {};
    const handleKeyDown = (e: KeyboardEvent) => {
      keys[e.key.toLowerCase()] = true;
      if (['arrowleft', 'arrowright', 'a', 'd', ' '].includes(e.key.toLowerCase())) {
        e.preventDefault();
      }
    };
    const handleKeyUp = (e: KeyboardEvent) => {
      keys[e.key.toLowerCase()] = false;
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    let spawnTimer = 0;

    const gameLoop = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Deep space background gradient
      const bgGrad = ctx.createLinearGradient(0, 0, 0, canvas.height);
      bgGrad.addColorStop(0, '#060814');
      bgGrad.addColorStop(0.5, '#0b0f1d');
      bgGrad.addColorStop(1, '#05070e');
      ctx.fillStyle = bgGrad;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Starfield rendering
      for (const star of stars) {
        star.y += star.speed;
        if (star.y > canvas.height) {
          star.y = 0;
          star.x = Math.random() * canvas.width;
        }
        ctx.fillStyle = `rgba(255, 255, 255, ${star.brightness})`;
        ctx.fillRect(star.x, star.y, star.size, star.size);
      }

      if (gameState === 'playing') {
        currentDistance += 0.25;
        setDistanceKm(Math.floor(currentDistance));

        // Victory condition: reach 400 km orbital altitude
        if (currentDistance >= 380 && gameState === 'playing') {
          setGameState('victory');
          playSound('win');
          return;
        }

        // Handle ship movement
        if (keys['arrowleft'] || keys['a']) {
          ship.x -= ship.speed;
          playSound('thrust');
        }
        if (keys['arrowright'] || keys['d']) {
          ship.x += ship.speed;
          playSound('thrust');
        }

        // Clamp inside canvas
        if (ship.x < ship.width / 2 + 10) ship.x = ship.width / 2 + 10;
        if (ship.x > canvas.width - ship.width / 2 - 10) ship.x = canvas.width - ship.width / 2 - 10;

        // Spawn hazards and probes
        spawnTimer++;
        if (spawnTimer % 45 === 0) {
          hazards.push({
            x: Math.random() * (canvas.width - 60) + 30,
            y: -20,
            radius: Math.random() * 12 + 10,
            speed: Math.random() * 2 + 2.8,
            rot: 0,
            rotSpeed: (Math.random() - 0.5) * 0.05
          });
        }

        if (spawnTimer % 75 === 0) {
          probes.push({
            x: Math.random() * (canvas.width - 60) + 30,
            y: -15,
            radius: 9,
            speed: Math.random() * 1.5 + 2.2,
            pulse: 0
          });
        }

        // Update & Render Hazards
        for (let i = hazards.length - 1; i >= 0; i--) {
          const h = hazards[i];
          h.y += h.speed;
          h.rot += h.rotSpeed;

          // Draw space debris asteroid
          ctx.save();
          ctx.translate(h.x, h.y);
          ctx.rotate(h.rot);
          ctx.beginPath();
          ctx.fillStyle = '#6b7280';
          ctx.strokeStyle = '#9ca3af';
          ctx.lineWidth = 1.5;
          ctx.arc(0, 0, h.radius, 0, Math.PI * 2);
          ctx.fill();
          ctx.stroke();

          // Asteroid crater detail
          ctx.fillStyle = '#4b5563';
          ctx.beginPath();
          ctx.arc(h.radius * 0.3, -h.radius * 0.2, h.radius * 0.3, 0, Math.PI * 2);
          ctx.fill();
          ctx.restore();

          // Collision detection with Ship
          const dx = ship.x - h.x;
          const dy = ship.y - h.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < h.radius + 14) {
            hazards.splice(i, 1);
            currentShields -= 25;
            setShields(Math.max(0, currentShields));
            playSound('hit');

            if (currentShields <= 0) {
              setGameState('gameover');
              return;
            }
            continue;
          }

          if (h.y > canvas.height + 40) {
            hazards.splice(i, 1);
          }
        }

        // Update & Render Probes (Science Telemetry Packets)
        for (let i = probes.length - 1; i >= 0; i--) {
          const p = probes[i];
          p.y += p.speed;
          p.pulse += 0.1;

          // Glowing Science Crystal / Probe
          const glow = Math.sin(p.pulse) * 4 + 8;
          ctx.save();
          ctx.translate(p.x, p.y);
          ctx.shadowBlur = glow;
          ctx.shadowColor = '#38bdf8';

          // Diamond probe geometry
          ctx.beginPath();
          ctx.fillStyle = '#38bdf8';
          ctx.moveTo(0, -p.radius);
          ctx.lineTo(p.radius, 0);
          ctx.lineTo(0, p.radius);
          ctx.lineTo(-p.radius, 0);
          ctx.closePath();
          ctx.fill();

          ctx.fillStyle = '#ffffff';
          ctx.beginPath();
          ctx.arc(0, 0, 3, 0, Math.PI * 2);
          ctx.fill();
          ctx.restore();

          // Collection Collision with Ship
          const dx = ship.x - p.x;
          const dy = ship.y - p.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < p.radius + 16) {
            probes.splice(i, 1);
            currentScore += 150;
            setScore(currentScore);
            setHighScore(prev => Math.max(prev, currentScore));
            playSound('collect');
            continue;
          }

          if (p.y > canvas.height + 30) {
            probes.splice(i, 1);
          }
        }

        // Draw Player Spacecraft (Astra Nova Probe)
        ctx.save();
        ctx.translate(ship.x, ship.y);

        // Rocket Engine Plume (animated thruster glow)
        const plumeLength = Math.random() * 12 + 16;
        const plumeGrad = ctx.createLinearGradient(0, 16, 0, 16 + plumeLength);
        plumeGrad.addColorStop(0, '#f59e0b');
        plumeGrad.addColorStop(0.5, '#ef4444');
        plumeGrad.addColorStop(1, 'rgba(239, 68, 68, 0)');
        ctx.fillStyle = plumeGrad;
        ctx.beginPath();
        ctx.moveTo(-6, 16);
        ctx.lineTo(6, 16);
        ctx.lineTo(0, 16 + plumeLength);
        ctx.closePath();
        ctx.fill();

        // Hull body (aerodynamic delta spacecraft)
        ctx.fillStyle = '#f8fafc';
        ctx.strokeStyle = '#f59e0b';
        ctx.lineWidth = 1.8;
        ctx.beginPath();
        ctx.moveTo(0, -20); // nose tip
        ctx.lineTo(14, 14); // right wing tip
        ctx.lineTo(8, 16);
        ctx.lineTo(0, 12); // tail center
        ctx.lineTo(-8, 16);
        ctx.lineTo(-14, 14); // left wing tip
        ctx.closePath();
        ctx.fill();
        ctx.stroke();

        // Cockpit canopy
        ctx.fillStyle = '#0284c7';
        ctx.beginPath();
        ctx.ellipse(0, -4, 4, 9, 0, 0, Math.PI * 2);
        ctx.fill();

        // Shield Bubble if shields active
        if (currentShields > 0) {
          ctx.strokeStyle = `rgba(56, 189, 248, ${currentShields / 250 + 0.15})`;
          ctx.lineWidth = 1.5;
          ctx.beginPath();
          ctx.arc(0, 0, 24, 0, Math.PI * 2);
          ctx.stroke();
        }

        ctx.restore();
      }

      animationId = requestAnimationFrame(gameLoop);
    };

    animationId = requestAnimationFrame(gameLoop);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, [isOpen, gameState, soundEnabled]);

  const startGame = () => {
    setGameState('playing');
    setScore(0);
    setShields(100);
    setDistanceKm(0);
  };

  const moveShip = (direction: 'left' | 'right') => {
    if (gameState !== 'playing') return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    playSound('thrust');
    const evt = new KeyboardEvent('keydown', { key: direction === 'left' ? 'ArrowLeft' : 'ArrowRight' });
    window.dispatchEvent(evt);
    setTimeout(() => {
      const upEvt = new KeyboardEvent('keyup', { key: direction === 'left' ? 'ArrowLeft' : 'ArrowRight' });
      window.dispatchEvent(upEvt);
    }, 120);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-fadeIn">
      <div 
        className="w-full max-w-2xl bg-[#18181b] border-2 border-amber-400/40 rounded-3xl overflow-hidden shadow-2xl flex flex-col max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Game Title Bar */}
        <div className="px-5 py-3.5 bg-gradient-to-r from-[#242427] to-[#1a1a1d] border-b border-[#383838] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-xl bg-amber-400/20 border border-amber-400/40 flex items-center justify-center text-amber-400">
              <Rocket className="w-4 h-4" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-sm sm:text-base font-bold text-white tracking-wide">
                  ASTRA NOVA: MISSION HORIZON
                </h3>
                <span className="text-[10px] font-mono bg-amber-400/10 text-amber-400 px-2 py-0.5 rounded border border-amber-400/30">
                  YASSC 2026 Game Entry
                </span>
              </div>
              <p className="text-[11px] text-zinc-400">
                Aerospace-Themed Flight Simulation & Hazard Evasion Game developed by Madhankumar A
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setSoundEnabled(!soundEnabled)}
              className="p-2 rounded-xl bg-[#2b2b2c] hover:bg-zinc-700 text-zinc-300 transition-colors"
              title={soundEnabled ? 'Mute Audio' : 'Enable Audio'}
            >
              {soundEnabled ? <Volume2 className="w-4 h-4 text-amber-400" /> : <VolumeX className="w-4 h-4 text-zinc-500" />}
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-[#2b2b2c] hover:bg-red-500/20 hover:text-red-400 text-zinc-400 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Telemetry Dashboard HUD */}
        <div className="grid grid-cols-4 gap-2 p-3 bg-[#111215] border-b border-[#2d2d30] text-center font-mono">
          <div className="p-2 rounded-xl bg-[#1e1e22] border border-[#333338]">
            <span className="text-[10px] text-zinc-400 block uppercase">Telemetry Pts</span>
            <span className="text-sm sm:text-base font-bold text-amber-400">{score}</span>
          </div>
          <div className="p-2 rounded-xl bg-[#1e1e22] border border-[#333338]">
            <span className="text-[10px] text-zinc-400 block uppercase">Shields</span>
            <span className={`text-sm sm:text-base font-bold ${shields > 40 ? 'text-cyan-400' : 'text-red-400'}`}>
              {shields}%
            </span>
          </div>
          <div className="p-2 rounded-xl bg-[#1e1e22] border border-[#333338]">
            <span className="text-[10px] text-zinc-400 block uppercase">Orbit Altitude</span>
            <span className="text-sm sm:text-base font-bold text-white">{distanceKm} / 380 km</span>
          </div>
          <div className="p-2 rounded-xl bg-[#1e1e22] border border-[#333338]">
            <span className="text-[10px] text-zinc-400 block uppercase">High Score</span>
            <span className="text-sm sm:text-base font-bold text-purple-400">{highScore}</span>
          </div>
        </div>

        {/* Main Canvas Area */}
        <div className="relative flex-1 bg-black flex items-center justify-center overflow-hidden min-h-[360px] sm:min-h-[420px]">
          <canvas
            ref={canvasRef}
            width={480}
            height={440}
            className="w-full max-w-[480px] h-auto block select-none"
          />

          {/* Start Menu Overlay */}
          {gameState === 'menu' && (
            <div className="absolute inset-0 bg-black/80 flex flex-col items-center justify-center p-6 text-center space-y-4 animate-fadeIn">
              <div className="w-16 h-16 rounded-2xl bg-amber-400/20 border border-amber-400/40 flex items-center justify-center text-amber-400 shadow-xl shadow-amber-500/20 animate-pulse">
                <Rocket className="w-8 h-8 -rotate-45" />
              </div>
              <div>
                <h4 className="text-xl sm:text-2xl font-black text-white tracking-wide">
                  ASTRA NOVA: MISSION HORIZON
                </h4>
                <p className="text-xs text-amber-400 font-mono mt-1">
                  Youth Astronomy & Space Science Congress (YASSC) 2026 Game Entry
                </p>
              </div>
              <p className="text-xs text-zinc-300 max-w-sm leading-relaxed">
                Pilot the Astra Nova deep space probe to reach <strong>380 km Orbital Insertion</strong>. Collect glowing <span className="text-cyan-400 font-bold">Science Crystals</span> while evading micro-meteoroid fields!
              </p>
              <div className="text-[11px] text-zinc-400 font-mono bg-[#1e1e22] px-3 py-1.5 rounded-lg border border-zinc-700">
                Controls: <strong>A / D</strong> or <strong>Left / Right Arrow Keys</strong> or Touch Buttons
              </div>
              <button
                onClick={startGame}
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-zinc-950 font-bold text-sm flex items-center gap-2 shadow-lg shadow-amber-500/30 transition-all cursor-pointer"
              >
                <Play className="w-4 h-4 fill-zinc-950" />
                <span>Launch Mission</span>
              </button>
            </div>
          )}

          {/* Game Over Overlay */}
          {gameState === 'gameover' && (
            <div className="absolute inset-0 bg-red-950/85 backdrop-blur-sm flex flex-col items-center justify-center p-6 text-center space-y-4 animate-fadeIn">
              <div className="w-14 h-14 rounded-2xl bg-red-500/20 border border-red-500/40 flex items-center justify-center text-red-400">
                <Shield className="w-7 h-7" />
              </div>
              <div>
                <h4 className="text-2xl font-black text-white tracking-wide">
                  HULL COMPROMISED
                </h4>
                <p className="text-xs text-red-300 font-mono mt-1">
                  Shield integrity exhausted at {distanceKm} km altitude.
                </p>
              </div>
              <div className="p-3 bg-[#1e1e22] rounded-xl border border-zinc-700 text-xs text-zinc-300 font-mono">
                Final Telemetry Score: <strong className="text-amber-400">{score}</strong>
              </div>
              <button
                onClick={startGame}
                className="px-5 py-2.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-zinc-950 font-bold text-xs flex items-center gap-2 shadow-lg transition-all cursor-pointer"
              >
                <RotateCcw className="w-4 h-4" />
                <span>Relaunch Probe</span>
              </button>
            </div>
          )}

          {/* Victory Overlay */}
          {gameState === 'victory' && (
            <div className="absolute inset-0 bg-emerald-950/85 backdrop-blur-sm flex flex-col items-center justify-center p-6 text-center space-y-4 animate-fadeIn">
              <div className="w-14 h-14 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 shadow-xl shadow-emerald-500/30">
                <Trophy className="w-7 h-7" />
              </div>
              <div>
                <h4 className="text-2xl font-black text-white tracking-wide">
                  ORBIT ACHIEVED!
                </h4>
                <p className="text-xs text-emerald-300 font-mono mt-1">
                  Astra Nova successfully established 380 km stable LEO orbit!
                </p>
              </div>
              <div className="p-3 bg-[#1e1e22] rounded-xl border border-zinc-700 text-xs text-zinc-300 font-mono">
                Total Science Packets: <strong className="text-amber-400">{score} pts</strong>
              </div>
              <button
                onClick={startGame}
                className="px-5 py-2.5 rounded-xl bg-emerald-400 hover:bg-emerald-300 text-zinc-950 font-bold text-xs flex items-center gap-2 shadow-lg transition-all cursor-pointer"
              >
                <RotateCcw className="w-4 h-4" />
                <span>Play Mission Again</span>
              </button>
            </div>
          )}
        </div>

        {/* Mobile / Screen Touch Navigation Controls */}
        <div className="p-3 bg-[#18181b] border-t border-[#383838] flex items-center justify-between gap-3">
          <div className="text-[11px] text-zinc-400 font-mono hidden sm:block">
            YASSC Space Science Congress · Developed with Web Canvas & Physics
          </div>
          <div className="flex items-center gap-3 w-full sm:w-auto justify-center">
            <button
              onMouseDown={() => moveShip('left')}
              onTouchStart={() => moveShip('left')}
              className="flex-1 sm:flex-initial px-5 py-2.5 rounded-xl bg-[#2b2b2c] active:bg-amber-400 active:text-zinc-950 border border-[#383838] text-xs font-bold text-white transition-colors"
            >
              ◀ Thrust Left
            </button>
            <button
              onMouseDown={() => moveShip('right')}
              onTouchStart={() => moveShip('right')}
              className="flex-1 sm:flex-initial px-5 py-2.5 rounded-xl bg-[#2b2b2c] active:bg-amber-400 active:text-zinc-950 border border-[#383838] text-xs font-bold text-white transition-colors"
            >
              Thrust Right ▶
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
