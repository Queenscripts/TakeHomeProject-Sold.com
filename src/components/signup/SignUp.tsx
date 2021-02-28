import { Button, FormControl, FormHelperText, Input, InputLabel } from '@material-ui/core';
import { AccountCircle, Fingerprint, Lock, MailOutline, Phone } from '@material-ui/icons';
import { useRouter } from 'next/router';
import { default as React } from 'react';
import styles from './SignUp.module.css';

export const SignUp = () => {
  const router = useRouter();
  const [error, setError] = React.useState<string>();
  const [formValues, setFormValues] = React.useState({});

  const handleChangeFormValues = (key: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValues({
      ...formValues,
      [key]: e.target.value,
    });
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    let json;
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
      } else {
        router.push('/login');
      }
    } catch (e) {
      setError(
        json.message === 'User already exists.' ? (
          Object.keys(json.keyValue)[0] + ' is taken. Please enter a new value.'
        ) : typeof json.message != 'string' ? (
          <ul>
            {json.message.map((i) => (
              <li key={i}>{i}</li>
            ))}
          </ul>
        ) : (
          json.message
        ),
      );

      //   console.log(json, '\n', e);
    }
  };

  return (
    <div>
      <div className={styles.container}>
        <h1>Signup</h1>
        <form className={styles.form}>
          <FormControl>
            <InputLabel htmlFor='my-input'>
              <AccountCircle /> First Name
            </InputLabel>
            <Input
              onChange={handleChangeFormValues('firstName')}
              placeholder={'Xan'}
              id='name-input'
              aria-describedby='my-helper-text'
              data-cy='signup-input-fname'
            />

            <FormHelperText id='email-helper-text'>
              Please enter your full first name.
            </FormHelperText>
          </FormControl>
          <FormControl>
            <InputLabel htmlFor='my-input'>
              <Fingerprint /> Last Name
            </InputLabel>
            <Input
              onChange={handleChangeFormValues('lastName')}
              placeholder={'Michel'}
              id='last-input'
              aria-describedby='my-helper-text'
              data-cy='signup-input-lname'
            />
            <FormHelperText id='last-helper-text'>
              Please enter your full last name.
            </FormHelperText>
          </FormControl>
          <FormControl>
            <InputLabel htmlFor='my-input'>
              <MailOutline />
              Email address
            </InputLabel>
            <Input
              onChange={handleChangeFormValues('email')}
              placeholder={'xan@michel.com'}
              id='email-input'
              aria-describedby='my-helper-text'
              data-cy='signup-input-email'
            />
            <FormHelperText id='email-helper-text'>
              We'll never share your email.
            </FormHelperText>
          </FormControl>
          <FormControl>
            <InputLabel htmlFor='my-input'>
              <Lock />
              Password
            </InputLabel>
            <Input
              placeholder={'T0pSecret!'}
              onChange={handleChangeFormValues('password')}
              id='my-input'
              type='password'
              aria-describedby='my-helper-text'
              data-cy='signup-input-password'
            />
            <FormHelperText id='my-helper-text'>Don't share your password.</FormHelperText>
          </FormControl>
          <FormControl>
            <InputLabel htmlFor='my-input'>
              {' '}
              <Phone /> Phone Number
            </InputLabel>
            <Input
              onChange={handleChangeFormValues('phoneNumber')}
              placeholder={'+15555555'}
              id='phone-input'
              aria-describedby='my-helper-text'
              data-cy='signup-input-phone'
            />
            <FormHelperText id='phone-helper-text'>
              Follow the phone number pattern.
            </FormHelperText>
          </FormControl>
        </form>
        <Button onClick={handleSignUp} variant='contained'>
          Sign Up
        </Button>
        {/* Consider adding the login button */}
        {/* <Button type='submit' variant='contained' color='primary'>
              Login
            </Button>
          </div> */}
        {/* Handle errors + state to popup in DOM */}
        <div style={{ color: 'red' }}>{error}</div>
      </div>
    </div>
  );
};
