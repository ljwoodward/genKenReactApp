import React from 'react';

class AnswerBox extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedIndex: undefined
    }
    this.createShuffledAnswers = this.createShuffledAnswers.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.rightOrWrong = this.rightOrWrong.bind(this);
  }

  shuffle(a) {
  for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
  }

  createShuffledAnswers = () => {
    const answersArray = [];
    answersArray.push(this.props.question.correct_answer);
    this.props.question.incorrect_answers.forEach(function(answer) {
      answersArray.push(answer);
    })

    const shuffledAnswers = this.shuffle(answersArray);
    return shuffledAnswers;
  }

  rightOrWrong = (answer) => {
    if (answer === this.props.question.correct_answer) {
      return 'correct';
    } else {
      return 'false';
    }
  }


  handleChange(event) {
    const selectedIndex = event.target.key;
    const selectedAnswer = event.target.value;
    this.setState({ selectedIndex: selectedIndex});
    const result = this.rightOrWrong(selectedAnswer);
    this.props.setRightOrWrong(result);

  }

  render() {

    if (!this.props.question) return null;

    const answers = this.createShuffledAnswers();

    return (
      <div>
        <select id="answers"
        value={this.state.selectedIndex}
        onChange={ this.handleChange }>
        {answers.map(function(answer, index) {
          return (<option key={index} value={answer} >{answer}</option>);
        })}
      </select>
      </div>
    )
  }

}




export default AnswerBox;
