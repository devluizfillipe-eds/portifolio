'use client';

import { useForm, ValidationError } from '@formspree/react';
import Image from 'next/image';

export default function Contact() {
  const [state, handleSubmit] = useForm('mldarlll');
  return (
    <div className="isolate py-24 px-6 sm:py-32 lg:px-8" id="contact">
      <div className="mx-auto max-w-4xl lg:flex lg:items-center lg:gap-8">
        <div className="flex-shrink-0 mx-auto lg:mx-0">
          <Image
            src="/assets/perfilsemfundo.png"
            alt="Your Name"
            width={160}
            height={160}
            className="mx-auto h-40 w-40 rounded-full object-cover ring-4 shadow-lg ring-white"
          />
        </div>

        <div className="mt-8 text-center lg:mt-0 lg:text-left">
          <h3 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            CONTACT ME
          </h3>
          <p className="mt-2 text-lg leading-8 text-gray-600">Let's get work together!</p>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            Belo Horizonte, Brazil <br />
            Mobile:{' '}
            <a href="tel:+5531995567789" className="text-indigo-600 underline">
              +55 (31) 99556-7789
            </a>{' '}
            <br />
            Email:{' '}
            <a href="mailto:devluizfillpe@gmail.com" className="text-indigo-600 underline">
              devluizfillipe@gmail.com
            </a>{' '}
            <br />
            LinkedIn:{' '}
            <a
              href="https://www.linkedin.com/in/luizfillipedev/"
              className="text-indigo-600 underline"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn Profile
            </a>
          </p>

          <div className="mt-4 flex justify-center gap-3 lg:justify-start">
            <a
              href="/assets/cv.pdf"
              className="inline-flex items-center rounded-md bg-gray-100 py-2 px-3 text-sm font-medium text-gray-900 shadow-sm hover:bg-gray-200"
              target="_blank"
              rel="noreferrer"
            >
              View CV (PDF)
            </a>

            <a
              href="/assets/cv.pdf"
              download
              className="inline-flex items-center rounded-md bg-indigo-600 py-2 px-3 text-sm font-medium text-white shadow-sm hover:bg-indigo-500"
            >
              Download CV
            </a>
          </div>
        </div>
      </div>

      {state.succeeded ? (
        <div className="mt-8 mx-auto max-w-xl sm:mt-8">
          <div className="rounded-md bg-green-50 p-4">
            <p className="text-center text-lg font-medium text-green-800">
              Thanks for the contact, return soon
            </p>
          </div>
        </div>
      ) : (
        <form
          action="#"
          method="POST"
          className="mt-8 mx-auto max-w-xl sm:mt-8"
          onSubmit={handleSubmit}
        >
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            <div>
              <label
                htmlFor="first-name"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                First name
              </label>
              <div className="mt-2.5">
                <input
                  id="first-name"
                  name="first-name"
                  type="text"
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 ring-1 shadow-sm ring-gray-300 ring-inset placeholder:text-gray-400 focus:ring-2 focus:ring-indigo-600 focus:ring-inset sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="last-name"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Last name
              </label>
              <div className="mt-2.5">
                <input
                  id="last-name"
                  name="last-name"
                  type="text"
                  autoComplete="family-name"
                  className="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 ring-1 shadow-sm ring-gray-300 ring-inset placeholder:text-gray-400 focus:ring-2 focus:ring-indigo-600 focus:ring-inset sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="company"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Company
              </label>
              <div className="mt-2.5">
                <input
                  id="company"
                  name="company"
                  type="text"
                  autoComplete="organization"
                  className="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 ring-1 shadow-sm ring-gray-300 ring-inset placeholder:text-gray-400 focus:ring-2 focus:ring-indigo-600 focus:ring-inset sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="email"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Email
              </label>
              <div className="mt-2.5">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 ring-1 shadow-sm ring-gray-300 ring-inset placeholder:text-gray-400 focus:ring-2 focus:ring-indigo-600 focus:ring-inset sm:text-sm sm:leading-6"
                />
              </div>
              <ValidationError prefix="Email" field="email" errors={state.errors} />
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="phone-number"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Phone number
              </label>
              <div className="relative mt-2.5">
                <input
                  id="phone-number"
                  name="phone-number"
                  type="tel"
                  autoComplete="tel"
                  className="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 ring-1 shadow-sm ring-gray-300 ring-inset placeholder:text-gray-400 focus:ring-2 focus:ring-indigo-600 focus:ring-inset sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Message
              </label>
              <div className="mt-2.5">
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 ring-1 shadow-sm ring-gray-300 ring-inset placeholder:text-gray-400 focus:ring-2 focus:ring-indigo-600 focus:ring-inset sm:text-sm sm:leading-6"
                  defaultValue={''}
                />
              </div>
              <ValidationError prefix="Message" field="message" errors={state.errors} />
            </div>
          </div>
          <div className="mt-10">
            <button
              type="submit"
              disabled={state.submitting}
              className="block w-full rounded-md bg-indigo-600 py-2.5 px-3.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Let's talk
            </button>
            <ValidationError errors={state.errors} />
          </div>
        </form>
      )}
    </div>
  );
}
