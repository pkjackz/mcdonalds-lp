import Image from "next/image";

export default function Home() {
    return (
        <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
            <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
                <Image
                    className="dark:invert"
                    src="/mcdonalds-logo-with-logomark.webp"
                    alt="McDonald's logo"
                    width={100}
                    height={20}
                    priority
                />
                <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
                    <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
                        Bem-vindo ao McDonald's! 🍔
                    </h1>
                    <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
                        Explore nossos deliciosos hambúrgueres, batatas fritas crocantes e muito mais! Para começar, confira nossos {" Hamburgueres Clássicos "} ou experimente nossas opções de {" Hambúrgueres Especiais "}. Não se esqueça de adicionar uma porção de {" Batatas Fritas "} e uma bebida gelada para completar sua refeição!
                    </p>
                </div>
                <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
                    <a
                        className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-[#FFC72C] px-5 text-background transition-colors hover:bg-[#FFC72C] dark:hover:bg-[#ccc] md:w-[158px]"
                        href="/order"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Image
                            className="dark:invert"
                            src="/vercel.svg"
                            alt="Vercel logomark"
                            width={16}
                            height={16}
                        />
                        Pedir agora
                    </a>
                    <a
                        className="flex h-12 w-full items-center justify-center rounded-full bg-foreground text-white border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent   md:w-[162px] text-nowrap"
                        href="/order"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Conferir o cardápio
                    </a>
                </div>
            </main>
        </div>
    );
}
