import React from "react";
import $ from 'jquery';
import { Data } from "./Data";

export const Home = () =>{      
    return(<> 
    {
        Data.map((items,i)=>{
            return(<>            
                <div className="slidder-wrap">
                    <div id={`wp-query${i}`} onClick={ (e)=> $("#"+e.target.id).next().slideToggle() } className="flip" >{items.title}</div>
                    <div id={`wp-content${i}`} className="panel">
                        <pre>{items.contents}</pre>             
                    </div> 
                </div>            
            </>)
        })
    }     
        
    </>)
}