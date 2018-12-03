import React, { Component } from 'react';
import "./Step.css";

class Step extends Component {

  render() {
    return <div className='step'>
        <div className="step-header">{this.props.title}</div>
        <div className="step-content">{this.props.children}</div>
        <div className="step-footer">
          <div className="step-action step-action--prev" onClick={this.props.prevStep}>
            PREV
          </div>
          <div className="step-action step-action--next" onClick={this.props.nextStep}>
            Next
          </div>
        </div>
      </div>;
  }
}
Step.propTypes = {
}

export default Step;