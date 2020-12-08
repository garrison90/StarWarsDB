import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import ErrorComponent from "components/ErrorComponent/ErrorComponent";

function useError(errorSelector) {
  const error = useSelector(errorSelector);
  return useMemo(() => error && <ErrorComponent />, [error]);
}

export default useError;
