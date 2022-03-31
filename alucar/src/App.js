import RouteList from './routes';
import {AuthProvider} from './context/AuthProvider';

function App() {
  return (
    <> <AuthProvider>
      <RouteList />
      </AuthProvider>
    </>
  );
}

export default App;
