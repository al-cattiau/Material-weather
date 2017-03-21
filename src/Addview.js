import React from 'react';
import InputBar from './InputBar';
import Weathergallery from './Weathergallery';

class Addview extends React.Component {
  constructor(){
    super();
    this.requestWeather = this.requestWeather.bind(this);


  }
  requestWeather(city){    
    city = city.split(',')[0];
    const gallery = <Weathergallery city={city} key={city} /> 
    this.setState({gallery});    
  }
  render(){
    let gallery;
    if (this.state){
      gallery = this.state.gallery;
    }else{
      gallery = ()=>(<div></div>);
    }
    
      return (
        
        <div>
          <div style={{"width":"80%","margin":"0 auto"}}>
            <InputBar handleSearch={(city)=>this.requestWeather(city)}/>
          </div>
          {gallery}
        </div>
      )
  }
}



export default Addview



