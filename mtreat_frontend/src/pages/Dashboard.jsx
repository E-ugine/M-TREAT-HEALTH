import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPatientData } from '../services/api';
import { setPatientData } from '../features/patientSlice';

export default function Dashboard() {
  const { data } = useSelector((state) => state.patient);
  const { token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetchPatientData(token);
        dispatch(setPatientData(response.data));
      } catch (error) {
        console.error(error);
      }
    };
    getData();
  }, [dispatch, token]);

  if (!data) return <div>Loading...</div>;

  return (
    <div>
      <h1>Welcome, {data.name}</h1>
      <p>Email: {data.email}</p>
      <p>Phone: {data.phone}</p>
      {/* Add edit button to navigate to UpdatePatient */}
    </div>
  );
}
