import React from 'react';
import $ from 'jquery';
import iconsJson from './icons.json';
import Citycard from './Citycard';
import { addCity, store, removeCity } from './Model';
import { connect } from 'react-redux';

class Weathergallery extends React.Component{
    constructor(props){
        super(props);
        if (props.city){
            this.state = {                
                dbutton:'add',
                citiesMessage:[]
            };            
        }
        else{            
            this.state = {
                dbutton:'remove',
                citiesMessage:[]
            }
        }
    }
    componentDidMount(){
        if (this.props.city){
            this.handleSearch(this.props.city);
        }else{
            this.props.cities.map((i)=>{
                this.handleSearch(i);
                return i
            });
        }
    }
    componentWillReceiveProps(next){
        const removed = this.props.cities.filter(function(i){
            return !next.cities.includes(i)
        })[0];
        let newArray = this.state.citiesMessage.slice();
        newArray = newArray.filter(function(i){
            return i.key !== removed
        })
        
        this.setState({'citiesMessage':newArray});

    }
    handleSearch(searchBar){
        let requestURL;
        let unitSign;  
        if (typeof searchBar ==='string'){
            requestURL = "http://api.openweathermap.org/data/2.5/weather?q="+searchBar+"&APPID=2b0ae7837c64fb9101ebce70953a9218"            
        }else{
            requestURL = 'http://api.openweathermap.org/data/2.5/weather?APPID=2b0ae7837c64fb9101ebce70953a9218&lat='+searchBar['lat']+'&lon='+searchBar['lon'];
        }
        if(this.props.celsius){
            requestURL += "&units=metric";
            unitSign = '°C';
        }else{
            requestURL += "&units=imperial";
            unitSign = '°F';
        }
        
        
        
        $.getJSON(requestURL,function(data,status){
            const name = data['name'];
            const temp = data['main']['temp'] + unitSign;
            const weather = data['weather'][0]['main'];
            const windSpeed = data['wind']['speed'];      
            const code = data['weather'][0]['id'];
            let icon = iconsJson[code]['icon'];            
            const prefix = 'wi wi-';
            // If we are not in the ranges mentioned above, add a day/night prefix.
            if (!(code > 699 && code < 800) && !(code > 899 && code < 1000)) {
                icon = 'day-' + icon;
            }
            // Finally tack on the prefix.
            icon = prefix + icon;        
            const cityMessage = {
                temp: temp,
                weather: weather,
                city: name,
                windSpeed: windSpeed,
                icon: icon,
                key:name
            };
            let newArray = this.state.citiesMessage.slice();
            newArray.push(cityMessage)
            this.setState({'citiesMessage':newArray});            
            
        }.bind(this));
    }

    toggleModel(city,dbutton){
        if (dbutton === 'remove'){
            store.dispatch(removeCity(city));            
        }else{            
            store.dispatch(addCity(city));                        
        }        

    }
    render(){
        const Citycards = this.state.citiesMessage.map((message)=>
            <Citycard dbutton={this.state.dbutton} 
            dbuttonClick={(city,dbutton)=>this.toggleModel(city,dbutton)}
            city={message.city} 
            temp={message.temp} 
            weather={message.weather} 
            windSpeed={message.windSpeed} 
            icon={message.icon} 
            key={message.city.toString()} 
            />         
        )

        return (
            <div style={{"width":"80%","margin":"0 auto"}}>
                {Citycards }
            </div>
        )
    }
    
    
}


const mapStateToProps = (state) =>{
    return {
        cities: state.cities,
        celsius: state.celsius
    }
}


export const Connectedweathergallery = connect(mapStateToProps)(Weathergallery);


export default  Connectedweathergallery