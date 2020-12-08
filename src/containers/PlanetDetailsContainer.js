import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  selectPlanet,
  selectPlanetError,
  selectPlanetsLoading,
} from "store/selectors/planets";
import { getPlanetDataRequest } from "store/actions/planets";
import { ItemDetails } from "components/ItemDetalis/ItemDetails";
import { planetFields, planetLabels } from "helpers/fieldsAndLabelsArrays";
import useLoading from "hooks/useLoading";
import useError from "hooks/useError";

function PlanetDetailsContainer() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const planet = useSelector(selectPlanet);
  const loading = useLoading(selectPlanetsLoading);
  const error = useError(selectPlanetError);

  useEffect(() => {
    dispatch(getPlanetDataRequest(id));
  }, [dispatch, id]);

  return (
    <ItemDetails
      item={planet}
      fields={planetFields}
      labels={planetLabels}
      loading={loading}
      error={error}
    />
  );
}

export default PlanetDetailsContainer;
