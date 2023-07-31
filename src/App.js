import AddResume from './AddResume';
import './App.css';
import ResDataDisplay from './ResDataDisplay';
import resumeDB from './resumeData';
import { useState } from 'react';
function App() {
  console.log("App");
  const [resumeData, setResumeData] = useState(resumeDB);

  function deleteResume(userName){
    console.log("call from deleteResume by : "+userName);
    setResumeData(resumeData.filter(item => item.name !== userName));
  }
  function createResume(data) {
    console.log(resumeData); 
    setResumeData([...resumeData,{key:resumeData.length+1,...data}]);
  }
  return (
    <div className="App">
      <div className="header">Resume Builder</div>
      {
        resumeData.map(res => <ResDataDisplay //resume displayer
          deleteResumeMedium={deleteResume}
          //keyy={res.key?res.key:"not mentioned"}
          name={res.name ? res.name : "not mentioned"}
          experience={res.experience ? res.experience : "not mentioned"}
          education={res.education ? res.education : "not mentioned"}
          skills={res.skills ? res.skills : "not mentioned"}>
        </ResDataDisplay>)
      }
      <AddResume createResumeMedium={createResume}></AddResume>
    </div>
  );
}

export default App;
