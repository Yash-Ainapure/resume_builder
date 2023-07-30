import './resDataDisplay.css';
function ResDataDisplay({name,education,skills,experience}){
   let counter=0;
   function handleClick(){
      counter++;  
      alert("button clicked "+counter+" times");
   }
   function handlePrint(){
      window.print();
   }
   function handleNewResume(){

   }
   return(
      <div className="resDataDisplay" >
         <div className="inner-header">Resume</div>
         <div className="inner">name:{name}</div>
         <div className="inner">education:{education}</div>
         <div className="inner">skills:{skills}</div>
         <div className="inner">experience:{experience}</div>
         <div className="inner-footer">
         <button className="button" onClick={handleClick}>Delete</button>
         <button className="button" onClick={handleClick}>Edit</button>
         <button className="button" onClick={handleNewResume}>New Resume</button>
         <button className="button" onClick={handlePrint}>Print</button>
         </div>
      </div>
   );
}
export default ResDataDisplay;