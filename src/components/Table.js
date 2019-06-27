import React, {Component} from "react";
import PropTypes from "prop-types";
// import key from "weak-key";
class Table extends Component{
  constructor(){
    super()
    this.state = {
      data: [],
      placeholder:""
    }
  }
  componentDidMount() {
    const endpoint = "http://localhost:8000/api/album/";
    fetch(endpoint)
      .then(response =>  response.json())
      .then(result => this.setState({data:result}));
  }
  render(){
    const {data} = this.state;
    console.log('ghjghjgjh',this.state.data)
    return(
  !data.length ? 
    <p>Nothing to show</p>
    : 
    <div className="column">
      <h2 className="subtitle">
        Showing <strong>{data.length} items</strong>
      </h2>
      <table className="table is-striped">
        <thead>
          <tr>
            {Object.entries(data[0]).map((el,i) => <th key={i}>{el[0]}</th>)}
          </tr>
        </thead>
        <tbody>
          {data.map(el => (
            <tr key={el.id}>
              {Object.entries(el).map((el,i) => <td key={i}>{el[1]}</td>)}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );}}
Table.propTypes = {
  data: PropTypes.array.isRequired
}

export default Table;