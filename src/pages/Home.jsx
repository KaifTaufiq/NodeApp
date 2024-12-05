import React from 'react'
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
const Home = () => {
  return (
    <div className='flex flex-col items-center gap-2'>
    Wordpress Headless React JS Site
    <Link to="/login"><Button>Login Page</Button></Link>
    </div>
    
  )
}

export default Home