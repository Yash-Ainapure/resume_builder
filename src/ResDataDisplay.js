import './resDataDisplay.css';
function ResDataDisplay({keyy,name,education,skills,experience,deleteResumeMedium}){
   function handleDelete(){
      console.log("call from handleDelete");
      deleteResumeMedium(name);
   }
   function handleEdit(){      

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
         <button className="button" onClick={handleDelete}>Delete</button>
         <button className="button" onClick={handleEdit}>Edit</button>
         <button className="button" onClick={handleNewResume}>New Resume</button>
         <button className="button" onClick={handlePrint}>Print</button>
         </div>
      </div>
   );
}
export default ResDataDisplay;