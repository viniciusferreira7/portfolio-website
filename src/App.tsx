import { NavBar } from './components/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css'

import './App.css'
import { Banner } from './components/Banner'
import { Skills } from './components/Skills'

export function App() {
  return (
    <>
      <NavBar />
      <Banner />
      <Skills />
    </>
  )
}
