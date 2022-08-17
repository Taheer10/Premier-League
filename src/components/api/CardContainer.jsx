// import {Box, Card,CardContent, Typography, CardMedia } from "@mui/material"

const CardContainer = ({item}) => {
  return (
        
        <div className="text-white bg-red-500 mt-5 ml-1 flex flex-col w-4/5 h-1/4 ">
             
        <a href={item.url} target="_blank"><img src={item.thumbnail ? item.thumbnail: 'https://c8.alamy.com/comp/DRK9C8/fake-football-kits-DRK9C8.jpg'} className="w-96 h-40" alt="football image" /></a>
         <span>{item.title}</span>
         <span>{item.competition.name}</span>


        </div>
        
   
  )
}

export default CardContainer