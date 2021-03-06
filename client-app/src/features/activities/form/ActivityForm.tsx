import React, { ChangeEvent, useState } from 'react';
import { Button, Form, FormGroup, /*Segment,*/ SegmentGroup } from 'semantic-ui-react';
import { Activity } from '../../../app/models/activity';

interface Props {
    activity: Activity | undefined;
    closeForm: () => void;
    createOrEdit: (activity: Activity) => void;
}

export default function ActivityForm({activity: selectedActivity, closeForm, createOrEdit}: Props) {

    const initialState = selectedActivity ?? {
        id: '',
        fotoName: '',
        suksesetTitle: '',
        suksesetDescription: '',
      
    }

    const [activity, setActivity] = useState(initialState);

    function handleSubmit() {
        createOrEdit(activity);
    }

    function handleInputChange(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        const {name, value} = event.target;
        setActivity({...activity, [name]: value})
    }

    return (
        
        <SegmentGroup clearing>
            <FormGroup onSubmit={handleSubmit} autoComplete='off'>
                <Form.Input placeholder='Title' value={activity.fotoName} name='title' onChange={handleInputChange} />
                <Form.TextArea placeholder='suksesetTitle' value={activity.suksesetTitle} name='description' onChange={handleInputChange} />
               
                <Form.Input placeholder='Date' value={activity.suksesetDescription} name='date' onChange={handleInputChange} />
                <Button floated='right' positive type='submit' content='Submit' />
                <Button onClick={closeForm} floated='right' type='button' content='Cancel' />
            </FormGroup>
        </SegmentGroup>
    )
} 