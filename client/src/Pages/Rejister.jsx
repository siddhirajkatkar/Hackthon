import { useState } from "react"

function Register(){

    const [firstname,setfirstName]=useState('')
    const [email, setEmail] = useState('')
    // const [password, setPassword] = useState('')
    const [mobile, setmobile] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [birth,setBirth]=useState("")
      if (firstName.length == 0) {
      toast.warning('please enter first name')
    } else if (lastName.length == 0) {
      toast.warning('please enter last name')
    } else if (email.length == 0) {
      toast.warning('please enter email')
    } else if (phone.length == 0) {
      toast.warning('please enter phone number')
    } else if (password.length == 0) {
      toast.warning('please enter password')
    } else if (confirmPassword.length == 0) {
      toast.warning('please confirm password')
    } else if (password != confirmPassword) {
      toast.warning('password does not match')
    } else {
      const response = await register(
        firstName,
        lastName,
        email,
        password,
        phone
      )

    return(
        <section>
           
            <div className="container">
                <div>
                    <label htmlFor="firstname">first</label>
                    <input type="text" id="first" required />
                    <label htmlFor="lastname">last</label>
                    <input type="text" required />

                </div>
                <div>
                    <label htmlFor="">Email</label>
                    <input type="text" id="Last" placeholder="email@" />
                </div>
                <div>
                    <label htmlFor="">MObile Number</label>
                    <input type="number" id="mobile" />
                </div>
                  <div>
                    <label htmlFor="">birth date</label>
                    <input type="date" id="birth" />
                </div>
                  <div>
                    <label htmlFor="">Password</label>
                    <input type="text" id="password" />
                </div>
                 <div>
                    <label htmlFor="" id="cPassword">Confirm Password</label>
                    <input type="text" />
                </div>
                <div>
                    <input type="submit" /> signup
                </div>

            </div>
            
        </section>
    )

}
export default Register