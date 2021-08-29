import { Form, Field } from 'formik';
import { TextFormField } from './FormFields/TextFormField';
import { SelectFormField } from './FormFields/SelectFormField';
import { SliderFormField } from './FormFields/SliderFormField';

const Initial: React.FC = () => {
  return (
    <Form className='form' encType='multipart/form-data'>
      <div className='parent'>
        <Field
          id='field'
          options={[
            { label: 'Truss', value: 'truss' },
            { label: 'Beam', value: 'beam' },
            { label: 'Frame', value: 'frame' }
          ]}
          label='System'
          name='system'
          component={SelectFormField}
        />
      </div>
      <div className='parentRow'>
        <Field
          id='sliderfield'
          label='No. of nodes, n'
          name='nodes'
          component={SliderFormField}
        />
      </div>
      <div className='parentRow'>
        <Field
          id='sliderfield'
          label='No. of members, m'
          name='members'
          component={SliderFormField}
        />
      </div>
    </Form>
  )
};

export default Initial;
