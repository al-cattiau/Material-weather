import React from 'react';
import AutoComplete from 'material-ui/AutoComplete';

class InputBar extends React.Component {

  constructor(props){
    super(props);
    this.autocompleteServices = new window.google.maps.places.AutocompleteService();
    this.handleUpdateInput = this.handleUpdateInput.bind(this);
    this.state = {
      dataSource: [],
    }
  }
  handleUpdateInput = (value) => {
    let that = this;
    if (!value){
      return;
    }
    let source = [];
    const request = {
      input: value,
      types: ['(cities)'],
    }
    if (this.autocompleteServices){
      this.autocompleteServices.getPlacePredictions(request,function(predictions){      
        predictions.forEach(function(prediction){
          source.push(prediction.description.toString());
        });              
        that.setState({ dataSource: source });
      });
    }
    
    
  };

  render() {
    return (
        <AutoComplete
          hintText="Type anything"
          dataSource={this.state.dataSource}
          onUpdateInput={this.handleUpdateInput}
          fullWidth={true}
          floatingLabelText="All city around the world is in here, and auto complete for you."
          filter={()=>true}
          onNewRequest={(x)=>this.props.handleSearch(x)}
        />
    )
  }
}

export default InputBar;