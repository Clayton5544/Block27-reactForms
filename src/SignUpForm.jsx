
/*const SignUpForm = () => {

    async function handleSubmit(event) {
        event.preventDefault();
        
        try {
        } catch (error) {
          setError(error.message);
        }
      }
    }

    return (
    
    <section>

    <h2>Sign Up!</h2>
    {error && <p>{error}</p>}

<form onSubmit={handleSubmit}>

    <label>Username</label>
    <input username='username' onChange={(event) => (event.target.value)}></input>
    <br>
    </br>
    <label>Password</label>
    <input password='password' onChange={(event) => (event.target.value)}></input>
    <button>Submit</button>

</form>
    </section>

)

  
  export default SignUpForm;
  */
  import { useState } from "react";

  export default function SignUpForm() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
  
    async function handleSubmit(event) {
      event.preventDefault();
  
      try {
        await fetch (`https://fsa-jwt-practice.herokuapp.com/signup`);
        const responce = await JSON.data
        console.log(responce)
      } catch (error) {
        setError(error.message);
      }
    }
  
    return (
      <>
              <h2>Sign Up</h2>
              {error && <p>{error}</p>}
              
        <form onSubmit={handleSubmit}>
                  
          <label>
          <br>
        </br> 
                      Username:           
            <input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
                    
          </label>
          <br>
        </br> 
         
                  
          <label>
                      Password: 
                                
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
                              
          </label>
                  <button>Submit</button>
                
        </form>
            
      </>
    )
};