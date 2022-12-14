import { forwardRef, useRef, useImperativeHandle, useEffect } from "react"


const CustInp = forwardRef((props, ref) => {
    const inpRef = useRef()

    const focusInp= () => {
        inpRef.current.focus()
    }
    // useEffect(() => {
    //     inpRef.current.focus()
    // }, [])

    return (
        <input ref={inpRef} {...props}>{props.children}</input>
    )
})

export default CustInp