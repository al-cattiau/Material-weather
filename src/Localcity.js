import Weathergallery from './Weathergallery';
import CircularProgress from 'material-ui/CircularProgress';
import React from 'react';

 class Localcity extends React.Component {
     
     render(){
         const content = this.props.ready ? <Weathergallery style={{'textAlign':'center'}} city={this.props.position}   /> : 
         <div style={{'margin':'0 auto','width':'50%'}}><CircularProgress  size={200} thickness={5} /></div>;
         
         return(
             <div style={{"width":"80%","margin":"0 auto"}}>
                 <h2>You are in here :</h2>                 
                 {content}
             </div>
         )
     }

}



export default Localcity;