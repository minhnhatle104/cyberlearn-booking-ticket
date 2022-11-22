import { Fragment } from "react"
import { Route,Redirect } from "react-router-dom"
import { USER_LOGIN } from "../../util/settings/config"

const CheckoutTemplate = (props) => { // props: path, exact, Component
    const {Component,...restProps} = props

    if(!localStorage.getItem(USER_LOGIN)){
        return <Redirect to="/login"/>
    }

    // propsRoute: props.location,props.history,props.match
    return <Route {...restProps} render={(propsRoute)=>{ 
        return <Fragment>
            <Component {...propsRoute} />
        </Fragment>
    }}/>
}

export default CheckoutTemplate