import React, { Component, Fragment, useEffect, useState } from "react";
import {
    Button,
    Card,
    CardBody,
    CardImg,
    CardSubtitle,
    CardText,
    CardTitle,
    Col,
    Form,
    FormGroup,
    Input,
    Row
} from "reactstrap";
import {findMovies} from "../../action/movie";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import './dashboard.css'

function Dashboard({findMovies, isLoading, movies}) {
    const [meta, setMeta] = useState({
        search: '',
        page: 1
    })

    const [movie, setMovie] = useState(null)

    useEffect(() => {
       loadData();
    }, [movies])

    useEffect(() => {
        if(meta.search !== ''){
            findMovies(meta)
        }
    },[findMovies, meta])

    const loadData = () => {
        if (movie == null){
            setMovie(movies.data?.Search)
        } else {
            setMovie(movies.data?.Search)
        }
    }

    const handleChange = (event) => {
        let name = event.target.name;
        let value = event.target.value
        setMeta({ ...meta, [name]: value })

    }

    const handlePlus=()=> {
        setMeta({...meta,
            page: meta.page + 1
        })
    }

    const handleMinus=()=> {
        if (meta.page > 0){
            setMeta({...meta,
                page: meta.page - 1
            })
        }
    }

    const handleKeyPress = (event) => {
        if (event.key == 'Enter') {
            event.preventDefault()
            findMovies(meta)
            setMeta({ ...meta, search: '' })
        }
    }
    console.log("movie", meta)
    return (
        <>
            <Col >
                <Col className="mt-4 " sm="12" md={{ size: 6, offset: 3 }}>
                    <Form >
                        <FormGroup >
                            <Input type="text"
                                   name="search"
                                   id="search"
                                   value={meta?.search}
                                   placeholder="Cari film.."
                                   onChange={handleChange}
                                   onKeyPress={handleKeyPress}
                            />
                        </FormGroup>
                    </Form>
                </Col>
                <Row className="movie-app" >
                        {
                            movie?.map((ml, index) => {
                                return (
                                    <div className='image-container d-flex justify-content-start m-6 col-4 mb-4' key={index}>
                                        <Link to={`/movies/${ml?.imdbID}`}>
                                        <img src={ml?.Poster} alt='movie'></img>
                                        </Link>
                                    </div>
                                )
                            })
                        }
                </Row>
                <Row>
                    <Col class="col-1">
                    <Button type="button" color="primary" className="float-left col-1" onClick={handlePlus}>+</Button>
                    </Col>
                    <Col class="col-1">
                        <small className="col-1">{meta.page}</small>
                    </Col>
                    <Col class="col-1">
                        <Button type="button" color="primary" className="float-right col-1" onClick={handleMinus}>-</Button>
                    </Col>
                </Row>
            </Col>
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        isLoading: state.getMoviePaginate.loading,
        movies: state.getMoviePaginate.data
    }
}

const mapDispatchToProps = { findMovies }

export default connect(mapStateToProps, mapDispatchToProps) (Dashboard);
