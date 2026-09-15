import axios from 'axios'

const App = () => {
  // Fetching API data using vanilla javascript
  // const getData = async () => {
  //   const response =  await fetch('https://jsonplaceholder.typicode.com/users')
  //   const data = await response.json()
  //   data.map((x)=>{
  //     console.log(x.name)
  //   })
  // }

  const getData = async () => {
    const {data} = await axios.get('https://jsonplaceholder.typicode.com/users')
    const response = await axios.get('https://jsonplaceholder.typicode.com/users')
    console.log(data)
    console.log(response.data)
    data.map((x) => {
      console.log(x.name)
    })
  }

  return (
    <div>
      <button onClick={getData}>Get Data</button>
    </div>
  )
}

export default App
