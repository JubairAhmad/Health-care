import { signInWithPopup } from '@firebase/auth';
import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Form } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../Hooks/useAuth';
// ../Hooks/useAuth

const LogIn = () => {
    const {AllContexts}=useAuth();
   const {toggleLogin,error,signInWithGoogle, setUser, setError, resgister, handleEmail,handlePassowrd,isLogin,handleResetPassword,handleNameChange}=AllContexts;

   const location=useLocation()
   const redirect=location?.state?.from;
   const history=useHistory()
   
    return (
        <div>
            <h2 className='col-sm-6 col-lg-6 mx-auto mb-5 mt-5  px-5'>Please <span style={{color:'rgb(7, 232, 248)'}}>{isLogin ? 'Login': 'Register'}</span> </h2>

            <div className='col-sm-6 col-lg-6 mx-auto  px-5'>
            <Form className='' onSubmit={resgister}>
                {!isLogin && <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control onBlur={handleNameChange}  type="text" placeholder="Enter your full name"/>

                </Form.Group>}
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control onBlur={handleEmail}  type="email" placeholder="Enter your email" required />
                    <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control onBlur={handlePassowrd} type="password" placeholder="Enter your Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check onChange={toggleLogin} type="checkbox" label="Already Register?" />
                </Form.Group>
                <Form.Text className="text-danger">
                            {error}
                </Form.Text> <br />
                <Button className="regis-btn" variant="primary" type="submit">
                    {isLogin? 'Login': 'Register'}
                </Button>
                <Button className='reset-btn ms-1' onClick={handleResetPassword} variant="primary" type="submit">
                    Reset Password
                </Button>
            </Form>
            </div>
                <br /><br />
           <div className='col-sm-6 col-lg-6 mx-auto  px-5 authen-btn'>
           <Button onClick={()=>{
               signInWithGoogle()
               .then(result=>{setUser(result.user)
                history.push(redirect)
               })
               .catch(error=>{
                   setError(error.message)
               })
           }} style={{borderRadius:"10px", marginRight:"3px" }} type="submit">Google SignIn</Button>
           
           </div>
        </div>
    );
};

export default LogIn;