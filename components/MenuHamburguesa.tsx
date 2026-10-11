'use client';
import { useState } from "react";
import Link from "next/link";

const enlaces = [
  { href: "/", texto: "Inicio" },
  { href: "/nosotros", texto: "Nosotros" },
  { href: "/inspiracion", texto: "Inspiración" },
  { href: "/mascota", texto: "Mascota" },
  { href: "/articulos", texto: "Artículos" },
];

export default function MenuHamburguesa() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        aria-label="Abrir menú"
        className="text-2xl leading-none"
      >
        🍔
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/60"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}

      <aside
        className={`fixed right-0 top-0 z-50 flex h-full w-64 flex-col bg-verde p-6 text-beige shadow-xl transition-transform duration-200 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          onClick={() => setIsOpen(false)}
          aria-label="Cerrar menú"
          className="self-end text-2xl leading-none hover:text-rojo"
        >
          ✕
        </button>
        <nav className="mt-6 flex flex-col gap-2">
          {enlaces.map((enlace) => (
            <Link
              key={enlace.href}
              href={enlace.href}
              onClick={() => setIsOpen(false)}
              className="rounded-lg px-4 py-3 text-lg font-medium text-beige transition-colors hover:bg-rojo"
            >
              {enlace.texto}
            </Link>
          ))}
        </nav>
      </aside>
    </>
  );
}