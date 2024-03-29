import React, { useEffect, useState } from 'react';
import { render } from 'react-dom';
import axios from 'axios';
import './style.css';

import Home from './Home';

const App = () => {
  const [uname, setUname] = useState('');
  const [pass, setPass] = useState('');
  const [policy, setPolicy] = useState('');
  const [home, setHome] = useState(false);
  const [somedata, setSomedata] = useState();
  const submitForm = async (e) => {
    e.preventDefault();
    if (uname && pass && policy) {
      try {
        const response = await axios
          .post('https://reqres.in/api/login', {
            email: uname,
            password: pass,
            headers: { 'Content-Type': 'text/plain' },
          })
          .then((response) => {
            return response;
          });
        console.log(response);
        if (response.status === 200) {
          console.log('hurr');
          // location.href = '/home';

          // localStorage.setItem(
          //   'Authorization',
          //   'Bearer ' + response.data.token
          // );
          const fetchData = async () => {
            try {
              const response1 = await axios
                .get('https://reqres.in/api/unknown', {
                  headers: {
                    'Content-Type': 'text/plain',
                    Authorization: 'Bearer' + response.data.token,
                  },
                })
                .then((response1) => {
                  setHome(true);
                  return response1;
                });
              setSomedata(response1.data.data);
              console.log(somedata);
            } catch (error) {
              alert(error);
            }
          };
          fetchData();
        } else {
          alert('invalid username or password');
        }
      } catch (error) {
        alert('invalid username or passwords');
      }
    } else {
      !uname
        ? (document.querySelector('.error_email').style.display = 'block')
        : ' ';

      !pass
        ? (document.querySelector('.error_pwd').style.display = 'block')
        : ' ';

      alert('invalid details');
    }
  };

  useEffect(() => {
    if (localStorage.getItem('Authorization')?.length > 0) {
      // location.href = '/home';
    }
  }, []);

  const Home = () => {
    return (
      <div>
        <h2>User Lists are</h2>
      </div>
    );
  };

  return (
    <div>
      <div className="container">
        <div>
          <img
            src="data:image/png;base64,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"
            alt=""
          />

          <h3>Hello there, Sign in to continue</h3>

          <div>
            <form>
              <div>
                <label>Email</label>
                <input
                  type="text"
                  onChange={(e) => setUname(e.target.value)}
                  value={uname}
                />
                <div className="error_email">Pleas Enter Email</div>
              </div>
              <div>
                <label>Password</label>
                <input
                  type="password"
                  onChange={(e) => setPass(e.target.value)}
                  value={pass}
                />
                <div className="error_pwd">Pleas enter Password</div>
              </div>
              <div className="policy">
                <div>
                  <input
                    type="checkbox"
                    onChange={(e) => setPolicy(e.target.value)}
                  />
                </div>
                <div>
                  <label htmlFor="">
                    By creating or logging into the account, you are agreeing
                    with our <span>Terms & Conditions</span>and{' '}
                    <span>Privacy Policys</span>
                  </label>{' '}
                </div>
              </div>
              <button onClick={submitForm}>Login</button>

              <div className="sso-signin">
                <a href="#/">Sign in with company SSO</a>
              </div>
            </form>
          </div>
        </div>
      </div>
      {home ? <Home /> : ''}
    </div>
  );
};

render(<App />, document.getElementById('root'));
