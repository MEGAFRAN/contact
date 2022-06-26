
import '../App.css';
import { useCrud} from '../hook/useCrud';
import { Appcontext } from '../context/Appcontext';
import { Layout } from './Layout';




function App() {
  const getCrud = useCrud();
  return (
    <Appcontext.Provider value={getCrud}>
      <div className="App">
        <Layout/>
      </div>
    </Appcontext.Provider>
  );
}

export default App;
