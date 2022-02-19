import styled from 'styled-components';
import { breakpoints } from "../../Styles/breakpoints";

export const Container = styled.div`
    background-color: #F8F9FA;
    max-width: 730px;
    margin: auto;
    padding: 50px 20px;
    overflow: hidden;

    @media ${breakpoints.sm} {
        max-width: 730px;
        padding: 50px 65px;
    }
`;

export const TwoColumns = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;

    @media ${breakpoints.md} {
        flex-direction: row;
    }
`;

export const TableContainer = styled.div`
    overflow: auto;
`;

export const Table = styled.table`
    border: none;
    width: 600px;
    border-spacing: 0 15px;
    margin-bottom: 60px;

    @media ${breakpoints.sm} {
        width: 100%;
    }

    colgroup col:nth-child(1) {
        width: 25%;
    }
    colgroup col:nth-child(2) {
        width: 25%;
    }
    colgroup col:nth-child(3) {
        width: 30%;
    }
    colgroup col:nth-child(4) {
        width: 10%;
    }

    tr td:nth-child(1) {
        font-weight: bold;
        font-size: 14px;
    }
`;

export const ButtonContainer = styled.div`
    display: flex;
    justify-content: flex-end;
`;

export const Button = styled.button`
    background-color: #D5E4ED;
    font-size: 16px;
    border: none;
    border-radius: 14px;
    font-weight: bold;
    padding: 12px 28px;
    color: #6E818C;
    margin-left: 16px;
    cursor: pointer;
    white-space: nowrap;
`;