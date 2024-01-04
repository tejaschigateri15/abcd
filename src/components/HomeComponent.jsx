
import { Outlet } from 'react-router-dom'
import Nav from './Nav'

export default function Home() {

  return (
    <div>
        <Nav/>        
        <Outlet/>
    </div>
  )
}
