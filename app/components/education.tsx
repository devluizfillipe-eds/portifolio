import { CheckIcon } from '@heroicons/react/20/solid';

export default function Education() {
  return (
    <div className="mx-auto max-w-4xl py-20 sm:py-16" id="education">
      <div className="pb-12 text-center">
        <h3 className="mx-auto px-12 text-4xl font-bold tracking-tight text-gray-900 sm:max-w-none sm:text-6xl">
          EDUCATION & CERTIFICATIONS
        </h3>
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h4 className="mt-6 text-xl font-bold leading-8 text-gray-700">Degree</h4>
        <p className="mt-6 text-xl leading-8 text-gray-700">Bachelor's in Software Engineering</p>
        <p className="mt-6 text-xl leading-8 text-gray-700"></p>
        <ul role="list" className="text-gray-600">
          <li key="1" className="flex gap-x-3">
            <CheckIcon aria-hidden="true" className="h-6 w-5 flex-none text-indigo-600" />
            Centro Universitário Una - 2024 – 2028 - Brazil
          </li>
        </ul>
        <h4 className="mt-6 text-xl font-bold leading-8 text-gray-700">Certifications</h4>
        <ul
          role="list"
          className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6"
        >
          <li key="1" className="flex gap-x-3">
            <CheckIcon aria-hidden="true" className="h-6 w-5 flex-none text-indigo-600" />
            Senai - Contagem/MG
          </li>
          <li key="2" className="flex gap-x-3">
            <CheckIcon aria-hidden="true" className="h-6 w-5 flex-none text-indigo-600" />
            Technic in Information Technology 2020 - 2021
          </li>
        </ul>

        <h4 className="mt-6 text-xl font-bold leading-8 text-gray-700">Languages</h4>
        <ul
          role="list"
          className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6"
        >
          <li key="1" className="flex gap-x-3">
            <CheckIcon aria-hidden="true" className="h-6 w-5 flex-none text-indigo-600" />
            English: A1 Advanced
          </li>
          <li key="2" className="flex gap-x-3">
            <CheckIcon aria-hidden="true" className="h-6 w-5 flex-none text-indigo-600" />
            Portuguese: Native
          </li>
        </ul>
      </div>
    </div>
  );
}
