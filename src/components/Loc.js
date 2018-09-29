import React from "react";

const Form = props => (
        <form onSubmit={props.getMap}>
                <input type="text" name="from" placeholder="From..."/>
                <input type="text" name="to" placeholder="To..." />
                <button> Get Map</button>
        </form>
);


export default Form;