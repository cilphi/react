import Spinner from 'react-bootstrap/Spinner';

export const loaderOn = (Component) => {
    function Loader(props) {
    if(props.items.lenght < 1) {
    return (
            <Spinner animation="border" role="status" variant="warning" >
                <span className="visually-hidden">Cargando...</span>
            </Spinner>
    )}
    return (
        <Component {... props }/>
    )
    }
    return Loader
}




// export const withLoading = (Component) => {
//     function ComponentWithLoading (props) {
//         if (props.items.length < 1) {
//             return <div>Cargando...</div>
//     }
//     return <Spinner {...props} />
//     }
//     return ComponentWithLoading
// }