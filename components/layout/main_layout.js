import TopNavigation from './topNavigation'

const MainLayout = (props) => {
    return (
        <>
            <TopNavigation />
            <main>{props.children}</main>
        </>
    )
}
export default MainLayout