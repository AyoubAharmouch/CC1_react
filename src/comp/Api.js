import React,{useState,useEffect}from 'react';
import "./api.css";

export default function Api() {
    const [src,setsrc]=useState("");
    useEffect(
        ()=>{
            fetch("https://api.thecatapi.com/v1/images/search")
            .then((res)=>{return(res.json())})
            .then((data)=>{setsrc(data[0].url)})
        },[]
    )
  return (
    <div>
        <img src={src} alt="" />
    </div>
  )
}
