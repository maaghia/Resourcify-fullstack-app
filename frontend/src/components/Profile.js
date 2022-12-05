import React from "react";

export default function Profile(){
    return(

        <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
            <img className="rounded-full" src="https://placeimg.com/80/80/people" alt="user"/>
        </figure>
        <div className="card-body">
            <h2 className="card-title">Full Name</h2>
            <p>This is a small discription about this person.</p>
            <div className="card-actions justify-end">
            <button className="btn btn-primary">See Profile</button>
            </div>
        </div>
        </div>
    );
}