import React from 'react';
import { Button, Card, /*Image,*/ ImageGroup } from 'semantic-ui-react';
import { Activity } from '../../../app/models/activity';

interface Props {
    activity: Activity;
    cancelSelectActivity: () => void;
    openForm: (id: string) => void;
}

export default function ActivityDetails({ activity, cancelSelectActivity, openForm }: Props) {
    return (
        <Card fluid>
            
            <ImageGroup src={`/assets/categoryImages/${activity.fotoName}.jpg`} />
            <Card.Content>
                <Card.Header>{activity.fotoName}</Card.Header>
                <Card.Meta>
                    {activity.suksesetTitle}
                </Card.Meta>
                <Card.Description>
                    {activity.suksesetDescription}
                </Card.Description>
            </Card.Content>
            <Card.Content extra>
                <Button.Group widths='2'>
                    <Button onClick={() => openForm(activity.id)} basic color='blue' content='Edit' />
                    <Button onClick={cancelSelectActivity} basic color='grey' content='Cancel' />
                </Button.Group>
            </Card.Content>
        </Card>
    )
}