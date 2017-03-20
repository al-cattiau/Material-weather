import React from 'react';
import AutoComplete from 'material-ui/AutoComplete';

class InputBar extends React.Component {
  state = {
    dataSource: [],
  };

  constructor(props){
    super(props);        
    this.autocompleteServices = new window.google.maps.places.AutocompleteService();
    this.handleUpdateInput = this.handleUpdateInput.bind(this);
  }
  handleUpdateInput = (value) => {
    let that = this;
    if (!value){
      return;
    }
    let source = [];
    const request = {
      input: value
    }
    this.autocompleteServices.getPlacePredictions(request,function(predictions){      
      predictions.forEach(function(prediction){
        source.push(prediction.description.toString());
      });              
      that.setState({ dataSource: source });
    });
    
    
  };

  render() {
    return (
        <AutoComplete
          hintText="Type anything"
          dataSource={this.state.dataSource}
          onUpdateInput={this.handleUpdateInput}
          fullWidth={true}
          floatingLabelText="Full width"
          filter={()=>true}
          onNewRequest={(x)=>this.props.handleSearch(x)}
        />
    )
  }
}

export default InputBar;