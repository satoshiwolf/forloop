import { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Footer from "../components/Footer";
import Header from "../components/Header";
import SquigglyLines from "../components/SquigglyLines";
import { Testimonials } from "../components/Testimonials";

const Home: NextPage = () => {
  return (
    <div className="flex max-w-6xl mx-auto flex-col items-center justify-center py-2 min-h-screen">
      <Head>
        <title>ForLoop</title>
      </Head>

      <Header />
      <main className="flex flex-1 w-full flex-col items-center justify-center text-center px-4 sm:mt-20 mt-20 background-gradient">
        <h1 className="mx-auto max-w-4xl font-display text-5xl font-bold tracking-normal text-gray-300 sm:text-7xl">
          Una agencia sobre{" "}
          <span className="relative whitespace-nowrap text-blue-600">
            <SquigglyLines />
            <span className="relative">Software</span>
          </span>{" "}
          para todos.
        </h1>
        <h2 className="mx-auto mt-12 max-w-xl text-lg sm:text-gray-400  text-gray-500 leading-7">
            Potencia tu negocio con nuestra agencia de software. Desarrollo web, aplicaciones móviles y sistemas empresariales a medida. ¡Transformamos tus ideas en éxito digital!
        </h2>
        <Link
          className="bg-blue-600 rounded-xl text-white font-medium px-4 py-3 sm:mt-10 mt-8 hover:bg-blue-500 transition"
          href="/dream"
        >
          Contanos tu Proyecto
        </Link>
        <a
          href="/favicon.ico"
          target="_blank"
          rel="noreferrer"
          className="border border-gray-700 rounded-lg py-2 px-4 text-gray-400 text-sm mb-5 transition duration-300 ease-in-out hover:text-gray-300 mt-10"
        >
          Descubre nuestro proyecto sobre seguridad{" "}
          <span className="text-blue-600">Aquí</span>
        </a>
        <section className="overflow-hidden sm:grid sm:grid-cols-2 sm:items-center">
          <div className="p-8 md:p-12 lg:px-16 lg:py-24">
            <div className="mx-auto max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
              <h2 className="text-2xl font-bold text-white md:text-3xl">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit
              </h2>
              <p className="hidden text-gray-500 md:mt-4 md:block">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, egestas
                tempus tellus etiam sed. Quam a scelerisque amet ullamcorper eu enim et
                fermentum, augue. Aliquet amet volutpat quisque ut interdum tincidunt
                duis.
              </p>
              <div className="mt-4 md:mt-8">
                <a href="/" className="bg-blue-600 rounded-xl inline-block px-12 py-3 text-sm font-medium text-white transition hover:bg-blue-500 focus:outline-none focus:ring focus:ring-yellow-400">
                  Get Started Today
                </a>
              </div>
            </div>
          </div>
          <img src="https://images.unsplash.com/photo-1484959014842-cd1d967a39cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" alt="violin" className="h-full w-full object-cover sm:h-[calc(100%_-_2rem)] sm:self-end sm:rounded-ss-[30px] md:h-[calc(100%_-_4rem)] md:rounded-ss-[60px]" />
        </section>
      </main>
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Home;
