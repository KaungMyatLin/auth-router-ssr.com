import * as Yup from 'yup'
export function schemaValidation() {
    const schema = Yup.object({
        email: Yup.string().trim()
            .required("Required!")
            .email("Your email must be valid email addresss`")
            .length(15, "email must be less than ${length} characters in alpha numerical.")
        , password: Yup.string().trim()
            .required("Required!")
    })

    schema.validate({email: "w.om", password: "abc"})
    .catch( err => {
        console.log("schema.validate", err)
    })
    return schema
}