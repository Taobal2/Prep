import React, {useState} from 'react'
import "./Work.css"
import {MdCancel} from "react-icons/md"
import {ImQuotesLeft, ImQuotesRight} from "react-icons/im"
import image1 from "../Image/images7.jfif"
import image2 from "../Image/image1.jfif"
import image3 from "../Image/image2.jfif"
import image4 from "../Image/image3.jfif"

import moment from "moment"

const WorkHome = () => {
    const [data, setData]=useState([{
        id: 1,
        name:"azeez",
        quote:"its good to be good",
        time:Date.now(),
        avatar:image1},
        
        {id: 2,
        name:"Habeeb",
        quote:"do your best and leave the rest",
        time:Date.now(),
        avatar:image2},

        {id: 3,
        name:"Taoheed",
        quote:"make hay while the sun shine",
        time:Date.now(),
        avatar:image3},
        

        {id: 4,
        name:"Ganiyu",
        quote:"its a beautiful day",
        time:Date.now(),
        avatar:image4}
   ])

    return ( 
        <div className="container">
           <div className="container_wrapper">
                {
                    data.map((props)=>(
                        <div className="container_card">
                           <div className="container_cardrow">
                                <div className="container_cancel  ">
                                   <MdCancel/>
                                </div>
                                 <img className="container_avatar" src={props.avatar} alt="image"/>
                        </div>
                            <div className="container_quotes">  
                               <div><ImQuotesLeft/>{props.quote}<ImQuotesRight/></div>
                               </div>
                               <div className="container_name">{props.name}</div>
                               <div className="container_time">{moment(props.time).fromNow()}</div>
                          </div>
                    ))
                }
           </div>
        </div>
    )
}

export default WorkHome
