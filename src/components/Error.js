const Error = ({error}) =>{
    return(
        <h3 className='text-danger'><i className="bi bi-exclamation-triangle-fill me-2"></i>{error}</h3>
    )
}
export default Error;