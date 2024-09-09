import AdminNavBar from "./NavBar";

export default function AdminMain(){
    
    
    
    

    const AddSpecies=(event1)=>{
        window.location.href = '/AddSpecies'

    }
    const ViewSpecies=(event2)=>{
        window.location.href = '/SpeciesInfo'

    }


return(
<div>
    <AdminNavBar/>
<div className="col-sm-10 mb-4 offset-md-1">
    <h1 className="mt-4">Welcome</h1><br></br>
<div className="col-sm-6 mb-4 offset-md-1">
<button type="button" class="btn btn-dark" onClick={AddSpecies}>Add New Species</button>&emsp;&emsp;&emsp;&emsp;&emsp;
<button type="button" class="btn btn-info" onClick={ViewSpecies}>View Existing Species</button>

</div>
</div>
</div>
);

}