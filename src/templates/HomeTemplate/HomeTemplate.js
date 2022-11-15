import { Fragment } from "react"
import { Route } from "react-router"
import Footer from "./Layout/Footer/Footer"
import Header from "./Layout/Header/Header"
import HomeCarousel from "./Layout/HomeCarousel/HomeCarousel"

export const HomeTemplate = (props) => { // props: path, exact, Component
    const {Component,...restProps} = props

    // propsRoute: props.location,props.history,props.match
    return <Route {...restProps} render={(propsRoute)=>{ 
        return <Fragment>

            <Header {...propsRoute} />
            <HomeCarousel {...propsRoute} />

            <Component {...propsRoute} />

            <hr className="mt-5"/>
            <Footer/>

        </Fragment>
    }}/>
}