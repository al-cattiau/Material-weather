import React from 'react';
import AutoComplete from 'material-ui/AutoComplete';
import $ from 'jquery';

class InputBar extends React.Component {
  constructor(props){
    super(props);    
    this.autocompleteServices = new google.maps.places.AutocompleteService();

  }

  render() {
    return (
      <div></div>
    )
  }
}

export default InputBar;

