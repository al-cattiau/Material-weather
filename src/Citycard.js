import React from 'react';
import Paper from 'material-ui/Paper';
import './weather-icons.css';
import RaisedButton from 'material-ui/RaisedButton';

const paperStyle = {
  height: 300,
  width: 300,
  margin: 20,
  textAlign: 'center',
  display: 'inline-block',
};


class Message extends React.Component {
    constructor(){
        super();
        this.state = {
            zDepth : 1,
        }

    }
    mouseEnter(enter){
        if (enter){
            this.setState({zDepth:5});
        }else{
            this.setState({zDepth:1});
        }
    }

    render(){        
        const zDepth = this.state.zDepth;
        return(
                <Paper style={paperStyle} zDepth={zDepth} onMouseEnter={()=>this.mouseEnter(true)} onMouseLeave={()=>this.mouseEnter(false)}>
                    <h2>city:{this.props.city} </h2>
                    <h4>temperature:{this.props.temp}</h4>
                    <h4>weather:{this.props.weather}</h4>
                    <h4>windSpeed:{this.props.windSpeed}</h4>
                    <i className={this.props.icon} style={{"fontSize":60}}/>
                    <br/>
                    <RaisedButton label={this.props.dbutton} onClick={()=>this.props.dbuttonClick(this.props.city,this.props.dbutton)} style={{"width":'50%'}}  />
                    <RaisedButton label="Detail" onClick={()=>console.log('de')} style={{"width":'50%'}} primary={true}/>
                </Paper>
        )

    }
}


    





export default Message;


