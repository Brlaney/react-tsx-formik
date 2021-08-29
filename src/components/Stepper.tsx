import React from 'react';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';

// const initial = [
//   { id: 1, field: 'system' },
//   { id: 2, field: 'nodes' },
//   { id: 3, field: 'members' }
// ];

function getSteps() {
  return [
    'Type of system',
    'Initial conditions',
    'Member properties'
  ];
}

// function getStepContent(step: number) {
//   switch (step) {
//     case 0:
//       return 'Type of system';
//     case 1:
//       return 'Initial conditions';
//     case 2:
//       return 'Member properties';
//     default:
//       return 'Unknown step';
//   }
// }

export default function HorizontalLinearStepper() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set<number>());
  const steps = getSteps();

  const isStepSkipped = (step: number) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <div className='stepper'>

      {/* Navigation title and buttons */}
      <div className='stepperContainer'>
        {activeStep === steps.length ? (
          <div className='inner'>
            <Typography className='instructions'>
              All steps completed - you&apos;re finished
            </Typography>
          </div>
        ) : (
          <>
            <div className='inner'>
              <div className='innerContainer'>
                <IconButton
                  disabled={activeStep === 0}
                  onClick={handleBack}
                  className='arrowLeft'
                >
                  <ArrowLeftIcon />
                </IconButton>
              </div>
              <div className='innerContainer'>
                {activeStep === steps.length - 1 ? (
                  <Button
                    variant='contained'
                    color='primary'
                    onClick={handleNext}
                    className='finishButton'
                  >
                    Finish
                  </Button>
                ) : (
                  <IconButton
                    onClick={handleNext}
                    className='arrowRight'
                  >
                    <ArrowRightIcon />
                  </IconButton>
                )
                }
              </div>
            </div>
          </>
        )}
      </div>

      {/* Stepper component */}
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps: { completed?: boolean } = {};

          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }

          return (
            <Step key={label} {...stepProps}>
              <StepLabel>
                {label}
              </StepLabel>
            </Step>
          );
        })}
      </Stepper>
    </div>
  );
}
