import TopNavigation from './topNavigation'
import classes from './main_layout.module.css'

const DefaultSiteLayout = (props) => {
    return (
        <>
            <TopNavigation ctxprop={props.ctxprop}/>
            <main className={classes.main}>{props.children}</main>
        </>
    )
}
export default DefaultSiteLayout