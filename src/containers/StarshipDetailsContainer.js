import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { ItemDetails } from "../components/ItemDetalis/ItemDetails";
import {
  starshipsFields,
  starshipsLabels,
} from "../helpers/fieldsAndLabelsArrays";
import { getStarshipDetailsRequest } from "../store/reducers/starshipSlice";
import { selectStarship } from "../store/selectors/starship";

function StarshipDetailsContainer() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const starship = useSelector(selectStarship);

  useEffect(() => {
    dispatch(getStarshipDetailsRequest(id));
  }, [dispatch, id]);

  return (
    <ItemDetails
      item={starship}
      fields={starshipsFields}
      labels={starshipsLabels}
    />
  );
}

export default StarshipDetailsContainer;
