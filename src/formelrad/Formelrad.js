import {useState} from "react";
import InputField from "../formular/InputField";
import OutputField from "../formular/OutputField";
import Checkbox from "../formular/Checkbox";
import '../css/mvp.css';

export default function Formelrad() {
    const [values, setValues] = useState({
        u: 10,
        i: 2,
        r: "",
        p: ""
    })

    // KOMBINIERTE LÖSUNG: Beide Features zusammengeführt
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("handleSubmit")
        
        // CalcU: Berechne u und i
        if (values.u === "" && values.i === "") {
            /*calculate u and i */
            setValues(values => ({...values, u: Math.sqrt(values.p * values.r)}));
            setValues(values => ({...values, i: Math.sqrt(values.p / values.r)}));
        } 
        // CalcU: Berechne u und r  
        else if (values.u === "" && values.r === "") {
            /*calculate u and r */
            setValues(values => ({...values, u: values.p / values.i}));
            setValues(values => ({...values, r: values.p / (values.i * values.i)}));
        }
        // CalcI: Berechne i und r
        else if (values.i === "" && values.r === "") {
            /*calculate i and r */
            setValues(values => ({...values, i: values.p / values.u}));
            setValues(values => ({...values, r: values.u * values.u / values.p}));
        } 
        // CalcI: Berechne i und p
        else if (values.i === "" && values.p === "") {
            /*calculate i and p */
            setValues(values => ({...values, i: values.u / values.r}));
            setValues(values => ({...values, p: values.u * values.u / values.r}));
        }
    }

    return (
        <main>
            <form onSubmit={handleSubmit}>
                <table>
                    <caption>Ohmsches Gesetz</caption>
                    <tbody>
                        <tr>
                            <td><label htmlFor="u">Spannung in Volt:</label></td>
                            <td><InputField name="u" value={values.u} setValue={setValues}/></td>
                        </tr>
                        <tr>
                            <td><label htmlFor="i">Strom in Ampere:</label></td>
                            <td><InputField name="i" value={values.i} setValue={setValues}/></td>
                        </tr>
                        <tr>
                            <td><label htmlFor="r">Widerstand in Ohm:</label></td>
                            <td><InputField name="r" value={values.r} setValue={setValues}/></td>
                        </tr>
                        <tr>
                            <td><label htmlFor="p">Leistung in Watt:</label></td>
                            <td><InputField name="p" value={values.p} setValue={setValues}/></td>
                        </tr>
                        <tr>
                            <td colSpan="2">
                                <button type="submit">Berechnen</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </form>
        </main>
    );
}