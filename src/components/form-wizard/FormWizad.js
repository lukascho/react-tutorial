import React, { Component } from "react";
import { withRouter, Route, Redirect } from "react-router-dom";
import Step from "./step/Step";
import "./FormWizard.css";

class FormWizard extends Component {
  
  currentStepIndex() {
    const path = this.props.location.pathname;
    const step = this.props.steps.find(step => step.path === path);
    return step !== undefined ? this.props.steps.indexOf(step) : -1;
  }

  nextStep() {
    const current = this.currentStepIndex();
    const next = current + 1;
    if (next <= this.props.steps.length - 1) {
      this.props.history.push(this.props.steps[next].path);
      this.setState({ active: next });
    }
  }

  prevStep() {
    const current = this.currentStepIndex();
    if (current > 0) {
      const next = current - 1;
      this.props.history.push(this.props.steps[next].path);
      this.setState({ active: next });
    }
  }

  render() {
    const currentPath = this.currentStepIndex(this.props.location.pathname);

    if (currentPath !== -1) {
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
