import React,{useState, useEffect} from 'react'
import axios from "axios"
import {BsSearch} from 'react-icons/bs'
import '../../../src/App.css'
import CardContainer from './CardContainer'


const LeagueApi = () => {
    const [datavalue, setDatavalue] = useState([]);
    const [inputvalue, setinputvalue] = useState('');
    const [loading, setloading] = useState(false);

    useEffect(()=> {
      SearchData();
 },[])

  

    if(loading){
        return 'Loading Video...'
    }
    
    const options = {
        method: 'GET',
        url: 'https://free-football-soccer-videos1.p.rapidapi.com/v1/',
        headers: {
          'X-RapidAPI-Key': 'e64a50f6c9msh810df55f5bf37a8p1316c1jsn44fe792b49a6',
          'X-RapidAPI-Host': 'free-football-soccer-videos1.p.rapidapi.com'
        }
      };

      const SearchData = async() => {
        setloading(true);
        await axios.request(options).then(function (response) {
            setloading(false);
               setDatavalue(response.data)
            console.log(response.data);
        }).catch(function (error) {
            console.error(error);
        });
      }

   

      const inputHandler  = (e) => {
        setinputvalue(e.target.value)
        console.log(e.target.value);
      }

      // const formSubmit = (e) => {
      //   e.preventDefault();
      // }
      
    
  return (
    <div>

       <div className="formdiv">
       <form  className='mb-2 flex justify-center items-center'>
            <input type="text" value={inputvalue} onChange={inputHandler} placeholder='Enter the match' className='inputvalue w-4/6 rounded-sm'/>
            <BsSearch/>
            {/* <button onClick={SearchData} className='buttonsearch'><BsSearch/></button> */}
            <hr />
        </form>
       </div>

       <div className="flex flex-wrap w-full h-full  bg-gray-900 ">
       {
             datavalue.filter((val)=> {
              if(inputvalue == ""){
                  return val
              }else if(val.title.toLowerCase().includes(inputvalue.toLowerCase()) || val.competition.name.toLowerCase().includes(inputvalue.toLowerCase())){
                return val
              }
             }).map((item,id) => (
                <div key={id}  >
                 <CardContainer item={item}/>  
                </div>
             ))
        }
       </div>

    </div>
  )
}

export default LeagueApi