import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
    return (
        <div className="flex flex-col min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
            <div className="container w-screen max-w-3xl px-4 py-8 flex flex-col items-center gap-4">
                <div className="flex w-12 h-12 bg-red-500 rounded-md items-center justify-center -mb-2">
                    <Image
                        src="/mcdonalds-logo-removebg-preview.png"
                        alt="McDonald's logo"
                        width={8}
                        height={8}
                        className="dark:invert min-h-8 min-w-8"
                    />
                </div>
                <h1 className="text-sm font-bold text-center text-[#27251F] dark:text-white">
                    FSW Donald's
                </h1>

                <h1 className="text-2xl font-bold text-center text-[#27251F] dark:text-white">
                    Seja bem-vindo!
                </h1>

                <span className="text-center text-sm text-[#a1a1a1] dark:text-zinc-700 max-w-md">
                    Escolha como prefere aproveitar sua refeição. Estamos aqui para
                    oferecer praticidade e sabor em cada detalhe!
                </span>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-md mt-8">
                    <div className="group cursor-pointer rounded-2xl border-2 border-zinc-400 bg-white dark:bg-zinc-900 p-6 transition-all duration-300 hover:scale-[1.03] hover:shadow-xl hover:border-red-500">
                        <div className="flex flex-col items-center gap-4">
                            <Image
                                src="/burguer2.png"
                                alt="Para comer aqui"
                                width={250}
                                height={250}
                                className="object-contain transition-transform duration-300 group-hover:scale-110"
                            />

                            <Button
                                asChild
                                variant="outline"
                                size="lg"
                                className="w-full border-zinc-400 hover:border-red-500 text-red-600 hover:bg-red-500 hover:text-white cursor-pointer"
                            >
                                <Link href="/order">
                                    Comer agora
                                </Link>
                            </Button>
                        </div>
                    </div>

                    <div className="group cursor-pointer rounded-2xl border-2 border-zinc-400 bg-white dark:bg-zinc-900 p-6 transition-all duration-300 hover:scale-[1.03] hover:shadow-xl hover:border-yellow-500">
                        <div className="flex flex-col items-center gap-4">
                            <Image
                                src="/menu.png"
                                alt="Para levar"
                                width={140}
                                height={140}
                                className="object-contain transition-transform duration-300 group-hover:scale-110"
                            />

                            <Button
                                asChild
                                variant="outline"
                                size="lg"
                                className="w-full hover:border-yellow-500 text-yellow-600 hover:bg-yellow-500 hover:text-white cursor-pointer"
                            >
                                <Link href="/menu">
                                    Ver Menu
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
