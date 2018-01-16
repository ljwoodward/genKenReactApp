import React from 'react';

class QuestionBox extends React.Component{

render() {
  console.log(this.props.question);

  if(!this.props.question) return null; 

  return(
<h4>{this.props.question.question}</h4>

  );

}






}




export default QuestionBox;
