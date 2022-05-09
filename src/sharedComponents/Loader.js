import { useGlobalContext } from "../useGlobalContext";

// we can also create a HOC useLoader, instead of using the global context
// example https://codesandbox.io/embed/usehover-withloader-npo50
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
