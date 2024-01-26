import { useParams } from "react-router-dom"
import { useGetAdvertisementByIdQuery } from "../../services/api-services";

export const Advertisement = () => {
    const {advId} = useParams();
    console.log(advId);
    const {data} = useGetAdvertisementByIdQuery({id: advId})
    console.log(data);
    return (
        <p>Это страница объявления {data && data.title}</p>
    )
}