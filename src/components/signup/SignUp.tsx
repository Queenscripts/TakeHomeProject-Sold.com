import { Button, FormControl, FormHelperText, Input, InputLabel } from '@material-ui/core';
import { default as React } from 'react';
import { useRouter } from 'next/router';

export const SignUp = () => {
  const router = useRouter();
  //   const [error, setError] = React.useState<string>();
  const [formValues, setFormValues] = React.useState({});

  const handleChangeFormValues = (key: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValues({
      ...formValues,
      [key]: e.target.value,
    });
    console.log(formValues);
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    let json;
    console.log(formValues);
    try {
      const res = await fetch(`http://localhost:9001/users`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formValues),
      });
      json = await res.json();
      if (!res.ok) {
        throw new Error(JSON.stringify(json));
      }
    } catch (e) {
      router.push('/dashboard');
      console.log(json, '\n', e);
    }
  };

  return (
    <div>
      <div>
        <h1>Signup</h1>
        <FormControl>
          <InputLabel htmlFor='my-input'>First Name</InputLabel>
          <Input
            onChange={handleChangeFormValues('firstName')}
            defaultValue={'firstname'}
            id='name-input'
            aria-describedby='my-helper-text'
          />
          <FormHelperText id='email-helper-text'>We'll never share your email.</FormHelperText>
        </FormControl>
        <FormControl>
          <InputLabel htmlFor='my-input'>Last Name</InputLabel>
          <Input
            onChange={handleChangeFormValues('lastName')}
            defaultValue={'last'}
            id='last-input'
            aria-describedby='my-helper-text'
          />
          <FormHelperText id='last-helper-text'>We'll never share your email.</FormHelperText>
        </FormControl>
        <FormControl>
          <InputLabel htmlFor='my-input'>Email address</InputLabel>
          <Input
            onChange={handleChangeFormValues('email')}
            defaultValue={'email'}
            id='email-input'
            aria-describedby='my-helper-text'
          />
          <FormHelperText id='email-helper-text'>We'll never share your email.</FormHelperText>
        </FormControl>
        <FormControl>
          <InputLabel htmlFor='my-input'>Password</InputLabel>
          <Input
            defaultValue={'password'}
            onChange={handleChangeFormValues('password')}
            id='my-input'
            aria-describedby='my-helper-text'
          />
          <FormHelperText id='my-helper-text'>Don't share your password.</FormHelperText>
        </FormControl>
        <FormControl>
          <InputLabel htmlFor='my-input'>Phone Number</InputLabel>
          <Input
            onChange={handleChangeFormValues('phoneNumber')}
            defaultValue={'phone'}
            id='phone-input'
            aria-describedby='my-helper-text'
          />
          <FormHelperText id='phone-helper-text'>We'll never share your email.</FormHelperText>
        </FormControl>

        <Button onClick={handleSignUp} variant='contained'>
          Sign Up
        </Button>
        {/* Consider adding the login button */}
        {/* <Button type='submit' variant='contained' color='primary'>
              Login
            </Button>
          </div> */}
        {/* Handle errors + state to popup in DOM */}
        {/* <div>{error && <p style={{ color: 'red' }}>{error}</p>}</div> */}
      </div>
    </div>
  );
};
