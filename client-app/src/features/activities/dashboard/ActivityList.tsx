import React from 'react';
import { Button, Item, /*ItemContent,*/ ItemGroup, Label,/* Segment,*/ SegmentGroup } from 'semantic-ui-react';
import { Activity } from '../../../app/models/activity';

interface Props {
    activities: Activity[];
    selectActivity: (id: string) => void;
    deleteActivity: (id: string) => void;
}

export default function ActivityList({ activities, selectActivity, deleteActivity }: Props) {
    return (
        <SegmentGroup>
        
            <Item.Group divided>
                {activities.map(activity => (
                    <ItemGroup key={activity.id}>
                        <Item.Content>
                            <Item.Header as='a'>{activity.fotoName}</Item.Header>
                            <Item.Meta>{activity.suksesetTitle}</Item.Meta>
                            <Item.Description>
                                <div>{activity.suksesetDescription}</div>
                                
                            </Item.Description>
                            <Item.Extra>
                                <Button onClick={() => selectActivity(activity.id)} floated='right' content='View' color='blue' />
                                <Button onClick={() => deleteActivity(activity.id)} floated='right' content='Delete' color='red' />
                                <Label basic content={activity.fotoName} />
                            </Item.Extra>
                        </Item.Content>
                    </ItemGroup>
                ))}
            </Item.Group>
        
        </SegmentGroup>
    )
}