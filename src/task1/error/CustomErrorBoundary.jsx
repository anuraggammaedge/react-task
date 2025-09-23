import { ErrorBoundary } from "react-error-boundary";
import { ErrorFallbackUI } from "./ErrorFallbackUI";

export function CustomErrorBoundary({ children }) {
  const onError = (error, info) => {
    console.error("Error From React Broundires: ", error, info);
  };
  return (
    <ErrorBoundary FallbackComponent={ErrorFallbackUI} onError={onError}>
      {children}
    </ErrorBoundary>
  );
}
