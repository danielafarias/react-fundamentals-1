import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
  const inputRef = React.useRef();

  function handleSubmit(event) {
    event.preventDefault()

    onSubmitUsername(inputRef.current.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor='usernameInput'>Username:</label>
        <input type="text" id="usernameInput" name="usernameInput" ref={inputRef}/>
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
