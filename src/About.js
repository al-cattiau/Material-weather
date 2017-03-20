import React from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import TimePicker from 'material-ui/TimePicker';
import { connect } from 'react-redux';
import { celsiusUnit, store, fahrenheitUnit } from './Model';

class About extends React.Component {
  constructor(props){
    super(props);
    
  }

  toggleUnit(e){
    if (parseInt(e) === 1){
      store.dispatch(celsiusUnit());      
    }else{
      store.dispatch(fahrenheitUnit());
    }
  }
  
  render(){
    const value = this.props.celsius ? 1 : 2
    return(
      <div style={{'width':'80%','margin':'0 auto'}}>
        <SelectField
              floatingLabelText="Units format"
              value={value}
        >          
          <MenuItem value={1} primaryText="Celsius"  onTouchTap={()=>this.toggleUnit(1)}/>
          <MenuItem value={2} primaryText="Fahrenheit"  onTouchTap={()=>this.toggleUnit(2)}/>
        </SelectField>
        <TimePicker hintText='Remind me the weather in ' />
      </div>

    )

  }
}




const mapStateToProps = (state) => {
  return {
    celsius: state.celsius
  }
}
 const Connectedabout = connect(mapStateToProps)(About);
 export default Connectedabout;