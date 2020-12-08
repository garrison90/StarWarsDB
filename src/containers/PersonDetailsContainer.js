import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { ItemDetails } from "components/ItemDetalis/ItemDetails";
import { getPersonDataRequest } from "store/reducers/peopleSlice";
import {
  selectPeopleError,
  selectPeopleLoading,
  selectPerson,
} from "store/selectors/people";
import { peopleLabels, peopleFields } from "helpers/fieldsAndLabelsArrays";
import useLoading from "hooks/useLoading";
import useError from "hooks/useError";

function PersonDetailsContainer() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const person = useSelector(selectPerson);
  const loading = useLoading(selectPeopleLoading);
  const error = useError(selectPeopleError);

  useEffect(() => {
    dispatch(getPersonDataRequest(id));
  }, [dispatch, id]);

  return (
    <ItemDetails
      item={person}
      fields={peopleFields}
      labels={peopleLabels}
      loading={loading}
      error={error}
    />
  );
}

export default PersonDetailsContainer;
