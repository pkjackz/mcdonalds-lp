"use client";

import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Star, Clock } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const categories = [
  "Combos",
  "Hambúrgueres",
  "Bebidas",
  "Sobremesas",
  "Promoções",
  "Mais Vendidos",
];

export default function Home() {
  const [active, setActive] = useState(categories[0]);

  return (
    <div className="min-h-screen bg-zinc-200 dark:bg-black flex flex-col">
      <header className="relative w-full h-[180px] sm:h-[240px] md:h-[320px] lg:h-[380px]">
        <Image
          src="/mcdonalds-hero.jpg"
          alt="McDonald's header"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </header>

      <main className="relative z-10 -mt-6 flex flex-1 justify-center">
        <div
          className="
          w-full
          max-w-3xl
          bg-zinc-200 dark:bg-zinc-900
          rounded-t-3xl
          px-4 sm:px-6 md:px-8
          py-4
          flex flex-col
        "
        >
          <section className="flex w-full items-start gap-4">
            <div className="flex w-12 h-10 bg-red-500 rounded-md items-center justify-center">
              <Image
                src="/mcdonalds-logo-removebg-preview.png"
                alt="McDonald's logo"
                width={28}
                height={28}
                className="dark:invert"
              />
            </div>

            <div className="flex flex-1 justify-between items-start">
              <div className="flex flex-col">
                <span className="text-base sm:text-lg font-bold text-[#27251F]">
                  FSW Donald's
                </span>
                <span className="text-sm text-zinc-400 font-semibold">
                  Fast Food
                </span>

                <div className="flex items-center gap-1 mt-1 -ml-16">
                  <Clock className="text-green-600" size={14} />
                  <span className="font-semibold text-green-600 text-xs">
                    Aberto
                  </span>
                </div>
              </div>

              <Badge className="bg-white border-zinc-300 text-[#27251F] flex items-center gap-1">
                <Star fill="#FFC72C" strokeWidth={0} size={14} />
                <span className="font-bold">5.0</span>
              </Badge>
            </div>
          </section>

          <div className="w-full h-px bg-zinc-300 my-4" />

          <section className="w-full pb-4">
            <div className="flex gap-3 overflow-x-auto snap-x snap-mandatory scrollbar-hide">
              {categories.map((item) => {
                const isActive = active === item;

                return (
                  <Button
                    key={item}
                    onClick={() => setActive(item)}
                    className={`
                      snap-start shrink-0 px-4 py-2 text-sm rounded-full border transition-colors font-semibold
                      ${
                        isActive
                          ? "bg-[#FFC72C] text-[#27251F] border-[#FFC72C] hover:bg-[#FFC72C]"
                          : "bg-white text-zinc-500 border-zinc-300 hover:bg-zinc-300"
                      }
                    `}
                  >
                    {item}
                  </Button>
                );
              })}
            </div>
          </section>

          <h2 className="text-lg sm:text-xl font-bold text-[#27251F] mb-4">
            Lançamentos
          </h2>

          <section className="w-full divide-y divide-zinc-300">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="
                  flex
                  py-4
                  gap-4
                  dark:hover:bg-zinc-800
                  transition-colors
                "
              >
                <div className="flex flex-col justify-between flex-1">
                  <div>
                    <h3 className="font-semibold text-[#27251F] text-base sm:text-lg">
                      McOferta Especial {item}
                    </h3>
                    <p className="text-sm text-zinc-500 mt-1">
                      Hambúrguer, batata e bebida.
                    </p>
                  </div>

                  <span className="font-bold text-[#27251F] mt-2 text-base">
                    R$ 29,90
                  </span>
                </div>

                <div className="relative w-24 h-24 sm:w-28 sm:h-28 shrink-0">
                  <Image
                    src="/mcoferta-removebg-preview.png"
                    alt="Lanche"
                    fill
                    className="object-cover rounded-xl"
                  />
                </div>
              </div>
            ))}
          </section>
        </div>
      </main>
    </div>
  );
}
