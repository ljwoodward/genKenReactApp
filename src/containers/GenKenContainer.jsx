import React from 'react';
import QuestionNumber from '../components/QuestionNumber.jsx';
import QuestionBox from '../components/QuestionBox.jsx';
import AnswerBox from '../components/AnswerBox.jsx';
import ResultBox from '../components/ResultBox.jsx';

class GenKenContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: [],
      nextQuestion: null,
      rightOrWrong: null
    }
    this.setRightOrWrong = this.setRightOrWrong.bind(this);
  }

  componentDidMount() {
    console.log('didMount');
    const url = 'https://opentdb.com/api.php?amount=50&category=9&type=multiple';
    const request = new XMLHttpRequest();
    request.open('GET', url);

    request.addEventListener('load', () => {
      if (request.status !== 200) return;

      const jsonString = request.responseText;
      const questions = JSON.parse(jsonString);
      this.setState({ questions: questions.results, nextQuestion: 0})
    })
    request.send();
  }

  setRightOrWrong(answer) {
    this.setState({rightOrWrong: answer})
  }

  render() {
    console.log('render');
    return (
      <div>
        <QuestionNumber question={this.state.nextQuestion}/>
        <QuestionBox question={this.state.questions[this.state.nextQuestion]}/>
        <AnswerBox question={this.state.questions[this.state.nextQuestion]}
        setRightOrWrong={this.setRightOrWrong}/>
        <ResultBox result={this.state.rightOrWrong}/>
      </div>
    );
  }

}



export default GenKenContainer;
