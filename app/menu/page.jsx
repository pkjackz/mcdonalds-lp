"use client";

import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Star, Clock, ArrowLeft, ArrowUp } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

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
  const [showTop, setShowTop] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setShowTop(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const goToOrder = () => {
    router.push("/order");
  };

  const goBack = () => {
    router.back();
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-zinc-200 dark:bg-black flex flex-col relative">
      <button
        onClick={goBack}
        className="fixed top-4 left-4 z-50 bg-[#FFC72C] text-[#27251F] p-2 rounded-full shadow-lg hover:scale-125 transition ease-linear cursor-pointer"
      >
        <ArrowLeft size={20} />
      </button>

      {showTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 bg-red-600 text-white p-3 rounded-full shadow-lg hover:scale-110 transition"
        >
          <ArrowUp size={20} />
        </button>
      )}

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
        <div className="w-full max-w-3xl bg-zinc-200 dark:bg-zinc-900 rounded-t-3xl sm:px-6 md:px-8 py-6 flex flex-col">
          <section className="flex w-full items-start gap-4 px-4">
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
                <span className="text-base sm:text-lg font-bold text-[#27251F] dark:text-white">
                  FSW Donald's
                </span>
                <span className="text-sm text-zinc-400 font-semibold">
                  Fast Food
                </span>

                <div className="flex items-center gap-1 mt-1">
                  <Clock className="text-green-600" size={14} />
                  <span className="font-semibold text-green-600 text-xs">
                    Aberto
                  </span>
                </div>
              </div>

              <Badge className="bg-white border-zinc-300 text-[#27251F] flex items-center gap-1 cursor-pointer">
                <Star fill="#FFC72C" strokeWidth={0} size={14} />
                <span className="font-bold">5.0</span>
              </Badge>
            </div>
          </section>

          <div className="w-full h-px bg-zinc-300 my-4" />

          <section className="w-full pb-4 px-2">
            <div className="flex gap-3 overflow-x-auto snap-x snap-mandatory scrollbar-hide">
              {categories.map((item) => {
                const isActive = active === item;

                return (
                  <Button
                    key={item}
                    onClick={() => setActive(item)}
                    className={`
                      snap-start shrink-0 px-4 py-2 text-sm rounded-full border transition-all font-semibold
                      ${
                        isActive
                          ? "bg-[#FFC72C] text-[#27251F] border-[#FFC72C]"
                          : "bg-white text-zinc-500 border-zinc-300 hover:bg-zinc-100"
                      }
                    `}
                  >
                    {item}
                  </Button>
                );
              })}
            </div>
          </section>

          <h2 className="text-lg sm:text-xl font-bold text-[#27251F] dark:text-white mb-4 px-4">
            Lançamentos
          </h2>

          <section className="w-full">
            {[1, 2, 3].map((item, index) => (
              <div
                key={item}
                onClick={goToOrder}
                className={`
        w-full
        flex
        items-center
        justify-between
        gap-4
        py-5
        cursor-pointer
        transition-colors
        hover:bg-zinc-100
        dark:hover:bg-zinc-800
        px-2
        ${index !== 2 ? "border-b border-zinc-300 dark:border-zinc-700" : ""}
      `}
              >
                <div className="flex flex-col flex-1 pr-2">
                  <h3 className="font-semibold text-[#27251F] dark:text-white text-base sm:text-lg">
                    McOferta Especial {item}
                  </h3>

                  <p className="text-sm text-zinc-500 mt-1 line-clamp-2">
                    Hambúrguer 100% carne bovina, batata média e bebida.
                  </p>

                  <span className="font-bold text-[#27251F] dark:text-white mt-2 text-base">
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
