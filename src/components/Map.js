import React from "react";


const Map = props => {
    return (
        <div>
            { props.from && props.to && <p>Location: { props.from}, {this.props.to}</p> }
        </div>
    );
}

export default Map;