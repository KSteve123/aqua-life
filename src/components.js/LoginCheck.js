export default function UserCheck() {
let x = localStorage.getItem('ID');
    if (x==="null") {
        window.location.href = '/AdminLogin'
        
    }
}