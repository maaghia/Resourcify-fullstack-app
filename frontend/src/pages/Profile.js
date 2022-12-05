import React from "react";
//already have an account
export default function Profile(){
    return(
        <div className="flex items-center justify-start ml-20 w-full">
            <div className="flex flex-row gap-20 card w-96 bg-base-100 w-full">
            <figure>
                <img className="rounded-full" src="https://placeimg.com/80/80/people" alt="user"/>
            </figure>
            <div className="card-body">
                <h2 className="card-title">Full Name</h2>
                <p>This is a small discription about this person.</p>
                <div className="card-actions justify-end">
                
                </div>
            </div>
            </div>
        </div>
    );
}