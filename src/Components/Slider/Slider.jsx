import Carousel from 'react-bootstrap/Carousel';

const Slider = () => {
    return (
        <>
        <Carousel style={{height:"200px"}} interval="1000">
          <Carousel.Item>
            <div style={{transition: "transform,all 3s ease 0s",height:"200px", border:"1px solid green"}}><img
              className="d-inline"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIyldvyhjGrCI9GDE7NAePMPb_O1ocULEcFJu9vWivMg&s"
              alt="First slide"
              style={{width:"48%",height:"100%",margin:"0 2% 0 0"}}
            />
             <img
              className="d-inline"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIyldvyhjGrCI9GDE7NAePMPb_O1ocULEcFJu9vWivMg&s"
              alt="First slide"
              style={{width:"50%",height:"100%"}}
            />
            </div>
          </Carousel.Item>
          <Carousel.Item>
          <div style={{height:"200px", border:"1px solid green"}}><img
              className="d-inline"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIyldvyhjGrCI9GDE7NAePMPb_O1ocULEcFJu9vWivMg&s"
              alt="First slide"
              style={{width:"50%",height:"100%"}}
            />
             <img
              className="d-inline"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIyldvyhjGrCI9GDE7NAePMPb_O1ocULEcFJu9vWivMg&s"
              alt="First slide"
              style={{width:"50%",height:"100%"}}
            />
            </div>
          </Carousel.Item>
          <Carousel.Item>
           <div style={{height:"200px", border:"1px solid green"}}><img
              className="d-inline"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIyldvyhjGrCI9GDE7NAePMPb_O1ocULEcFJu9vWivMg&s"
              alt="First slide"
              style={{width:"50%",height:"100%"}}
            />
             <img
              className="d-inline"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIyldvyhjGrCI9GDE7NAePMPb_O1ocULEcFJu9vWivMg&s"
              alt="First slide"
              style={{width:"50%",height:"100%"}}
            />
            </div>
          </Carousel.Item>
        </Carousel>
       
  </>
    )
}

export default Slider;