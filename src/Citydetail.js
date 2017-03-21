import Dialog from 'material-ui/Dialog';
import React from 'react';
import $ from 'jquery';
import iconsJson from './icons.json';
import { LineChart, Line, XAxis, YAxis } from 'recharts';


class Citydetail extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            tempArray:[],
            iconArray:[]
            
        };
        


    }
    componentDidMount(){        
        let requestURL = "http://api.openweathermap.org/data/2.5/forecast?q="+this.props.city+"&APPID=2b0ae7837c64fb9101ebce70953a9218&units=metric";
        let tempArray = [];
        let iconArray= [];
        const that = this;
        let i=0;
        $.getJSON(requestURL,function(data,status){
            data['list'].forEach(function(i){                
                const date = new Date(i['dt'] * 1000);
                const dateTime = date.getDate().toString()+'d.' + date.getHours().toString()+'h';
                tempArray.push({ temp :parseInt(i['main']['temp'],10), name : i['main']['temp'], dateTime: dateTime });
                const code = i['weather'][0]['id'];
                let icon = iconsJson[code]['icon'];
                const prefix = 'wi wi-';
                if (!(code > 699 && code < 800) && !(code > 899 && code < 1000)) {
                    icon = 'day-' + icon;
                }
                icon = prefix + icon;        
                    iconArray.push(icon);
                    
            });                        
            that.setState({tempArray:tempArray});
            that.setState({iconArray:iconArray});

        });
    }

    render(){
        const chart = this.state.tempArray.length > 0 ? 
            <LineChart width={600} height={400} data={this.state.tempArray}>
                <XAxis dataKey="dateTime"/>
                <YAxis/>
                <Line type="monotone" dataKey="temp" stroke="#8884d8" />
            </LineChart>                        
            :null
        let i = 0;
        const icons = this.state.iconArray.length > 0 ? 
        this.state.iconArray.map((icon)=>        
        <i className={icon} style={{fontSize:50}} key={i++}/>
        ) :null
        return(
            <Dialog 
            open={this.props.open}
            onRequestClose={this.props.onRequestClose}
            autoScrollBodyContent={true}
            >
            {chart}
            {icons}
            </Dialog>

        )
    }

}


export default Citydetail;