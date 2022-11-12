import { waitForElementToBeRemoved } from '@testing-library/react';
import React from 'react'
import { Card, ListGroup } from 'react-bootstrap';

const Child2 = ({data, deleteData}) => {

    // const testList = [];
    // testList.map();

    return (
        <div>
            <h1>자식2</h1>
            <Card style={{ width: '18rem' }}>
            <Card.Header>할 일 목록</Card.Header>
            <ListGroup variant="flush">
                {data.map((todo, index) => {  // map: 데이터를 태그로 만들어줌
                    return (<ListGroup.Item key={index}>
                        {todo} <button onClick={() => deleteData(index)}>삭제</button>
                        </ListGroup.Item>
                    );
                })}
            </ListGroup>
            </Card>
        </div>
    );
};

export default Child2