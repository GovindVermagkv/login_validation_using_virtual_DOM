
import './App.css';
import {useState} from "react"

function App() {
const [formdata,SetformData]=useState({
  "Name":"",
  "Email":"",
  "Password":"",
  "Phone":"",
  "date":"",
  "image":"https://media-exp1.licdn.com/dms/image/C5603AQHEVOygiaMHJA/profile-displayphoto-shrink_800_800/0/1631068825613?e=1671062400&v=beta&t=fqmR4uxssRnKs9WzEPqpOGKS1O_Vl3v44AMwPoTYdTA"
})

const handleChange=(e)=>{
e.preventDefault()
console.log(e.target.value);
const {name,value}=e.target

SetformData({...formdata,[name]:value})
}

const[isSubmit,setIsSubmit]=useState(false)

const handleSubmit=(e)=>{
  e.preventDefault()
  if(formdata.Name.length <=3 || formdata.Password.length <=5 ){
    setIsSubmit(false)
    alert("password must be > 5 and name length >3")
  }
  else{
    setIsSubmit(true)
  }
  
}


  return (
    <>{isSubmit ? <div id='profile'>
    <img src={formdata.image} alt="" id='img'/>
    <div id='div2'>
   <div> <h1><span>Name :</span> {formdata.Name}</h1>
    <h1><span>DOB :</span> {formdata.date}</h1>
    <h1><span>Email :</span>{formdata.Email}</h1></div>
    </div>
    </div> : <div id='main'>
      <h1>Validation </h1>
    <form>
    
    <div id='inputdiv'>
    <div>
      <lable htmlFor="Name" >Name</lable><br></br>
      <input onChange={handleChange} type="text" name="Name" id="Name" value={formdata.Name} />
    </div>
    <div>
      <lable htmlFor="Email" >Phone Number</lable><br></br>
      <input onChange={handleChange} type="number" name="Phone" id="phone" value={formdata.Phone} />
    </div>
    <div>
      <lable htmlFor="Email" >Email</lable><br></br>
      <input onChange={handleChange} type="email" name="Email" id="email" value={formdata.Email} />
    </div>
    <div>
      <lable htmlFor="Email" >DOB</lable><br></br>
      <input onChange={handleChange} type="date" name="date" id="date" value={formdata.date} />
    </div>

    <div>
      <lable htmlFor="Password" >Password</lable><br></br>
      <input onChange={handleChange} type="password" name="Password" id="password" value={formdata.Password} />
    </div><br></br>
    <button type="submit" onClick={handleSubmit} id="submit">Submit</button>
    </div>
    </form>
    </div>
    }
   </> 
   


  )
}

export default App;
