
import './App.css';
import { useGetApi } from './hook/useGetApi';
import { postApi } from './postApi';
import { putApi } from './putApi';
import { deleteApi} from './deleteApi';

function App() {
  const object = {
    name: 'Roger David Alba Ortega',
    phone: 3153030912,
    dateofbirth: `24/01/1994`,
    addres: 'Avenida 21b # 12-96 Apto 201',
    email: 'rogerdavidalbaortega@gmail.com'
  }
  const API = 'http://localhost:4000/products'
  const {characters}=useGetApi(API);
  console.log(characters);
  const handleClickPost = () => {
    postApi(API,object);
  }
  const handleClickPut = () => {
    const id = 1;
    const object = {
      product_name: "Papaya",
        price: 2000,
        quantity: 24
    }
    const APIPut = `${API}/${id}`;
    putApi(APIPut,object);
  }
  const handleClickDelete = () => {
    const id = 1;
    const APIDelete
    
    
    
    
    
    
    
    
    
    
    
    = `${API}/${id}`;
    deleteApi(APIDelete);
  }
  return (
    <div className="App">
     <button onClick={() => handleClickPost()}>Post</button>
     <button onClick={() => handleClickPut()}>Put</button>
     <button onClick={() => handleClickDelete()}>Delete</button>
    </div>
  );
}

export default App;
