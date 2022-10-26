const simpleErrMsg = (el) => {
    return props => {
        console.log("props: ", props)
        return <el name="errorMessageDiv" {...props} />
    }
}

const simpleDiv = (props) => {
    return <div 
    // className='formSimpleErrMsgDiv' Not running as module.css file not works in others, and not working from global.css.
    >{props.children}</div>
}

export default simpleErrMsg(simpleDiv)