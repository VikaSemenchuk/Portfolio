import ThemeInitializer from './components/ThemeInitializer'
import ToastContainerEl from './components/ToastContainerEl'
import RoutesComponent from './router/RoutesComponent'

const App = () => {

  return (
    <div className='min-h-screen flex flex-col'>
      <ThemeInitializer />
      <ToastContainerEl />
      <RoutesComponent />
    </div>
  )
}

export default App;
