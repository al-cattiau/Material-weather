import React from 'react';
import AutoComplete from 'material-ui/AutoComplete';
import AutoCompleteGoogle from 'react-google-autocomplete';
import TextField from 'material-ui/TextField';



class InputBar extends React.Component {

  render() {
    return (
      <div>        
        <AutoCompleteGoogle 
        style={{'width':'50%'}}
        types={['geocode']} 
        onPlaceSelected={(city)=>this.props.handleSearch(city)}
        />
      </div>
    );
  }
}

export default InputBar;


{/*<AutoComplete
          hintText="New York, San Francisco, Beijing...."
          dataSource={this.state.dataSource}
          onUpdateInput={this.handleUpdateInput}
          floatingLabelText="Type any city you want to know weather"
          fullWidth={true}
          onNewRequest={(city)=>this.props.handleSearch(city)}          
        />*/}