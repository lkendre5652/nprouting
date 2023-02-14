import React from "react";

export const Home = () =>{
    return(<>   
    <div className="alert alert-warning alert-dismissible fade show" role="alert">
        <strong>Home Page!</strong>This is the Home Page.
        <button type="button" className="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
        </button>
    </div>

    </>)
}