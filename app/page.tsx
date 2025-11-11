'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Page() {
  return (
    <motion.div animate={{ opacity: 1 }} initial={{ opacity: 0 }}>
    <div className="relative isolate overflow-hidden py-10 sm:py-12 lg:overflow-visible">
  <div className="mx-auto grid max-w-2xl grid-cols-1 justify-center gap-x-8 gap-y-8 px-6 align-middle sm:px-8 lg:max-w-5xl lg:px-8 xl:max-w-7xl xl:grid-cols-[1.15fr_0.9fr_0.9fr] xl:items-start xl:gap-y-10 xl:gap-x-2">
      <div className="xl:col-span-2 xl:col-start-1 xl:row-start-1 xl:mx-auto xl:grid xl:w-full xl:max-w-7xl xl:grid-cols-[0.9fr_1fr] xl:gap-x-2 xl:px-0">
            <div className="xl:w-[700px] xl:pr-0">
              <p className="text-base font-semibold leading-7 text-indigo-600">Hi, there</p>
              <h1 className="mt-2 text-7xl font-bold tracking-tight text-gray-900 sm:text-9xl">
                I'M Luiz
              </h1>
              <p className="mt-6 text-gray-700 xl:text-lg xl:leading-relaxed line-clamp-9">
                I am a Software Engineering student at Centro Universitário Una Contagem, currently
                in my second semester, focusing on web development. I work as a freelancer, having
                developed responsive web applications, including a complete web app for a barbershop
                using React, Node.js, and TypeScript. My core values are discipline, clear
                communication, and natural leadership. I am constantly seeking to improve my
                technical skills and expand my knowledge of modern technologies within the
                JavaScript ecosystem. My goal is to secure an internship or freelance opportunity
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

          <div className="items-start xl:col-start-3 xl:row-start-1 xl:mx-auto xl:grid xl:h-full xl:w-full xl:max-w-7xl xl:justify-start xl:gap-x-2 xl:px-2">
            <div className="text-center">
              <div className="flex flex-col items-center gap-2 xl:items-center xl:mt-1">
                <Image
                  src="/assets/perfilsemfundo.png"
                  alt="Profile"
                  width={256}
                  height={256}
                  className="h-44 w-44 xl:h-64 xl:w-64 rounded-full object-cover ring-2 shadow-md ring-white"
                />
                <div className="xl:max-w-48 w-full">
                  <h2 className="text-5xl font-bold tracking-tight text-gray-900 sm:text-4xl text-center">
                    SOFTWARE ENGINEER
                  </h2>
                </div>
                <div className="flex items-center justify-center mt-1">
                  <a
                    href="/assets/cv.pdf"
                    target="_blank"
                    className="flex items-center justify-center gap-1 border-b border-indigo-600 leading-7 text-indigo-600 text-base"
                  >
                    <span>Download CV</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="h-5 w-5 text-indigo-600"
                    >
                      <path d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
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
