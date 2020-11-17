import { useCallback } from "react";
import { useHistory } from "react-router-dom";

function useSwitchTo() {
  const history = useHistory();
  return useCallback((path) => history.push(path), [history]);
}

export default useSwitchTo;
