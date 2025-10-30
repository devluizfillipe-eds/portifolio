'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Page() {
  return (
    <motion.div animate={{ opacity: 1 }} initial={{ opacity: 0 }}>
      <section className="container mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-24">
          {/* Coluna da esquerda - Texto */}
          <div className="space-y-6">
            <p className="text-base font-semibold text-indigo-600">Hi, there</p>
            <h1 className="text-5xl font-bold tracking-tight text-gray-900 sm:text-7xl">
              I&apos;M Luiz
            </h1>
            <p className="text-lg leading-8 text-gray-700">
              I am a Software Engineering student at Centro Universitário Una Contagem, currently
              in my second semester, focusing on web development. I work as a freelancer, having
              developed responsive web applications, including a complete web app for a barbershop
              using React, Node.js, and TypeScript. My core values are discipline, clear
              communication, and natural leadership. I am constantly seeking to improve my
              technical skills and expand my knowledge of modern technologies within the
              JavaScript ecosystem. My goal is to secure an internship or freelance opportunity
              that allows me to grow professionally and contribute to projects with real impact.
            </p>
            <div className="pt-4">
              <a
                href="/#contact"
                className="inline-block rounded-md bg-indigo-600 px-8 py-3 text-base font-semibold text-white shadow-sm hover:bg-indigo-500"
              >
                Hire Me
              </a>
            </div>
          </div>

          {/* Coluna da direita - Foto e título */}
          <div className="space-y-8">
            <Image
              src="/assets/perfilsemfundo.png"
              alt="Profile"
              width={220}
              height={220}
              className="rounded-full object-cover shadow-xl ring-4 ring-white"
              priority
            />
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              SOFTWARE ENGINEER
            </h2>
            <a
              href="/assets/cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border-b-2 border-indigo-600 pb-1 text-base font-medium text-indigo-600 hover:border-indigo-500 hover:text-indigo-500"
            >
              <span>Download CV</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-5 w-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
                />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
