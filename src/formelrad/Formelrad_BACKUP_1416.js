import {useState} from "react";
import '../css/mvp.css';
import formelrad from "../image/formelradelektronik.gif";
import InputField from "../formular/InputField";

export default function Formelrad() {
    const [values, setValues] = useState({
        u: 10,
        i: 2,
        r: "",
        p: ""
    })

<<<<<<< HEAD
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("handleSubmit")
        if (values.u === "" && values.i === "") {
            /*calculate u and i */
            setValues(values => ({...values, u: Math.sqrt(values.p * values.r)}));
            setValues(values => ({...values, i: Math.sqrt(values.p / values.r)}));
        } else if (values.u === "" && values.r === "") {
            /*calculate u and r */
            setValues(values => ({...values, u: values.p / values.i}));
            setValues(values => ({...values, r: values.p / values.i / values.i}));
=======
    const calculate = (event) => {
        event.preventDefault();
        console.log("calculate");
        if (values.i === "" && values.r === "") {
            /*calculate i and r */
            setValues(values => ({...values, i: values.p / values.u}));
            setValues(values => ({...values, r: values.u * values.u / values.p}));
        } else if (values.i === "" && values.p === "") {
            /*calculate i and p */
            setValues(values => ({...values, i: values.u / values.r}));
            setValues(values => ({...values, p: values.u * values.u / values.r}));
        } else {
            /*calculate r and p */
            setValues(values => ({...values, r: values.u / values.i}));
            setValues(values => ({...values, p: values.u * values.i}));
>>>>>>> FeatureCalcI
        }
    }

    return (
        <>
            <section>
                <header>
                    <h2>Formelrad</h2>
                    <img src={formelrad} width="200" alt="Formelrad"/>
                </header>
<<<<<<< HEAD
                <form onSubmit={handleSubmit}>
=======
                <form onSubmit={calculate}>
>>>>>>> FeatureCalcI
                    <InputField color={"black"} value={values.u} label="Spannung" handleChange={e => {setValues(values => ({...values, u: e.target.value}))}} />
                    <InputField color={"black"} value={values.i} label="Stromstärke" handleChange={e => {setValues(values => ({...values, i: e.target.value}))}} />
                    <InputField color={"black"} value={values.r} label="Widerstand" handleChange={e => {setValues(values => ({...values, r: e.target.value}))}} />
                    <InputField color={"black"} value={values.p} label="Leistung" handleChange={e => {setValues(values => ({...values, p: e.target.value}))}} />
                    <button type="submit">Calculate</button>
                </form>
            </section>
        </>
    )
}