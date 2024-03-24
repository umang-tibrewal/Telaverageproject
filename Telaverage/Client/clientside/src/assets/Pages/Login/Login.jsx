


const Login = () => {
  const Twitter = () => {
    window.open("http://localhost:5000", "_self");
  };

  

  return (
    <div className="login">
      <h className="loginTitle">Choose a Login Method</h>
      <div className="wrapper">
        <div className="left">
          <div className="loginButton google" onClick={Twitter}>
         
            Twitter
          </div>
        
        </div>
       
       
      </div>
    </div>
  );
};

export default Login;