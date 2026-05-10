"use client";

import Link from "next/link";
import { useI18n } from "@/i18n/I18nProvider";

export default function Footer() {
  const { d } = useI18n();
  return (
    <footer className="bg-brown py-16">
      <div className="mx-auto px-6 lg:px-25 max-w-480">
        <div className="flex md:flex-row flex-col gap-25 mb-12">
          {/*  Logo  and  Company  Info  */}
          <div className="flex flex-col">
            <Link href="/" className="mb-6">
              <img
                src="/logo.png"
                alt="VERTIS"
                width="82"
                height="82"
                className="p-4 w-20 object-contain aspect-square"
              />
            </Link>
            <p className="mb-4 text-white/70 text-sm">{d.footer.legalName}</p>
            <a
              href="mailto:vertis@vertisincorporadora.com.br"
              className="flex items-center gap-2 text-white/70 hover:text-white text-sm transition-colors"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0  0  24  24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3  8l7.89  5.26a2  2  0  002.22  0L21  8M5  19h14a2  2  0  002-2V7a2  2  0  00-2-2H5a2  2  0  00-2  2v10a2  2  0  002  2z"
                />
              </svg>
              vertis@vertisincorporadora.com.br
            </a>
          </div>

          {/*  Quick  Links  */}
          <div>
            <h4 className="mb-6 text-white text-lg">{d.footer.quickLinks}</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/"
                  className="flex items-center gap-2 text-white/70 hover:text-white text-sm transition-colors"
                >
                  <svg
                    className="w-3 h-3"
                    fill="currentColor"
                    viewBox="0  0  24  24"
                  >
                    <path d="M8  5v14l11-7z" />
                  </svg>
                  {d.nav.home}
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="flex items-center gap-2 text-white/70 hover:text-white text-sm transition-colors"
                >
                  <svg
                    className="w-3 h-3"
                    fill="currentColor"
                    viewBox="0  0  24  24"
                  >
                    <path d="M8  5v14l11-7z" />
                  </svg>
                  {d.nav.about}
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="flex items-center gap-2 text-white/70 hover:text-white text-sm transition-colors"
                >
                  <svg
                    className="w-3 h-3"
                    fill="currentColor"
                    viewBox="0  0  24  24"
                  >
                    <path d="M8  5v14l11-7z" />
                  </svg>
                  {d.nav.contact}
                </Link>
              </li>
            </ul>
          </div>

          {/*  Social  Links  */}
          <div>
            <h4 className="mb-6 text-white text-lg">{d.footer.followUs}</h4>
            <p className="mb-4 text-white/70 text-sm">
              {d.footer.followUsBody}
            </p>
            <div className="flex gap-4">
              <a
                href="https://br.linkedin.com/in/vertis-incorporadora-b5433b3a6"
                className="hover:opacity-80 text-white transition-opacity"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0  0  24  24"
                >
                  <path d="M19  0h-14c-2.761  0-5  2.239-5  5v14c0  2.761  2.239  5  5  5h14c2.762  0  5-2.239  5-5v-14c0-2.761-2.238-5-5-5zm-11  19h-3v-11h3v11zm-1.5-12.268c-.966  0-1.75-.79-1.75-1.764s.784-1.764  1.75-1.764  1.75.79  1.75  1.764-.783  1.764-1.75  1.764zm13.5  12.268h-3v-5.604c0-3.368-4-3.113-4  0v5.604h-3v-11h3v1.765c1.396-2.586  7-2.777  7  2.476v6.759z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/*  Divider  */}
        <div className="bg-white/20 mb-8 w-full h-px"></div>

        {/*  Copyright  */}
        <p className="text-white/50 text-xs uppercase tracking-widest">
          {d.footer.copyright}
        </p>
      </div>
    </footer>
  );
}
