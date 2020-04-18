import React, { Component } from 'react';
import { Container, Row, Col, Form, Image } from 'react-bootstrap'
import { FaSearch } from 'react-icons/fa'
import { appApi } from './Function/Functions';
import './App.css'


class Building extends Component {
    constructor(props) {
        super(props);
        this.state = {
            buildings: [],
            sites: [],
            searchItem: ""
        }
    }

    componentDidMount() {
        appApi({
            page: 'buildings',
            method: 'GET'
        }).then(buildings => this.setState({ buildings })).catch(e => alert(e))
        appApi({
            page: 'sites',
            method: 'GET'
        }).then(sites => this.setState({ sites })).catch(error => alert(error))
    }
    render() {
        const { buildings, sites, searchItem } = this.state
        return (
            <Container className="App" >

                <Form inline className="justify-content-md-center">
                    <div className="searchBar" > <input type="text" placeholder="Search buildings here...." style={{ backgroundColor: 'transparent', outline: 'none' }} value={searchItem}
                        onChange={(e => this.setState({ searchItem: e.target.value }))} />
                        <FaSearch /></div>
                </Form>
                <div class="container">
                    <div class="row">
                        <div class="col-sm">
                            <Col>
                                <Row >
                                    {

                                        buildings.map((building, index) => (
                                            <>
                                                {!searchItem || (building.buildingName.toLowerCase().indexOf(searchItem.toLocaleLowerCase()) !== -1) ?
                                                    <Col key={index}>
                                                        {building.buildingName}
                                                        <Image style={{ height: 100, width: 100 }} src={building.imageName + ',' + building.image} />
                                                    </Col> : null}
                                            </>
                                        ))
                                    }
                                </Row>
                            </Col>
                        </div>
                        <div className="mainBodyDiv" class="col-sm">
                            <Col>
                                <Row >
                                    {

                                        sites.map((site, index) => (
                                            <>
                                                {!searchItem || (site.siteName.toLowerCase().indexOf(searchItem.toLocaleLowerCase()) !== -1) ?
                                                    <Col key={index} xs={3} sm={4} lg={4}>
                                                        {site.siteName}
                                                        <Image style={{ height: 100, width: 100 }} src={site.imageName + ',' + site.image} />
                                                    </Col> : null}
                                            </>
                                        ))
                                    }
                                </Row>
                            </Col>
                        </div>

                    </div>
                </div>


            </Container >
        );
    }
}

export default Building;