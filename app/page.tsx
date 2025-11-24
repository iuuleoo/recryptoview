"use client";
import Image from "next/image";
import { Button } from '@/components/ui/button';
import { Card, CardTitle, CardHeader } from "@/components/ui/card";

import { useState } from "react";
import { Menu, X } from "lucide-react"; // ícones

export default function Home() {
  const [open, setOpen] = useState(false);

  return (
    <main>
      {/* HEADER */}
      <header className="w-full border-b border-gray-100 bg-white/40 backdrop-blur-md">
        <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6">

          {/* LOGO */}
          <h1 className="text-[26px] font-extrabold tracking-tight text-[#1f2937]">
            RECRYPTOVIEW
          </h1>

          {/* MENU DESKTOP */}
          <nav className="hidden md:flex items-center gap-8 text-[15px] font-medium">
            <a className="text-gray-600 hover:text-gray-900" href="#inicio">Início</a>
            <a className="text-gray-600 hover:text-gray-900" href="#populares">Populares</a>
            <a className="text-gray-600 hover:text-gray-900" href="#sobre">Sobre</a>
            <a className="text-gray-600 hover:text-gray-900" href="#como-funciona">Como Funciona</a>
            <a className="text-gray-600 hover:text-gray-900" href="#artigos">Artigos</a>

            <a
              href="#cartoes"
              className="bg-[#3b82f6] text-white px-5 py-2 rounded-md shadow-sm hover:bg-blue-600 transition"
            >
              Ver Todos os Cartões
            </a>
          </nav>

          {/* BOTÃO HAMBÚRGUER MOBILE */}
          <button
            className="md:hidden"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={30} /> : <Menu size={30} />}
          </button>
        </div>

        {/* MENU MOBILE ABERTO */}
        {open && (
          <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4 flex flex-col gap-4 text-gray-700 text-[16px]">

            <a onClick={() => setOpen(false)} href="#inicio">Início</a>
            <a onClick={() => setOpen(false)} href="#populares">Populares</a>
            <a onClick={() => setOpen(false)} href="#sobre">Sobre</a>
            <a onClick={() => setOpen(false)} href="#como-funciona">Como Funciona</a>
            <a onClick={() => setOpen(false)} href="#artigos">Artigos</a>

            <a
              href="#cartoes"
              className="bg-[#3b82f6] text-white text-center px-5 py-2 rounded-md shadow-sm hover:bg-blue-600 transition"
            >
              Ver Todos os Cartões
            </a>
          </div>
        )}
      </header>

      {/* CONTEÚDO */}
      <section className="p-10">
        {/* ... */}
      </section>
    </main>
  );
}
