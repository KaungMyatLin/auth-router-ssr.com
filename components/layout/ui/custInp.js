import { forwardRef, useRef, useImperativeHandle, useEffect } from "react"


const CustInp = forwardRef((props, ref) => {
    // const inpRef = useRef()
    // const focusInp= () => {
    //     inpRef.current.focus()
    // }
    // useEffect(() => {
    //     inpRef.current.focus()
    // }, [])
    // useImperativeHandle(ref, ()=> {
    //     return {
    //         focus: focusInp
    //     }
    // })
    const { type, id, required, field, form, children} = props;
    return (
        <input ref={ref} 
        >{children}</input>
    )
})

export default CustInp