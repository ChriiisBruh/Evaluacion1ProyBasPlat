import React, { Component } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import "bootstrap/dist/css/bootstrap.min.css";

const url = "http://20.231.202.18:8000/api/form";

class App extends Component {
  state = {
    data: [],
    modalInsert: false,
    form: {
      id: '',
      code: '',
      name: '',
      description: '',
      typeModal: '',
    },
    search: '',
  };

  componentDidMount() {
    this.peticionGet();
  }

  peticionGet = () => {

    axios.get(url)
  
  };

  ///peticionPost = () => {

  ///};

  ///peticionPut = () => {

  ///};

  peticionDelete = (id) => {

  };

  modalInsert = () => {
    this.setState({ modalInsert: !this.state.modalInsert });
    console.log("si");
  };

  selectForm = (form) => {
    this.setState({
      typeModal: 'update',
      form: {
        id: form.id,
        code: form.code,
        name: form.name,
        description: form.description,
      },
    });
  };

  handleChange = (e) => {
  
  };
 

  filterData = () => {

  };

  render() {
   
    return (
      <div className="App container">
        
        <table className="table">
          <thead>
            <tr>
              <th>Codigo</th>
              <th>Nombre</th>
              <th>Descripcion</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <button className="btn btn-primary">
                    <FontAwesomeIcon icon={faEdit} />
                  </button>
                  {"   "}
                  <button className="btn btn-danger">
                    <FontAwesomeIcon icon={faTrashAlt} />
                  </button>
          
        </table>

        <Modal isOpen={this.state.modalInsert}>
          <ModalHeader style={{ display: 'block' }}>
            <span style={{ float: 'right' }} onClick={this.modalInsert}>x</span>
          </ModalHeader>
          <ModalBody>
            <div className="form-group">
             
              <label htmlFor="code">Codigo</label>
              <input className="form-control" type="text" name="code" id="code" />
              <br />
              <label htmlFor="name">Nombre</label>
              <input className="form-control" type="text" name="name" id="name" />
              <br />
              <label htmlFor="description">Descripcion</label>
              <input className="form-control" type="text" name="description" id="description"/>
            </div>
          </ModalBody>
          <ModalFooter>
            {this.state.typeModal === 'create' ?
              <button className="btn btn-success">
                Insertar
              </button> :
              <button className="btn btn-success">
                Actualizar
              </button>
            }
            <button className="btn btn-danger" onClick={this.modalInsert}>Cancelar</button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}
export default App;


/*
render() {
    const filteredData = this.filterData();

    return (
      <div className="App container">
        <br /><br /><br />
        <button className="btn btn-success" onClick={() => { this.setState({ typeModal: 'create' }); this.modalInsert(); }}>Agregar Form</button>
        <br /><br />
        <input
          className="form-control"
          type="text"
          name="search"
          id="search"
          placeholder="Buscar"
          onChange={this.handleChange}
          value={this.state.search}
        />
        <table className="table">
          <thead>
            <tr>
              <th>Codigo</th>
              <th>Nombre</th>
              <th>Descripcion</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((form) => (
              <tr key={form.id}>
                <td>{form.code}</td>
                <td>{form.name}</td>
                <td>{form.description}</td>
                <td>
                  <button className="btn btn-primary" onClick={() => { this.selectForm(form); this.modalInsert(); }}>
                    <FontAwesomeIcon icon={faEdit} />
                  </button>
                  {"   "}
                  <button className="btn btn-danger" onClick={() => this.peticionDelete(form.id)}>
                    <FontAwesomeIcon icon={faTrashAlt} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <Modal isOpen={this.state.modalInsert}>
          <ModalHeader style={{ display: 'block' }}>
            <span style={{ float: 'right' }} onClick={this.modalInsert}>x</span>
          </ModalHeader>
          <ModalBody>
            <div className="form-group">
             
              <label htmlFor="code">Codigo</label>
              <input className="form-control" type="text" name="code" id="code" onChange={this.handleChange} value={this.state.form.code || ''} />
              <br />
              <label htmlFor="name">Nombre</label>
              <input className="form-control" type="text" name="name" id="name" onChange={this.handleChange} value={this.state.form.name || ''} />
              <br />
              <label htmlFor="description">Descripcion</label>
              <input className="form-control" type="text" name="description" id="description" onChange={this.handleChange} value={this.state.form.description || ''} />
            </div>
          </ModalBody>
          <ModalFooter>
            {this.state.typeModal === 'create' ?
              <button className="btn btn-success">
                Insertar
              </button> :
              <button className="btn btn-success">
                Actualizar
              </button>
            }
            <button className="btn btn-danger" onClick={this.modalInsert}>Cancelar</button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}
export default App;
*/

/*



*/
