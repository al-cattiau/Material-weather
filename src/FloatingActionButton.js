import React from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

const style = {
  position: 'fixed',
  bottom: 30,
  right: 30,
  
  
};

/**
 * Default size and `mini` FABs, in primary (default), `secondary` and `disabled` colors.
 */
class FloatingAction extends React.Component {
  
  render(){
    return(
      <FloatingActionButton  style={style} onClick={()=>this.props.handleClick()} >
        <ContentAdd style={this.props.style}/>        
        
        
      </FloatingActionButton>
    )

  }
}

export default FloatingAction;

