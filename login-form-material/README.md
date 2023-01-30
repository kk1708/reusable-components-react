
# Login Form Using React JS & Material UI With Client Side Validation

A reusable login form component with client-side validation using Material UI.

## Installation

Before using this component, make sure that you have Material UI installed in your project. You can install it using npm or yarn:

```bash
  npm install @material-ui/core
  or
  yarn add @material-ui/core
```
## Usage

This example demonstrates how to use this component in a React application. Simply import the component and render it in your component.

```javascript
import React from 'react';
import LoginForm from 'path/to/LoginForm';

const App = () => {
  return (
    <div>
      <LoginForm />
    </div>
  );
};

export default App;
```

## Documentation

#### Props
This component does not take any props.

#### State
The component uses state to store the form data and error messages.

#### formData
An object that holds the email and password values entered by the user.

#### errors
An object that holds the error messages for the email and password fields.

#### Event Handlers
**handleChange ->**
This function is called when the form data changes. It updates the formData state with the new values.

**validateForm ->**
This function validates the form data and sets the errors state with any error messages. It returns a boolean indicating if there are any errors with the form.

**handleSubmit ->**
This function is called when the form is submitted. It prevents the default form behavior, calls the validateForm function to validate the form, and logs the form data to the console if there are no errors.
