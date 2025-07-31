import React from "react";
import Card from './card';

const Team2 = ({robots}) => {

    const cardComponet = robots.map((robot, index) => {
        return( 
            <Card key={index} name={robot.name} email={robot.email} />);
    } );

    return (
        <div>{cardComponet}</div>
    )

}

export default Team2;