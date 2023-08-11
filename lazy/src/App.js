import './App.css';
import {useEffect,useState} from 'react'
import axios from 'axios'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

function App() {

  const url=`https://jsonplaceholder.typicode.com/photos`
 
  const[images,setImages]=useState([])

  const getImages =() =>{
    axios.get(url).then(res=>{
      console.log(res.data)
      setImages(res.data)
    })
  }
  useEffect (()=>{
    getImages()
 },[])
  return (
    <div className="App">
       hello
       {images.map(image=>{
        return(<LazyLoadImage
          effect='blur' src={image.url} alt='' key={image.id}></LazyLoadImage>)
       })}
    </div>
  );
}

export default App;
