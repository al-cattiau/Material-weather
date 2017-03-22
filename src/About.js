import React from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import TimePicker from 'material-ui/TimePicker';
import { connect } from 'react-redux';
import { celsiusUnit, fahrenheitUnit } from './Model';

class About extends React.Component {

  toggleUnit(e){
    if (parseInt(e,10) === 1){
      this.props.dispatch(celsiusUnit());      
    }else{
      this.props.dispatch(fahrenheitUnit());
    }
  }
  timer(e,date){
    let timer = (date- Date.now());
    Notification.requestPermission(function (permission) {
      // If the user accepts, let's create a notification
      if (permission === "granted") {
        setTimeout(function() {
          new Notification("Hi there!");      
      
        }, timer);    
      }
    });    
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
        <TimePicker hintText='Remind me the weather in ' onChange={this.timer} />
      </div>

    )

  }
}




const mapStateToProps = (state) => {
  return {
    celsius: state.celsius,
    
    
  }
}
 const Connectedabout = connect(mapStateToProps)(About);
 export default Connectedabout;