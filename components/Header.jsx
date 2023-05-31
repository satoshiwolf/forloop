import Image from "next/image";
import Link from "next/link";

export default function Header({
  photo,
  email,
}) {
  return (
    <header className="flex flex-col xs:flex-row justify-between items-center w-full mt-3 border-b pb-7 sm:px-4 px-2 border-gray-500 gap-2">
      <Link href="/" className="flex space-x-2">
        <Image
          alt="header text"
          src="/forloop_b.svg"
          className="sm:w-10 sm:h-10 w-9 h-9"
          width={24}
          height={24}
        />
        <h1 className="sm:text-3xl text-xl font-bold ml-2 tracking-tight">
          ForLoop
        </h1>
      </Link>
      <div className="flex justify-center items-center">
        <Link href="/" className="mr-6">
          <span className="text-base font-noraml ml-2 tracking-tight text-neutral-300 hover:text-gray-50 duration-150">
            Inicio
          </span>
        </Link>
        <Link href="/" className="mr-6">
          <span className="text-base font-noraml ml-2 tracking-tight text-neutral-300 hover:text-gray-50 duration-150">
            Nosotros
          </span>
        </Link>
        <Link href="/" className="mr-6">
          <span className="text-base font-noraml ml-2 tracking-tight text-neutral-300 hover:text-gray-50 duration-150">
            Portafolio
          </span>
        </Link>
        <Link href="/">
          <span className="text-base font-noraml ml-2 tracking-tight text-neutral-300 hover:text-gray-50 duration-150">
            Contacto
          </span>
        </Link>
        {/*
        <Link href="/" className="flex justify-center items-center bg-[#2563eb] p-2 rounded-lg hover:bg-[#3b82f6] duration-200">
          <span className="text-base  font-normal ml-2 tracking-tight flex justify-center text-gray-50 mr-2">
            Nuestro Proyecto
          </span>
        </Link> 
        */}
      </div>
    </header>
  );
}
