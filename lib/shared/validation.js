import * as Yup from 'yup'
export function schemaValidation() {
    const schema = Yup.object({
        email: Yup.string().trim()
            .required("Required!")
            .email("email must be valid.")
        , password: Yup.string().trim()
            .required("Required!").min(1)
        // , passwordConfirmation: Yup.string()
        //    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    })

    // schema.validate({email: "w@c.com", password: "abc"})
    // .catch( err => {
    //     console.log("ignore this, testing own schema validation in my validation cmpnt:", err)
    // })
    return schema
}