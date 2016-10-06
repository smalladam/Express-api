import React, { PropTypes } from 'react';

class App extends React.Component {
  handleSubmit(e){
  e.preventDefault();
  let Title = this.refs.title.value;
  let Content = this.refs.content.value;
  let data = {
    title: Title,
    content: Content
  }

  console.log(data);
  }
  render () {
   return(
     <div>
       <form onSubmit={this.handleSubmit.bind(this)}>
        <input type='text' ref="title"/> <br />
        <input type='text' ref="content"/> <br />
        <input type='submit' value="提交"/>
       </form>
     </div>
   )
  }
}

export default App;
