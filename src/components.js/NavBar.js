export default function AdminNavBar() {

    let x = localStorage.getItem('ID');
    if (x==="null") {
        window.location.href = '/'
        
    }
    
    const ViewSpecies=(event2)=>{
        window.location.href = '/SpeciesInfo'

    }

    const AdminMain=(event)=>{
        window.location.href = '/AdminMain'

    }

    const AddSpecies=(event3)=>{
        window.location.href = '/AddSpecies'

    }
    const Logout=(event3)=>{
        localStorage.setItem('ID',null)
        window.location.href = '/'

    }

return(
    <nav class="navbar navbar-expand-lg navbar navbar-dark bg-dark">
  <a class="navbar-brand" href="#">Aqua Life</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarText">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" onClick={AdminMain}>Main</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" onClick={ViewSpecies}>View Species</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" onClick={AddSpecies}>Add Fishes</a>
      </li>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
      <li>
      <a class="nav-link" onClick={Logout} align="right">Logout</a>
      </li>
    </ul>
  </div>
</nav>
)

}