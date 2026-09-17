import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';
import { CheckIcon, ChevronDownIcon } from '@heroicons/react/20/solid';

const stats = [
  {
    id: 1,
    company: 'GV Vidros',
    year: '09/2026',
    role: 'Full Stack Developer',
    tech: 'TypeScript, React, Vite, Supabase Edge Functions, PostgreSQL',
    location: 'Remote',
    brief:
      'Developed a financial system fully integrated with the logistics system, covering complete financial and fiscal control.',
    highlights: [
      'Built the frontend with React, TypeScript, and Vite for a fast, modern experience.',
      'Implemented full financial and fiscal control integrated with the logistics platform.',
      'Used Supabase Edge Functions to emulate the backend and PostgreSQL for data persistence.',
    ],
  },
  {
    id: 2,
    company: 'GV Vidros',
    year: '08/2026 – 09/2025',
    role: 'Full Stack Developer',
    tech: 'React, TypeScript, Supabase Edge Functions, Expo, Android, PostgreSQL',
    location: 'Remote',
    brief:
      'Developed a logistics management system to organize service scheduling and employee control, along with a companion Android app for on-site service tracking.',
    highlights: [
      'Built the web logistics system with React and TypeScript for service and employee management.',
      'Created an Android app with Expo so employees can track services in real time.',
      'Emulated the backend with Supabase Edge Functions, removing the need for a dedicated server.',
      'Modeled the relational data layer with PostgreSQL via Supabase.',
    ],
  },
  {
    id: 3,
    company: 'Sacramento',
    year: '9/2026',
    role: 'Full Stack Developer',
    tech: 'TypeScript, Next.js, Tailwind CSS',
    location: 'Remote',
    brief:
      'Remastered the frontend of the Sacramento e-commerce using a modern stack, improving performance and user experience.',
    highlights: [
      'Rebuilt the storefront with Next.js and TypeScript.',
      'Improved responsiveness, accessibility, and overall page performance.',
    ],
  },
  {
    id: 4,
    company: 'Sacramento',
    year: '8/2026',
    role: 'Digital Security / Full Stack Developer',
    tech: 'Security Hardening, Next.js, TypeScript',
    location: 'Remote',
    brief:
      'Refactored the entire security layer of a previously compromised e-commerce platform.',
    highlights: [
      'Conducted a security review of the hacked e-commerce application.',
      'Hardened the platform against common web vulnerabilities.',
      'Rebuilt authentication and data protection mechanisms.',
    ],
  },
  {
    id: 5,
    company: "Barbearia Bozo's Babeiros",
    year: '09/2025',
    role: 'Full Stack Developer',
    tech: 'Node.js, TypeScript, React, Next.js, Tailwind CSS, NestJS, API REST, Supabase, Vercel, GitHub',
    location: 'Remote',
    brief:
      'Development of a web app for a barbershop with integration of the service system with the financial system',
    highlights: [
      'Implemented responsive Next.js frontend with TailwindCSS.',
      'Integrated PostgreSQL database via Supabase and Prisma ORM.',
      'Built Node.js microservice for WhatsApp integration.',
      'Deployed to cloud infrastructure (Vercel, Railway, Supabase).',
      'Optimized performance with code splitting and lazy loading.',
      'Ensured accessibility and responsive design.',
      'Utilized Node.js, TypeScript, Prisma.',
    ],
  },
  {
    id: 6,
    company: 'Vivo',
    year: '07/2025',
    role: 'Freelancer Frontend Developer',
    tech: 'React.js, TypeScript,HTML5,',
    location: 'Remote',
    brief:
      'Modernized customer service page using React.js and TypeScript, implementing responsive components and performance optimization.',
    highlights: [
      ' Modernized interface using React.js and TypeScript.',
      'Implemented responsive forms and live chat integration.',
      'Created FAQ section with full accessibility.',
      'Optimized performance with advanced techniques.',
    ],
  },
  {
    id: 7,
    company: 'Junior Gás',
    year: '03/2025 - 05/2026',
    role: 'Freelancer Full Stack Developer',
    tech: 'Next.js, TypeScript, Tailwind CSS, PostgreSQL, API REST',
    location: 'Remote',
    brief:
      'a complete one-page, mobile-first e-commerce with serverless architecture, integrating modern frontend, order management, checkout with payment and administrative panel.',
    highlights: [
      'Developed a one-page SPA using Next.js (App Router) and TypeScript, styled with TailwindCSS and smooth scroll navigation.',
      'Implemented a serverless backend with Supabase (PostgreSQL, Auth, and APIs) for data persistence and order management.',
      'Built a checkout flow with payment gateway integration and order creation/update logic.',
      'Created an admin panel with authentication, order listing, and optimized print functionality.',
    ],
  },
];

export default function Experience() {
  return (
    <div className="py-20 sm:py-16" id="experience">
      <div className="pb-12 text-center">
        <h3 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
          EXPERIENCE & SKILLS
        </h3>
      </div>
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-x-4 divide-y divide-gray-300">
          {stats.map((stat) => (
            <Disclosure as="div" className="p-2" key={stat.id}>
              <DisclosureButton className="group flex w-full items-center justify-between">
                <div className="grid w-full grid-cols-1 items-center justify-items-stretch gap-x-4 gap-y-4 py-8 text-left sm:grid-cols-4">
                  <div className="text-left text-xl font-bold text-gray-600 group-data-[hover]:text-indigo-600">
                    {stat.company}
                  </div>
                  <div className="text-xs font-bold text-gray-900 group-data-[hover]:text-indigo-600">
                    {stat.year}
                  </div>
                  <div className="text-xl font-bold text-gray-600 group-data-[hover]:text-indigo-600">
                    {stat.role}
                  </div>
                  <div className="text-right text-xs font-bold text-gray-600 group-data-[hover]:text-indigo-600 lg:justify-self-end">
                    {stat.tech}
                  </div>
                </div>
                <div>
                  <ChevronDownIcon className="group-data-[hover]:fill-blue size-5 w-5 fill-black/50 group-data-[open]:rotate-180" />
                </div>
              </DisclosureButton>
              <DisclosurePanel className="mt-2 text-sm text-gray-600">
                <div className="pb-4 lg:justify-self-end">
                  <span className="font-bold">Location: </span>
                  {stat.location}
                </div>
                <div className="lg:justify-self-end">{stat.brief}</div>
                {stat.highlights.map((i, index) => (
                  <ul role="list" className="mt-4 grid gap-4 text-sm leading-6 text-gray-600">
                    <li key={index} className="flex gap-x-3">
                      <CheckIcon aria-hidden="true" className="h-6 w-5 flex-none text-indigo-600" />
                      {i}
                    </li>
                  </ul>
                ))}
              </DisclosurePanel>
            </Disclosure>
          ))}
        </div>
      </div>
    </div>
  );
}
