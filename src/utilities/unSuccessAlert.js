import Swal from "sweetalert2";

const unSuccessAlert = (text) =>{
    Swal.fire({
        icon: 'error',
        title: 'error',
        text,
      })
}
export default unSuccessAlert;