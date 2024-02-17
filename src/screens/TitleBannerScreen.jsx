import {useSelector} from "react-redux";
import {useTranslation} from "react-i18next";

export const TitleBannerScreen = () => {
    const liga = useSelector((state) => state.liga)
    const {t} = useTranslation('TitleBannerScreen');

    return (
        <>
            <div className={"bg-secondary p-3 mb-3"}>
                <h1>{liga.name} - {t('info')}</h1>
            </div>
        </>
    )
}