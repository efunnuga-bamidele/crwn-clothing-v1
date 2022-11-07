//styles
import {FormInputLabel, Input, Group} from './form-input.styles.jsx'

//made use of a spread operator to duplicate input properties
const FormInput = ({ label, ...otherProps}) => {
    return(
        <Group>
        <Input {...otherProps} />
            {label && (
                <FormInputLabel shrink ={otherProps.value.length}>
                    {label}
                </FormInputLabel>
            )}
            
        </Group>
    )
}

export default FormInput;