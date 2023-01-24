import React from "react";
import './main.css';
import img from "../../assets/kerala1.jpg";
import img2 from "../../assets/manali.jpg";
import img3 from "../../assets/Mahabaleshwar.jpeg";
import img4 from "../../assets/Goa.jpg";
import img5 from "../../assets/ladakh.jpg";

import {HiOutlineLocationMarker} from "react-icons/hi"
import {HiOutlineClipboardCheck} from "react-icons/hi"


// Let me paste the array named data
const Data = [
   {
    id:1,
    img:img,
    destTitle:'Kerala',
    location:'Kerala',
    grade:'CULTURAL RELAX',
    fees:'INR 80,000',
    description:'Kerala is a popular destination for both domestic as well as foreign tourists. Kerala is well known for its beaches, backwaters in Alappuzha and Kollam, mountain ranges and wildlife sanctuaries.'
   },
   {
    id:2,
    img:img2,
    destTitle:'Manali',
    location:'Himachal Pradesh',
    grade:'CULTURAL RELAX',
    fees:'INR 60,000',
    description:'It is a rustic enclave known for its cool climate and snow-capped mountains, offering respite to tourists escaping scorching heat of the plains. The tourism industry in Manali started booming only in the early 20th century, mainly because of its natural bounties and salubrious climate'
 },
 {
    id:3,
    img:img3,
    destTitle:'Mahabaleshwar',
    location:'Maharashtra',
    grade:'CULTURAL RELAX',
    fees:'INR 50,000',
    description:'Mahabaleshwar region is the source of the Krishna River that flows across Maharashtra, Karnataka, Telangana and Andhra Pradesh. The legendary source of the river is a spout from the mouth of a statue of a cow in the ancient temple of Mahadev in Old Mahabaleshwar.'
 },
 {
    id:4,
    img:img4,
    destTitle:'Goa',
    location:'Goa',
    grade:'CULTURAL RELAX',
    fees:'INR 90,000',
    description:'Goa is one of the most favorite destination among Indian tourists due to its pristine beaches. Dotted with hundreds of impressive beaches in Goa, the incredible coastline of more than 100 km offers beautiful views and serenity where tourists enjoy and relax in the Sun.'
 },
 {
    id:5,
    img:img5,
    destTitle:'Ladakh',
    location:'Jammu Kashmir',
    grade:'CULTURAL RELAX',
    fees:'INR 70,000',
    description:'Ladakh is most famous for breathtaking landscapes, the crystal clear skies, the highest mountain passes, thrilling adventure activities, Buddhist Monasteries and festivals.'
 },
]
const Main = () => {
    return(
        <section className="main container section">
            <div className="secTitle">
                <h3 className="title"> Most visited Destinstion</h3>
            </div>
            <div className="secContent grid">
            {
                 Data.map(({ id, img, destTitle, location, grade, fees, description}) => {
                   return(
                     <div key={id}
                       className="singleDestination">
                      <div className="imageDiv">
                         <img src={img} alt={destTitle}/>
                     </div>
                     <div className="cardInfo">
                        <h4 className="destTitle">{destTitle}</h4>
                         <span className="continent flex">
                            <HiOutlineLocationMarker className="icon"/>
                            <span className="name">{location}</span>
                         </span>
                         <div className="fees flex">
                            <div className="grade">
                                <span>{grade}<small>+1</small></span>
                            </div>
                            <div className="price">
                                <h5>{fees}</h5>
                            </div>
                         </div>
                         <div className="desc">
                            <p>{description}</p>
                         </div>
                         <button className="btn flex">
                            DETAILS<HiOutlineClipboardCheck className="icon"/>
                         </button>
                     </div>

                    </div>
                   )        
                })
            }
            </div>
                 
        </section>
    )
}
export default Main;