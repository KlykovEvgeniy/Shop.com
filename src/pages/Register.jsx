import { Formik, Form, Field } from 'formik';
import authContext from '../context/authContext';
import { useContext } from 'react';

export default function Regiser() {
  const { createAccount, emailName, basketContent } = useContext(authContext);
  const handleSubmit = (values, actions) => {
    const { email, password } = values;
    createAccount.createEmail(email);
    createAccount.createPassword(password);
    actions.resetForm();
    basketContent.clearBasket();
  };
  return (
    <main>
      {!emailName && (
        <Formik onSubmit={handleSubmit} initialValues={{ email: '', password: '' }}>
          <Form>
            <Field name="email" type="email" placeholder="Email" />
            <Field name="password" type="password" placeholder="Password" />
            <button type="submit">Submit</button>
          </Form>
        </Formik>
      )}
      {emailName && (
        <main>
          <h1>Hello, {emailName}</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus, quasi? Qui deleniti similique
            laudantium doloremque iste, accusantium assumenda odio, libero amet est perspiciatis facilis eius illum a,
            harum eos alias.
          </p>
        </main>
      )}
    </main>
  );
}
