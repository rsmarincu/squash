"use client";

import Image from "next/image";
import Marquee from "react-fast-marquee";
import { SyntheticEvent, useState } from "react";
import { Dialog } from "@headlessui/react";

const membru = ["M", "E", "M", "B", "R", "U"];

async function register(name: string, email: string, phone: string) {
  await fetch("/api", {
    method: "POST",
    body: JSON.stringify({
      name,
      email,
      phone,
    }),
  });
}

export default function Home() {
  let [isOpen, setIsOpen] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleChange = (event: SyntheticEvent) => {
    setForm({
      ...form,
      [(event.target as HTMLInputElement).id]: (
        event.target as HTMLInputElement
      ).value,
    });
  };

  const handleSubmit = async (event: SyntheticEvent) => {
    event.preventDefault();
    await register(form.name, form.email, form.phone);
    setIsOpen(false);
  };

  return (
    <main className="flex w-full min-h-screen flex-col  overflow-hidden">
      <div className="ml-8 lg:ml-32 flex grow">
        <div className="absolute w-full h-full z-0 -left-[50%]  mix-blend-overlay">
          <Image
            src={"/blur.png"}
            width={0}
            height={0}
            sizes={"100vw"}
            alt={"blur"}
            style={{ width: "100%", height: "100%" }}
            priority
          />
        </div>
        <div className="absolute hidden xl:flex -translate-x-80 translate-y-[280px] z-0 opacity-70 rotate-45">
          <Image
            src={"/ball.png"}
            width={470}
            height={470}
            alt={"squash-ball"}
          />
        </div>
        <div className="absolute hidden md:flex bottom-0 2xl:right-80 xl:right-0 right-0 z-10">
          <Image src={"/racket.png"} width={634} height={936} alt={"racket"} />
        </div>
        <div className="flex grow w-full">
          <div className="w-full xl:w-2/3">
            <div className="flex py-16">
              <Image src={"/logo.png"} width={144} height={123} alt={"logo"} />
            </div>
            <div className="flex flex-col text-6xl xl:text-7xl">
              <h1 className={"font-medium text-white  z-10"}>Play. Workout.</h1>
              <h1 className={"font-medium text-white  z-10"}>Relax.</h1>
              <p className="font-light text-white text-2xl z-10 pt-10">
                Cea mai noua sala de squash din Sibiu.
              </p>
              <div className="flex flex-col xl:flex-row w-full mt-20">
                <div className="relative w-80 h-52 border border-white/30 rounded-2xl bg-white/30 z-10 backdrop-blur-sm overflow-hidden ">
                  <div className="flex flex-col p-2 px-4 h-full opacity-60 ">
                    <p className="text-white text-lg font-light grow">
                      Certified baller.
                    </p>
                    <div className="flex ">
                      {membru.map((letter, index) => (
                        <p
                          key={index}
                          className="text-white flex justify-center text-4xl font-light w-full "
                        >
                          {letter}
                        </p>
                      ))}
                    </div>
                    <div className="absolute rounded-full w-16 h-16  -bottom-5 -right-10 border-red border-4 mix-blend-overlay"></div>
                    <div className="absolute rounded-full w-52 h-52  -bottom-20 -left-10 border-white border-4">
                      <div className="relative -right-32 top-5 rounded-full w-5 h-5 bg-white"></div>
                    </div>
                  </div>
                </div>
                <div className="flex xl:ml-6 mt-24 mb-4 xl:mt-0 flex-col text-white font-light text-base">
                  <p className="xl:w-3/4 pb-4">
                    Primii membri inscrisi primesc 20% discount pentru 10
                    sedinte.
                  </p>
                  <div className="bg-squash-red w-fit px-3 rounded-sm py-1 z-20">
                    <button onClick={() => setIsOpen(true)}>
                      Inregistreaza-te!
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="hidden xl:flex w-1/3 bg-squash-light border-l-8 border-squash-red"></div>
        </div>
      </div>
      <div className="md:absolute  md:bottom-20 -skew-y-3 flex items-center md:text-6xl text-medium text-white w-full h-10 py-4 md:py-16  bg-squash-red px-8 mb-10 md:mb-0 z-0">
        <Marquee>
          <h1 className="px-3 md:px-8">ASB SQUASH COURTS</h1>
          <h1 className="px-3 md:px-8">WORLD SQUASH FEDERATION</h1>
          <h1 className="px-3 md:px-8">TECNIFIBRE</h1>
        </Marquee>
      </div>
      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className={"absolute z-50"}
      >
        <div className="fixed inset-0 bg-black/30" aria-hidden="true" />

        <div className="fixed inset-0 flex w-screen items-center justify-center ">
          <Dialog.Panel className="mx-auto max-w-md w-80 rounded bg-white bg-squash-light p-4">
            <Dialog.Title className={"justify-center flex text-xl font-light"}>
              Vreau sa devin membru!
            </Dialog.Title>

            <form onSubmit={handleSubmit} className={"flex flex-col gap-2"}>
              <div>
                <label className="block text-gray-500 font-medium  mb-1 md:mb-0 pr-4">
                  Nume
                </label>
                <input
                  type="text"
                  id={"name"}
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Nume"
                  className={
                    "bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-squash-red"
                  }
                  required
                />
              </div>
              <div>
                <label className="block text-gray-500 font-medium  mb-1 md:mb-0 pr-4">
                  Email
                </label>
                <input
                  type="text"
                  id={"email"}
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Email"
                  className={
                    "bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-squash-red"
                  }
                  required
                />
              </div>

              <div>
                <label className="block text-gray-500 font-medium  mb-1 md:mb-0 pr-4">
                  Telefon
                </label>
                <input
                  type="text"
                  id={"phone"}
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="Numar de telefon"
                  className={
                    "bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-squash-red"
                  }
                  required
                />
              </div>
              <div className="flex w-full justify-center">
                <div className="bg-squash-red w-fit px-3 rounded-sm text-white py-1 mt-4 z-20">
                  <button type={"submit"}>Trimite</button>
                </div>
              </div>
            </form>
          </Dialog.Panel>
        </div>
      </Dialog>
    </main>
  );
}
