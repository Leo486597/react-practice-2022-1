import { useGlobalContext } from "../useGlobalContext";

export const Loader = function () {
  const { isLoading } = useGlobalContext();

  return (
    isLoading && (
      <>
        <p>is loading ...</p>
      </>
    )
  );
};
