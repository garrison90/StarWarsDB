import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { ItemDetails } from "../components/ItemDetalis/ItemDetails";
import { getPersonDataRequest } from "../store/reducers/peopleSlice";
import { selectPerson } from "../store/selectors/people";
import { peopleLabels, peopleFields } from "../helpers/fieldsAndLabelsArrays";

function PersonDetailsContainer() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const person = useSelector(selectPerson);

  useEffect(() => {
    dispatch(getPersonDataRequest(id));
  }, [dispatch, id]);

  return (
    <ItemDetails item={person} fields={peopleFields} labels={peopleLabels} />
  );
}

export default PersonDetailsContainer;
