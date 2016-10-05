import React, { Component } from 'react';
import {Link} from 'react-router';
import Radium from 'radium';
import axios from 'axios';

class Form extends Component {
  getStyles() {
    return {
      form: {
        padding: '20px 40px',
      },
      div: {
        marginBottom: '10px'
      },
      label: {
        display: 'block',
        fontSize: '.9em',
        color: 'rgba(0,0,0,.6)',
        paddingBottom: '10px'
      },
      input: {
        width: '100%',
        height: '48px',
        border: '1px solid #ddd',
        borderRadius: '5px',
        fontSize: '1em',
        padding: '10px',
        boxSizing: 'border-box',
        ':focus': {
          border: '1px solid #00bcd4',
          outline: 'none'
        }
      },
      actions: {
        textAlign: 'center',
      },
      button: {
        width: '6%',
        height: '36px',
        border: 'none',
        backgroundColor: '#00bcd4',
        fontSize: '1em',
        color: '#ffffff',
        display: 'inline-block',
        margin: '20px auto 0',
        borderRadius: '10px',
        ':hover': {
          cursor: 'pointer'
        },
        ':focus': {
          outline: 'none'
        }
      },
      link: {
        width: '6%',
        height: '36px',
        border: 'none',
        display: 'inline-block',
        backgroundColor: '#00bcd4',
        margin: '20px auto 0',
        marginLeft: '15px',
        fontSize: '1em',
        color: '#ffffff',
        // opacity: '.8',
        borderRadius:'10px',
        lineHeight:'36px',
        textDecoration: 'none',
        ':hover': {
          cursor: 'pointer'
        },
        ':focus': {
          outline: 'none'
        }
      }
    };
  }
  handleSubmit(e){
    e.preventDefault();
    let title = this.refs.title.value;
    let category = this.refs.category.value;
    let content = this.refs.content.value;
    if(title.length==0){
      alert("标题内容不能为空！！")
      return;
    }
    this.props.newPost({title,category,content});
  }
  render() {
    const styles = this.getStyles();
    return (
      <form style={styles.form} onSubmit={this.handleSubmit.bind(this)}>
        <div style={styles.div}>
          <label style={styles.label}>分类</label>
          <input style={styles.input} key='0' ref='category' />
        </div>
        <div style={styles.div}>
          <label style={styles.label}>标题</label>
          <input style={styles.input} key='1' ref='title' />
        </div>
        <div style={styles.div}>
          <label style={styles.label}>内容</label>
          <textarea style={[styles.input, {height: '100%'}]} rows='20' key='2' ref='content' />
        </div>
        <div style={styles.actions}>
          <button type='submit' style={styles.button}>提交</button>
          <Link to='/' style={styles.link}>取消</Link>
        </div>
      </form>
    );
  }
}

// Form.contextTypes = {
//   router: React.PropTypes.object
// };
export default Radium(Form);
