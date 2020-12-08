import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import { Loader } from "components/Loader/Loader";

function useLoading(loadingSelector) {
  const loading = useSelector(loadingSelector);
  return useMemo(() => loading && <Loader />, [loading]);
}

export default useLoading;
