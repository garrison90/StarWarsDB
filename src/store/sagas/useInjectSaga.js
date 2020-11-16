import { useEffect } from "react";
import { store } from "../../index";

export const useInjectSaga = (key, saga) => {
  useEffect(() => {
    store.injectSaga(key, saga);
    return () => {
      store.ejectSaga(key);
    };
  });
};
