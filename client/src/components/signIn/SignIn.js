import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SignIn() {

    const [formData, setFormData] = useState({ name: '', sname: '', password: '', email: '' })
    const { name, sname, email, password } = formData;
    const navigate = useNavigate()
    const handleLogin = () => {
        if (!name || !password) {
            console.log('All field are required')
        }
        else if (name === "sheila" && sname === "carah" && email === "sheilac@gmail.com" && password === "test1") {
            navigate('/');
        }
        else {
            console.error('Error:Invalid credentials')
        }
    }

    return (
        <div class="d-flex d-md-flex justify-content-md-centre">
            <form class="p-5 mt-3">
                <div class="row">
                    <div class="col-md-6">
                        <input type="text" class="form-control" placeholder="First name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
                    </div>
                    <div class="col-md-6">
                        <input type="text" class="form-control" placeholder="Last name" aria-label="Last name" value={formData.sname} onChange={(e) => setFormData({ ...formData, sname: e.target.value })} />
                    </div>
                </div>
                <div class="col-md-12">
                    <input type="text" class="form-control" placeholder="Email address" aria-label="Email address" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
                </div>
                <div class="col-md-12">
                    <input type="password" class="form-control" name="password" id="pwd" placeholder="Password" value={formData.password} onChange={
                        (e) => setFormData({ ...formData, password: e.target.value })
                    } />
                </div><br></br>
                <div>
                    <button type="button" class="btn btn-primary" onClick={(e) => { e.preventDefault(); handleLogin() }} >Sign In</button>
                </div>
            </form>
        </div>
    )
}
export default SignIn;