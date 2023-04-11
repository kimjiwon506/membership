import { Form } from 'components/form/Form';
import React, { useState } from 'react';

function JoinView() {
    return (
        <Form.Root action="">
            <Form.Field>
                <Form.Label>라벨테스트</Form.Label>
                <Form.Control type="text"></Form.Control>
            </Form.Field>
        </Form.Root>
    );
}

export default JoinView;