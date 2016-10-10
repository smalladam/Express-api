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
  getStyles() {
    return {
      content: {
        position: 'relative',
        width: '100%',
        maxWidth: '600px',
        margin: '20px auto',
        backgroundColor: '#fff',
        borderRadius: '5px',
        padding: '16px',
        boxShadow: 'rgba(0, 0, 0, 0.12) 0px 1px 6px, rgba(0, 0, 0, 0.12) 0px 1px 4px',
        minHeight: '80px'
      },
      title: {
        fontSize: '1.2em'
      },
      link:{
        color:'#fff',
        display:'block',
        width:'4em',
        height:'1.5em',
        backgroundColor:'#00bcd4',
        textDecoration:'none',
        lineHeight:'1.5em',
        borderRadius:'5px',
        textAlign:'center',
        margin:'6px auto'
      },
      a:{
        position:'absolute',
        right:'16px',
        top:'25px'
      }
    }
  }
  componentWillMount() {
    //  Promise
    axios.get('http://localhost:3000/posts').then(res => {
      // console.log('axios');
      this.setState({
        posts: res.data.posts
      });
      // console.log(this.state.posts);
    });
  }
  render() {
    const styles = this.getStyles();
    const postList = map((post) => {
      return (
        <div style={styles.content} key={post._id}>
          <div style={styles.title}>{post.title}</div>
          <div style={styles.a}>
            <Link to={`/posts/${post._id}`} style={styles.link}>查看</Link>
            <Link to={`/posts/${post._id}/edit`} style={styles.link}>编辑</Link>

          </div>
        </div>
      )
    }, this.state.posts);
    return(
      <div>
        <Link to="/write" style={styles.link}>写文章</Link>
        { postList }
      </div>
    );
  }
}
