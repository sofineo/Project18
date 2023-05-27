import { Routes, Route } from 'react-router-dom'  
import { CreateMovieNote } from '../pages/CreateMovieNote'
import { Home } from '../pages/Home'
import { MoviePreview } from '../pages/MoviePreview'
import { Profile } from '../pages/Profile'

export function AppRoutes(){
  return(
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/new" element={<CreateMovieNote/>}/>
      <Route path="/profile" element={<Profile/>}/>
      <Route path="/preview/:id" element={<MoviePreview/>}/>
    </Routes>
  )
}