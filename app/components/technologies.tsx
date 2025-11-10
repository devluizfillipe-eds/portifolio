export default function Technologies() {
  return (
    <div className="py-20 sm:py-16" id="technologies">
      <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
        <div className="pb-12 text-center">
          <h3 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            MY TECHNOLOGIES
          </h3>
          <p className="mt-6 text-xl leading-8 text-gray-700">Over 11 known tenologies</p>
        </div>

  <div className="mx-auto grid max-w-none grid-cols-3 items-center gap-x-6 gap-y-8 sm:gap-x-8 sm:gap-y-10 lg:mx-0 lg:max-w-none lg:grid-cols-5 xl:grid-cols-6">
          {/* 1. Node.js */}
          <div className="flex flex-col items-center justify-center gap-2">
            <div className="h-10 w-10 sm:h-12 sm:w-12 shrink-0 flex items-center justify-center">
              <svg className="h-full w-full" viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet">
                <polygon points="64 6 118 34 118 94 64 122 10 94 10 34" fill="#3C873A" />
                <text
                  x="64"
                  y="78"
                  fill="#fff"
                  fontSize="28"
                  fontFamily="Arial"
                  fontWeight="700"
                  textAnchor="middle"
                >
                  node
                </text>
              </svg>
            </div>
            <div className="text-gray-800">Node.js</div>
          </div>

          {/* 2. TypeScript */}
          <div className="flex flex-col items-center justify-center gap-2">
            <div className="h-10 w-10 sm:h-12 sm:w-12 shrink-0 flex items-center justify-center">
              <svg className="h-full w-full" viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet">
                <rect width="128" height="128" rx="16" fill="#3178C6" />
                <text
                  x="64"
                  y="86"
                  fill="#fff"
                  fontSize="44"
                  fontFamily="Arial"
                  fontWeight="700"
                  textAnchor="middle"
                >
                  TS
                </text>
              </svg>
            </div>
            <div className="text-gray-800">TypeScript</div>
          </div>

          {/* 3. React */}
          <div className="flex flex-col items-center justify-center gap-2">
            <div className="h-10 w-10 sm:h-12 sm:w-12 shrink-0 flex items-center justify-center">
              <svg className="h-full w-full" viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet">
                <g fill="none" stroke="#61DAFB" strokeWidth="6" strokeLinecap="round">
                  <ellipse cx="64" cy="64" rx="36" ry="12" transform="rotate(0 64 64)" />
                  <ellipse cx="64" cy="64" rx="36" ry="12" transform="rotate(60 64 64)" />
                  <ellipse cx="64" cy="64" rx="36" ry="12" transform="rotate(120 64 64)" />
                </g>
                <circle cx="64" cy="64" r="8" fill="#61DAFB" />
              </svg>
            </div>
            <div className="text-gray-800">React</div>
          </div>

          {/* 4. Next.js */}
          <div className="flex flex-col items-center justify-center gap-2">
            <div className="h-10 w-10 sm:h-12 sm:w-12 shrink-0 flex items-center justify-center">
              <svg className="h-full w-full" viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet">
                <rect width="128" height="128" rx="16" fill="#000" />
                <text
                  x="64"
                  y="86"
                  fill="#fff"
                  fontSize="48"
                  fontFamily="Arial"
                  fontWeight="700"
                  textAnchor="middle"
                >
                  N
                </text>
              </svg>
            </div>
            <div className="text-gray-800">Next.js</div>
          </div>

          {/* 5. Tailwind CSS */}
          <div className="flex flex-col items-center justify-center gap-2">
            <div className="h-10 w-10 sm:h-12 sm:w-12 shrink-0 flex items-center justify-center">
              <svg className="h-full w-full" viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet">
                <rect width="128" height="128" rx="16" fill="#06B6D4" />
                <path d="M24 72c20 0 28-16 56-16 0 28-20 40-56 40" fill="#075985" opacity="0.95" />
              </svg>
            </div>
            <div className="text-gray-800">Tailwind CSS</div>
          </div>

          {/* 6. NestJS */}
          <div className="flex flex-col items-center justify-center gap-2">
            <div className="h-10 w-10 sm:h-12 sm:w-12 shrink-0 flex items-center justify-center">
              <svg className="h-full w-full" viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet">
                <circle cx="64" cy="64" r="56" fill="#E0234E" />
                <text
                  x="64"
                  y="80"
                  fill="#fff"
                  fontSize="44"
                  fontFamily="Arial"
                  fontWeight="700"
                  textAnchor="middle"
                >
                  N
                </text>
              </svg>
            </div>
            <div className="text-gray-800">NestJS</div>
          </div>

          {/* 7. API REST */}
          <div className="flex flex-col items-center justify-center gap-2">
            <div className="h-10 w-10 sm:h-12 sm:w-12 shrink-0 flex items-center justify-center">
              <svg className="h-full w-full" viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet">
                <rect x="16" y="28" width="96" height="72" rx="8" fill="#111827" />
                <circle cx="40" cy="64" r="8" fill="#fff" />
                <rect x="60" y="56" width="44" height="16" rx="4" fill="#fff" />
              </svg>
            </div>
            <div className="text-gray-800">API REST</div>
          </div>

          {/* 8. Supabase */}
          <div className="flex flex-col items-center justify-center gap-2">
            <div className="h-10 w-10 sm:h-12 sm:w-12 shrink-0 flex items-center justify-center">
              <svg className="h-full w-full" viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet">
                <rect width="128" height="128" rx="16" fill="#3A9A5F" />
                <path d="M32 48h64v32H32z" fill="#fff" opacity="0.9" />
              </svg>
            </div>
            <div className="text-gray-800">Supabase</div>
          </div>

          {/* 9. Vercel */}
          <div className="flex flex-col items-center justify-center gap-2">
            <div className="h-10 w-10 sm:h-12 sm:w-12 shrink-0 flex items-center justify-center">
              <svg className="h-full w-full" viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet">
                <polygon points="64 16 112 112 16 112" fill="#000" />
              </svg>
            </div>
            <div className="text-gray-800">Vercel</div>
          </div>

          {/* 10. GitHub */}
          <div className="flex flex-col items-center justify-center gap-2">
            <div className="h-10 w-10 sm:h-12 sm:w-12 shrink-0 flex items-center justify-center">
              <svg className="h-full w-full" viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet">
                <rect width="128" height="128" rx="16" fill="#24292F" />
                <path
                  fill="#fff"
                  d="M64 36c-15 0-28 12-28 28 0 12 8 22 19 25 1 .2 1.3-.4 1.3-.9v-3.5c-7.7 1.7-9.3-3.7-9.3-3.7-1.1-2.9-2.7-3.7-2.7-3.7-2.2-1.5.2-1.5.2-1.5 2.4.2 3.6 2.4 3.6 2.4 2.2 3.8 5.8 2.7 7.2 2 0-1.6.8-2.7 1.4-3.4-6.1-.7-12.5-3-12.5-13.3 0-2.9 1-5.3 2.6-7.2-.3-.7-1.1-3.7.2-7.6 0 0 2.1-.7 7 2.6a24 24 0 0112.8 0c4.9-3.3 7-2.6 7-2.6 1.3 3.9.5 6.9.2 7.6 1.6 1.9 2.6 4.3 2.6 7.2 0 10.3-6.4 12.6-12.5 13.3 1 .9 1.8 2.6 1.8 5.2v7.7c0 .5.3 1.2 1.3.9C84 86 92 76 92 64c0-16-13-28-28-28z"
                />
              </svg>
            </div>
            <div className="text-gray-800">GitHub</div>
          </div>

          {/* 11. Linux */}
          <div className="flex flex-col items-center justify-center gap-2">
            <div className="h-10 w-10 sm:h-12 sm:w-12 shrink-0 flex items-center justify-center">
              <svg className="h-full w-full" viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet" role="img" aria-label="Linux">
                {/* Tux simplified */}
                {/* Body */}
                <ellipse cx="64" cy="76" rx="34" ry="40" fill="#000" />
                {/* Belly */}
                <ellipse cx="64" cy="84" rx="26" ry="30" fill="#fff" />
                {/* Head */}
                <circle cx="64" cy="36" r="18" fill="#000" />
                {/* Eyes */}
                <circle cx="58" cy="34" r="5" fill="#fff" />
                <circle cx="70" cy="34" r="5" fill="#fff" />
                <circle cx="60" cy="35" r="2.2" fill="#000" />
                <circle cx="72" cy="35" r="2.2" fill="#000" />
                {/* Beak */}
                <path d="M58 44c3 3 9 3 12 0 1-1 1-3 0-4-5-2-7-2-12 0-1 1-1 3 0 4z" fill="#F2C500" />
                {/* Feet */}
                <ellipse cx="48" cy="106" rx="14" ry="9" fill="#F2C500" />
                <ellipse cx="80" cy="106" rx="14" ry="9" fill="#F2C500" />
                {/* Outline highlights */}
                <path d="M48 64c2 6 2 10 0 16" stroke="#fff" strokeWidth="2" fill="none" opacity=".8" />
                <path d="M80 64c-2 6-2 10 0 16" stroke="#fff" strokeWidth="2" fill="none" opacity=".8" />
              </svg>
            </div>
            <div className="text-gray-800">Linux</div>
          </div>
        </div>
      </div>
    </div>
  );
}
