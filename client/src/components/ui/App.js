import React, { Component } from 'react';
import {Link} from 'react-router';

class App extends React.Component {
  getStyles(){
    return{
      header:{
        height:'80px',
        width:'100%',
        backgroundColor:'#00bcd4',
        textAlign:'center',
        lineHeight:'80px'
      },
      link:{
        fontSize:'1.7em',
        color:"#ffffff",
        textDecoration:'none'
      }
    };
  }
  render() {
    let styles = this.getStyles();
    return (
      <div>
        <header style={styles.header}>
          <div style={styles.link}>Smalladam Own Site</div>
        </header>
        { this.props.children }
      </div>
    );
  }
}

export default App ;
