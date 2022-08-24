import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)

export const DefaultSwal = (title,message,type) =>{
    MySwal.fire({
        title: <strong>{title}</strong>,
        html: <i>{message}</i>,
        icon: `${type}`
      })
}


