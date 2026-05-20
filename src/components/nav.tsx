"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const LINKS = [
  { id: "cocina", label: "Cocina" },
  { id: "clases", label: "Clases" },
  { id: "club", label: "El Club" },
  { id: "contacto", label: "Visitanos" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-paper/95 backdrop-blur-md text-verde border-b border-verde/10 py-4"
          : "bg-transparent text-paper py-6"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 flex items-center justify-between">
        <Link href="/" className="logo-pampa">
          <span className="pampa text-2xl md:text-3xl leading-none">PAMPA</span>
          <span
            className={`club text-lg md:text-xl leading-none ${
              scrolled ? "text-verde" : "text-paper/85"
            }`}
          >
            club
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-9">
          {LINKS.map((l) => (
            <Link
              key={l.id}
              href={`#${l.id}`}
              className="ulink text-[11px] tracking-[0.25em] uppercase font-medium"
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="#club"
            className={`px-5 py-3 text-[11px] tracking-[0.25em] uppercase font-medium transition-colors ${
              scrolled
                ? "bg-verde text-paper hover:bg-negro"
                : "border border-paper/40 text-paper hover:bg-paper hover:text-verde"
            }`}
          >
            Sumate
          </Link>
        </div>

        <button
          className="md:hidden flex flex-col gap-1.5"
          onClick={() => setOpen((o) => !o)}
          aria-label="Menú"
        >
          <span
            className={`block h-px w-7 transition-transform ${
              scrolled ? "bg-verde" : "bg-paper"
            } ${open ? "translate-y-2 rotate-45" : ""}`}
          />
          <span
            className={`block h-px w-7 transition-opacity ${
              scrolled ? "bg-verde" : "bg-paper"
            } ${open ? "opacity-0" : ""}`}
          />
          <span
            className={`block h-px w-7 transition-transform ${
              scrolled ? "bg-verde" : "bg-paper"
            } ${open ? "-translate-y-2 -rotate-45" : ""}`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-verde text-paper border-t border-paper/15">
          <div className="px-6 py-8 flex flex-col gap-5">
            {LINKS.map((l) => (
              <Link
                key={l.id}
                href={`#${l.id}`}
                onClick={() => setOpen(false)}
                className="text-sm tracking-[0.2em] uppercase"
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="#club"
              onClick={() => setOpen(false)}
              className="mt-4 self-start bg-paper text-verde px-6 py-3 text-xs tracking-[0.25em] uppercase font-medium"
            >
              Sumate al club →
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
