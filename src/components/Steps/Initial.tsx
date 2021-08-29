import { Form, Field } from 'formik';
import { TextFormField } from '../FormFields/TextFormField';
import { SelectFormField } from '../FormFields/SelectFormField';

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
          id='field'
          label='No. of nodes, n'
          name='nodes'
          component={TextFormField}
        />
        <Field
          id='field'
          label='No. of members, m'
          name='members'
          component={TextFormField}
        />
      </div>
    </Form>
  )
};

export default Initial;
