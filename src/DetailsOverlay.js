import React from 'react';

const rowStyle = {
    zIndex: 500,
    position: 'absolute',
    bottom: '0px'
}

const detailsBtn = {
    color: '#f2f2f2'
}

const card = {
    minWidth: '400px'
}

const iconBtn = {
    marginLeft: 0
}

function DetailsOverlay({court, panToCourtPosition}) {
    console.log(court);
    console.log();
  return (
    <div style={rowStyle} className="row">
        <div className="col s12 m6">
            <div style={card} className="card blue-grey darken-1">
                <div className="card-content white-text">
                    <span className="card-title">{court != null ? court.properties.name : 'Select a court'}</span>
                    <p>{court != null ? "Number of courts: " + court.properties.numOfCourts : ''}</p>
                </div>
                <div className="card-action">
                    <a style={detailsBtn} className="waves-effect waves-light btn green darken-1"><i className="material-icons right">chevron_right</i>View More Details</a>
                    <a onClick={panToCourtPosition} style={detailsBtn} className="waves-effect waves-light btn green darken-1"><i style={iconBtn} className="material-icons right">location_searching</i></a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default DetailsOverlay;

