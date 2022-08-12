import React from "react"
import Form from "@/Layouts/form"
import Input from "@/Components/Input"
import { Inertia } from '@inertiajs/inertia'
import { Link, usePage } from "@inertiajs/inertia-react"
import Label from "@/Components/Label"
import Button from "@/Components/Button"

const InputCustomer = ({ code_customer, Created_url}) => {
    const {errors} = usePage().props
    const [values, setValues] = React.useState({
        code : code_customer,
        name : "",
        telp : "",
    })

    const handleChange = (e) => {
        const key = e.target.id;
        const value = e.target.value
        setValues(values => ({
            ...values,
            [key]: value,
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        // console.log(values)
        Inertia.post(route("customer.store"), values)
    }

    return (
        <form onSubmit={handleSubmit}>
            <Input placeholder="John Doe" type="hidden" id="codeCustomer" value={values.code} onChange={handleChange}/>
            <Label className="m-2">Nama</Label>
            {errors.name && <p className="italic text-red-500">{errors.name}</p>}
            <Input placeholder="John Doe" id="name" value={values.name} onChange={handleChange}/>
            <Label>Telp</Label>
            {errors.telp && <p className="italic text-red-500">{errors.telp}</p>}
            <Input placeholder="+62..." id="telp" type="number" value={values.telp} onChange={handleChange}/>
            <div className="py-4">
            <Button type="submit">Submit</Button>
            <Link href={route("customer.index")} className="inline-flex items-center px-4 py-2 bg-gray-50 border border-transparent rounded-md font-semibold text-xs text-black uppercase tracking-widest active:bg-gray-900 transition ease-in-out duration-150 mx-2">Cancel</Link></div>
        </form>
    )
}
InputCustomer.layout = page => <Form children={page} formClassName="lg:w-1/4 w-3/4" header="Input Form"/> 
export default InputCustomer
