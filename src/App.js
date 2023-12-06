import logo from './logo.svg';
import './App.css';
import { MapContextProvider } from './Map_context/MapContextProvider';
import GoogleMap from './components/googlemap';
import { AllRoutes } from './routes/routes';
import { BrowserRouter } from 'react-router-dom';
function App() {
  return (
    <div className="App" style={{marginTop: '5px'}}>
      <MapContextProvider>
        <BrowserRouter>
        <AllRoutes/>
        </BrowserRouter>
      </MapContextProvider>
     
    </div>
  );
}

export default App;
