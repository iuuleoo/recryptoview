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
    
    <section className="w-full py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6 text-center">

        {/* Título */}
        <h2 className="text-4xl font-semibold tracking-tight text-gray-900 mb-20">
          Por que escolher nossa plataforma?
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16">

          {/* Rentabilidade Real */}
          <div className="flex flex-col items-center">
            {/* Ícone Apple Style */}
            <svg
              width="44"
              height="44"
              viewBox="0 0 24 24"
              fill="none"
              stroke="black"
              strokeWidth="1"
              className="mb-6 opacity-70"
            >
              <path d="M3 17l6-6 4 4 8-8" />
            </svg>

            <h3 className="text-lg font-medium text-gray-900 mb-2">
              Rentabilidade Real
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Potencialize seus ganhos com estratégias inteligentes e retorno consistente.
            </p>
          </div>

          {/* Segurança */}
          <div className="flex flex-col items-center">
            <svg
              width="44"
              height="44"
              viewBox="0 0 24 24"
              fill="none"
              stroke="black"
              strokeWidth="1"
              className="mb-6 opacity-70"
            >
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>

            <h3 className="text-lg font-medium text-gray-900 mb-2">
              Segurança de Alto Nível
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Tecnologia de proteção avançada e criptografia de nível bancário.
            </p>
          </div>

          {/* Processos Rápidos */}
          <div className="flex flex-col items-center">
            <svg
              width="44"
              height="44"
              viewBox="0 0 24 24"
              fill="none"
              stroke="black"
              strokeWidth="1"
              className="mb-6 opacity-70"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M12 6v6l4 2" />
            </svg>

            <h3 className="text-lg font-medium text-gray-900 mb-2">
              Transações Instantâneas
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Depósitos, compras e saques processados em segundos.
            </p>
          </div>

          {/* Cartão */}
          <div className="flex flex-col items-center">
            <svg
              width="44"
              height="44"
              viewBox="0 0 24 24"
              fill="none"
              stroke="black"
              strokeWidth="1"
              className="mb-6 opacity-70"
            >
              <rect x="2" y="7" width="20" height="12" rx="3" />
              <path d="M2 11h20" />
            </svg>

            <h3 className="text-lg font-medium text-gray-900 mb-2">
              Cartão Internacional
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Use suas criptomoedas como dinheiro em qualquer lugar do mundo.
            </p>
          </div>

        </div>
      </div>
    </section>
    
  </div>
</section>
      </section>
    </main>

  );
}
