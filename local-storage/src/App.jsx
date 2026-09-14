import React from 'react'

const App = () => {
  localStorage.setItem('user','Mizan')
  localStorage.setItem('address', 'Sirajganj')
  localStorage.setItem('email', 'mizanurcse12@gmail.com')

  console.log(localStorage.getItem('user'))
  console.log(localStorage.getItem('email'))
  console.log(localStorage.getItem('address'))

  // localStorage.removeItem('email')
  // localStorage.clear()

  const userInfo = {
    'name': 'Mizan',
    'age': 29,
    'address': 'Sirajganj',
    'posting': 'Dhaka'
  }
  localStorage.setItem('userInfo',JSON.stringify(userInfo)) // To convert from object to string
  const userPrintInfo = localStorage.getItem('userInfo')
  console.log(JSON.parse(userPrintInfo)) // To convert from string to object
  return (
    <div>
      <h1>Hello</h1>
    </div>
  )
}

export default App
