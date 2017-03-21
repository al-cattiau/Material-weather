import React from 'react';
import Paper from 'material-ui/Paper';
import './weather-icons.css';
import RaisedButton from 'material-ui/RaisedButton';
import Citydetail from './Citydetail';

const paperStyle = {
  height: 300,
  width: 300,
  margin: 20,
  textAlign: 'center',
  display: 'inline-block',
  position:'relative'
};


class Message extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            zDepth : 1,
            openDialog: false
            
        }
        this.toggleDialog = this.toggleDialog.bind(this);

    }
    mouseEnter(enter){
        if (enter){
            this.setState({zDepth:5});
        }else{
            this.setState({zDepth:1});
        }
    }
    toggleDialog(){
        this.setState({openDialog:!this.state.openDialog});

    }

    render(){        
        const zDepth = this.state.zDepth;
        return(
                <Paper style={paperStyle} zDepth={zDepth} onMouseEnter={()=>this.mouseEnter(true)} onMouseLeave={()=>this.mouseEnter(false)} >
                    <h2>{this.props.city} </h2>
                    <h3 style={{fontWeight:'lighter'}}>temperature:{this.props.temp}</h3>
                    <h3 style={{fontWeight:'lighter'}}>weather:{this.props.weather}</h3>
                    <h3 style={{fontWeight:'lighter'}}>windSpeed:{this.props.windSpeed}</h3>
                    <i className={this.props.icon} style={{fontSize:50}} /><br/>
                    <div style={{'position':'absolute','bottom':'0','width':'100%'}}>
                        <RaisedButton label={this.props.dbutton} onClick={()=>this.props.dbuttonClick(this.props.city,this.props.dbutton)} style={{"width":'50%'}}  />
                        <RaisedButton label="Detail" onClick={this.toggleDialog} style={{"width":'50%'}} primary={true}/>
                    </div>
                    <Citydetail open={this.state.openDialog} 
                    onRequestClose={this.toggleDialog}
                    city={this.props.city}
                    />
                </Paper>
        )

    }
}


    





export default Message;


