import Button from 'react-bootstrap/Button';
import {Link} from "react-router-dom";
import {useTranslation} from "react-i18next";
export const NotFoundScreen = () => {
    const { t} = useTranslation('NotFoundScreen');

    return (
        <>
            <div className="d-flex align-items-center justify-content-center">
                <div className="text-center">
                    <h1 className="display-1 fw-bold">404</h1>
                    <p className="fs-3"><span className="text-danger">{t('ups')}</span> {t('notFound')}</p>
                    <p className="lead">
                        {t('notExist')}
                    </p>
                    <Link to="/">
                        <Button variant="outline-secondary">{t('buttonText')}</Button>
                    </Link>
                </div>
            </div>
        </>
    )
}