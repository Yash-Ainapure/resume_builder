import './AddResume.css';
import {useState} from 'react';
function AddResume({createResumeMedium}){

   const [resume,setResume]=useState({
      name:'',
      experience:'',
      education: ['12th passed'],
      skills: ['c', 'c++']
   });
   function createResume(e){
      e.preventDefault();
      createResumeMedium(resume);
   }
   function handleChange(e){
      console.log(e.target.name,e.target.value);
      setResume({...resume,[e.target.name]:e.target.value});
   }
   return(
      <div className="AddResume">
         <form>
            <input type="text" value={resume.name} onChange={handleChange} name="name" placeholder="name"></input>
            <input type="text" value={resume.experience} onChange={handleChange} name="experience" placeholder="experience"></input>

            <button onClick={createResume}>Create</button>
         </form>
      </div>
   )
}
export default AddResume;