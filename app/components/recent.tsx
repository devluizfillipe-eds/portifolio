'use client';
import { CheckIcon } from '@heroicons/react/20/solid';

export default function Recent() {
  return (
    <div className="mx-auto max-w-4xl py-20 sm:py-16" id="latest">
      <div className="pb-12 text-center">
        <h3 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">RECENT WORK</h3>
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <p className="mt-6 text-xl leading-8 text-gray-700">
          Recently, I focused on developing complete full-stack solutions, from real-time management
          systems to user interface optimization, always prioritizing performance, scalability, and
          end-user experience, including:
        </p>
        <ul
          role="list"
          className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6"
        >
          <li key="1" className="flex gap-x-3">
            <CheckIcon aria-hidden="true" className="h-6 w-5 flex-none text-indigo-600" />
            Robust backend architecture with NestJS and relational databases.
          </li>
          <li key="2" className="flex gap-x-3">
            <CheckIcon aria-hidden="true" className="h-6 w-5 flex-none text-indigo-600" />
            CResponsive interface development with React/Next.js.
          </li>

          <li key="3" className="flex gap-x-3">
            <CheckIcon aria-hidden="true" className="h-6 w-5 flex-none text-indigo-600" />
            Implementation of real-time systems and microservices.
          </li>

          <li key="4" className="flex gap-x-3">
            <CheckIcon aria-hidden="true" className="h-6 w-5 flex-none text-indigo-600" />
            Integration with external APIs and automated notifications.
          </li>

          <li key="5" className="flex gap-x-3">
            <CheckIcon aria-hidden="true" className="h-6 w-5 flex-none text-indigo-600" />
            Frontend performance optimization and advanced techniques.
          </li>

          <li key="6" className="flex gap-x-3">
            <CheckIcon aria-hidden="true" className="h-6 w-5 flex-none text-indigo-600" />
            Cloud infrastructure deployment and continuous monitoring.
          </li>
        </ul>
        <p className="mt-6 text-xl leading-8 text-gray-700">
          These experiences have sharpened my technical skills and my ability to contribute
          effectively to team and project successes.
        </p>
      </div>
    </div>
  );
}
