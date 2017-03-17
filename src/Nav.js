import React from 'react';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Link } from 'react-router';
import FlatButton from 'material-ui/FlatButton';
import { browserHistory } from 'react-router';
import FloatingAction from './FloatingActionButton';

class Container extends React.Component {
  constructor(){    
    super();
    this.state = {        
        showDrawer: false,
        fbClicked: false
    }
    this.fbClick = this.fbClick.bind(this);
  }
  toggleDrawer(){
    const showDrawer = !this.state.showDrawer;
    this.setState({showDrawer:showDrawer});

  }
  fbClick(){
      (this.props.children && this.props.children.type.name === 'Addview') ? browserHistory.push('/') : browserHistory.push('/add') ;
  }
  
    render(){
        const rotateStyle = (this.props.children && this.props.children.type.name === 'Addview') ? {"transform":"rotate(-45deg)"} : null;
        return (
            <MuiThemeProvider>
                <div>
                    <AppBar title="Material Weather" iconElementRight={<FlatButton label="Login" />} onLeftIconButtonTouchTap={()=>this.toggleDrawer()}/>
                    <Drawer
                    docked={false}
                    width={200}
                    open={this.state.showDrawer}
                    onRequestChange={(open) => this.toggleDrawer(open)}
                    >
                        <MenuItem containerElement={<Link to="/setting"/>} primaryText='Setting' />
                        <MenuItem containerElement={<Link to="/all"/>} primaryText='allcity' />
                    </Drawer>
                    {this.props.children}
                    <FloatingAction handleClick={()=>this.fbClick()} style={rotateStyle}/>
                </div>
            </MuiThemeProvider>

        )
    }
}



export default Container



