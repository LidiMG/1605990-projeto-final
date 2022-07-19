import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className='container'>
      <h3>Departamentos</h3>

      <table className='table table-striped'>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Sigla</th>
            <th>Ações</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Recursos Humanos</td>
            <td>RH</td>
            <td>
              <button className='btn btn-outline-warning'>Editar</button>
              <button className='btn btn-outline-danger'>Excluir</button>
            </td>
          </tr>
        
          
        </tbody>

      </table>

    </div>
  );
}

export default App;
