import { useEffect, useRef } from 'react';
import { animate } from 'motion';
import { Link } from 'react-router-dom';

export default function QuickStart() {
  const contentRef = useRef(null);

  useEffect(() => {
    if (contentRef.current) {
      animate(contentRef.current, 
        { opacity: [0, 1], y: [30, 0] }, 
        { duration: 0.8 }
      );
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 text-slate-800 pt-20 pb-12 px-6">
      <div ref={contentRef} className="max-w-6xl mx-auto opacity-0">
        {/* Header */}
        <div className="text-center mb-16">
          <Link 
            to="/"
            className="inline-flex items-center text-amber-600 hover:text-amber-700 transition-colors mb-6"
          >
            ← Back to Home
          </Link>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-amber-500 via-orange-500 to-red-500">
            Complete Setup Guide
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            A comprehensive guide to get your AI companion up and running in Minecraft. From basic installation to advanced configuration.
          </p>
        </div>

        {/* Quick Installation for Users */}
        <section className="mb-16 p-8 bg-white/70 backdrop-blur-xl rounded-3xl border border-amber-200 shadow-lg">
          <div className="flex items-center mb-8">
            <div className="w-12 h-12 bg-gradient-to-r from-amber-400 to-orange-400 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
              1
            </div>
            <h2 className="text-3xl font-bold text-slate-800">Quick Installation (For Players)</h2>
          </div>

          <div className="mb-8 p-6 bg-gradient-to-r from-amber-100 to-orange-100 rounded-2xl border border-amber-200">
            <h4 className="text-xl font-bold text-amber-800 mb-3">🚨 Important: All Steps Required</h4>
            <p className="text-amber-700 mb-4">
              <strong>All users must complete steps 1-7</strong> to play with the AI companion. Ollama setup (step 3) is mandatory even when using external API providers, as the embedding model runs locally.
            </p>
            <p className="text-sm text-amber-600 italic">
              Development setup (step 8) is only needed if you want to modify the source code or contribute to the project.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 bg-gradient-to-br from-emerald-100 to-green-100 rounded-2xl border border-emerald-200">
              <h3 className="text-xl font-bold text-emerald-800 mb-4">Minecraft</h3>
              <p className="text-emerald-700 font-semibold mb-2">Version 1.21.1 (Latest)</p>
              <p className="text-slate-600 text-sm mb-3">Support for 1.20.6 and below has been dropped</p>
              <div className="text-xs text-emerald-600 bg-emerald-50 p-2 rounded">
                Must have Fabric Loader installed
              </div>
            </div>
            
            <div className="p-6 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl border border-blue-200">
              <h3 className="text-xl font-bold text-blue-800 mb-4">Java 21</h3>
              <p className="text-blue-700 font-semibold mb-2">Liberica JDK Recommended</p>
              <p className="text-slate-600 text-sm mb-3">Required for compatibility with Carpet mod's updated API</p>
              <a href="https://bell-sw.com/pages/downloads/#jdk-21-lts" 
                 className="text-xs text-blue-600 hover:text-blue-800 underline" 
                 target="_blank" rel="noopener noreferrer">
                Download Java 21 →
              </a>
            </div>
            
            <div className="p-6 bg-gradient-to-br from-purple-100 to-violet-100 rounded-2xl border border-purple-200">
              <h3 className="text-xl font-bold text-purple-800 mb-4">Fabric Carpet</h3>
              <p className="text-purple-700 font-semibold mb-2">Core Dependency</p>
              <p className="text-slate-600 text-sm mb-3">AI Player relies on Carpet mod's internal code</p>
              <a href="https://github.com/gnembon/fabric-carpet" 
                 className="text-xs text-purple-600 hover:text-purple-800 underline" 
                 target="_blank" rel="noopener noreferrer">
                View Carpet Mod →
              </a>
            </div>
          </div>
        </section>

        {/* Download Section */}
        <section className="mb-16 p-8 bg-white/70 backdrop-blur-xl rounded-3xl border border-orange-200 shadow-lg">
          <div className="flex items-center mb-8">
            <div className="w-12 h-12 bg-gradient-to-r from-orange-400 to-red-400 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
              2
            </div>
            <h2 className="text-3xl font-bold text-slate-800">Download AI Player Mod</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <a 
              href="https://github.com/shasankp000/AI-Player/releases" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group p-6 bg-gradient-to-br from-slate-100 to-gray-100 rounded-2xl border border-slate-200 hover:border-slate-300 transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              <div className="text-3xl mb-4">🐙</div>
              <h4 className="text-xl font-bold text-slate-800 mb-2">GitHub Releases</h4>
              <p className="text-slate-600 text-sm mb-2">Latest development builds and source code</p>
              <div className="text-xs text-slate-500 mb-4">v1.0.5.2-release+1.21.1</div>
              <div className="mt-4 text-amber-600 group-hover:text-amber-700 font-semibold">Download →</div>
            </a>

            <a 
              href="https://modrinth.com/mod/ai-player/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group p-6 bg-gradient-to-br from-green-100 to-emerald-100 rounded-2xl border border-green-200 hover:border-green-300 transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              <div className="text-3xl mb-4">📦</div>
              <h4 className="text-xl font-bold text-green-800 mb-2">Modrinth</h4>
              <p className="text-green-600 text-sm mb-2">Recommended platform with automatic updates</p>
              <div className="text-xs text-green-500 mb-4">Most up-to-date footage</div>
              <div className="mt-4 text-amber-600 group-hover:text-amber-700 font-semibold">Download →</div>
            </a>

            <a 
              href="https://www.curseforge.com/minecraft/mc-mods/ai-player" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group p-6 bg-gradient-to-br from-orange-100 to-red-100 rounded-2xl border border-orange-200 hover:border-orange-300 transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              <div className="text-3xl mb-4">🔥</div>
              <h4 className="text-xl font-bold text-orange-800 mb-2">CurseForge</h4>
              <p className="text-orange-600 text-sm mb-2">Popular mod platform with modpack integration</p>
              <div className="text-xs text-orange-500 mb-4">Easy installation</div>
              <div className="mt-4 text-amber-600 group-hover:text-amber-700 font-semibold">Download →</div>
            </a>
          </div>

          <div className="p-6 bg-gradient-to-r from-amber-100 to-yellow-100 rounded-2xl border border-amber-200">
            <h4 className="text-xl font-bold text-amber-800 mb-3">📋 Dependencies & Credits</h4>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h5 className="font-semibold text-amber-800 mb-2">Required Dependencies:</h5>
                <ul className="text-amber-700 space-y-1 text-sm">
                  <li>• <strong>Fabric Carpet Mod</strong> - Core functionality base</li>
                  <li>• <strong>Fabric API</strong> - Mod loading framework</li>
                  <li>• <strong>Java 21 Runtime</strong> - Required for execution</li>
                  <li>• <strong>ollama4j</strong> - AI integration library (auto-included)</li>
                </ul>
              </div>
              <div>
                <h5 className="font-semibold text-amber-800 mb-2">Recommended Add-ons:</h5>
                <ul className="text-amber-700 space-y-1 text-sm">
                  <li>• <strong>ModMenu</strong> - Enhanced configuration interface</li>
                  <li>• <strong>Fabric Language Kotlin</strong> - Additional features</li>
                  <li>• <strong>JEI/REI</strong> - Recipe viewing (optional)</li>
                  <li>• <strong>Launcher Support</strong> - All major launchers supported</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Ollama Setup Section */}
        <section className="mb-16 p-8 bg-white/70 backdrop-blur-xl rounded-3xl border border-yellow-200 shadow-lg">
          <div className="flex items-center mb-8">
            <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-amber-400 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
              3
            </div>
            <h2 className="text-3xl font-bold text-slate-800">Setup Ollama (AI Backend)</h2>
          </div>

          <div className="mb-8 p-6 bg-gradient-to-r from-red-100 to-pink-100 rounded-2xl border border-red-200">
            <h4 className="text-xl font-bold text-red-800 mb-3">🚨 Required for ALL Users</h4>
            <p className="text-red-700 mb-4">
              <strong>Ollama is mandatory for everyone</strong> - even if you plan to use OpenAI, Claude, Gemini, or other external providers. The embedding model (nomic-embed-text) runs locally and is essential for the AI's functionality.
            </p>
            <div className="text-sm text-red-600 bg-red-50 p-3 rounded">
              <strong>Note:</strong> This requirement will be removed in a future update when embedding functionality is moved to external providers, but for now, Ollama is non-optional.
            </div>
          </div>

          <div className="mb-8 p-6 bg-gradient-to-r from-blue-100 to-cyan-100 rounded-2xl border border-blue-200">
            <h4 className="text-xl font-bold text-blue-800 mb-3">🤖 What is Ollama?</h4>
            <p className="text-blue-700 mb-4">
              Ollama is the AI backend that powers your bot's intelligence. It runs locally on your machine and provides the language models that enable natural conversation.
            </p>
            <div className="text-sm text-blue-600 bg-blue-50 p-3 rounded">
              <strong>For External API Users:</strong> You'll still need Ollama running for the embedding model, but your main conversations will use your chosen external provider (OpenAI, Claude, etc.).
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <h4 className="text-xl font-bold text-slate-800 mb-4">📥 Download & Install</h4>
                <div className="p-4 bg-slate-100 rounded-lg mb-4">
                  <div className="flex items-center mb-3">
                    <img src="https://github.com/user-attachments/assets/c28798e4-c7bf-4faf-88e5-76315f88f0d1" 
                         alt="Ollama Download" className="w-12 h-12 mr-3 rounded" />
                    <div>
                      <h5 className="font-semibold text-slate-800">Ollama Official</h5>
                      <a href="https://ollama.com/" className="text-sm text-blue-600 hover:text-blue-800" target="_blank" rel="noopener noreferrer">
                        Download for your OS →
                      </a>
                    </div>
                  </div>
                  <p className="text-sm text-slate-600">
                    Available for Windows, macOS, and Linux. The installer will set up the Ollama server automatically.
                  </p>
                </div>
              </div>

              <div>
                <h4 className="text-xl font-bold text-slate-800 mb-4">🚀 Launch Ollama Server</h4>
                <div className="p-4 bg-green-100 rounded-lg">
                  <div className="flex items-center mb-3">
                    <img src="https://github.com/user-attachments/assets/3ed6468e-0e8c-4723-ac80-1ab77a7208d4" 
                         alt="Ollama System Tray" className="w-8 h-8 mr-3" />
                    <div>
                      <h5 className="font-semibold text-green-800">System Tray Access</h5>
                      <p className="text-sm text-green-600">Run Ollama from desktop, accessible in system tray</p>
                    </div>
                  </div>
                  <div className="text-sm text-green-700 bg-green-50 p-2 rounded mt-2">
                    💡 Make sure Ollama server is running before launching Minecraft!
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h4 className="text-xl font-bold text-slate-800 mb-4">⚡ Install AI Models</h4>
                
                <div className="mb-4 p-4 bg-blue-100 rounded-lg border border-blue-200">
                  <h5 className="font-semibold text-blue-800 mb-2">📋 Required Models</h5>
                  <div className="text-sm text-blue-700 space-y-1">
                    <p>• <strong>nomic-embed-text</strong> - Required for embedding functionality (all users)</p>
                    <p>• <strong>qwen2.5:7b</strong> - Only needed if using Ollama as your local LLM provider</p>
                  </div>
                </div>

                <div className="p-4 bg-slate-800 text-green-400 rounded-lg font-mono text-sm">
                  <div className="mb-2 text-slate-300"># Open Command Prompt or Terminal</div>
                  <div className="space-y-2">
                    <div className="text-slate-400"># Required for all users (embedding model):</div>
                    <div><span className="text-yellow-400">$</span> ollama pull nomic-embed-text</div>
                    <div className="mt-4 text-slate-400"># Only if using Ollama as LLM provider:</div>
                    <div><span className="text-yellow-400">$</span> ollama pull qwen2.5:7b</div>
                    <div className="mt-4 text-slate-400"># For previous users, clean up old models:</div>
                    <div><span className="text-yellow-400">$</span> ollama rm gemma2</div>
                    <div><span className="text-yellow-400">$</span> ollama rm llama2</div>
                    <div><span className="text-yellow-400">$</span> ollama rm llama3.2</div>
                  </div>
                </div>

                <div className="mt-4 p-4 bg-green-100 rounded-lg border border-green-200">
                  <h5 className="font-semibold text-green-800 mb-2">💡 Model Usage Guide</h5>
                  <div className="text-sm text-green-700 space-y-2">
                    <p><strong>Using External API Providers?</strong> You only need <code className="bg-green-200 px-1 rounded">nomic-embed-text</code> for embeddings. Your LLM will be provided by OpenAI, Claude, Gemini, etc.</p>
                    <p><strong>Using Ollama Locally?</strong> Install both models above. Qwen2.5:7b provides excellent local performance with reasonable hardware requirements.</p>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-xl font-bold text-slate-800 mb-4">🗑️ Clean Previous Config</h4>
                <div className="p-4 bg-yellow-100 rounded-lg border border-yellow-200">
                  <h5 className="font-semibold text-yellow-800 mb-2">For Previous Users Only:</h5>
                  <p className="text-yellow-700 text-sm mb-2">
                    Navigate to your <code className="bg-yellow-200 px-1 rounded">.minecraft/config</code> folder and delete <code className="bg-yellow-200 px-1 rounded">settings.json5</code>
                  </p>
                  <div className="text-xs text-yellow-600 bg-yellow-50 p-2 rounded">
                    This ensures compatibility with the new configuration system
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* JVM Arguments Section */}
        <section className="mb-16 p-8 bg-white/70 backdrop-blur-xl rounded-3xl border border-teal-200 shadow-lg">
          <div className="flex items-center mb-8">
            <div className="w-12 h-12 bg-gradient-to-r from-teal-400 to-cyan-400 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
              4
            </div>
            <h2 className="text-3xl font-bold text-slate-800">JVM Arguments Setup (Critical)</h2>
          </div>

          <div className="mb-6 p-4 bg-red-100 rounded-lg border border-red-200">
            <h4 className="text-lg font-bold text-red-800 mb-2">🚨 Important: Required Before Launch</h4>
            <p className="text-red-700 text-sm">
              You <strong>must</strong> provide the appropriate JVM argument before launching Minecraft, or the mod will not work properly.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-xl font-bold text-slate-800 mb-4">🔧 Available Providers</h4>
              <div className="space-y-3">
                <div className="p-3 bg-blue-50 rounded-lg border border-blue-200">
                  <h5 className="font-semibold text-blue-800">Local Ollama (Default)</h5>
                  <code className="text-sm text-blue-700 bg-blue-100 px-2 py-1 rounded">-Daiplayer.llmMode=ollama</code>
                  <p className="text-xs text-blue-600 mt-1">Use local Ollama models (recommended for privacy)</p>
                </div>
                
                <div className="p-3 bg-green-50 rounded-lg border border-green-200">
                  <h5 className="font-semibold text-green-800">OpenAI</h5>
                  <code className="text-sm text-green-700 bg-green-100 px-2 py-1 rounded">-Daiplayer.llmMode=openai</code>
                  <p className="text-xs text-green-600 mt-1">GPT-3.5, GPT-4, GPT-4o models</p>
                </div>
                
                <div className="p-3 bg-purple-50 rounded-lg border border-purple-200">
                  <h5 className="font-semibold text-purple-800">Anthropic Claude</h5>
                  <code className="text-sm text-purple-700 bg-purple-100 px-2 py-1 rounded">-Daiplayer.llmMode=claude</code>
                  <p className="text-xs text-purple-600 mt-1">Claude-3, Claude-3.5 Sonnet</p>
                </div>
                
                <div className="p-3 bg-orange-50 rounded-lg border border-orange-200">
                  <h5 className="font-semibold text-orange-800">Google Gemini</h5>
                  <code className="text-sm text-orange-700 bg-orange-100 px-2 py-1 rounded">-Daiplayer.llmMode=gemini</code>
                  <p className="text-xs text-orange-600 mt-1">Gemini Pro, Ultra models</p>
                </div>
                
                <div className="p-3 bg-cyan-50 rounded-lg border border-cyan-200">
                  <h5 className="font-semibold text-cyan-800">xAI Grok</h5>
                  <code className="text-sm text-cyan-700 bg-cyan-100 px-2 py-1 rounded">-Daiplayer.llmMode=grok</code>
                  <p className="text-xs text-cyan-600 mt-1">Latest Grok models</p>
                </div>
                
                <div className="p-3 bg-indigo-50 rounded-lg border border-indigo-200">
                  <h5 className="font-semibold text-indigo-800">Custom OpenAI-Compatible</h5>
                  <code className="text-sm text-indigo-700 bg-indigo-100 px-2 py-1 rounded">-Daiplayer.llmMode=custom</code>
                  <p className="text-xs text-indigo-600 mt-1">OpenRouter, TogetherAI, Perplexity, Groq, etc.</p>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-xl font-bold text-slate-800 mb-4">📝 How to Add JVM Arguments</h4>
              <div className="space-y-4">
                <div className="p-4 bg-slate-100 rounded-lg">
                  <h5 className="font-semibold text-slate-800 mb-2">Minecraft Launcher (Official)</h5>
                  <ol className="text-sm text-slate-700 space-y-1 list-decimal list-inside">
                    <li>Open Minecraft Launcher</li>
                    <li>Go to "Installations" tab</li>
                    <li>Click the three dots on your profile</li>
                    <li>Select "Edit"</li>
                    <li>Click "More Options"</li>
                    <li>Add to "JVM Arguments" field</li>
                  </ol>
                </div>
                
                <div className="p-4 bg-slate-100 rounded-lg">
                  <h5 className="font-semibold text-slate-800 mb-2">Modrinth App</h5>
                  <ol className="text-sm text-slate-700 space-y-1 list-decimal list-inside">
                    <li>Open your modpack/profile</li>
                    <li>Click "Options" → "Edit"</li>
                    <li>Go to "Java" tab</li>
                    <li>Add to "JVM arguments" field</li>
                  </ol>
                </div>
                
                <div className="p-4 bg-slate-100 rounded-lg">
                  <h5 className="font-semibold text-slate-800 mb-2">CurseForge / Other Launchers</h5>
                  <ol className="text-sm text-slate-700 space-y-1 list-decimal list-inside">
                    <li>Go to your modpack settings</li>
                    <li>Find "Java Settings" or "Additional Arguments"</li>
                    <li>Add the argument to JVM/Java arguments</li>
                  </ol>
                </div>
              </div>

              <div className="mt-4 p-4 bg-yellow-100 rounded-lg border border-yellow-200">
                <h5 className="font-semibold text-yellow-800 mb-2">⚠️ Important Note</h5>
                <p className="text-sm text-yellow-700">
                  Even when using custom API providers, Ollama must still be running since the embedding model (nomic-embed-text) is local and required. This will be separated in a future update.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* API Configuration Section */}
        <section className="mb-16 p-8 bg-white/70 backdrop-blur-xl rounded-3xl border border-indigo-200 shadow-lg">
          <div className="flex items-center mb-8">
            <div className="w-12 h-12 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
              5
            </div>
            <h2 className="text-3xl font-bold text-slate-800">API Configuration</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-6 bg-gradient-to-br from-indigo-100 to-blue-100 rounded-2xl border border-indigo-200">
              <h4 className="text-xl font-bold text-indigo-800 mb-4">🔐 Supported AI Providers</h4>
              <div className="space-y-3">
                <div className="flex items-center p-3 bg-white rounded-lg border border-indigo-200">
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                  <div>
                    <h5 className="font-semibold text-indigo-800">OpenAI</h5>
                    <p className="text-xs text-indigo-600">GPT-3.5, GPT-4, GPT-4o models</p>
                  </div>
                </div>
                <div className="flex items-center p-3 bg-white rounded-lg border border-indigo-200">
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                  <div>
                    <h5 className="font-semibold text-indigo-800">Anthropic Claude</h5>
                    <p className="text-xs text-indigo-600">Claude-3, Claude-3.5 Sonnet</p>
                  </div>
                </div>
                <div className="flex items-center p-3 bg-white rounded-lg border border-indigo-200">
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                  <div>
                    <h5 className="font-semibold text-indigo-800">Google Gemini</h5>
                    <p className="text-xs text-indigo-600">Gemini Pro, Ultra models</p>
                  </div>
                </div>
                <div className="flex items-center p-3 bg-white rounded-lg border border-indigo-200">
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                  <div>
                    <h5 className="font-semibold text-indigo-800">xAI Grok</h5>
                    <p className="text-xs text-indigo-600">Latest Grok models</p>
                  </div>
                </div>
                <div className="flex items-center p-3 bg-white rounded-lg border border-indigo-200">
                  <div className="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
                  <div>
                    <h5 className="font-semibold text-indigo-800">Custom OpenAI-Compatible</h5>
                    <p className="text-xs text-indigo-600">OpenRouter, TogetherAI, Perplexity, Groq, etc.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 bg-gradient-to-br from-green-100 to-emerald-100 rounded-2xl border border-green-200">
              <h4 className="text-xl font-bold text-green-800 mb-4">🛠️ Configuration Steps</h4>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-xs font-bold mr-3 mt-1">1</div>
                  <div>
                    <h5 className="font-semibold text-green-800">Launch Minecraft</h5>
                    <p className="text-sm text-green-700">Start the game with AI Player mod installed</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-xs font-bold mr-3 mt-1">2</div>
                  <div>
                    <h5 className="font-semibold text-green-800">Open Config Manager</h5>
                    <p className="text-sm text-green-700">Type <code className="bg-green-200 px-1 rounded">/configMan</code> in chat</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-xs font-bold mr-3 mt-1">3</div>
                  <div>
                    <h5 className="font-semibold text-green-800">Select Your Model</h5>
                    <p className="text-sm text-green-700">Choose qwen3:8b (if using Ollama) or configure external API provider</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-xs font-bold mr-3 mt-1">4</div>
                  <div>
                    <h5 className="font-semibold text-green-800">Set API Keys (Optional)</h5>
                    <p className="text-sm text-green-700">Configure external AI providers if desired</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 p-4 bg-green-50 rounded-lg border border-green-200">
                <img src="https://cdn.modrinth.com/data/cached_images/e5ab3e3d23978a96312c6528fd27f996d279adcc_0.webp" 
                     alt="Config Manager UI" className="w-full rounded-lg mb-3" />
                <p className="text-xs text-green-600 text-center">New responsive Config Manager UI with search functionality</p>
              </div>
            </div>
          </div>
        </section>

        {/* Custom Provider Setup */}
        <section className="mb-16 p-8 bg-white/70 backdrop-blur-xl rounded-3xl border border-purple-200 shadow-lg">
          <div className="flex items-center mb-8">
            <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
              6
            </div>
            <h2 className="text-3xl font-bold text-slate-800">Custom API Providers & Web Search (Advanced)</h2>
          </div>

          <div className="mb-6 p-4 bg-purple-100 rounded-lg border border-purple-200">
            <h4 className="text-lg font-bold text-purple-800 mb-2">🔧 OpenAI-Compatible Providers</h4>
            <p className="text-purple-700 text-sm">
              Use alternative AI providers that follow the OpenAI API standard for potentially better performance or cost savings.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-xl font-bold text-slate-800 mb-4">🚀 Setup Instructions</h4>
              <div className="space-y-4">
                <div className="p-4 bg-slate-100 rounded-lg">
                  <h5 className="font-semibold text-slate-800 mb-2">1. Enable Custom Mode</h5>
                  <p className="text-sm text-slate-700 mb-2">Add JVM argument when launching:</p>
                  <code className="text-xs bg-slate-800 text-green-400 p-2 rounded block">-Daiplayer.llmMode=custom</code>
                </div>
                
                <div className="p-4 bg-slate-100 rounded-lg">
                  <h5 className="font-semibold text-slate-800 mb-2">2. Clean Config</h5>
                  <p className="text-sm text-slate-700">Delete existing <code>settings.json5</code> in config folder (save API keys first)</p>
                </div>
                
                <div className="p-4 bg-slate-100 rounded-lg">
                  <h5 className="font-semibold text-slate-800 mb-2">3. Configure in-game</h5>
                  <p className="text-sm text-slate-700">Open <code>/configMan</code> → API Keys → Set Custom API URL and Key</p>
                </div>
                
                <div className="p-4 bg-slate-100 rounded-lg">
                  <h5 className="font-semibold text-slate-800 mb-2">4. Refresh Models</h5>
                  <p className="text-sm text-slate-700">Hit "Refresh Models" button if list doesn't appear immediately</p>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-xl font-bold text-slate-800 mb-4">🌐 Supported Providers</h4>
              <div className="space-y-3">
                <div className="p-3 bg-blue-50 rounded-lg border border-blue-200">
                  <h5 className="font-semibold text-blue-800">OpenRouter</h5>
                  <code className="text-xs text-blue-600">https://openrouter.ai/api/v1</code>
                </div>
                <div className="p-3 bg-green-50 rounded-lg border border-green-200">
                  <h5 className="font-semibold text-green-800">TogetherAI</h5>
                  <code className="text-xs text-green-600">https://api.together.xyz/v1</code>
                </div>
                <div className="p-3 bg-purple-50 rounded-lg border border-purple-200">
                  <h5 className="font-semibold text-purple-800">Perplexity</h5>
                  <code className="text-xs text-purple-600">https://api.perplexity.ai/</code>
                </div>
                <div className="p-3 bg-orange-50 rounded-lg border border-orange-200">
                  <h5 className="font-semibold text-orange-800">Groq</h5>
                  <code className="text-xs text-orange-600">https://api.groq.com/openai/v1</code>
                </div>
                <div className="p-3 bg-slate-50 rounded-lg border border-slate-200">
                  <h5 className="font-semibold text-slate-800">Local LM Studio</h5>
                  <code className="text-xs text-slate-600">http://localhost:1234/v1</code>
                </div>
              </div>

              <div className="mt-6 p-4 bg-yellow-100 rounded-lg border border-yellow-200">
                <h5 className="font-semibold text-yellow-800 mb-2">⚠️ Web Search Configuration</h5>
                <p className="text-sm text-yellow-700 mb-3">
                  Configure web search functionality for enhanced AI knowledge:
                </p>
                
                <div className="space-y-3">
                  <div className="p-3 bg-white rounded-lg border border-yellow-300">
                    <h6 className="font-semibold text-yellow-800 text-sm">Gemini Search (Automatic)</h6>
                    <p className="text-xs text-yellow-700">Uses your LLM API key automatically if Gemini is selected</p>
                  </div>
                  
                  <div className="p-3 bg-white rounded-lg border border-yellow-300">
                    <h6 className="font-semibold text-yellow-800 text-sm">Serper.dev Search</h6>
                    <p className="text-xs text-yellow-700 mb-2">1. Get API key from <a href="https://serper.dev/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">serper.dev</a></p>
                    <p className="text-xs text-yellow-700 mb-2">2. Navigate to config folder in-game</p>
                    <p className="text-xs text-yellow-700">3. Open <code className="bg-yellow-200 px-1 rounded">ai_search_config.json</code> and add your key</p>
                  </div>
                </div>
                
                <img src="https://cdn.modrinth.com/data/cached_images/b3dbb07a9e166d4d0860d490d8d5d938e4e6cd50.png" 
                     alt="Web Search Config" className="w-full mt-3 rounded" />
                <p className="text-xs text-yellow-600 text-center mt-1">Example ai_search_config.json configuration</p>
              </div>
            </div>
          </div>

          <div className="mt-8 p-6 bg-gradient-to-r from-red-100 to-orange-100 rounded-2xl border border-red-200">
            <h4 className="text-xl font-bold text-red-800 mb-3">⚠️ Important Notes</h4>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h5 className="font-semibold text-red-800 mb-2">💡 Best Practices:</h5>
                <ul className="text-red-700 text-sm space-y-1">
                  <li>• Create a separate modpack for AI Player</li>
                  <li>• Keep Ollama running in background during gameplay</li>
                  <li>• Ollama uses minimal memory, won't affect performance significantly</li>
                  <li>• Test with training mode first to verify installation</li>
                </ul>
              </div>
              <div>
                <h5 className="font-semibold text-red-800 mb-2">🚨 Troubleshooting Tips:</h5>
                <ul className="text-red-700 text-sm space-y-1">
                  <li>• "Custom provider selected but no API URL configured" - Set Custom API URL field</li>
                  <li>• "Custom API key not set in config!" - Set Custom API Key field</li>
                  <li>• Empty model list - Check API key validity and URL correctness</li>
                  <li>• Connection errors - Verify provider URL accessibility and OpenAI API format support</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* First Launch & Commands */}
        <section className="mb-16 p-8 bg-white/70 backdrop-blur-xl rounded-3xl border border-red-200 shadow-lg">
          <div className="flex items-center mb-8">
            <div className="w-12 h-12 bg-gradient-to-r from-red-400 to-pink-400 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
              7
            </div>
            <h2 className="text-3xl font-bold text-slate-800">First Launch & Game Setup</h2>
          </div>

          <div className="mb-8 p-6 bg-gradient-to-r from-amber-100 to-yellow-100 rounded-2xl border border-amber-200">
            <h4 className="text-xl font-bold text-amber-800 mb-3">🚀 Critical First Launch Steps</h4>
            <div className="space-y-3">
              <div className="flex items-start">
                <div className="w-6 h-6 bg-amber-500 text-white rounded-full flex items-center justify-center text-xs font-bold mr-3 mt-1">1</div>
                <div>
                  <h5 className="font-semibold text-amber-800">Start Minecraft with JVM Arguments</h5>
                  <p className="text-sm text-amber-700">Launch with your chosen LLM provider argument</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-6 h-6 bg-amber-500 text-white rounded-full flex items-center justify-center text-xs font-bold mr-3 mt-1">2</div>
                <div>
                  <h5 className="font-semibold text-amber-800">Wait for NLP Model Download</h5>
                  <p className="text-sm text-amber-700">Before loading a world, wait for NLP models to download (first time only)</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-6 h-6 bg-amber-500 text-white rounded-full flex items-center justify-center text-xs font-bold mr-3 mt-1">3</div>
                <div>
                  <h5 className="font-semibold text-amber-800">Check Model Directory Structure</h5>
                  <p className="text-sm text-amber-700">Ensure all NLP model files are downloaded completely</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-xl font-bold text-slate-800 mb-4">⏳ First Launch Process</h4>
              
              <div className="mb-6 p-4 bg-blue-100 rounded-lg border border-blue-200">
                <h5 className="font-semibold text-blue-800 mb-2">🧠 NLP Model Loading</h5>
                <p className="text-sm text-blue-700 mb-3">
                  When the world loading screen reaches 100%, the game might lag briefly due to an NLP model being loaded. This is normal for first-time setup.
                </p>
                <div className="text-xs text-blue-600 bg-blue-50 p-2 rounded">
                  Wait for this directory structure to appear in your config folder:
                </div>
                <div className="mt-3">
                  <img src="https://cdn.modrinth.com/data/cached_images/9c21798c363bbf3fc4c5bb0044ebb6ea63372eb9.png" 
                       alt="NLP Models directory structure" className="w-full rounded" />
                  <p className="text-xs text-blue-600 text-center mt-1">NLP models directory structure (one-time download)</p>
                </div>
              </div>

              <div className="p-4 bg-green-100 rounded-lg border border-green-200">
                <h5 className="font-semibold text-green-800 mb-2">⚙️ In-Game Configuration</h5>
                <div className="space-y-2 text-sm text-green-700">
                  <p>1. Once in-game, open the Config Manager:</p>
                  <code className="bg-green-200 px-2 py-1 rounded text-xs">/configMan</code>
                  
                  <p className="mt-2">2. If using non-Ollama provider, configure:</p>
                  <ul className="list-disc list-inside text-xs ml-4 space-y-1">
                    <li>Select your desired LLM provider</li>
                    <li>Set API keys in the API Keys section</li>
                    <li>Choose your preferred model</li>
                  </ul>
                  
                  <p className="mt-2">3. For Ollama users:</p>
                  <ul className="list-disc list-inside text-xs ml-4 space-y-1">
                    <li>Select your preferred local model (qwen2.5:7b recommended)</li>
                    <li>Ensure Ollama server is running in background</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-xl font-bold text-slate-800 mb-4">🎮 Spawn Your AI Companion</h4>
              <div className="p-4 bg-slate-800 text-green-400 rounded-lg font-mono text-sm mb-4">
                <div className="mb-2 text-slate-300"># Basic spawn command</div>
                <div><span className="text-yellow-400">/bot</span> spawn &lt;botName&gt; &lt;mode&gt;</div>
                <div className="mt-3 text-slate-400"># Examples:</div>
                <div><span className="text-yellow-400">/bot</span> spawn Steve play</div>
                <div><span className="text-yellow-400">/bot</span> spawn Alex training</div>
              </div>
              
              <div className="p-4 bg-blue-100 rounded-lg border border-blue-200 mb-4">
                <h5 className="font-semibold text-blue-800 mb-2">🎯 Mode Explanation</h5>
                <div className="text-sm text-blue-700 space-y-1">
                  <p>• <strong>play</strong> - Normal AI mode with full language model connection and intelligence</p>
                  <p>• <strong>training</strong> - Training mode without LLM (for testing movement and basic functions)</p>
                </div>
              </div>

              <div className="p-4 bg-purple-100 rounded-lg border border-purple-200">
                <h5 className="font-semibold text-purple-800 mb-2">💡 Important Tips</h5>
                <div className="text-sm text-purple-700 space-y-1">
                  <p>• Always ensure Ollama server is running before starting Minecraft</p>
                  <p>• Create a separate modpack for AI Player to keep Ollama settings organized</p>
                  <p>• Wait for complete NLP model download before first world load</p>
                  <p>• Test with 'training' mode first to verify basic functionality</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <h4 className="text-xl font-bold text-slate-800 mb-4">💬 Essential Commands</h4>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <div className="p-3 bg-green-50 rounded-lg border border-green-200">
                  <h5 className="font-semibold text-green-800">Talk to Bot</h5>
                  <code className="text-sm text-green-700">/bot send_message_to &lt;bot&gt; &lt;message&gt;</code>
                </div>
                
                <div className="p-3 bg-blue-50 rounded-lg border border-blue-200">
                  <h5 className="font-semibold text-blue-800">Movement Commands</h5>
                  <code className="text-sm text-blue-700">/bot go_to &lt;bot&gt; &lt;x&gt; &lt;y&gt; &lt;z&gt;</code>
                  <br />
                  <code className="text-sm text-blue-700">/bot walk &lt;bot&gt; &lt;seconds&gt;</code>
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="p-3 bg-purple-50 rounded-lg border border-purple-200">
                  <h5 className="font-semibold text-purple-800">Information Commands</h5>
                  <code className="text-sm text-purple-700">/bot detect_entities &lt;bot&gt;</code>
                  <br />
                  <code className="text-sm text-purple-700">/bot getHungerLevel &lt;bot&gt;</code>
                  <br />
                  <code className="text-sm text-purple-700">/bot getHotBarItems &lt;bot&gt;</code>
                </div>
                
                <div className="p-3 bg-orange-50 rounded-lg border border-orange-200">
                  <h5 className="font-semibold text-orange-800">Utility Commands</h5>
                  <code className="text-sm text-orange-700">/bot equipArmor &lt;bot&gt;</code>
                  <br />
                  <code className="text-sm text-orange-700">/bot detectDangerZone &lt;bot&gt;</code>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Development Setup (Optional) */}
        <section className="mb-16 p-8 bg-white/70 backdrop-blur-xl rounded-3xl border border-slate-200 shadow-lg">
          <div className="flex items-center mb-8">
            <div className="w-12 h-12 bg-gradient-to-r from-slate-400 to-gray-500 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
              8
            </div>
            <h2 className="text-3xl font-bold text-slate-800">Development Setup (Optional)</h2>
          </div>

          <div className="mb-6 p-4 bg-gray-100 rounded-lg border border-gray-200">
            <h4 className="text-lg font-bold text-gray-800 mb-2">👨‍💻 For Developers & Contributors</h4>
            <p className="text-gray-700 text-sm">
              This section is only necessary if you want to modify the source code, contribute to the project, or build from source.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-xl font-bold text-slate-800 mb-4">🛠️ Development Tools</h4>
              <div className="space-y-4">
                <div className="flex items-center p-3 bg-blue-50 rounded-lg border border-blue-200">
                  <img src="https://github.com/user-attachments/assets/8cf3cbe1-91a9-4d7e-9510-84723d928025" 
                       alt="Java 21" className="w-8 h-8 mr-3" />
                  <div>
                    <h5 className="font-semibold text-blue-800">Java 21 (Liberica JDK)</h5>
                    <a href="https://bell-sw.com/pages/downloads/#jdk-21-lts" 
                       className="text-sm text-blue-600 hover:text-blue-800" 
                       target="_blank" rel="noopener noreferrer">
                      Download JDK 21 →
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center p-3 bg-purple-50 rounded-lg border border-purple-200">
                  <img src="https://github.com/user-attachments/assets/75d636cb-99f8-4966-8a18-f9ae22ce46bc" 
                       alt="IntelliJ IDEA" className="w-8 h-8 mr-3" />
                  <div>
                    <h5 className="font-semibold text-purple-800">IntelliJ IDEA Community</h5>
                    <a href="https://www.jetbrains.com/idea/download/?section=windows" 
                       className="text-sm text-purple-600 hover:text-purple-800" 
                       target="_blank" rel="noopener noreferrer">
                      Download IDE →
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-6 p-4 bg-yellow-100 rounded-lg border border-yellow-200">
                <h5 className="font-semibold text-yellow-800 mb-2">🐧 Linux Users</h5>
                <p className="text-sm text-yellow-700">
                  Install OpenJDK-21-JDK package using your system's package manager
                </p>
              </div>
            </div>

            <div>
              <h4 className="text-xl font-bold text-slate-800 mb-4">📋 Build Instructions</h4>
              <div className="space-y-3">
                <div className="p-3 bg-slate-100 rounded-lg">
                  <h5 className="font-semibold text-slate-800">1. Download Project</h5>
                  <p className="text-sm text-slate-700">Clone from GitHub or download ZIP</p>
                  <img src="https://github.com/user-attachments/assets/4384fa90-2fe9-4685-a793-8238f2789532" 
                       alt="Download Project" className="w-full mt-2 rounded" />
                </div>
                
                <div className="p-3 bg-slate-100 rounded-lg">
                  <h5 className="font-semibold text-slate-800">2. Configure SDK</h5>
                  <p className="text-sm text-slate-700">Set Project SDK to Java 21 in IntelliJ</p>
                  <div className="grid grid-cols-2 gap-2 mt-2">
                    <img src="https://github.com/user-attachments/assets/ee5a1be5-7fa4-4d42-bfdd-291a74666267" 
                         alt="Project Settings" className="w-full rounded" />
                    <img src="https://github.com/user-attachments/assets/8979a760-3a96-49a6-8a42-c8dcd4c2e0ee" 
                         alt="SDK Configuration" className="w-full rounded" />
                  </div>
                </div>
                
                <div className="p-3 bg-slate-100 rounded-lg">
                  <h5 className="font-semibold text-slate-800">3. Build Project</h5>
                  <p className="text-sm text-slate-700 mb-2">Wait for Gradle to download dependencies, then:</p>
                  <code className="text-xs bg-slate-800 text-green-400 p-2 rounded block">./gradlew build</code>
                  <img src="https://github.com/user-attachments/assets/7916d2bf-1381-4f9e-9df6-1e43a7bfed55" 
                       alt="Gradle Build" className="w-full mt-2 rounded" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* AI Capabilities Showcase */}
        <section className="mb-16 p-8 bg-white/70 backdrop-blur-xl rounded-3xl border border-emerald-200 shadow-lg">
          <div className="flex items-center mb-8">
            <div className="w-12 h-12 bg-gradient-to-r from-emerald-400 to-green-500 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
              🧠
            </div>
            <h2 className="text-3xl font-bold text-slate-800">AI Capabilities & Features</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-4 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-xl border border-blue-200">
              <h4 className="font-bold text-blue-800 mb-2">🗣️ Natural Language Processing</h4>
              <p className="text-sm text-blue-700">Redesigned NLP system with improved understanding and reduced "I couldn't understand you" responses</p>
            </div>
            
            <div className="p-4 bg-gradient-to-br from-green-100 to-emerald-100 rounded-xl border border-green-200">
              <h4 className="font-bold text-green-800 mb-2">🔍 RAG & Web Search</h4>
              <p className="text-sm text-green-700">Retrieval-Augmented Generation with web search for accurate Minecraft information and reduced hallucinations</p>
            </div>
            
            <div className="p-4 bg-gradient-to-br from-purple-100 to-violet-100 rounded-xl border border-purple-200">
              <h4 className="font-bold text-purple-800 mb-2">🎯 Meta-Decision Layer</h4>
              <p className="text-sm text-purple-700">Task chaining system that breaks high-level instructions into smaller, executable tasks</p>
            </div>
            
            <div className="p-4 bg-gradient-to-br from-orange-100 to-red-100 rounded-xl border border-orange-200">
              <h4 className="font-bold text-orange-800 mb-2">⚡ Reflex Actions</h4>
              <p className="text-sm text-orange-700">Quick response to environmental threats and mob encounters for survival</p>
            </div>
            
            <div className="p-4 bg-gradient-to-br from-yellow-100 to-amber-100 rounded-xl border border-yellow-200">
              <h4 className="font-bold text-yellow-800 mb-2">🗺️ Pathfinding</h4>
              <p className="text-sm text-yellow-700">Intelligent navigation with plans for water traversal and block bridging capabilities</p>
            </div>
            
            <div className="p-4 bg-gradient-to-br from-pink-100 to-rose-100 rounded-xl border border-pink-200">
              <h4 className="font-bold text-pink-800 mb-2">📊 Status Reporting</h4>
              <p className="text-sm text-pink-700">Monitor health, hunger, oxygen levels, inventory, and environmental conditions</p>
            </div>
          </div>

          <div className="mt-8 p-6 bg-gradient-to-r from-indigo-100 to-purple-100 rounded-2xl border border-indigo-200">
            <h4 className="text-xl font-bold text-indigo-800 mb-4">🚀 Coming Soon (Progress: 75.5%)</h4>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h5 className="font-semibold text-indigo-800 mb-2">Combat & Survival:</h5>
                <ul className="text-indigo-700 text-sm space-y-1">
                  <li>• Weapon usage (melee & ranged)</li>
                  <li>• Enhanced reflex modules</li>
                  <li>• Natural world interactions</li>
                  <li>• Lightweight logic engine</li>
                </ul>
              </div>
              <div>
                <h5 className="font-semibold text-indigo-800 mb-2">Autonomous Behavior:</h5>
                <ul className="text-indigo-700 text-sm space-y-1">
                  <li>• Self-goal assignment system</li>
                  <li>• Player2 integration (highly requested)</li>
                  <li>• Mood system (design phase)</li>
                  <li>• Conversation initiation</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Troubleshooting Section */}
        <section className="mb-16 p-8 bg-white/70 backdrop-blur-xl rounded-3xl border border-red-200 shadow-lg">
          <div className="flex items-center mb-8">
            <div className="w-12 h-12 bg-gradient-to-r from-red-400 to-pink-400 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
              🔧
            </div>
            <h2 className="text-3xl font-bold text-slate-800">Troubleshooting</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-slate-800 mb-4">Common Issues</h3>
              <div className="space-y-4">
                <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                  <h4 className="font-bold text-red-800 mb-2">🚫 Bot not spawning</h4>
                  <p className="text-sm text-red-700 mb-2">Ensure Fabric Carpet mod is installed and working properly</p>
                  <p className="text-xs text-red-600">Check that you have the correct Minecraft version (1.21.1)</p>
                </div>
                
                <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                  <h4 className="font-bold text-yellow-800 mb-2">⚠️ API errors</h4>
                  <p className="text-sm text-yellow-700 mb-2">Check your API configuration in settings.json5</p>
                  <p className="text-xs text-yellow-600">Verify API keys are correct and Ollama server is running</p>
                </div>
                
                <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                  <h4 className="font-bold text-blue-800 mb-2">🐌 Performance issues</h4>
                  <p className="text-sm text-blue-700 mb-2">Adjust AI processing intervals in config</p>
                  <p className="text-xs text-blue-600">Consider using lighter models for better performance</p>
                </div>
                
                <div className="p-4 bg-purple-50 border border-purple-200 rounded-lg">
                  <h4 className="font-bold text-purple-800 mb-2">🔌 Custom provider issues</h4>
                  <p className="text-sm text-purple-700 mb-2">Check Custom API URL and Key configuration</p>
                  <p className="text-xs text-purple-600">Ensure provider supports OpenAI API format</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-slate-800 mb-4">Get Help</h3>
              <div className="space-y-4">
                <a 
                  href="https://github.com/shasankp000/AI-Player/issues" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block p-4 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
                >
                  <h4 className="font-bold text-gray-800 mb-2">🐛 Report Issues</h4>
                  <p className="text-sm text-gray-600">Bug reports and feature requests on GitHub</p>
                </a>
                
                <a 
                  href="https://github.com/shasankp000/AI-Player/discussions" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block p-4 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
                >
                  <h4 className="font-bold text-gray-800 mb-2">💬 Discussions</h4>
                  <p className="text-sm text-gray-600">Ask questions and share experiences with the community</p>
                </a>
                
                <a 
                  href="https://github.com/shasankp000/AI-Player/wiki" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block p-4 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
                >
                  <h4 className="font-bold text-gray-800 mb-2">📚 Documentation</h4>
                  <p className="text-sm text-gray-600">Comprehensive guides and tutorials</p>
                </a>
                
                <div className="p-4 bg-green-100 rounded-lg border border-green-200">
                  <h4 className="font-bold text-green-800 mb-2">💡 Launcher Support</h4>
                  <p className="text-sm text-green-700 mb-2">AI Player supports all major launchers:</p>
                  <div className="text-xs text-green-600 grid grid-cols-2 gap-1">
                    <div>• Vanilla MC Launcher</div>
                    <div>• MultiMC</div>
                    <div>• Modrinth App</div>
                    <div>• Prism Launcher</div>
                    <div>• CurseForge</div>
                    <div>• ATLauncher</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Back to Home Button */}
        <div className="text-center">
          <Link 
            to="/" 
            className="inline-flex items-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-amber-500 to-orange-500 rounded-full hover:from-amber-600 hover:to-orange-600 transition-all duration-300 hover:scale-105 shadow-lg"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}