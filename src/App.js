
import './App.css';
import LeagueApi from './components/api/LeagueApi';

function App() {
  return (
    <div className="app">
      <h1 className='font-bold mx-auto flex justify-center items-center'>Football League Matches Videos</h1>
     <LeagueApi/>

     {/* <div className=" flex flex-wrap w-full h-full items-center justify-center bg-orange-400 ">
      <div className="div1 h-80 w-80 bg-blue-700"></div>
      <div className="div2 h-80 w-80 bg-red-700"></div>
      <div className="div3 h-80 w-80 bg-slate-700"></div>
      <div className="div4 h-80 w-80 bg-green-700"></div>
      <div className="div1 h-80 w-80 bg-blue-700"></div>
      <div className="div2 h-80 w-80 bg-red-700"></div>
      <div className="div3 h-80 w-80 bg-slate-700"></div>
      <div className="div4 h-80 w-80 bg-green-700"></div>
      <div className="div1 h-80 w-80 bg-blue-700"></div>
      <div className="div2 h-80 w-80 bg-red-700"></div>
      <div className="div3 h-80 w-80 bg-slate-700"></div>
      <div className="div4 h-80 w-80 bg-green-700"></div>

     </div> */}
    </div>
  );
}

export default App;
