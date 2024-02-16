import Button from 'react-bootstrap/Button';
import {Link} from "react-router-dom";
export const NotFoundScreen = () => {
    return (
        <>
            <div className="d-flex align-items-center justify-content-center vh-100">
                <div className="text-center">
                    <h1 className="display-1 fw-bold">404</h1>
                    <p className="fs-3"><span className="text-danger">Opps!</span> Seite nicht gefunden</p>
                    <p className="lead">
                        Die Seite nach der Sie schauten existiert nicht.
                    </p>
                    <Link to="/">
                        <Button variant="outline-secondary">Zur Startseite</Button>
                    </Link>
                </div>
            </div>
        </>
    )
}