import axios from "axios"
import config from "../services/config" 
export async function login(email,password){
   try{  const url=`${config.server}/user/login`
    const body={email,password}
    const response=await axios.post(url,body)
    return response.data}
    catch(ex){
        console.log(ex)
        
    }

}
export async function register(firstName,lastname,email,password,mobile,birth){
   try{
     const url=`${config.server}`
    const body={firstName,lastname,email,password,mobile,birth}
    const response=await axios.post(url,body)
    return response.data
   }
   catch(ex){
    console.log(ex)
   }
}
