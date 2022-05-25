import React from 'react'
import { getProviders, signIn} from "next-auth/react"

function Login({providers}) {
  return (
    <div>
        <img className='w-52 mb-5' src='https://links.papareact.com/9xl' alt=''/>
    </div>
  )
}

export default Login;

//anytime someone comes to login page, make sure to get latest providers, render out the page on the server and deliver to client
export async function getServerSideProps() {
  const providers = await getProviders();
  
  return {
    props: {
      providers,

    }
  }
}