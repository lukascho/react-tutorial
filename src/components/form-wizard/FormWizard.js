import React, { Component } from "react";
import { withRouter, Route, Redirect } from "react-router-dom";
import Step from "./step/Step";
import "./FormWizard.css";

class FormWizard extends Component {
  
  currentStepIndex() {
    const step = this.props.steps.find(step => step.path === this.props.location.pathname);
    return this.props.steps.indexOf(step);
  }

  nextStep() {
    const next = this.currentStepIndex() + 1;
    if (next <= this.props.steps.length - 1) {
      this.props.history.push(this.props.steps[next].path);
      this.setState({ active: next });
    }
  }

  prevStep() {
    const current = this.currentStepIndex();
    if (current > 0) {
      this.props.history.push(this.props.steps[current - 1].path);
      this.setState({ active: current - 1 });
    }
  }

  render() {
    const currentStepIndex = this.currentStepIndex(this.props.location.pathname);

    if (currentStepIndex !== -1) {
      return <div className="form-wizard">
        <div className="form-wizard-labels">
          {this.props.steps.map(step => this.renderStepLabel(step))}
        </div>
        <div className="form-wizard-steps">
          {this.props.steps.map(step => (
            <Route
              key={step.id}
              path={step.path}
              render={() => this.renderStepContent(step)}
            />
          ))}
        </div>
      </div>;
    } else {
      return <div className="form-wizard">
          {this.props.redirect !== undefined ? <Redirect from="/" to={this.props.redirect} /> : ''}
        </div>;
    }
  }

  renderStepLabel(step) {
    return (
      <div className="forumlar-label" key={step.id}>
        <button>{step.id}</button>
      </div>
    );
  }

  renderStepContent(step) {
    return (
      <Step
        key={step.title}
        title={step.title}
        nextStep={() => this.nextStep()}
        prevStep={() => this.prevStep()}
      >
        {step.content}
      </Step>
    );
  }
}

export default withRouter(FormWizard);
