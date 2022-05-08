import { useGlobalContext } from "../useGlobalContext";

/**
 *
 */
export const ErrorAlert = function () {
  const { errorMessage } = useGlobalContext();
  return (
    errorMessage && (
      <>
        <p>{errorMessage}</p>
      </>
    )
  );
};
