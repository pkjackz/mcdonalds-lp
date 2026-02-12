"use client";

import Image from "next/image";
import { Star, Clock, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function Home() {
  const [quantity, setQuantity] = useState(1);

  const increase = () => setQuantity((prev) => prev + 1);
  const decrease = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  return (
    <div className="min-h-screen bg-zinc-200 dark:bg-black flex flex-col">
      {/* HEADER */}
      <header className="relative w-full h-52 sm:h-60 md:h-72 lg:h-80">
        <Image
          src="/mcoferta-removebg-preview.png"
          alt="McDonald's header"
          fill
          priority
          sizes="100vw"
          className="object-contain"
        />
      </header>

      {/* MAIN */}
      <main className="flex-1 flex justify-center -mt-6">
        <div className="w-full max-w-3xl bg-zinc-100 dark:bg-zinc-900 rounded-t-3xl px-4 sm:px-6 md:px-8 py-6 shadow-lg">
          {/* LOGO + RESTAURANTE */}
          <section className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-red-500 rounded-lg flex items-center justify-center">
              <Image
                src="/mcdonalds-logo-removebg-preview.png"
                alt="McDonald's logo"
                width={22}
                height={22}
                className="dark:invert"
              />
            </div>

            <div>
              <span className="text-xs font-semibold text-zinc-400">
                FSW Donald's
              </span>
            </div>
          </section>

          <h1 className="text-xl sm:text-2xl font-bold text-[#27251F] dark:text-white mb-4">
            McOferta Média Big Mac Duplo
          </h1>

          <div className="flex items-center justify-between mb-6">
            <span className="text-lg sm:text-xl font-bold text-green-600">
              R$ 39,90
            </span>

            <div className="flex items-center gap-4 bg-zinc-200 dark:bg-zinc-800 px-3 py-2 rounded-xl">
              <button onClick={decrease}>
                <ChevronLeft className="w-5 h-5" />
              </button>

              <span className="font-semibold text-lg w-6 text-center">
                {quantity}
              </span>

              <button onClick={increase}>
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          <section className="mb-4">
            <h2 className="text-md font-semibold mb-1 text-[#27251F] dark:text-white">
              Sobre
            </h2>
            <p className="text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
              Dois hambúrgueres 100% carne bovina, alface fresquinha, queijo,
              molho especial, cebola e picles no pão com gergelim.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-md font-semibold mb-1 text-[#27251F] dark:text-white">
              Ingredientes
            </h2>
            <p className="text-sm text-zinc-600 dark:text-zinc-300">
              Carne bovina, pão com gergelim, queijo cheddar, alface, cebola,
              picles e molho especial.
            </p>
          </section>

          <Button className="w-full py-6 text-md font-semibold rounded-xl bg-[#FFC72C] hover:bg-[#FFC90C]">
            Adicionar à sacola
          </Button>
        </div>
      </main>
    </div>
  );
}
