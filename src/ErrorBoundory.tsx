import  React, { ReactElement, ReactNode } from "react";
/// ==> esta clase es para atrapar los errorres y exponer un UI o algo asi para generar la aplicacion
/// ==> sin embargo para usar esto elementos se tiene que hacer atrapando los elemento dentro de un componente
export default class ErrorBoundary extends
 React.Component<errorBoundaryProps,errorBoundaryState>
{
    constructor(props:any)
    {
        super(props)
        this.state={IsError:false,msg:''}
    }

    componentDidCatch(error: any, errorInfo:any)
    {
        console.log("Exception/Error Catch!!!")
        console.error('error: ',error)
        console.info('Error Info: ', errorInfo)
        console.log(" End To Exception Catch ====")
    }

    static getDerivedStateFormError(error:any)
    {
        console.log(error)
        return(
        {
            IsError:true,
            msg:error
        })
    }

    rende() {
        if(this.state.IsError)
        {
            if(this.props.errorUI)
            {
                return this.props.errorUI
            }
            else
            {
                return (
                    <>
                        <h3>
                            {this.state.msg}
                        </h3>
                    </>
                )
            }
        }
        return this.props.children;
    }
}

interface errorBoundaryState
{
    IsError:boolean,
    msg:string,
} 

interface errorBoundaryProps
{
    errorUI?: ReactElement,
    children?: ReactNode
}