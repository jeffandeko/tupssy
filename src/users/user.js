mport React, { Component } from 'react';
import { Container, Row, Col, Image, Text } from 'react-bootstrap'
import { appApi } from '../Functions';
import './sites.sass'
class componentName extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sites: [],
            searchValue: ''
        }
    }

    componentDidMount() {
        appApi({
            page: 'sites',
            method: 'GET'
        }).then(sites => this.setState({ sites })).catch(e => alert(e))
    }
    render() {
        const { sites, searchValue } = this.state
        return (
            <Container className="siteDefaultPage">
                <Row className="searchDefDiv">
                    <input id={'searchPageDef'} type={'text'} value={searchValue}
                        placeholder="Search site"
                        onChange={(e => this.setState({ searchValue: e.target.value }))} />
                </Row>
                <Row style={{ textAlign: 'center' }}>
                    {
                        sites.map((site, index) => (
                            <>
                                {!searchValue || (site.siteName.toLowerCase().indexOf(searchValue.toLowerCase()) !== -1) ?
                                    <Col key={index} xs={6} md={4} lg={4}>
                                        <div className="imageSiteName">
                                            <Image className="siteDefimage" src={site.imageName + ',' + site.image} />
                                            <span>{site.siteName}</span>
                                        </div>
                                    </Col> : null}
                            </>
                        ))
                    }
                </Row>
            </Container>
        );
    }
}

export default componentName;