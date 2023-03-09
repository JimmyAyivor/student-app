import { useEffect, useState } from 'react';
import './App.css';
import Error from './components/Error/Error';
import Container  from './components/Layout/Container';
import Loading from './components/Loading/Loading';
import StudentList from './components/StudentList/StudentList';

const API_URL = process.env.REACT_APP_API_URL;

function App() {
  const [studentData, setStudentData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    async function fetchData() {
      try {
        // Remove any errors from previous attempts
        setError('');
        // Show the user that we're loading...
        setLoading(true);
        const response = await fetch(`${API_URL}/students?include=grades`);
        const json = await response.json();
        const { data, error } = json;
        if (response.ok) {
          // handle success
          setStudentData(data);
          // Stop showing the user the loading UI...
          setLoading(false);
        } else {
          // handle error
          setError(error);
          setLoading(false);
        }
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  /* If loading, render <Loading />
    else if error, render <Error error={error} />
    else render <StudentList />
  */
  const renderContent = () => {
    if (loading) {
      return <Loading />;
    } else if (error) {
      return <Error error={error} />;
    } else {
      return <StudentList studentData={studentData} />;
    }
  };
 
  return (
    <div className="App">
      <Container center={Boolean(error || loading)}  scroll={false}>
        {renderContent()}
      </Container>
    </div>
  );
}
export default App;
