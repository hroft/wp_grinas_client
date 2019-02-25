import React from 'react';
import './ContentItems.css';

export default function ContentItems(props){

    return (
        <React.Fragment>
            <div className="wraper">
          {props.data.map(row => (
                //   <h5 className="card-title">{row.date}</h5>
/* <div key={row.id} dangerouslySetInnerHTML={{ __html: row.excerpt.rendered}} > */
<div key={row.id}>
<div key={row.id} dangerouslySetInnerHTML={{ __html: row.excerpt.rendered}} />
<a href="">Подробнее</a>

</div>

            ))}
            </div>
        </React.Fragment>
      );

}