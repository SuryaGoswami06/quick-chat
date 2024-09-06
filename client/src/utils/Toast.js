import {toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const toastify = (status,message)=>{
    toast[status](message,{
        position: "top-center",
        autoClose: 4000,
    })
}
export default toastify;