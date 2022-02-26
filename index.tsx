import React, { useState } from 'react';
import { render } from 'react-dom';
import './style.css';

const App = () => {
  const [uname, setUname] = useState('');
  const [pass, setPass] = useState('');
  const submitForm = () => {
    if (uname || pass) {
      const res = fetch('https://reqres.in/api/login', {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: {
          email: uname,
          password: pass,
        },
      })
        .then((response) => {
          console.log(response);
          response.json();
        })
        .then((responseJson) => {
          console.error(responseJson);
          return responseJson;
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };
  return (
    <div>
      <div>
        <div>
          <h3>Hello there, Sign in to continue</h3>

          <div>
            <form>
              <div>
                <label>Username/Email</label>
                <input type="text" onBlur={(e) => setUname(e.target.value)} />
                <div></div>
              </div>
              <div>
                <label>Password</label>
                <input
                  type="password"
                  onBlur={(e) => setPass(e.target.value)}
                />
                <div></div>
              </div>
              <button onClick={submitForm}>Login</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

render(<App />, document.getElementById('root'));
