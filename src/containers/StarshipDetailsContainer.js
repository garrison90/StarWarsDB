import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { ItemDetails } from "../components/ItemDetalis/ItemDetails";
import {
  starshipsFields,
  starshipsLabels,
} from "../helpers/fieldsAndLabelsArrays";
import { getStarshipDetailsRequest } from "../store/reducers/starshipSlice";
import {
  selectStarship,
  selectStarshipError,
  selectStarshipLoading,
} from "../store/selectors/starship";
import useLoading from "../hooks/useLoading";
import useError from "../hooks/useError";

function StarshipDetailsContainer() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const starship = useSelector(selectStarship);
  const loading = useLoading(selectStarshipLoading);
  const error = useError(selectStarshipError);

  useEffect(() => {
    dispatch(getStarshipDetailsRequest(id));
  }, [dispatch, id]);

  return (
    <ItemDetails
      item={starship}
      fields={starshipsFields}
      labels={starshipsLabels}
      loading={loading}
      error={error}
    />
  );
}

export default StarshipDetailsContainer;
