import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Menu from './components/Menu';
import ListaDepartamentos from './components/ListaDepartamentos';


function App() {
  return (
    <>
    <Menu />
    
    <div className='container'>
      <ListaDepartamentos />


    </div>
    </>
  );
}

export default App;
