import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption,
    Jumbotron,
    Button,
    Container
  } from 'reactstrap';
  import "./Landing.css"
  import React, { useState } from 'react';
  import {Redirect} from 'react-router';
import FooterPage from './Footer'
import GoogleApiWrapper from './UsersLocation'

  const items = [
    {
      src: 'https://i2.wp.com/bestlifeonline.com/wp-content/uploads/2018/06/corgi-with-its-tongue-out.jpg?resize=1200%2C798&ssl=1',
    },
    {
      src: 'https://i2.wp.com/bestlifeonline.com/wp-content/uploads/2018/06/corgi-with-its-tongue-out.jpg?resize=1200%2C798&ssl=1',
    },
    {
      src: 'https://i2.wp.com/bestlifeonline.com/wp-content/uploads/2018/06/corgi-with-its-tongue-out.jpg?resize=1200%2C798&ssl=1',
    }
  ];
  
  const Example = (props) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);
  
    const next = () => {
      if (animating) return;
      const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
      setActiveIndex(nextIndex);
    }
  
    const previous = () => {
      if (animating) return;
      const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
      setActiveIndex(nextIndex);
    }
  
    const goToIndex = (newIndex) => {
      if (animating) return;
      setActiveIndex(newIndex);
    }
  
    const slides = items.map((item) => {
      return (
        <CarouselItem
          onExiting={() => setAnimating(true)}
          onExited={() => setAnimating(false)}
          key={item.src}
          className='carouselItem'
        >
          <img src={item.src} alt={item.altText} />
          <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
        </CarouselItem>
      );
    });
  
    return (
      <Carousel 
        activeIndex={activeIndex}
        next={next}
        previous={previous}
      >
        <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
        {slides}
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
      </Carousel>
    );
  }
  let redirectVar=null;
  class home extends React.Component{
      clickHandler=()=>{
        redirectVar=<Redirect to="/start"/>
        this.setState({})
      }
      render()
      {
          return(
            <div className="outerDiv">
              {redirectVar}
                <div className="jumbotronDiv">
                <Jumbotron fluid>
                <Container fluid>
                  <h1 className="display-3">Smart Meter</h1>
                  <p className="lead">We believe in optimization</p>
                  <p></p>
                <p className="lead">
                  <Button color="success" onClick={this.clickHandler}>Schedule your devices</Button>
                </p>
                </Container>
                </Jumbotron>
                 </div>
                <div className="carouselDiv">
                    <Example/>
                </div>
                <div className='location'>
                  <GoogleApiWrapper />
                </div>
                <br/><br/><br/><br/>
                <br/><br/><br/><br/>
                <br/><br/><br/><br/>
                <br/><br/><br/><br/>
                <br/><br/><br/><br/>
                <br/><br/><br/><br/>
                <br/><br/><br/><br/>
                <br/><br/><br/><br/>
                <div className='footer'> 
                <FooterPage/>
                </div>
              </div>
          )
      }
  }
  export default home;

