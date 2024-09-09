

export default function AdminMain(){
    
    
    let x = localStorage.getItem('ID')
    

    const AddSpecies=(event1)=>{
        window.location.href = '/MakeAppointment'+x

    }
    const ViewSpecies=(event2)=>{
        window.location.href = '/PatientAppointments/'+x

    }


return(
<div>
<div divclassName="col-sm-6 mb-4 offset-md-1">
    <h1>Welcome</h1><br></br>
<div className="col-sm-6 mb-4 offset-md-1">
<button type="button" class="btn btn-dark" onClick={AddSpecies}>Add New Species</button>&emsp;&emsp;&emsp;&emsp;&emsp;
<button type="button" class="btn btn-light" onClick={ViewSpecies}>View Existing Species</button>;

</div>
</div>
</div>
);

}