import React from 'react';

class ResultBox extends React.Component {

render() {
  if (!this.props.result) {
    return null;
  }
  return(
    <h2>{this.props.result}</h2>
  )
}

}

export default ResultBox;
