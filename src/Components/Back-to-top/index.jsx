import {FaArrowCircleUp}        from 'react-icons/fa';
import './index.scss';
function BackToTop () {
    const scrollToTop = () =>{
        window.scrollTo({
          top: 0, 
          behavior: 'smooth'
        });
      };
      return(
          < >
            <FaArrowCircleUp onClick={scrollToTop} className= "back-to-top-design"></FaArrowCircleUp>
        </>
    )
}

export default BackToTop;