import { h } from "preact";
import '../style/cards.css'

export default function Cards({holiday}) {
    const imgUrl = holiday.heroImage.fields.file.url
    return (
        <article className="cards">
            <img className="img" src={imgUrl} alt="hotel image"/>
            <div className="name-price">
                <h3>{holiday.name}</h3>
                <h4><span>&#8364;</span> {holiday.pricePerPerson} <sub>pp</sub></h4>
            </div>
            <p style={{"fontSize": "0.9rem"}}>{holiday.description}</p>
        </article>
    )
}