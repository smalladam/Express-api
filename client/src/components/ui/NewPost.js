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
    //axios 传统上我们认为它就是发送 ajax 请求的，类似于S.ajax()
    //axios 就是用来： 发 http 请求的
      axios.post('http://localhost:3000/posts', data)
      //POST/post according to REST api structrue
      //例如把一篇文章当做一个RESOURCE，资源
      // GET /posts--------------读取所有文章
      // POST /posts---------------新建一篇文章
      // PUT /posts/:post_id--------------更新一篇文章
      // GET /posts/:post_id--------------读取特定一篇文章
      // DELETE /posts/:post_id------------删除特定一篇文章

      // REST架构有两大优势：
      //   1：请求的格式符合正常用户思维
      //   2：最大程度的尊重了 http verb 设计者的原始意图
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
