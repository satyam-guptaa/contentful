import { h } from "preact";
import { client } from "../client";
import { useState, useEffect } from 'preact/hooks';
import Cards from "./cards";
import '../style/holiday.css'

export default function Holiday() {
    const [holidays, setHolidays] = useState<any[]>([])

    useEffect(()=>{
       const getEntry =  async()=>{
        try {
            const response = await client.getEntries()
            const fields = response.items.map(item => item.fields)
            setHolidays(fields)
        } catch (error) {
            console.log(error)
        }
       }
       getEntry()
    }, [])

    return (
        <section className="holiday-container">
            <h1 style={{"textAlign": "center", "color": "#e10a0a"}}>Hello Holidays</h1>
            <div>{holidays.map(holiday => <Cards holiday={holiday}/>)}</div>
        </section>
    )
}