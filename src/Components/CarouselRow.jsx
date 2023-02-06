import { Component } from "react";
import { Carousel } from "react-bootstrap";
import ErrorNetflix from "./ErrorNetflix";
import LoadingNetflix from "./LoadingNetflix";

class CarouselRow extends Component {
  state = {
    movies: [],
    isLoading: true,
    isError: false,
    errorMessage: "",
  };

  fetchMovies = async () => {
    try {
      let response = await fetch(this.props.link);

      if (response.ok) {
        let data = await response.json();
        console.log(data);

        this.setState({
          movies: data.Search,
          isLoading: false,
        });
      } else {
        this.setState({
          isLoading: false,
        });
      }
    } catch (error) {
      this.setState({
        isLoading: false,
        isError: true,
        errorMessage: error,
      });
    }
  };

  componentDidMount() {
    this.fetchMovies(); //
  }

  render() {
    return (
      <>
        <h2 className="text-light ml-5">{this.props.titleOf} Collection</h2>

        <Carousel className="my-3" interval={null}>
          {this.state.isLoading && <LoadingNetflix></LoadingNetflix>}

          {this.state.isError && (
            <ErrorNetflix errorMessage={this.state.errorMessage}></ErrorNetflix>
          )}

          {this.state.movies.map((singleMovie, index) => {
            if (index % 5 === 0) {
              return (
                <Carousel.Item key={index}>
                  <div className="row">
                    {this.state.movies.slice(index, index + 5).map((movie) => (
                      <div className="col-md-2">
                        <img
                          className="movie-cover"
                          src={movie.Poster}
                          alt="poster"
                        />
                      </div>
                    ))}
                  </div>
                </Carousel.Item>
              );
            }
            return null;
          })}
        </Carousel>
      </>
    );
  }
}

export default CarouselRow;
