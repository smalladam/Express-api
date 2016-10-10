import React, { PropTypes } from 'react'
import axios from 'axios';

class ShowPost extends React.Component {
  constructor(){
    super();
    this.state={
      post: {}
    }
  }
  getStyles() {
   return {
     content: {
       position: 'relative',
       width: '100%',
       minHeight: '200px',
       maxWidth: '600px',
       margin: '30px auto',
       backgroundColor: '#fff',
       borderRadius: '5px',
       padding: '16px',
       boxShadow: 'rgba(0, 0, 0, 0.12) 0px 1px 6px, rgba(0, 0, 0, 0.12) 0px 1px 4px'
     },
     category: {
       position: 'absolute',
       top: '0',
       right: '0',
       padding: '4px 6px',
       color: '#fff',
       fontSize: '.8em',
       backgroundColor: '#ed5a5a'
     },
     title: {
       fontSize: '1.3em',
       paddingTop: '10px',
       paddingBottom: '20px',
       textAlign: 'center'
     },
     text: {
       fontSize: '1em',
       color: 'rgba(0,0,0,.8)'
     }
   }
  }
  componentDidMount() {
    let id = this.props.params.id;
    let address = `http://localhost:3000/post/${id}`;
    axios.get(address).then(res => {
      console.log(res.data.post);
      this.setState({
        post: res.data.post
      });
      // console.log(this.state.data);
    });
  }
  render () {
    var styles = this.getStyles();
    return(
      <div style={styles.content}>
        <div style={styles.title}>{this.state.post.title}</div>
        <div style={styles.text}>{this.state.post.content}</div>
        <div style={styles.category}>{this.state.post.category}</div>
      </div>
    )
  }
}

export default ShowPost;
