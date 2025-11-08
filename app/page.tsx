'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Page() {
  return (
    <motion.div animate={{ opacity: 1 }} initial={{ opacity: 0 }}>
      <div className="relative isolate overflow-hidden py-10 sm:py-12 lg:overflow-visible">
        <div className="mx-auto grid max-w-2xl grid-cols-1 justify-center gap-x-8 gap-y-8 px-6 align-middle sm:px-8 lg:max-w-5xl lg:px-8 xl:max-w-7xl xl:grid-cols-3 xl:items-start xl:gap-y-10">
          <div className="xl:col-span-2 xl:col-start-1 xl:row-start-1 xl:mx-auto xl:grid xl:w-full xl:max-w-7xl xl:grid-cols-2 xl:gap-x-8 xl:px-8">
            <div className="xl:w-[540px]">
              <p className="text-base font-semibold leading-7 text-indigo-600">Hi, there</p>
              <h1 className="mt-2 text-7xl font-bold tracking-tight text-gray-900 sm:text-9xl">
                I'M Luiz
              </h1>
              <p className="mt-6 text-gray-700 xl:text-xl">
                I am a Software Engineering student at Centro Universitário Una Contagem, currently
                in my second semester, focusing on web development.I work as a freelancer, having
                developed responsive web applications, including a complete web app for a barbershop
                using React, Node.js, and TypeScript. My core values are discipline, clear
                communication, and natural leadership. I am constantly seeking to improve my
                technical skills and expand my knowledge of modern technologies within the
                JavaScript ecosystem.My goal is to secure an internship or freelance opportunity
                that allows me to grow professionally and contribute to projects with real impact.
              </p>
              <div className="pt-8">
                <a
                  href="/#contact"
                  className="mt-10 rounded-md bg-indigo-600 py-2 px-8 text-center text-lg text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Hire Me
                </a>
              </div>
            </div>
          </div>

          {/* Large image removed - profile will appear above SOFTWARE ENGINEER */}

          <div className="items-end xl:col-start-3 xl:row-start-1 xl:mx-auto xl:grid xl:h-full xl:w-full xl:max-w-7xl xl:justify-end xl:gap-x-8 xl:px-8">
            <div className="text-center xl:text-left">
              <div className="flex flex-col items-center gap-4 xl:items-start">
                <Image
                  src="/assets/perfilsemfundo.png"
                  alt="Profile"
                  width={160}
                  height={160}
                  className="rounded-full object-cover ring-2 shadow-md ring-white"
                />
                <div className="xl:max-w-48">
                  <h2 className="mt-2 text-7xl font-bold tracking-tight text-gray-900 sm:text-4xl xl:text-right">
                    SOFTWARE ENGINEER
                  </h2>
                </div>
                <div className="flex items-center justify-center xl:justify-end">
                  <a
                    href="/assets/cv.pdf"
                    target="_blank"
                    className="flex items-center justify-center border-b border-indigo-600 leading-8 text-indigo-600"
                  >
                    <span>Donwload CV</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      // stroke-width="1.5"
                      stroke="blue"
                      className="size-5 text-indigo-600"
                    >
                      <path
                        // stroke-linecap="round"
                        // stroke-linejoin="round"
                        d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
