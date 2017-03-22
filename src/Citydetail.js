import Dialog from 'material-ui/Dialog';
import React from 'react';
import iconsJson from './icons.json';
import { LineChart, Line, XAxis, YAxis } from 'recharts';
import axios from 'axios';

class Citydetail extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            tempArray:[],
            dailyIconArray:[]
            
        };        
    }
    componentDidMount(){        
        let requestURL = "http://api.openweathermap.org/data/2.5/forecast?q="+this.props.city+"&APPID=2b0ae7837c64fb9101ebce70953a9218&units=metric";
        let tempArray = [];
        let dailyIconArray= [];
        let daySet = new Set();
        axios.get(requestURL).then(res=>{
                // to get temperature data
                const data = res['data'];
                data['list'].forEach(function(i){                
                const date = new Date(i['dt'] * 1000);
                const dateTime = date.getDate().toString()+'d.' + date.getHours().toString()+'h';
                tempArray.push({ temp :parseInt(i['main']['temp'],10), name : i['main']['temp'], dateTime: dateTime });
                

                // to get icon data
                const day = date.getDate().toString();
                if (!daySet.has(day)){
                    daySet.add(day);
                    const code = i['weather'][0]['id'];
                    let icon = iconsJson[code]['icon'];
                    const prefix = 'wi wi-';
                    if (!(code > 699 && code < 800) && !(code > 899 && code < 1000)) {
                        icon = 'day-' + icon;
                    }
                    icon = prefix + icon;
                    const daily = {
                        day: day,
                        icon: icon
                    }
                    dailyIconArray.push(daily);
                }                                
            });                

            this.setState({tempArray:tempArray});
            this.setState({dailyIconArray:dailyIconArray});
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
        const icons = this.state.dailyIconArray.length > 0 ? 
        this.state.dailyIconArray.map((daily)=>        
        <div key={daily.day} style={{'margin':'20px'}}>
            <i className={daily.icon} style={{fontSize:50}} />
            <p style={{'textAlign':'center'}}>{daily.day}</p>
        </div>
        ) :null
        return(
            <Dialog 
            open={this.props.open}
            onRequestClose={this.props.onRequestClose}
            autoScrollBodyContent={true}
            >
            {chart}
            <div style={{'display':'flex'}}>{icons}</div>
            
            </Dialog>

        )
    }

}


export default Citydetail;