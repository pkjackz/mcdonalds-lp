import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-200 font-sans dark:bg-black">
      <div className="relative w-full h-[180px] sm:h-[240px] md:h-[300px]">
        <Image
          src="/mcdonalds-hero.jpg"
          alt="McDonald's header"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </div>

      <div className="relative z-10 -mt-6 min-h-[calc(100vh-180px)] sm:min-h-[calc(100vh-240px)] md:min-h-[calc(100vh-300px)] flex">
        <div className="container mx-auto max-w-3xl bg-zinc-200 rounded-t-3xl px-6 flex flex-col items-center gap-4 min-h-full w-full overflow-y-auto overflow-x-hidden dark:bg-zinc-900">
          <div className="flex w-screen min-w-full h-26 bg-black rounded-2xl">
            <div className="flex w-12 h-12 bg-red-500 rounded-md items-center justify-center m-4">
              <Image
                src="/mcdonalds-logo-removebg-preview.png"
                alt="McDonald's logo"
                width={8}
                height={8}
                className="dark:invert min-h-8 min-w-8"
              />
            </div>
            <div className="flex flex-col items-start text-nowrap my-4">
              <span className="text-lg font-bold text-white">FSW Donald's</span>
              <span className="text-sm font-semibold text-zinc-600 -mt-1">
                Fast Food
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
