import { Component } from "react";
// import { Carousel } from "react-bootstrap";
import CarouselRow from "./CarouselRow";

class CarouselParent extends Component  {
    render () {
        return (
            <div id="rows-parent">
            <CarouselRow titleOf="Wall Street" link="https://www.omdbapi.com/?apikey=4f6eac88&s=wall street"></CarouselRow>
            <CarouselRow titleOf="Friends" link="https://www.omdbapi.com/?apikey=4f6eac88&s=friends"></CarouselRow>
            </div>

        )
    }

}

export default CarouselParent;


