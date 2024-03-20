"use client";

import { useEffect } from "react";
import { Button } from "../components/ui/button";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div>
      <section className="bg-white dark:bg-gray-900">
        <div className="mx-auto max-w-screen-xl px-4 py-8 lg:px-6 lg:py-16">
          <div className="mx-auto max-w-screen-sm text-center">
            <h1 className="dark:text-primary-500 mb-4 text-7xl font-extrabold tracking-tight text-blue-600 lg:text-9xl">
              500
            </h1>
            <p className="mb-4 text-3xl font-bold tracking-tight text-gray-900 md:text-4xl dark:text-white">
              Erro interno do servidor.
            </p>
            <p className="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">
              Lamentamos que algo tenha corrido mal.
            </p>
            <Button variant="outline" onClick={() => reset()}>Tentar de Novo</Button>
          </div>
        </div>
      </section>
    </div>
  );
}
