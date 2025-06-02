import {RoutesComponent} from '@/router'
import { ThemeInitializer, ToastContainerEl } from '@/components'

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
