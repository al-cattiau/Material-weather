import React from 'react';
import Paper from 'material-ui/Paper';


const style = {
  height: 100,
  width: 100,
  margin: 20,
  textAlign: 'center',
  display: 'inline-block',
};

class Playground extends React.Component {
    constructor(fuck){
        super(fuck);
        this.state = {
            zDepth: 1
        }
    }
    render(){
        return(
            <div style={{'display':'flex','width':'500px','height':'500px'}}><div style={{'width':'50%','backgroundColor':'green'}}/><div style={{'width':'50%','backgroundColor':'red'}}/></div>
        )
    }

}


export default Playground;