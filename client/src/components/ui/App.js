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
      },
      footer:{
        height:'80px',
        width:'100%',
        backgroundColor:'#000',
        textAlign:'center',
        lineHeight:'80px'
      },
      me:{
        fontSize:'1.4em',
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
          <Link to='/' style={styles.link}>SmallAdam Own WebSite</Link>
        </header>
        { this.props.children }
        <footer style={styles.footer}>
          <div style={styles.me}>想要了解更多，请联系我</div>
        </footer>
      </div>
    );
  }
}

export default App ;
