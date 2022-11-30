import React from "react";
//already have an account
export default function Login(){
    return(
        <form className="form w-96 bg-base-100 shadow-xl justify-evenly">
            <div className="form-control">
            <label className="label">
                <span className="label-text">Your Email</span>
            </label>
            <label className="input-group">
                <span>Email</span>
                <input type="text" placeholder="info@site.com" className="input input-bordered" />
            </label>
            </div>

            <div className="form-control">
            <label className="label">
                <span className="label-text">Your Password</span>
            </label>
            <label className="input-group">
                <span>Password</span>
                <input type="text" placeholder="********" className="input input-bordered" />
            </label>
            </div>

            <button className="btn btn-xm sm:btn-sm md:btn-md lg:btn-lg btn-outline justify-end">Login</button>
        </form>
    );
}