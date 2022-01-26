import {useParams} from "react-router-dom";
import {Fragment, useEffect, useState} from "react";
import {findDetail} from "../../action/movie";
import {connect} from "react-redux";
import {Col, Row} from "reactstrap";

function Detail({isLoading, movies, findDetail}) {
    const {id} = useParams()
    const [data, setData] = useState(null)
    useEffect(() => {
        if (id) {
            findDetail(id)
        }
    },[id, findDetail])

    useEffect(() => {
        if (movies.data){
            setData({...movies.data})
        }
    },[movies])
    return (
        <Fragment>
        <Col class="pt-5 bg-primary">
        <Row >
            <Col class="justify-content-center col-5">
                <img src={data?.Poster} alt="images"/>
            </Col>
            <Col class="col-10">
                <Col >
                    <Row>
                        <Col class="col-3">
                            <p class="font-weight-bold">Title</p>
                        </Col>
                        <Col class="col-7">
                            <p id="author" name="author">{data?.Title}</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col class="col-3">
                        <p class="font-weight-bold">Pengarang</p>
                        </Col>
                        <Col class="col-7">
                        <p id="author" name="author">{data?.Writer}</p>
                        </Col>
                    </Row>

                    <Row>
                        <Col class="col-3">
                            <p class="font-weight-bold">Duration</p>
                        </Col>
                        <Col class="col-7">
                            <p id="author" name="author">{data?.Runtime}</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col class="col-3">
                            <p class="font-weight-bold">Director</p>
                        </Col>
                        <Col class="col-7">
                            <p id="author" name="author">{data?.Director}</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col class="col-3">
                            <p class="font-weight-bold">Actor</p>
                        </Col>
                        <Col class="col-7">
                            <p id="author" name="author">{data?.Actors}</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col class="col-3">
                            <p class="font-weight-bold">Synopsis</p>
                        </Col>
                        <Col class="col-7">
                            <p id="author" name="author">{data?.Plot}</p>
                        </Col>
                    </Row>
                </Col>
            </Col>
        </Row>
        </Col>
        </Fragment>
    )
}

const mapStateToProps = (state) => {
    return {
        isLoading: state.getDetail.loading,
        movies: state.getDetail.data
    }
}

const mapDispatchToProps = { findDetail }

export default connect(mapStateToProps, mapDispatchToProps) (Detail);
