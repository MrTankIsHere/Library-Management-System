import React from 'react'

const Login = () => {
  return (
    <div id="login">
        
        <h1>
            Login to BunnyBoook
        </h1>

        <div>

            <div>

                <form className="flex flex-col gap-5">
                    <input type="text" name="email" placeholder="demo@gmail.com" />
                    <input type="password" name="password" placeholder="Enter Your Password" />
                    <a href="">forgot password ?</a>
                    <button 
                        className=""
                        type="submit">
                        Submit
                    </button>
                    <p>Don't have an account ? <a href=""> Sign Up </a> </p>
                </form>

            </div>

        </div>

    </div>
  )
}

export default Login