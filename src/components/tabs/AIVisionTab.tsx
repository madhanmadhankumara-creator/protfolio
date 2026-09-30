import React, { useState, useRef, useEffect } from 'react';
import { 
  Eye, 
  Sparkles, 
  Hand, 
  Smile, 
  ShieldAlert, 
  Users, 
  Car, 
  Brush, 
  Eraser, 
  RotateCcw, 
  Code2, 
  Layers, 
  Cpu, 
  CheckCircle2, 
  Play
} from 'lucide-react';
import { CV_PROJECTS } from '../../data/aerospaceData.ts';

export const AIVisionTab: React.FC = () => {
  // Interactive Air Canvas Simulation State
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [selectedColor, setSelectedColor] = useState('#f59e0b'); // amber default
  const [brushSize, setBrushSize] = useState(4);
  const [gestureMode, setGestureMode] = useState<'air_draw' | 'face_detect' | 'crowd_track'>('air_draw');
  const [activeGesture, setActiveGesture] = useState<string>('Index Finger Tracking (Drawing)');

  // Clear air canvas
  const handleClearCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  };

  const startDrawing = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const rect = canvas.getBoundingClientRect();
    const x = 'touches' in e ? e.touches[0].clientX - rect.left : e.clientX - rect.left;
    const y = 'touches' in e ? e.touches[0].clientY - rect.top : e.clientY - rect.top;

    ctx.beginPath();
    ctx.moveTo(x, y);
    setIsDrawing(true);
    setActiveGesture('Pinch / Draw Gesture Detected');
  };

  const draw = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    if (!isDrawing) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const rect = canvas.getBoundingClientRect();
    const x = 'touches' in e ? e.touches[0].clientX - rect.left : e.clientX - rect.left;
    const y = 'touches' in e ? e.touches[0].clientY - rect.top : e.clientY - rect.top;

    ctx.lineTo(x, y);
    ctx.strokeStyle = selectedColor;
    ctx.lineWidth = brushSize;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    ctx.stroke();
  };

  const stopDrawing = () => {
    setIsDrawing(false);
    setActiveGesture('Hover Hand Tracking Active');
  };

  // Draw initial demo message on mount
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Draw welcome gesture art
    ctx.font = '14px Poppins, sans-serif';
    ctx.fillStyle = '#71717a';
    ctx.fillText('⚡ Click & drag here to test Air Canvas virtual mid-air drawing!', 20, 40);
  }, []);

  return (
    <article className="space-y-8 animate-fadeIn">
      {/* Header */}
      <header className="border-b border-[#383838] pb-4">
        <div className="flex items-center gap-2 text-xs font-mono text-purple-400 mb-1">
          <Eye className="w-4 h-4" />
          <span>SPECIALIZED DOMAIN</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight flex items-center gap-3">
          <span>AI & Computer Vision</span>
          <span className="h-2 w-2 rounded-full bg-purple-400"></span>
        </h2>
        <p className="text-xs text-zinc-400 mt-1">
          Deep Learning, Real-Time OpenCV Pipelines, Hand Tracking, HCI & Aerial Drone Video Analytics
        </p>
      </header>

      {/* AI / CV Skill Stack Architecture */}
      <section className="p-6 rounded-2xl bg-[#1e1e1f] border border-[#383838] shadow-xl">
        <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2 text-purple-400">
          <Sparkles className="w-4 h-4" />
          <span>AI & Computer Vision Skill Stack</span>
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 text-xs">
          {/* Programming */}
          <div className="p-3.5 rounded-xl bg-[#2b2b2c] border border-[#383838]">
            <span className="text-[10px] uppercase font-bold text-zinc-400 block mb-2">Programming</span>
            <div className="flex flex-wrap gap-1">
              <span className="px-2 py-0.5 rounded bg-zinc-800 text-purple-300 font-mono">Python</span>
              <span className="px-2 py-0.5 rounded bg-zinc-800 text-zinc-300 font-mono">C</span>
              <span className="px-2 py-0.5 rounded bg-zinc-800 text-zinc-300 font-mono">MATLAB</span>
            </div>
          </div>

          {/* Computer Vision */}
          <div className="p-3.5 rounded-xl bg-[#2b2b2c] border border-[#383838]">
            <span className="text-[10px] uppercase font-bold text-zinc-400 block mb-2">Computer Vision</span>
            <div className="flex flex-wrap gap-1">
              <span className="px-2 py-0.5 rounded bg-zinc-800 text-purple-300 font-mono">OpenCV</span>
              <span className="px-2 py-0.5 rounded bg-zinc-800 text-zinc-300">Object Detect</span>
              <span className="px-2 py-0.5 rounded bg-zinc-800 text-zinc-300">Hand Track</span>
              <span className="px-2 py-0.5 rounded bg-zinc-800 text-zinc-300">Face Detect</span>
            </div>
          </div>

          {/* AI / ML */}
          <div className="p-3.5 rounded-xl bg-[#2b2b2c] border border-[#383838]">
            <span className="text-[10px] uppercase font-bold text-zinc-400 block mb-2">AI / Deep Learning</span>
            <div className="flex flex-wrap gap-1">
              <span className="px-2 py-0.5 rounded bg-zinc-800 text-purple-300 font-mono">PyTorch</span>
              <span className="px-2 py-0.5 rounded bg-zinc-800 text-zinc-300">CNN Models</span>
              <span className="px-2 py-0.5 rounded bg-zinc-800 text-zinc-300">Scikit-Learn</span>
            </div>
          </div>

          {/* 3D / Reconstruction */}
          <div className="p-3.5 rounded-xl bg-[#2b2b2c] border border-[#383838]">
            <span className="text-[10px] uppercase font-bold text-zinc-400 block mb-2">3D & SLAM</span>
            <div className="flex flex-wrap gap-1">
              <span className="px-2 py-0.5 rounded bg-zinc-800 text-purple-300 font-mono">Open3D</span>
              <span className="px-2 py-0.5 rounded bg-zinc-800 text-zinc-300 font-mono">COLMAP</span>
              <span className="px-2 py-0.5 rounded bg-zinc-800 text-zinc-300">SfM / SLAM</span>
            </div>
          </div>

          {/* Visualization */}
          <div className="p-3.5 rounded-xl bg-[#2b2b2c] border border-[#383838]">
            <span className="text-[10px] uppercase font-bold text-zinc-400 block mb-2">Visualization</span>
            <div className="flex flex-wrap gap-1">
              <span className="px-2 py-0.5 rounded bg-zinc-800 text-purple-300 font-mono">Matplotlib</span>
              <span className="px-2 py-0.5 rounded bg-zinc-800 text-zinc-300 font-mono">Plotly</span>
              <span className="px-2 py-0.5 rounded bg-zinc-800 text-zinc-300 font-mono">OpenGL</span>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Air Canvas / Vision Simulator */}
      <section className="p-6 rounded-2xl bg-gradient-to-b from-[#1e1e1f] to-[#181819] border border-purple-500/30 shadow-2xl space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-medium bg-purple-400/15 text-purple-300 border border-purple-400/30 mb-1">
              <Play className="w-3 h-3 text-purple-400" />
              <span>Interactive Vision Lab</span>
            </div>
            <h3 className="text-base font-bold text-white">
              Air Canvas & Virtual Gesture Playground
            </h3>
            <p className="text-xs text-zinc-400">
              Simulating the camera gesture tracking mechanism behind Air Canvas & AirDrawer
            </p>
          </div>

          {/* Color & Tool Controls */}
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-xs text-zinc-400 font-medium">Color:</span>
            {['#f59e0b', '#38bdf8', '#a855f7', '#10b981', '#ef4444'].map((color) => (
              <button
                key={color}
                onClick={() => setSelectedColor(color)}
                className={`w-6 h-6 rounded-full transition-transform cursor-pointer ${
                  selectedColor === color ? 'scale-125 ring-2 ring-white ring-offset-2 ring-offset-zinc-900' : 'opacity-70 hover:opacity-100'
                }`}
                style={{ backgroundColor: color }}
                title={`Select ${color}`}
              />
            ))}

            <button
              onClick={handleClearCanvas}
              className="ml-2 px-3 py-1.5 rounded-xl text-xs bg-[#2b2b2c] hover:bg-zinc-700 text-zinc-200 border border-[#383838] flex items-center gap-1 transition-colors cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Clear</span>
            </button>
          </div>
        </div>

        {/* Live Canvas Area */}
        <div className="relative rounded-2xl overflow-hidden border border-[#383838] bg-zinc-950/80 shadow-inner">
          <canvas
            ref={canvasRef}
            width={720}
            height={260}
            onMouseDown={startDrawing}
            onMouseMove={draw}
            onMouseUp={stopDrawing}
            onMouseLeave={stopDrawing}
            onTouchStart={startDrawing}
            onTouchMove={draw}
            onTouchEnd={stopDrawing}
            className="w-full h-[220px] sm:h-[260px] cursor-crosshair touch-none"
          />

          {/* Status Overlay */}
          <div className="absolute top-3 left-3 flex items-center gap-2 pointer-events-none">
            <span className="px-2.5 py-1 rounded-md text-[10px] font-mono bg-black/80 text-purple-300 border border-purple-500/30 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse"></span>
              {activeGesture}
            </span>
          </div>

          <div className="absolute bottom-3 right-3 text-[10px] font-mono text-zinc-500 pointer-events-none">
            Virtual OpenCV 21-Landmark Hand Track Engine
          </div>
        </div>
      </section>

      {/* 9 Dedicated AI & Computer Vision Projects Grid */}
      <section>
        <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
          <span>Featured AI & Computer Vision Applications (9 Systems)</span>
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {CV_PROJECTS.map((proj) => {
            const getIcon = () => {
              switch (proj.detectionType) {
                case 'hand':
                case 'gesture':
                  return <Hand className="w-5 h-5 text-amber-400" />;
                case 'face':
                  return <Smile className="w-5 h-5 text-purple-400" />;
                case 'crowd':
                  return <Users className="w-5 h-5 text-cyan-400" />;
                case 'canvas':
                  return <Brush className="w-5 h-5 text-pink-400" />;
                default:
                  return <Eye className="w-5 h-5 text-emerald-400" />;
              }
            };

            return (
              <div
                key={proj.id}
                className="p-5 rounded-2xl bg-[#1e1e1f] border border-[#383838] hover:border-purple-400/40 transition-all flex flex-col justify-between group shadow-xl"
              >
                <div>
                  {/* Category & Icon */}
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-9 h-9 rounded-xl bg-[#2b2b2c] border border-[#383838] flex items-center justify-center">
                      {getIcon()}
                    </div>
                    <span className="text-[10px] font-mono text-zinc-400 bg-[#2b2b2c] px-2 py-0.5 rounded border border-[#383838]">
                      {proj.category.split('&')[0]}
                    </span>
                  </div>

                  {/* Title */}
                  <h4 className="text-sm font-bold text-white group-hover:text-purple-400 transition-colors">
                    {proj.title}
                  </h4>

                  {/* Description */}
                  <p className="text-xs text-zinc-400 mt-2 leading-relaxed">
                    {proj.description}
                  </p>

                  {/* Key Highlights */}
                  <ul className="mt-3 space-y-1.5 pt-2 border-t border-[#2b2b2c]">
                    {proj.highlights.map((h, idx) => (
                      <li key={idx} className="flex items-start gap-1.5 text-[11px] text-zinc-300">
                        <span className="w-1 h-1 rounded-full bg-purple-400 mt-1.5 shrink-0"></span>
                        <span className="leading-snug">{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Skills tags */}
                <div className="flex flex-wrap gap-1 mt-4 pt-3 border-t border-[#2b2b2c]">
                  {proj.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-2 py-0.5 rounded text-[10px] bg-[#2b2b2c] text-zinc-300 border border-[#383838] font-mono"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </article>
  );
};
