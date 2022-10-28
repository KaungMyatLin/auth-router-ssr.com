const simpleErrMsg = (el) => {
    return ({childrenProp, classNameProp}) => {
        return <el name="errorMessageDiv" {...childrenProp} {...classNameProp} />
    }
}

const simpleDiv = (props) => {
    return <div 
    // className='formSimpleErrMsgDiv' Not running as module.css file not works in others, and not working from global.css.
    >{props.children}</div>
}

export default simpleErrMsg(simpleDiv)