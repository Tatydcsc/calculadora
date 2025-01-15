import styled from 'styled-components';

export const InputContainer = styled.div`
    width: 100%;
    height: 75px;
    background-color: rgb(120, 212, 235);

    display: flex;
    align-items: center;
    justify-content: flex-end;

    font-size: 24px;
    font-family: 'Roboto';

    input {
        width: 100%;
        height: 75px;
        background-color: rgb(102, 215, 243);
        border: none; 
        outline: none; 
        padding: 0 10px;
        font-size: 40px;
        font-family: 'Roboto';
        color:rgb(20, 42, 238);
        text-align: right; 
    }
`;
