import Container from "react-bootstrap/Container";
import {Card, Col, ListGroup, Row} from "react-bootstrap";
import {useSelector} from "react-redux";
import parse from 'html-react-parser';

export const InformationScreen = () => {
    const liga = useSelector((state) => state.liga)
    return (
        <>
            <Container>
                <Row>
                    <Col lg={9}>
                        {parse(liga.desc)}
                    </Col>
                    <Col lg={3}>
                        <h4>Mannschaften in der Saison XX{/*TODO: Saison eintragen*/}:</h4>
                        {/*TODO: Mannschaften Mappen*/}
                        <ListGroup>
                            <ListGroup.Item>BoAbt 1. SV Fasananhof 2</ListGroup.Item>
                            <ListGroup.Item>BSC Stuttgart</ListGroup.Item>
                            <ListGroup.Item>BSC Laupheim</ListGroup.Item>
                            <ListGroup.Item>SGi Ditzingen 2</ListGroup.Item>
                            <ListGroup.Item>BC Magstadt</ListGroup.Item>
                            <ListGroup.Item>BWT Kirchentellinsfurt</ListGroup.Item>
                            <ListGroup.Item>SV Tell Weilheim / Teck</ListGroup.Item>
                            <ListGroup.Item>NBAV Neuenstadt</ListGroup.Item>
                        </ListGroup>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h4>Termine und Austragungsorte:</h4>
                    </Col>
                </Row>
                <Row>
                    {liga.wkdays.map(wkt =>
                        <Col xl={3} lg={4} md={6}>
                            <Card key={wkt.id}>
                                <Card.Header><Card.Title>{wkt.number}. Wettkampftag</Card.Title></Card.Header>
                                <Card.Body>
                                    <Card.Text>
                                        <strong>Datum:</strong> {wkt.date}<br/>
                                        <strong>Adresse:</strong><br/>
                                        {wkt.street}<br/>
                                        {wkt.plz} {wkt.city}<br/>
                                        <strong>Einschießen:</strong> {wkt.startTraining} Uhr<br/>
                                        <strong>Wettkampf: </strong> {wkt.startShooting} Uhr
                                    </Card.Text>
                                    <Card.Text>
                                        {parse(wkt.desc)}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    )}
                </Row>
            </Container>
        </>
    )
}