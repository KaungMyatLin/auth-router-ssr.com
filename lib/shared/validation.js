import * as Yup from 'yup'
export function schemaValidation() {
    const schema = Yup.object({
        email: Yup.string().trim()
            .email("Your email must be valid email addresss`")
            .required("Required")
            .length(15, "email must be less than ${length} characters in alpha numerical.")
        , password: Yup.string().trim()
            .required("Required")
    })
}