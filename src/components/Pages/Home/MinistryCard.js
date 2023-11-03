import React from "react";
import { useState } from "react";
import MinistryCardlist from "./MinistryCardlist";
import './MinistryCard.css';

const MinistryCard = () => {

    const [mcards, setMCards] = useState([
        {title: 'The Couch', body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, nostrum. Voluptas alias voluptatem nobis quisquam consequatur dolorum, quis modi repudiandae totam maxime ea rerum, rem necessitatibus nesciunt tempore. Consequatur, distinctio.', minister:'Busayo David', id:1},
        {title: 'Touched', body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, nostrum. Voluptas alias voluptatem nobis quisquam consequatur dolorum, quis modi repudiandae totam maxime ea rerum, rem necessitatibus nesciunt tempore. Consequatur, distinctio.', minister:'Mojisola Ogundipe', id:2},
        {title: 'Online Meeetings', body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, nostrum. Voluptas alias voluptatem nobis quisquam consequatur dolorum, quis modi repudiandae totam maxime ea rerum, rem necessitatibus nesciunt tempore. Consequatur, distinctio.', minister:'Busayo David', id:3}
    ]);

    const mCardTitle = "Ministries"

    return(
        <div className="Ministry">
            <div className="Ministry-card">
                <p className="mcard-title"><a href="#" > { mCardTitle } </a></p>
                <MinistryCardlist mcards={mcards} title='MinistryCards' />
            </div>
        </div>
    )
};

export default MinistryCard;