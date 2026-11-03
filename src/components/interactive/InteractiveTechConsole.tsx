'use client';

import React, { useState } from 'react';
import { SectionContainer } from '@/components/layout/SectionContainer';
import { ShieldCheck, Play, RotateCcw, Cpu, Globe, CheckCircle2, AlertTriangle, Zap } from 'lucide-react';

export const InteractiveTechConsole: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'security' | 'cdn' | 'pension'>('security');

  // VAPT Security simulation state
  const [securityScanning, setSecurityScanning] = useState(false);
  const [securityLogs, setSecurityLogs] = useState<string[]>([
    'System ready. OWASP Top 10 penetration suite loaded.',
    'Target endpoints: /api/v1/auth, /api/v1/disbursement, /api/v1/user',
  ]);
  const [scanComplete, setScanComplete] = useState(false);

  const runSecurityScan = () => {
    setSecurityScanning(true);
    setScanComplete(false);
    setSecurityLogs(['Initiating automated VAPT penetration scan...']);

    const steps = [
      'Probing /api/v1/auth for Cross-Site Scripting (XSS) injection vectors...',
      '-> PASS: Content-Security-Policy & context-aware output encoding verified.',
      'Injecting SQLMap automated payload suite against /api/v1/disbursement...',
      '-> PASS: Entity Framework parameterized queries enforced. 0 SQL injection leaks.',
      'Auditing JSON deserialization schemas against remote code execution...',
      '-> PASS: Strict polymorphic serialization types enforced.',
      'Verifying Web Application Firewall (WAF) rate limits & anti-CSRF cookies...',
      '-> PASS: WAF active (429 Too Many Requests on flood threshold).',
      'AUDIT COMPLETE: All OWASP Top 10 vectors hardened. Zero critical vulnerabilities found.',
    ];

    steps.forEach((step, index) => {
      setTimeout(() => {
        setSecurityLogs((prev) => [...prev, step]);
        if (index === steps.length - 1) {
          setSecurityScanning(false);
          setScanComplete(true);
        }
      }, (index + 1) * 350);
    });
  };

  // CDN Latency simulation state
  const [cdnNodes, setCdnNodes] = useState([
    { city: 'Kathmandu (Origin Edge)', ping: 18, status: 'Optimal', throughput: '1.2 Gbps' },
    { city: 'Mumbai (South Asia Edge)', ping: 42, status: 'Optimal', throughput: '980 Mbps' },
    { city: 'Singapore (APAC Hub)', ping: 68, status: 'Optimal', throughput: '1.4 Gbps' },
  ]);
  const [isOptimizingCdn, setIsOptimizingCdn] = useState(false);

  const simulateCdnOptimization = () => {
    setIsOptimizingCdn(true);
    setTimeout(() => {
      setCdnNodes([
        { city: 'Kathmandu (Origin Edge)', ping: 14, status: 'Accelerated', throughput: '1.6 Gbps' },
        { city: 'Mumbai (South Asia Edge)', ping: 35, status: 'Accelerated', throughput: '1.2 Gbps' },
        { city: 'Singapore (APAC Hub)', ping: 58, status: 'Accelerated', throughput: '1.8 Gbps' },
      ]);
      setIsOptimizingCdn(false);
    }, 1000);
  };

  // Pension engine calculation state
  const [recordsCount, setRecordsCount] = useState(5000);

  return (
    <SectionContainer
      id="console"
      badge="Interactive Lab"
      title="System Architecture & Performance Console"
      subtitle="Interact directly with simulations of systems I've built: run an OWASP security audit, benchmark CDN latency, or inspect batch calculation optimization."
    >
      <div className="bg-[#0b0f17] rounded-3xl p-6 sm:p-9 shadow-2xl shadow-black/40 overflow-hidden">
        {/* Console Header & Tab Switcher */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-full bg-emerald-500/10 text-emerald-400">
              <Cpu className="w-5 h-5" />
            </div>
            <div>
              <div className="text-base font-bold text-slate-100 font-mono flex items-center gap-2">
                <span>SYSTEM INSPECTOR v2.5</span>
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              </div>
              <div className="text-xs text-slate-400">
                Interactive Engineering Simulation Lab
              </div>
            </div>
          </div>

          {/* Mode Switcher Tabs (Rounded-full, no harsh borders) */}
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setActiveTab('security')}
              className={`px-4 py-2 rounded-full text-xs font-mono font-semibold transition-all ${
                activeTab === 'security'
                  ? 'bg-emerald-500 text-slate-950 shadow-md shadow-emerald-500/20'
                  : 'bg-[#080b11] text-slate-400 hover:text-white'
              }`}
            >
              VAPT Security Audit
            </button>
            <button
              onClick={() => setActiveTab('cdn')}
              className={`px-4 py-2 rounded-full text-xs font-mono font-semibold transition-all ${
                activeTab === 'cdn'
                  ? 'bg-emerald-500 text-slate-950 shadow-md shadow-emerald-500/20'
                  : 'bg-[#080b11] text-slate-400 hover:text-white'
              }`}
            >
              Video CDN Benchmark
            </button>
            <button
              onClick={() => setActiveTab('pension')}
              className={`px-4 py-2 rounded-full text-xs font-mono font-semibold transition-all ${
                activeTab === 'pension'
                  ? 'bg-emerald-500 text-slate-950 shadow-md shadow-emerald-500/20'
                  : 'bg-[#080b11] text-slate-400 hover:text-white'
              }`}
            >
              .NET Batch Engine
            </button>
          </div>
        </div>

        {/* Tab 1: VAPT Security Audit Simulator */}
        {activeTab === 'security' && (
          <div className="pt-6 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h4 className="text-lg font-bold text-slate-100 flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-emerald-400" />
                  <span>OWASP Top 10 Automated Penetration Test</span>
                </h4>
                <p className="text-xs text-slate-400 mt-1">
                  Simulates penetration testing routines run with Burp Suite and SQLMap against backend APIs.
                </p>
              </div>

              <div className="flex items-center gap-3">
                <button
                  disabled={securityScanning}
                  onClick={runSecurityScan}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-emerald-500 text-slate-950 font-bold text-xs hover:bg-emerald-400 disabled:opacity-50 transition-all shadow-md active:scale-95"
                >
                  <Play className="w-3.5 h-3.5 fill-slate-950" />
                  <span>{securityScanning ? 'Scanning Endpoints...' : 'Run Security Audit'}</span>
                </button>
                <button
                  onClick={() => {
                    setSecurityLogs([
                      'System ready. OWASP Top 10 penetration suite loaded.',
                      'Target endpoints: /api/v1/auth, /api/v1/disbursement, /api/v1/user',
                    ]);
                    setScanComplete(false);
                  }}
                  className="p-2.5 rounded-full bg-[#080b11] text-slate-400 hover:text-white transition-colors"
                  title="Reset logs"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Terminal Window */}
            <div className="bg-[#080b11] rounded-2xl p-5 font-mono text-xs text-slate-300 min-h-[260px] max-h-[340px] overflow-y-auto space-y-1.5 shadow-inner">
              <div className="text-[11px] text-slate-500 pb-2 flex items-center justify-between">
                <span>TERMINAL: owasp-vapt-runner --verbose</span>
                <span className="text-emerald-400">{securityScanning ? 'RUNNING' : 'IDLE'}</span>
              </div>
              {securityLogs.map((log, idx) => (
                <div
                  key={idx}
                  className={`leading-relaxed ${
                    log.includes('-> PASS')
                      ? 'text-emerald-400 font-semibold'
                      : log.includes('AUDIT COMPLETE')
                      ? 'text-cyan-300 font-bold bg-cyan-950/40 p-2 rounded-lg'
                      : 'text-slate-400'
                  }`}
                >
                  <span className="text-slate-600 mr-2">$</span>
                  {log}
                </div>
              ))}
            </div>

            {scanComplete && (
              <div className="p-4 rounded-2xl bg-emerald-500/10 text-emerald-300 text-xs flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                <span>
                  <strong>Audit Status: 100% Passed.</strong> All inputs sanitized, queries parameterized, and WAF rules active.
                </span>
              </div>
            )}
          </div>
        )}

        {/* Tab 2: Video CDN Latency Benchmark (Darvilab) */}
        {activeTab === 'cdn' && (
          <div className="pt-6 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h4 className="text-lg font-bold text-slate-100 flex items-center gap-2">
                  <Globe className="w-5 h-5 text-cyan-400" />
                  <span>Video Streaming CDN Architecture (Darvilab)</span>
                </h4>
                <p className="text-xs text-slate-400 mt-1">
                  Real-time edge cache ping and throughput simulation across geographic points of presence.
                </p>
              </div>

              <button
                disabled={isOptimizingCdn}
                onClick={simulateCdnOptimization}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-cyan-500 text-slate-950 font-bold text-xs hover:bg-cyan-400 transition-all shadow-md active:scale-95"
              >
                <Zap className="w-3.5 h-3.5 fill-slate-950" />
                <span>{isOptimizingCdn ? 'Optimizing Routes...' : 'Optimize Edge Routing'}</span>
              </button>
            </div>

            {/* Edge Nodes Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {cdnNodes.map((node, idx) => (
                <div key={idx} className="bg-[#080b11] rounded-2xl p-5 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-slate-200">{node.city}</span>
                    <span className="text-[11px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full">
                      {node.status}
                    </span>
                  </div>
                  <div>
                    <div className="text-2xl font-extrabold font-mono text-cyan-400">
                      {node.ping} ms
                    </div>
                    <div className="text-[11px] text-slate-500 font-mono mt-0.5">
                      Edge Latency (TTFB)
                    </div>
                  </div>
                  <div className="pt-2 text-xs font-mono text-slate-400 flex justify-between">
                    <span>Throughput:</span>
                    <span className="text-slate-200 font-bold">{node.throughput}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-4 rounded-2xl bg-cyan-500/10 text-cyan-300 text-xs leading-relaxed">
              💡 <strong>Architecture Note:</strong> Utilizes AWS CloudFront edge caching paired with adaptive bitrate HLS transcoding to deliver lag-free video streams across constrained mobile networks in South Asia.
            </div>
          </div>
        )}

        {/* Tab 3: .NET Core Batch Engine (Retirement Benefits) */}
        {activeTab === 'pension' && (
          <div className="pt-6 space-y-6">
            <div>
              <h4 className="text-lg font-bold text-slate-100 flex items-center gap-2">
                <Cpu className="w-5 h-5 text-emerald-400" />
                <span>Batch Calculation Optimization (ASP.NET Core &amp; SQL Server)</span>
              </h4>
              <p className="text-xs text-slate-400 mt-1">
                Visualizing how refactoring stored procedures and indexing increased processing speed by 25%.
              </p>
            </div>

            {/* Slider control */}
            <div className="bg-[#080b11] rounded-2xl p-5">
              <div className="flex justify-between items-center mb-3">
                <span className="text-xs font-medium text-slate-300">
                  Simulate Beneficiary Batch Size:
                </span>
                <span className="text-sm font-bold font-mono text-emerald-400">
                  {recordsCount.toLocaleString()} Users
                </span>
              </div>
              <input
                type="range"
                min="1000"
                max="20000"
                step="1000"
                value={recordsCount}
                onChange={(e) => setRecordsCount(Number(e.target.value))}
                className="w-full accent-emerald-500 h-2 bg-slate-800 rounded-lg cursor-pointer"
              />
            </div>

            {/* Speed Comparison Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-[#080b11] rounded-2xl p-5 space-y-2 opacity-75">
                <div className="text-xs font-mono text-slate-400 uppercase">Legacy Stored Procedure</div>
                <div className="text-3xl font-extrabold font-mono text-amber-400">
                  {((recordsCount / 1000) * 0.72).toFixed(2)}s
                </div>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Table scans, non-clustered index misses, synchronous single-row calculations.
                </p>
              </div>

              <div className="bg-[#080b11] rounded-2xl p-5 space-y-2">
                <div className="text-xs font-mono text-emerald-400 uppercase font-semibold">
                  Bibek&apos;s Optimized .NET Pipeline
                </div>
                <div className="text-3xl font-extrabold font-mono text-emerald-400">
                  {((recordsCount / 1000) * 0.54).toFixed(2)}s
                </div>
                <p className="text-xs text-emerald-300/80 leading-relaxed">
                  Indexed views, bulk memory table mapping, and multi-threaded calculation batches (25% faster).
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </SectionContainer>
  );
};

