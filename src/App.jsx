import './App.css'
import { Route, Routes } from "react-router-dom"
import { Layout } from "./layout/layout"
import { HomePage } from "./pages/homePage"
import {NextPage} from "./pages/NextPages"

import MovieDetails from './Components/movie-details'

function App() {


  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/next-pagessssss" element={<NextPage />} exact />
          <Route path="/details/:id" element={<MovieDetails />} />
        </Route>
      </Routes>
      
    </>
  )
}

export default App
