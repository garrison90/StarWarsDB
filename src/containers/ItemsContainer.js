import { useCallback, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import useLoading from "../hooks/useLoading";
import useSwitchTo from "../hooks/useSwitchTo";
import useError from "../hooks/useError";
import { clearItems, setPageNumber } from "../store/reducers/itemsSlice";
import { Items } from "../components/Items/Items";
import {
  selectItems,
  selectItemsError,
  selectItemsLoading,
  selectHasMore,
  selectQuery,
  selectPage,
} from "../store/selectors/items";
import { useLocation } from "react-router-dom";

function ItemsContainer({ getData, labels, fields }) {
  const loading = useLoading(selectItemsLoading);
  const error = useError(selectItemsError);
  const items = useSelector(selectItems);
  const hasMore = useSelector(selectHasMore);
  const query = useSelector(selectQuery);
  const pageNumber = useSelector(selectPage);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getData());
  }, [dispatch, query, pageNumber, getData]);

  useEffect(() => {
    return () => {
      dispatch(clearItems());
    };
  }, [dispatch]);
  const moveTo = useSwitchTo();
  const observer = useRef();
  const lastStarshipElementRef = useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          dispatch(setPageNumber());
        }
      });
      if (node) observer.current.observe(node);
    },
    [loading, hasMore, dispatch]
  );

  const location = useLocation();

  const move = (id) => {
    moveTo(location.pathname + `/${id}`);
  };

  return (
    <Items
      items={items}
      move={move}
      lastStarshipElementRef={lastStarshipElementRef}
      labels={labels}
      fields={fields}
      loading={loading}
      error={error}
    />
  );
}

export default ItemsContainer;
