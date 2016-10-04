import React, { Component } from 'react';
import From from "./Form.js"

class NewPost extends Component {
  getStyles() {
    return {
      content: {
        width: '100%',
        maxWidth: '600px',
        margin: '30px auto',
        backgroundColor: '#fff',
        borderRadius: '10px',
        boxShadow: 'rgba(0, 0, 0, 0.12) 0px 1px 6px, rgba(0, 0, 0, 0.12) 0px 1px 4px'
      },
      title: {
        fontSize: '1.2em',
        textAlign: 'center',
        paddingTop: '20px'
      }
    };
  }

  render() {
    const styles = this.getStyles();
    return (
       <div>
          <div style={styles.content}>
            <div style={styles.title}>写我的文章</div>
          </div>
          <From />
       </div>
    );
  }
}

export default NewPost;
