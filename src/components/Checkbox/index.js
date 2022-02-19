import {
    FormGroup,
    Label,
    Checkbox
} from './styles';
import PropTypes from 'prop-types';

export default function CheckboxComponent(props) {
  return (
    <FormGroup>
        <Checkbox type={props.type} id={props.id} name={props.name} value={props.value} />
        <Label htmlFor={props.id}>{props.label}</Label>
    </FormGroup>
  )
};

Checkbox.propTypes = {
    type: PropTypes.string,
    id: PropTypes.string,
    name: PropTypes.string,
    value: PropTypes.string
}
