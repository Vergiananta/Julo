import React, { useEffect, useState } from "react";
import {
    Button,
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
        if (movie == null){
            setMovie(movies.data?.Search)
        }
    }, [movies])

    // useEffect(() => {
    //     if(meta.search !== ''){
    //         findMovies(meta)
    //     }
    // },[findMovies])

    const handleChange = (event) => {
        let name = event.target.name;
        let value = event.target.value
        setMeta({ ...meta, [name]: value })

    }

    // const handlePlus=(e)=> {
    //     e.preventDefault();
    //     const {page} = {...meta}
    //     setMeta({
    //         page: page + 1
    //     })
    // }
    //
    // const handleMinus=(e)=> {
    //     e.preventDefault()
    //     if (meta.page > 0){
    //         setMeta({...meta,
    //             page: meta.page - 1
    //         })
    //     }
    // }

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            event.preventDefault()
            findMovies(meta)
            setMeta({ ...meta, search: '' })
        }
    }
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
                                        <div className='image-container d-flex justify-content-start m-6 col-4 mb-4 col-md-4' key={index}>
                                            <Link to={`/movies/${ml?.imdbID}`}>
                                                <img src={ml?.Poster} alt='movie'></img>
                                            </Link>
                                        </div>
                                )
                            })
                        }
                </Row>
                {/*{*/}
                {/*    movie != null ?*/}
                {/*    <div >*/}
                {/*        <a  class="previous"  onClick={handleMinus}>&laquo; Previous</a>*/}
                {/*        <a  class="next" onClick={handlePlus}>Next &raquo;</a>*/}
                {/*    </div> : <Col></Col>*/}
                {/*}*/}
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
