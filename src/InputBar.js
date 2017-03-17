import React from 'react';
import AutoComplete from 'material-ui/AutoComplete';



class InputBar extends React.Component {

  state = {
    dataSource: [],
  };

  handleUpdateInput = (value) => {
    this.setState({
      dataSource: [
        value,
        value + value,
        value + value + value,
      ],
    });
  };

  render() {
    return (      
        <AutoComplete
          hintText="New York, San Francisco, Beijing...."
          dataSource={this.state.dataSource}
          onUpdateInput={this.handleUpdateInput}
          floatingLabelText="Type any city you want to know weather"
          fullWidth={true}
          onNewRequest={(city)=>this.props.handleSearch(city)}          
        />
    );
  }
}

export default InputBar;