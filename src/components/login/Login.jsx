import React, { useState } from 'react';
import "./login.css";

const Login = () => {
    
    const [avatar, setAvatar] = useState({
        file: null,
        url: "",
      });

    const handleAvatar = (e) => {
        if (e.target.files[0]) {
          setAvatar({
            file: e.target.files[0],
            url: URL.createObjectURL(e.target.files[0]),
          });
        }
      };
      const handleLogin = async (e) => {
        e.preventDefault();
        setLoading(true);
    
        const formData = new FormData(e.target);
        const { email, password } = Object.fromEntries(formData);
    
        try {
          await signInWithEmailAndPassword(auth, email, password);
        } catch (err) {
          console.log(err);
          toast.error(err.message);
        } finally {
          setLoading(false);
        }
      };
    return (
        <div className="login">
        <div className="item">
          <h2>Welcome back,</h2>
          <form>
            <input type="text" placeholder="Email" name="email" />
            <input type="password" placeholder="Password" name="password" />
            <button>Log In</button>
          </form>
        </div>
        <div className="separator"></div>
        <div className="item">
          <h2>Create an Account</h2>
          <form>
            <label htmlFor="file">
              <img src={avatar.url || "./avatar.png"} alt="" />
              Upload an image
            </label>
            <input
              type="file"
              id="file"
              style={{ display: "none" }}
              onChange={handleAvatar}
            />
            <input type="text" placeholder="Username" name="username" />
            <input type="text" placeholder="Email" name="email" />
            <input type="password" placeholder="Password" name="password" />
            <button>Sign Up</button>
          </form>
        </div>
      </div>
    );
}

export default Login;
