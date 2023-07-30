import './App.css';
import ResDataDisplay from './ResDataDisplay';
import { resumeData } from './resumeData';
function App() {
  return (
    <div className="App">
      <div className="header">Resume Builder</div>
      {
        resumeData.map(res => <ResDataDisplay
          name={res.name ? res.name : "not mentioned"}
          experience={res.experience ? res.experience : "not mentioned"}
          education={res.education ? res.education : "not mentioned"}
          skills={res.skills ? res.skills : "not mentioned"}>
        </ResDataDisplay>)
      }
      <ResDataDisplay></ResDataDisplay>
    </div>
  );
}

export default App;
