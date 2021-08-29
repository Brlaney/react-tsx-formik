import React from 'react';
import * as yup from 'yup';
import { Formik } from 'formik';
import Stepper from './components/Stepper';
import Initial from './components/Initial';
import './scss/globals.scss';


const schema = yup.object({
  system: yup
    .string()
    .required()
    .min(1)
    .max(99),
  nodes: yup
    .number()
    .required()
    .min(1)
    .max(99),
  members: yup
    .number()
    .required()
    .min(1)
    .max(99),
});

const App: React.FC = () => {
  return (
    <div className='container'>
      <div className='outer'>
        <Stepper />
        <Formik
          validationSchema={schema}
          initialValues={{ system: '', nodes: 1, members: 1 }}
          onSubmit={() => { }}
        >
          {() => (
            <Initial />
          )}
        </Formik>
      </div>
    </div>
  );
};

export default App;
