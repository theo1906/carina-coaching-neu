'use client';

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 text-center">
        <div>
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
            Etwas ist schiefgelaufen!
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            {error.message || 'Ein unerwarteter Fehler ist aufgetreten.'}
          </p>
        </div>
        <div>
          <button
            onClick={() => reset()}
            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-pink-600 hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
          >
            Erneut versuchen
          </button>
        </div>
      </div>
    </div>
  );
}
