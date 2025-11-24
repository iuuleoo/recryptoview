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
        <section
  id="inicio"
  className="w-full bg-white py-20 border-b"
>
  <div className="max-w-7xl mx-auto px-6 flex flex-col items-center text-center">

    {/* TÍTULO */}
    <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
      Compare os Melhores Cartões Cripto de 2025
    </h1>

    {/* SUBTÍTULO */}
    <p className="text-gray-600 mt-4 max-w-2xl text-lg">
      Descubra as melhores alternativas em taxas, recompensas e suporte às principais criptomoedas do mercado.
    </p>

    {/* BOTÃO */}
    <a
      href="#cartoes"
      className="mt-8 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg shadow transition"
    >
      🔍 Ver Todos os Cartões
    </a>

    {/* MÉTRICAS */}
    <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">

      <div className="bg-white border shadow-sm p-6 rounded-lg">
        <h3 className="text-3xl font-bold text-blue-600">25+</h3>
        <p className="mt-2 text-gray-700 font-medium">Cartões analisados</p>
      </div>

      <div className="bg-white border shadow-sm p-6 rounded-lg">
        <h3 className="text-3xl font-bold text-blue-600">16+</h3>
        <p className="mt-2 text-gray-700 font-medium">Criptomoedas</p>
      </div>

      <div className="bg-white border shadow-sm p-6 rounded-lg">
        <h3 className="text-3xl font-bold text-blue-600">100%</h3>
        <p className="mt-2 text-gray-700 font-medium">Gratuito</p>
      </div>

    </div>
  </div>
</section>
      </section>
    </main>

  );
}
