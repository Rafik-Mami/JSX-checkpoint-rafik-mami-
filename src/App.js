import logo from './logo.svg';
import './App.css';

function App() {
  return (

      <div className="App"  Style={{border:'solid 1px black',maxWidth:'100vw'}}>
      <h1 className='title red'> Rafik Mami </h1>
      <br/>
      <img src={"/imageInSrc.png"} alt="logo"/>
      <br/>
      <img src="/imageInPublic.png" alt ='myImage'/>
      <video width='320' height='240' controls >

      <source src="myVideo.mp4" type="video/mp4"/>
      </video>
    
      </div>  
  );
}
export default App;
