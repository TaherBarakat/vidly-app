import React, { Component } from 'react';
import { getMovies } from '../services/fakeMovieService';
class Movies extends Component {
    state = {
        movies: getMovies(),
    };

    handelDelete = (movie) => {
        const movies = this.state.movies.filter((m) => m._id !== movie._id);
        this.setState({ movies });
    };
    handelDeletee() {
        if (this.state.movies.length !== 0)
            return <h3>showing {this.state.movies.length} in this</h3>;
        return <h3> ksm 7yaty</h3>;
    }

    render() {
        return (
            <div>
                <h3>{this.handelDeletee()}</h3>
                <table class="table">
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Genre</th>
                            <th>Stock</th>
                            <th>Rate</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.movies.map((movie) => (
                            <tr key={movie.id}>
                                <td>{movie.title}</td>
                                <td>{movie.genre.name}</td>
                                <td>{movie.numberInStock}</td>
                                <td>{movie.dailyRentalRate}</td>
                                <td>
                                    <botton
                                        onClick={() => this.handelDelete(movie)}
                                        className="btn btn-danger btn-sm"
                                    >
                                        delete
                                    </botton>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Movies;
