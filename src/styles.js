import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    backgroud-color: #FAFAFA;

    display: flex;
    justify-content: center;
    align-items:center ;
`;

export const Content = styled.div`
    background-color: #FFFFFF;
    width: 80%;
    //min-height: 350px;
`;

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const Col = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`;