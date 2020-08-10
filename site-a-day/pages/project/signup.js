import { useForm } from 'react-hook-form';
import { useState } from 'react';

const LoginForm = () => {
  const { register, handleSubmit, errors } = useForm();
  const [passwordShow, setPasswordShow] = useState('password');

  const revealPassword = (e) => {
    e.preventDefault();
    if (passwordShow == 'password') {
      setPasswordShow('text');
    } else {
      setPasswordShow('password');
    }
  };
  const [submitting, setSubmitting] = useState(false);
  console.log(errors);
  return (
    <section>
      <form
        onSubmit={handleSubmit((formInfo) => {
          setSubmitting(true);

          setSubmitting(false);
        })}>
        <h1>Sign Up</h1>
        <div>
          <input type='text' id='name' name='name' ref={register()} required />
          <label htmlFor='name'>Name</label>
        </div>
        <div>
          <input
            type='text'
            id='email'
            name='email'
            ref={register({ required: 'required' })}
            required
          />
          {errors.email && <div>{errors.email.message}</div>}
          <label htmlFor='email'>E-mail</label>
        </div>
        <div className='password__container'>
          <div>
            <input
              type={passwordShow}
              id='password'
              name='password'
              ref={register({
                minLength: {
                  value: 8,
                  message: 'must be at least 8 characters long',
                },
                validate: (value) => {
                  return;
                  [/[a-z]/, /[A-Z]/, /[0-9]/, /[^a-zA-Z0-9]/].every((pattern) =>
                    pattern.test(value),
                  );
                },
              })}
              required
            />
            {errors.password && (
              <div className='errors'>{errors.password.message}</div>
            )}

            <label htmlFor='password'>Password</label>
          </div>
          <div>
            <input
              type={passwordShow}
              id='confirm'
              name='confirm'
              ref={register()}
              required
            />
            <label htmlFor='password'>Confirm</label>
          </div>
          <button
            className='button--show'
            onClick={() => revealPassword(event)}></button>
        </div>
        {/* <div>
          <label htmlFor='TaA'>Terms of Service</label>
          <input type='checkbox' id='TaA' name='TaS' ref={register()} />
        </div> */}
        <div>
          <button
            type='submit'
            disabled={submitting}
            className='button--register'>
            Register
          </button>
        </div>
      </form>
      <style jsx>
        {`
          section {
            display: flex;
            justify-content: center;
            align-items: center;
            margin: 0 auto;
            height: 100vh;
            background: #e1f4ed;
          }
          form {
            box-shadow: 0 1px 2px 2px #40323380;
            border: 3px solid #403233;
            display: flex;
            flex-direction: column;
            font-weight: 700;
            font-size: 1.4rem;
            justify-content: space-around;
            height: 80vh;
            width: 30%;
            background: #abedc6;
            color: #403233;

            border-radius: 20px;
            text-align: center;
          }

          form div {
            position: relative;
          }
          label {
            position: absolute;
            left: 15%;
            top: 20%;

            transition: all 0.3s ease-out;
          }

          input {
            border: 1px solid #403233;
            box-shadow: 0 1px 2px 2px #40323320;

            color: #403233;
            border-radius: 5px;
            width: 80%;
            height: 50px;
            line-height: 1;
            font-size: 1.1rem;
            font-weight: 800;
            background: #b9ffb7;
            padding: 3% 3% 1%;
          }

          input:focus {
            border-color: #f19a3e;
            border-radius: 5px;
            outline: 0;
          }
          input:valid + label,
          input:focus + label {
            transform: translateY(-30%);
            transform-origin: 0, 0;
            outline: 0;
            box-shadow: 0;
            opacity: 0.5;
            padding: 0 2%;
            font-size: 0.7rem;
            transition: all 0.3s ease-out;
          }
          .password__container {
            display: flex;
            justify-content: space-around;
            flex-wrap: wrap;
          }
          .password__container div {
            width: 50%;
          }
          .password__container input {
            width: 70%;
            font-size: 0.8rem;
            padding: 10% 5% 1%;
          }
          .password__container label {
            font-size: 1.2rem;
            padding: 0 5%;
          }
          .button--show {
            background: url('https://img.icons8.com/ios/50/000000/show-password.png');
            background: contain;
            background-origin: content-box;
            background-repeat: no-repeat;
            background-color: #b9ffb7;
            border-radius: 2px;
            width: 13%;
            height: 70%;
            // padding: 1%;
            margin: 5% 3% 0;
          }
          #errors {
            position: absolute;
            top: 0;
            left: -150%;
            background: red;
            margin: 0;
            padding: 0;
          }
          .button--register {
            background: transparent;
            color: #403233;
            border: none;
            cursor: pointer;
            // width: calc(50% - 50px);
            color: white;
            font-size: 2.3rem;
            // margin: 0 auto;
            // text-align: center;
            font-weight: 800;
          }
          .button--register {
          }
        `}
      </style>
    </section>
  );
};
export default LoginForm;
