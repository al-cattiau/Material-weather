import React from 'react';
import Weathergallery from './Weathergallery';
import { connect } from 'react-redux';

const mapStateToProps = (state) =>{
    return {
        cities: state.cities        
    }
}


const Connectedweathergallery = connect(mapStateToProps)(Weathergallery);


class Allcity extends React.Component {
    render(){
        return(
            <Connectedweathergallery type={'all'} />
        )
    }

}





export default Allcity ;