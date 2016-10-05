import React, { Component } from 'react';
import map from 'lodash/fp/map';
import axios from 'axios';
import { Link } from 'react-router';

export default class PostList extends Component {
  constructor() {
    super();
    this.state={
      posts: []
    };
  }
  getStyles(){
    return{
      content:{
        position: 'relative',
        width: '100%',
        height: '60px',
        maxWidth: '600px',
        margin: '20px auto',
        backgroundColor: '#fff',
        borderRadius: '5px',
        padding: '16px',
        boxShadow: 'rgba(0, 0, 0, 0.14) 0px 3px 8px, rgba(0, 0, 0, 0.14) 0px 3px 6px'
      },
      title:{
        fontSize:'1.3em'
      },
      link:{
        display:'block',
        width:"9%",
        textAlign:'center',
        margin:"20px auto",
        padding:"10px 6px",
        fontSize:"1.2em",
        textDecoration:'none',
        backgroundColor:'#00bcd4',
        borderRadius:'5px',
        color:'#ffffff',

      },
      a:{
        float:"right",
        color:'#00bcd4',
        textDecoration:'none'

      }
    }
  }
  componentWillMount() {
    //  Promise
    axios.get('http://localhost:3000/posts').then(res => {
      console.log('axios');
      this.setState({
        posts: res.data.posts
      });
      console.log(this.state.posts);
    });
  }
  render() {
    const styles = this.getStyles();
    const postList = map((post) => {
      return (
        <div style={styles.content} key={post._id}>
          <div style={styles.title}>{post.title}</div>
          <Link to={`/post/${post._id}`} style={styles.a}>查看</Link>
        </div>
      )
    }, this.state.posts);
    return(
      <div>
        <Link to="/write" style={styles.link}>我要写文章</Link>
        { postList }
      </div>
    );
  }
}
