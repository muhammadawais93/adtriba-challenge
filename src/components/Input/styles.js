import styled from 'styled-components';

export const FormGroup = styled.div`
    margin-bottom: ${props => props.noMargin ? '' : '30px'};
`;

export const Label = styled.label`
    font-weight: bold;
`;

export const Input = styled.input`
    width: 100%;
    height: 42px;
    border: none;
    border-radius: 14px;
    background-color: #D5E4ED;
    font-size: 18px;
    padding: 0 10px;
    margin-top: ${props => props.noMargin ? '' : '16px'};
    color: #6E818C;
`;