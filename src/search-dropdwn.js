import React from "react";
import SelectSearch from "react-select-search";
import {countries} from './country-codes';
import './styleDropdwn.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

class Dropdwn extends React.Component {
 
  updateCountryHandler= (prop) =>
  {
    if(this.props.for === "country")
   { this.props.this.setState({value:prop});
  }
  else if(this.props.for === "category"){
    this.props.this.setState({ category: prop });
  }
   // console.log(prop);
  }
  render() {
    return (
      <div >
        <SelectSearch
          options={this.props.options}
          name={this.props.name}
          search
          placeholder={this.props.placeholder}
          className="select-search"
          onChange = {this.updateCountryHandler}
        />
      </div>
    );
  }
}


export default Dropdwn;