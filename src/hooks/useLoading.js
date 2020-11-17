import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import Preloader from "../components/Preloader/Preloader";

function useLoading(loadingSelector) {
  const loading = useSelector(loadingSelector);
  return useMemo(() => loading && <Preloader />, [loading]);
}

export default useLoading;
