import * as Yup from 'yup'
export function schemaValidation() {
    const schema = Yup.object({
        email: Yup.string().trim()
            .required("Required!")
            .email("email must be valid.")
        , password: Yup.string().trim()
            .required("Required!")
    })

    schema.validate({email: "w.om", password: "abc"})
    .catch( err => {
        console.log("schema.validate", err)
    })
    return schema
}