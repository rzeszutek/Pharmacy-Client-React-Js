
import React, {useState} from 'react';
import { Button } from 'react-bootstrap';
import {AiOutlineArrowUp} from 'react-icons/ai';
import './ScrollButton.css';
  
const ScrollButton = () =>{
  
  const [visible, setVisible] = useState(false)
  
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 1000){
      setVisible(true)
    } 
    else if (scrolled <= 1000){
      setVisible(false)
    }
  };
  
  const scrollToTop = () =>{
    window.scrollTo({
      top: 0, 
      behavior: 'smooth'
    });
  };
  
  window.addEventListener('scroll', toggleVisible);
  
  return (
    <Button className="button-wrapper" variant="outline-danger" size="md" style={{display: visible ? 'inline' : 'none'}} onClick={scrollToTop}>
     <AiOutlineArrowUp 
     style={{display: visible ? 'inline' : 'none'}} />
    </Button>
  );
}
  
export default ScrollButton;