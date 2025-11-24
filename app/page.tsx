"use client";
import Image from "next/image";
import { Button } from '@/components/ui/button';
import { Card, CardTitle, CardHeader } from "@/components/ui/card";

import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Home() {
  const [open, setOpen] = useState(false);

  return (
    <main>

      {/* HEADER */}
      <header className="w-full border-b border-gray-100 bg-white/40 backdrop-blur-md">
        <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6">

          <h1 className="text-[26px] font-extrabold tracking-tight text-[#1f2937]">
            RECRYPTOVIEW
          </h1>

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

          <button className="md:hidden" onClick={() => setOpen(!open)}>
            {open ? <X size={30} /> : <Menu size={30} />}
          </button>
        </div>

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

      {/* HERO */}
      <section className="p-10">

        <section id="inicio" className="w-full bg-white py-20 border-b">
          <div className="max-w-7xl mx-auto px-6 flex flex-col items-center text-center">

            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
              Compare os Melhores Cartões Cripto de 2025
            </h1>

            <p className="text-gray-600 mt-4 max-w-2xl text-lg">
              Descubra as melhores alternativas em taxas, recompensas e suporte às principais criptomoedas do mercado.
            </p>

            <a
              href="#cartoes"
              className="mt-8 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg shadow transition"
            >
              🔍 Ver Todos os Cartões
            </a>

            {/* Métricas */}
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

        {/* POR QUE ESCOLHER */}
        <section className="w-full py-24 bg-white">
          <div className="max-w-6xl mx-auto px-6 text-center">

            <h2 className="text-4xl font-semibold tracking-tight text-gray-900 mb-20">
              Por que escolher nossa plataforma?
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-16">

              <div className="flex flex-col items-center">
                <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="1" className="mb-6 opacity-70">
                  <path d="M3 17l6-6 4 4 8-8" />
                </svg>
                <h3 className="text-lg font-medium text-gray-900 mb-2">Rentabilidade Real</h3>
                <p className="text-gray-600">Potencialize seus ganhos com estratégias inteligentes e retorno consistente.</p>
              </div>

              <div className="flex flex-col items-center">
                <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="1" className="mb-6 opacity-70">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
                <h3 className="text-lg font-medium text-gray-900 mb-2">Segurança de Alto Nível</h3>
                <p className="text-gray-600">Tecnologia de proteção avançada e criptografia de nível bancário.</p>
              </div>

              <div className="flex flex-col items-center">
                <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="1" className="mb-6 opacity-70">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 6v6l4 2" />
                </svg>
                <h3 className="text-lg font-medium text-gray-900 mb-2">Transações Instantâneas</h3>
                <p className="text-gray-600">Depósitos, compras e saques processados em segundos.</p>
              </div>

              <div className="flex flex-col items-center">
                <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="1" className="mb-6 opacity-70">
                  <rect x="2" y="7" width="20" height="12" rx="3" />
                  <path d="M2 11h20" />
                </svg>
                <h3 className="text-lg font-medium text-gray-900 mb-2">Cartão Internacional</h3>
                <p className="text-gray-600">Use suas criptomoedas como dinheiro em qualquer lugar do mundo.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-28 bg-white">
  <div className="max-w-4xl mx-auto px-6">

    {/* Título */}
    <h2 className="text-4xl font-semibold text-center text-gray-900 tracking-tight mb-24">
      Como funciona
    </h2>

    <div className="space-y-20">

      {/* Item 1 */}
      <div className="flex gap-10">
        <span className="text-gray-300 text-2xl font-semibold select-none leading-none pt-1">
          1
        </span>

        <div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            Análise do Seu Perfil Cripto
          </h3>
          <p className="text-gray-600 text-lg leading-relaxed">
            Avaliamos sua carteira, objetivos e nível de risco para recomendar
            os melhores cartões cripto e estratégias de investimento em 2025.
          </p>
        </div>
      </div>

      {/* Item 2 */}
      <div className="flex gap-10">
        <span className="text-gray-300 text-2xl font-semibold select-none leading-none pt-1">
          2
        </span>

        <div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            Comparação Inteligente de Cartões
          </h3>
          <p className="text-gray-600 text-lg leading-relaxed">
            Nosso sistema compara taxas, cashback, recompensas em criptomoedas
            e benefícios exclusivos para encontrar a melhor opção para você.
          </p>
        </div>
      </div>

      {/* Item 3 */}
      <div className="flex gap-10">
        <span className="text-gray-300 text-2xl font-semibold select-none leading-none pt-1">
          3
        </span>

        <div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            Estratégia de Crescimento
          </h3>
          <p className="text-gray-600 text-lg leading-relaxed">
            Receba orientações sobre como usar seu cartão cripto para maximizar
            lucros, reduzir taxas e aproveitar oportunidades no mercado digital.
          </p>
        </div>
      </div>

      {/* Item 4 */}
      <div className="flex gap-10">
        <span className="text-gray-300 text-2xl font-semibold select-none leading-none pt-1">
          4
        </span>

        <div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            Decisão e Otimização Contínua
          </h3>
          <p className="text-gray-600 text-lg leading-relaxed">
            Escolha seu cartão ideal e acompanhe insights exclusivos de mercado,
            mantendo seus investimentos sempre otimizados.
          </p>
        </div>
      </div>

    </div>
  </div>
</section>
    <section className="w-full bg-white py-24">
  <div className="max-w-5xl mx-auto px-6">

    <h2 className="text-4xl font-semibold text-gray-900 text-center mb-12 tracking-tight">
      Perguntas rápidas sobre Criptomoedas
    </h2>

    <div className="space-y-6">
      
      <div className="p-6 border border-gray-200 rounded-2xl bg-white shadow-sm hover:shadow-md transition">
        <h3 className="text-lg font-medium text-gray-900">O que é criptomoeda?</h3>
        <p className="text-gray-600 mt-2">
          Dinheiro digital descentralizado, sem controle de bancos.
        </p>
      </div>

      <div className="p-6 border border-gray-200 rounded-2xl bg-white shadow-sm hover:shadow-md transition">
        <h3 className="text-lg font-medium text-gray-900">Como criar uma carteira digital?</h3>
        <p className="text-gray-600 mt-2">
          Baixe um app confiável e gere sua seed phrase.
        </p>
      </div>

      <div className="p-6 border border-gray-200 rounded-2xl bg-white shadow-sm hover:shadow-md transition">
        <h3 className="text-lg font-medium text-gray-900">Carteira custodial x não-custodial?</h3>
        <p className="text-gray-600 mt-2">
          Custodial: empresa guarda as chaves. Não-custodial: você é o dono.
        </p>
      </div>

      <div className="p-6 border border-gray-200 rounded-2xl bg-white shadow-sm hover:shadow-md transition">
        <h3 className="text-lg font-medium text-gray-900">O que é staking?</h3>
        <p className="text-gray-600 mt-2">
          Travar criptos para apoiar a rede e receber recompensas.
        </p>
      </div>

      <div className="p-6 border border-gray-200 rounded-2xl bg-white shadow-sm hover:shadow-md transition">
        <h3 className="text-lg font-medium text-gray-900">Como proteger minhas criptos?</h3>
        <p className="text-gray-600 mt-2">
          2FA, seed no papel, nada de prints, e carteira própria.
        </p>
      </div>

      <div className="p-6 border border-gray-200 rounded-2xl bg-white shadow-sm hover:shadow-md transition">
        <h3 className="text-lg font-medium text-gray-900">É seguro deixar na exchange?</h3>
        <p className="text-gray-600 mt-2">
          Só para uso rápido. Longo prazo = carteira não-custodial.
        </p>
      </div>

      <div className="p-6 border border-gray-200 rounded-2xl bg-white shadow-sm hover:shadow-md transition">
        <h3 className="text-lg font-medium text-gray-900">Como funciona um cartão cripto?</h3>
        <p className="text-gray-600 mt-2">
          Você paga em cripto; a empresa converte para moeda comum na hora.
        </p>
      </div>

      <div className="p-6 border border-gray-200 rounded-2xl bg-white shadow-sm hover:shadow-md transition">
        <h3 className="text-lg font-medium text-gray-900">Onde posso usar o cartão cripto?</h3>
        <p className="text-gray-600 mt-2">
          Em qualquer estabelecimento que aceite cartão tradicional.
        </p>
      </div>

      <div className="p-6 border border-gray-200 rounded-2xl bg-white shadow-sm hover:shadow-md transition">
        <h3 className="text-lg font-medium text-gray-900">Perdi minha seed phrase, e agora?</h3>
        <p className="text-gray-600 mt-2">
          Não tem recuperação. A seed é a chave da sua carteira.
        </p>
      </div>

      <div className="p-6 border border-gray-200 rounded-2xl bg-white shadow-sm hover:shadow-md transition">
        <h3 className="text-lg font-medium text-gray-900">Como evitar golpes?</h3>
        <p className="text-gray-600 mt-2">
          Nunca passe a seed phrase, cuidado com links e promessas de lucro rápido.
        </p>
      </div>

    </div>
  </div>
</section>
<footer className="w-full border-t mt-20 bg-white">
  <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-12">

    <div>
      <h3 className="text-lg font-semibold mb-4">ReCryptoView</h3>
      <p className="text-sm text-gray-600">
        Plataforma para acompanhar criptomoedas, investimentos e novidades do mercado.
      </p>
    </div>

    <div>
      <h3 className="text-lg font-semibold mb-4">Links</h3>
      <ul className="space-y-2 text-sm text-gray-600">
        <li>Política de Privacidade</li>
        <li>Termos de Uso</li>
      </ul>
    </div>

    <div>
      <h3 className="text-lg font-semibold mb-4">Contato</h3>
      <p className="text-sm text-gray-600">CNPJ: 00.000.000/0001-00</p>
      <p className="text-sm text-gray-600">leo@gmail.com</p>
    </div>

  </div>

  <div className="border-t py-6 text-center text-sm text-gray-500">
    © 2025 ReCryptoView. Todos os direitos reservados.
  </div>
</footer>
      </section>
    </main>
  );
}
