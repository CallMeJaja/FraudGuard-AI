"use client";

import { useState, useEffect } from "react";
import { AlertTriangle, ChevronDown, ChevronUp, Cpu, Database, Terminal, Check } from "lucide-react";

interface ModalSumberDataProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function ModalSumberData({ isOpen, onClose }: ModalSumberDataProps) {
    const [showTransparency, setShowTransparency] = useState(false);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[9999] bg-dark-950/80 backdrop-blur-md flex items-center justify-center p-4 md:p-6 animate-fade-in">
            {/* Modal Container */}
            <div className="relative bg-[#0b1329] border border-white/10 rounded-[2.5rem] max-w-lg w-full shadow-2xl overflow-hidden flex flex-col animate-scale-up">
                
                {/* Glow bar at top */}
                <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-amber-500 to-transparent opacity-85" />

                {/* Body Content */}
                <div className="p-8 md:p-10 space-y-6 max-h-[85vh] overflow-y-auto custom-scrollbar">
                    
                    {/* Badge PERINGATAN */}
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-status-error/15 text-status-error text-[10px] font-black tracking-widest uppercase">
                        <AlertTriangle className="w-3.5 h-3.5" />
                        Peringatan
                    </div>

                    {/* Title */}
                    <h2 className="text-2xl md:text-3xl font-black text-white leading-tight tracking-tight uppercase">
                        Data pada website ini merupakan hasil klasifikasi AI
                    </h2>

                    {/* Description Paragraphs */}
                    <div className="space-y-4 text-xs font-bold text-dark-300 leading-relaxed font-sans">
                        <p>
                            Isi data pada website ini merupakan hasil klasifikasi dari AI, khususnya Large Language Model, dan dapat keliru.
                        </p>
                        <p>
                            Harap gunakan data di website ini hanya sebagai acuan dan bantuan semata untuk mendukung pemantauan publik.
                        </p>
                        <p>
                            Lihat{" "}
                            <button
                                type="button"
                                onClick={() => setShowTransparency(!showTransparency)}
                                className="text-amber-warning hover:text-amber-400 font-extrabold underline underline-offset-2 inline-flex items-center gap-1 transition-colors cursor-pointer"
                            >
                                Transparansi Algoritma
                                {showTransparency ? (
                                    <ChevronUp className="w-3.5 h-3.5" />
                                ) : (
                                    <ChevronDown className="w-3.5 h-3.5" />
                                )}
                            </button>{" "}
                            untuk detail model dan prompt kami agar Anda dapat memahami bagaimana klasifikasi dilakukan.
                        </p>
                    </div>

                    {/* Collapsible Algorithm Transparency Info */}
                    {showTransparency && (
                        <div className="mt-4 p-5 rounded-2xl bg-dark-950/60 border border-white/5 space-y-4 animate-fade-in text-[11px] font-medium leading-relaxed text-dark-300">
                            
                            {/* Model Info */}
                            <div className="space-y-1">
                                <div className="flex items-center gap-2 text-neon-cyan font-bold uppercase tracking-wider">
                                    <Cpu className="w-3.5 h-3.5" />
                                    <span>Model & Algoritma</span>
                                </div>
                                <p className="text-dark-400 pl-5">
                                    Sistem menggunakan ensemble model <span className="text-white font-bold">XGBoost (MVP)</span> untuk klasifikasi transaksi numerik cepat dan <span className="text-white font-bold">Large Language Model (Gemini 1.5 Pro)</span> untuk analisis penjelasan perilaku transaksi terdekripsi (XAI).
                                </p>
                            </div>

                            {/* Prompt Info */}
                            <div className="space-y-1">
                                <div className="flex items-center gap-2 text-hyper-violet font-bold uppercase tracking-wider">
                                    <Terminal className="w-3.5 h-3.5" />
                                    <span>Integrasi Prompt</span>
                                </div>
                                <p className="text-dark-400 pl-5">
                                    Prompt AI mengekstrak pola anomali dari metadata sesi (IP, geolokasi, durasi transaksi, nominal outlier) untuk menilai bobot kontribusi risiko secara dinamis dan menyajikannya secara transparan.
                                </p>
                            </div>

                            {/* Data Streams */}
                            <div className="space-y-1">
                                <div className="flex items-center gap-2 text-status-success font-bold uppercase tracking-wider">
                                    <Database className="w-3.5 h-3.5" />
                                    <span>Sumber Data Website</span>
                                </div>
                                <p className="text-dark-400 pl-5">
                                    Seluruh data transaksi dan visualisasi peta berasal dari integrasi live database simulator MVP yang memetakan histori transaksi blacklisted nodes dan ancaman siber regional secara real-time.
                                </p>
                            </div>
                        </div>
                    )}

                    {/* Saya Mengerti Action Button */}
                    <button
                        onClick={onClose}
                        className="w-full mt-6 py-4 rounded-xl bg-gradient-to-r from-amber-600 to-amber-400 hover:from-amber-500 hover:to-amber-300 text-dark-950 font-black text-sm uppercase tracking-widest transition-all hover:shadow-lg hover:shadow-amber-500/10 active:scale-[0.98] cursor-pointer flex items-center justify-center gap-2"
                    >
                        <Check className="w-4 h-4" strokeWidth={3} />
                        Saya Mengerti
                    </button>
                </div>
            </div>
        </div>
    );
}
