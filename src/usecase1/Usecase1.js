import React from "react";
import { useGlobalContext } from "../useGlobalContext";

export function Usecase1() {
  const { userPermissions } = useGlobalContext();

  return userPermissions?.usecase1 ? (
    <>
      <div>
        <div>
          <h1>usecase 1</h1>
        </div>
      </div>
    </>
  ) : null;
}
