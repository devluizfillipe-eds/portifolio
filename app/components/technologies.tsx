const technologies = [
  { name: 'Node.js', src: '/assets/icons/nodedotjs.svg' },
  { name: 'TypeScript', src: '/assets/icons/typescript.svg' },
  { name: 'React', src: '/assets/icons/react.svg' },
  { name: 'Next.js', src: '/assets/icons/nextdotjs.svg' },
  { name: 'Tailwind CSS', src: '/assets/icons/tailwindcss.svg' },
  { name: 'NestJS', src: '/assets/icons/nestjs.svg' },
  { name: 'API REST', src: '/assets/icons/api.svg' },
  { name: 'Supabase', src: '/assets/icons/supabase.svg' },
  { name: 'Vercel', src: '/assets/icons/vercel.svg' },
  { name: 'GitHub', src: '/assets/icons/github.svg' },
  { name: 'Linux', src: '/assets/icons/linux.svg' },
  { name: 'Codex', src: '/assets/icons/codex.svg' },
  { name: 'Claude', src: '/assets/icons/claude.svg' },
  { name: 'DeepSeek', src: '/assets/icons/deepseek.svg' },
];

export default function Technologies() {
  return (
    <div className="py-20 sm:py-16" id="technologies">
      <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
        <div className="pb-12 text-center">
          <h3 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            MY TECHNOLOGIES
          </h3>
          <p className="mt-6 text-xl leading-8 text-gray-700">Over 14 known technologies</p>
        </div>

        <div className="mx-auto grid max-w-none grid-cols-3 items-center gap-x-6 gap-y-8 sm:gap-x-8 sm:gap-y-10 lg:mx-0 lg:max-w-none lg:grid-cols-5 xl:grid-cols-6">
          {technologies.map((tech) => (
            <div key={tech.name} className="flex flex-col items-center justify-center gap-2">
              <div className="h-10 w-10 sm:h-12 sm:w-12 shrink-0 flex items-center justify-center">
                <img
                  src={tech.src}
                  alt={tech.name}
                  loading="lazy"
                  className="h-full w-full object-contain"
                />
              </div>
              <div className="text-gray-800">{tech.name}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
