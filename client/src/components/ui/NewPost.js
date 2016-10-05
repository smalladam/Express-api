import React, { Component } from 'react';
import Form from "./Form.js";
import axios from 'axios';

class NewPost extends Component {
  getStyles() {
    return {
      content: {
        width: '12%',
        maxWidth: '600px',
        margin: '30px auto',
        backgroundColor: '#fff',
        borderRadius: '10px',
        boxShadow: 'rgba(0, 0, 0, 0.12) 0px 1px 6px, rgba(0, 0, 0, 0.12) 0px 1px 4px'
      },
      title: {
        textAlign:'center',
        color:'#ffffff',
        display:'block',
        backgroundColor:'#00bcd4',
        fontSize: '1.2em',
        margin:"20px auto",
        padding:"10px 6px",
        borderRadius:'6px'
      }
    };
  }
  newPost(data){
      axios.post('http://localhost:3000/posts', data)
      .then( res => {
        console.log(res.data.message);
        this.context.router.push('/');
      })
    }
  render() {
    const styles = this.getStyles();
    return (
       <div>
          <div style={styles.content}>
            <div style={styles.title}>写我的文章</div>
          </div>
          <Form newPost={this.newPost.bind(this)} />
       </div>
    );
  }
}
NewPost.contextTypes = {
  router: React.PropTypes.object
};

export default NewPost;
