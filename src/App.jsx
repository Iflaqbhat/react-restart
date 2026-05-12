import React from 'react'

function Button({ text, handleClick }) {
  return (
    <button onClick={handleClick}>
      {text}
    </button>
  );
}

const App = () => {

  // Task 1
  function showAlert() {
    alert("Hello from App component");
  }

  // Task 2
  function login() {
    alert("User Logged In");
  }

  function logout() {
    alert("User Logged Out");
  }

  // Task 3
  function deleteUser(id) {
    alert(`Deleting user with id: ${id}`);
  }

  return (
    <div>

      {/* Task 1 */}
      <Button
        text="Show Alert"
        handleClick={showAlert}
      />

      <br />
      <br />

      {/* Task 2 */}
      <Button
        text="Login"
        handleClick={login}
      />

      <Button
        text="Logout"
        handleClick={logout}
      />

      <br />
      <br />

      {/* Task 3 */}
      <Button
        text="Delete User"
        handleClick={() => deleteUser(5)}
      />

    </div>
  );
}

export default App;