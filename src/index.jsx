import React from 'react';
import ReactDOM from 'react-dom';

function UserRegistration() {
  return (
    <form role="form">
      <label htmlFor="email">Email</label>
      <input type="text" id="email" />
      <label htmlFor="password">Password</label>
      <input type="password" id="password" />
      <label htmlFor="browser">Choose a browser</label>
      <input list="browsers" id="browser" name="browser" />
      <datalist id="browsers">
        <option value="Internet Explorer" />
        <option value="Firefox" />
        <option value="Chrome" />
        <option value="Opera" />
        <option value="Safari" />
      </datalist>
      <select id="cars" name="cars">
        <option value="volvo">Volvo</option>
        <option value="saab">Saab</option>
        <option value="fiat">Fiat</option>
        <option value="audi">Audi</option>
      </select>
      <input type="radio" id="html" name="fav_language" value="HTML" />
      <label htmlFor="html">HTML</label>
      <input type="radio" id="css" name="fav_language" value="CSS" />
      <label htmlFor="css">CSS</label>
      <input type="checkbox" value="terms" id="terms" />
      <label htmlFor="terms">I agree to terms and conditions</label>
      <input type="checkbox" value="hiden" id="hidden" hidden />
      <label htmlFor="hidden" hidden>
        I am hidden
      </label>
      <button>Create</button>
    </form>
  );
}

function Users() {
  const users = [
    {
      id: 1,
      name: 'John Doe',
      skills: ['React', 'Node', 'MongoDB'],
    },
    {
      id: 2,
      name: 'Jane Doe',
      skills: ['NextJS', 'Go', 'MariaDB'],
    },
    {
      id: 3,
      name: 'Bob Smith',
      skills: ['Vue', 'Ruby', 'Postgres'],
    },
  ];
  return (
    <ul>
      {users.map((u) => (
        <li key={u.id}>
          <h2>{u.name}</h2>
          <div>
            Skills:
            <ul>
              {u.skills.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default function App() {
  return (
    <>
      <UserRegistration />
      <Users />
    </>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
