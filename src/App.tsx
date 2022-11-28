import image from "./assets/react.svg"
import Card from "./Card"

function App() {
  return (
    <div className='flex mx-auto m-auto flex-col flex-wrap sm:flex-row'>
      <Card image={image} />
      <Card image={image} />
      <Card image={image} />
    </div>
  )
}

export default App
