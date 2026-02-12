"use client";

import Image from "next/image";
import { Star, Clock, ChevronLeft, ChevronRight, ChefHat } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function Home() {
  const [quantity, setQuantity] = useState(1);

  const increase = () => setQuantity((prev) => prev + 1);
  const decrease = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  return (
    <div className="min-h-screen bg-zinc-200 dark:bg-black flex flex-col">
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

      <main className="flex-1 flex justify-center -mt-6">
        <div className="w-full max-w-3xl bg-zinc-100 dark:bg-zinc-900 rounded-t-3xl px-4 sm:px-6 md:px-8 py-6 shadow-lg">
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

          <h1 className="text-md sm:text-2xl font-bold text-[#27251F] dark:text-white mb-4">
            McOferta Média Big Mac Duplo
          </h1>

          <div className="flex items-center justify-between mb-6">
            <span className="text-lg sm:text-xl font-bold text-green-600 dark:text-white">
              R$ 39,90
            </span>

            <div className="flex items-center gap-4 px-3 py-2 rounded-full ">
              <button
                onClick={decrease}
                className="bg-zinc-100 dark:bg-zinc-700 rounded-md border border-zinc-200 p-1 hover:bg-zinc-400 dark:hover:bg-zinc-600 transition delay-100 duration-190"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <span className="font-semibold text-lg w-6 text-center">
                {quantity}
              </span>

              <button
                onClick={increase}
                className="dark:bg-zinc-700 rounded-md border border-yellow-200 p-1 dark:hover:bg-zinc-600 bg-[#FFC72C] hover:bg-[#FF671F] transition delay-100 duration-190 hover:border-[#FF671F]"
              >
                <ChevronRight className="w-5 h-5 text-white" />
              </button>
            </div>
          </div>

          <section className="mb-4">
            <h2 className="text-md font-semibold mb-1 text-[#27251F] dark:text-white">
              Sobre
            </h2>
            <p className="text-sm text-zinc-400 dark:text-zinc-300 leading-relaxed">
              Dois hambúrgueres 100% carne bovina, alface fresquinha, queijo,
              molho especial, cebola e picles no pão com gergelim.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-md font-semibold mb-1 text-[#27251F] dark:text-white">
              <ChefHat className="inline w-4 h-4 mr-2" />
              Ingredientes
            </h2>
            <span className="text-sm text-zinc-400 dark:text-zinc-300">
              <ul className="list-disc pl-5 ml-1">
                <li>Carne bovina</li>
                <li>Pão com gergelim</li>
                <li>Queijo cheddar</li>
                <li>Alface fresquinha</li>
                <li>Cebola</li>
                <li>Picles</li>
                <li>Molho especial</li>
              </ul>
            </span>
          </section>

          <Button className="w-full py-6 text-md font-semibold rounded-xl bg-[#FFC72C] hover:bg-[#FF671F] transition delay-150 duration-100 ease-in-out hover:-translate-y-1 hover:scale-110">
            Adicionar à sacola
          </Button>
        </div>
      </main>
    </div>
  );
}
