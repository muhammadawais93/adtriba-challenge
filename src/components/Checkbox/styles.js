import styled from 'styled-components';

export const FormGroup = styled.div`
    display: flex;
    justify-content: center;
`;

export const Label = styled.label`
    position: relative;
    cursor: pointer;

    &:before {
        content:'';
        -webkit-appearance: none;
        background-color: #D5E4ED;
        padding: 21px;
        border-radius: 14px;
        display: inline-block;
        position: relative;
        vertical-align: middle;
        cursor: pointer;
        margin-right: 5px;
    }
`;

export const Checkbox = styled.input`
    display: none;

    &:checked + label:after {
        content: '';
        display: block;
        position: absolute;
        top: 5px;
        left: 15px;
        width: 12px;
        height: 26px;
        border: solid #6E818C;
        border-width: 0 3px 3px 0;
        transform: rotate(45deg);
    }
`;