import React from "react";

export default function Resource(){
    return(
        <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">
            Resource!
            <div className="badge badge-secondary">By maria</div>
          </h2>
          <p>This is supposed to be the discription of this resource! </p>
          <div className="card-actions justify-start">
            <div className="badge badge-outline">Tag1</div> 
            <div className="badge badge-outline">Tag2</div>
          </div>
          <button className="btn btn-outline justify-end border-none ">
          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
             <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
          </svg>
          <span className="ml-3">100</span>
        </button>
        </div>
      </div>
    );
}