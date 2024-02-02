const { Component } = React;

class TarefaApp extends Component {
  constructor(props) {
    super(props);
    this.state = { tarefas: [], item: '' };
  }

  handleChange = (e) => {
    this.setState({ item: e.target.value });
  };

  add = () => {
    const { tarefas, item } = this.state;
    if (item.length === 0) {
      alert('Digite uma tarefa válida!');
    } else {
      this.setState({ tarefas: [...tarefas, item], item: '' });
    }
  };

  check = (e) => {
    // Implement the check method logic
  };

  del = (id) => {
    // Implement the delete method logic
  };

  render = () => {
    const { tarefas, item } = this.state;
    return (
      <div>
        <header className="header">
          <h1>Lista de Tarefas</h1>
          <input
            onChange={this.handleChange}
            value={item}
            type="text"
            placeholder="Digite a sua tarefa..."
          />
          <span onClick={this.add}>
            <i className="fas fa-plus-circle"></i>
          </span>
        </header>
        <ul>
          {tarefas.map((tarefa, index) => (
            <li key={index}>
              <i
                className="fas fa-check-circle check"
                onClick={() => this.check(index)}
              ></i>
              <span>{tarefa}</span>
              <i
                className="fas fa-trash-alt close"
                onClick={() => this.del(index)}
              ></i>
            </li>
          ))}
        </ul>
      </div>
    );
  };
}

const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(<TarefaApp />);
