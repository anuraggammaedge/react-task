export function ErrorFallbackUI({ error }) {
  return (
    <div className="p-4 m-4 border border-red-300 shadow-2xs rounded-xl w-3/4">
      <h2 className="text-red-400 font-semibold">
        Error: Something went wrong
      </h2>
      <pre className="text-wrap">Message : {error.message}</pre>
    </div>
  );
}
