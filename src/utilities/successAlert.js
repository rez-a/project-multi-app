import Swal from "sweetalert2";

const successAlert = (text) =>{
    Swal.fire({
        icon: 'success',
        title: 'ok',
        text,
      })
}
export default successAlert;