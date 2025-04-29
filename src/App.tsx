import ToastContainerEl from './components/ToastContainerEl'
import RoutesComponent from './router/RoutesComponent'

const App = () => {

  return (
    <div className='min-h-screen flex flex-col'>
      <ToastContainerEl />
      <RoutesComponent />
    </div>
  )
}

export default App;
