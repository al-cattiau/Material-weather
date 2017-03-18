import React from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import TimePicker from 'material-ui/TimePicker';


class About extends React.Component {
  constructor(){
    super();
    this.state = {
      uformat: 1
    }
  }
  render(){
    return(
      <div style={{'width':'80%','margin':'0 auto'}}>
        <SelectField
              floatingLabelText="Units format"
              value={this.state.uformat}
              onChange={(e,i,v)=>this.setState({uformat:v})}              
        >
          <MenuItem value={1} primaryText="Fahrenheit"  />
          <MenuItem value={2} primaryText="Celsius" />
        </SelectField>
        <TimePicker hintText='Remind me the weather in ' />
      </div>

    )

  }
}

export default About;