import Logo from "../assets/logo.svg";
import Image from "next/image";

import { User } from "lucide-react";
export default function Home() {
  return (
    <main className="grid grid-cols-2 min-h-screen">
      {/* Left */}
      <div className="relative flex flex-col items-start justify-between  overflow-hidden border-r border-white/10 bg-[url('../assets/bg-stars.svg')] bg-cover px-28 py-16">
        {/* Blur */}
        <div className="absolute right-0 top-1/2 h-[288px] w-[526px] -translate-y-1/2 translate-x-1/2 rounded-full bg-purple-700 opacity-50 blur-full" />

        {/* Stripes */}
        <div className="absolute bottom-0 right-2 top-0 w-2 bg-stripes" />

        {/* Sing In */}
        <a
          href=""
          className="flex items-center gap-3 text-left hover:text-gray-50 transition-colors"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-400">
            <User className="h-5 w-5 text-gray-500" />
          </div>
          <p className="max-w-[140px] text-sm leading-snug ">
            {" "}
            <span className="underline">Crie sua conta</span> e salve suas
            memórias
          </p>
        </a>

        {/* Hero */}
        <div className="space-y-5">
          <Image src={Logo} alt="Logo Spacetime" />

          <div className="max-w-[420px] space-y-4">
            <h1 className="text-5xl font-bold leading-tight text-gray-50">
              Sua cápsula do tempo
            </h1>
            <p className="text-lg leading-relaxed">
              Colecione momentos marcantes da sua jornada e compartilhe (se
              quiser) com o mundo!
            </p>
          </div>

          <a
            href=""
            className="uppercase inline-block rounded-full text-sm font-alt leading-none bg-green-500 px-5 py-3 text-black hover:bg-green-600"
          >
            Compartilhar lembrança
          </a>
        </div>

        {/* Page */}
        <div className="text-sm leading-relaxed text-gray-200">
          Feito com ❤️ por{" "}
          <a
            target="_blank"
            rel="noreferrer"
            className="underline  text-purple-200 hover:text-purple-50"
            href="https://github.com/biancaespindola"
          >
            Bianca
          </a>{" "}
          com a{" "}
          <a
            target="_blank"
            rel="noreferrer"
            className="underline hover:text-gray-100"
            href="https://www.rocketseat.com.br/"
          >
            Rocketseat
          </a>
          🚀
        </div>
      </div>

      {/* Right */}
      <div className="flex flex-col bg-[url('../assets/bg-stars.svg')] bg-cover p-16">
        <div className="flex flex-1 items-center justify-center">
          <p className="w-[360px] text-center leading-relaxed">
            Você ainda não registrou nenhuma lembrança, comece a{" "}
            <a href="" className="underline hover:text-gray-50">
              criar agora
            </a>
          </p>
        </div>
      </div>
    </main>
  );
}
