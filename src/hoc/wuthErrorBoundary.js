import React from 'react'

export const withErrorBoundary = (Component) =>{
    class boundariedComponent extends React.Component{
        constructor(props)
         {  super(props)
            this.state = { hasError: false };
          }

        static getDerivedStateFromError(error) {
            return { hasError: true };
          }
render(){
    if (this.state.hasError) {
        return <h1>Что-то пошло не так.</h1>;
    }
return (<Component {...this.props}/>)}
}
return boundariedComponent
}
