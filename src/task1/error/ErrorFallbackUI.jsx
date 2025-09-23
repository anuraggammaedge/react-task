export function ErrorFallbackUI({ error }) {
  return (
    <div className="p-2 m-2 border border-red-300 shadow-2xs rounded-xl w-fit">
      <h2 className="text-red-400 font-semibold">
        Error: Something went wrong
      </h2>
      <pre>Message : {error.message}</pre>
    </div>
  );
}
