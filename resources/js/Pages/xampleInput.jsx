import React from "react"
import Guest from "@/Layouts/form"
import Input from "@/Components/Input"
import { Inertia } from '@inertiajs/inertia'
import { Link } from "@inertiajs/inertia-react"
import Label from "@/Components/Label"
import Button from "@/Components/Button"
import { parseInt } from "lodash"

const Form = ({Barangs, code_transaksi,code_customer, Created_url}) => {
    const [values, setValues] = React.useState({
        codeTransaksi : code_transaksi,
        tanggal : "",
        barang : "",
        codeCustomer : code_transaksi,
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
        console.log(values)
        Inertia.post(route("store"), values)
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="flex flex-col">
                <Label className="m-2">Code transaksi</Label>
                <Input placeholder={code_transaksi} className="bg-gray-300 px-1 py-1 dark:bg-gray-700 placeholder:text-gray-200" id="codeTransaksi" value={values.codeTransaksi}  disabled/>
                <Label className="m-2">Tanggal</Label>
                <Input placeholder="xxx - xxx" type="Date" id="tanggal" value={values.tanggal} onChange={handleChange} className="bg-gray-300 px-1 py-1"/>
                <Label>Barang</Label>
                <select className="rounded-lg focus:outline-none focus:ring focus:ring-blue-300" value={values.barang} onChange={handleChange} id="barang">
                {Barangs.map((barang) => ( <option key={barang.id} value={barang.id}>{barang.name}</option> ))}
                </select>
                <Input placeholder="John Doe" type="hidden" id="codeCustomer" value={values.code} onChange={handleChange}/>
                <Label className="m-2">Nama</Label>
                <Input placeholder="John Doe" id="name" value={values.name} onChange={handleChange}/>
                <Label>Telp</Label>
                <Input placeholder="+77 .." id="telp" type="number" value={values.telp} onChange={handleChange}/>

                <div className="py-4">
                <Button type="submit">Submit</Button>
                <Link href="/" className="inline-flex items-center px-4 py-2 bg-gray-50 border border-transparent rounded-md font-semibold text-xs text-black uppercase tracking-widest active:bg-gray-900 transition ease-in-out duration-150 mx-2">Cancel</Link></div>
            </div>
        </form>
    )
}
Form.layout = page => <Guest children={page} formClassName="lg:w-1/4 w-3/4" header="Input Form"/> 
export default Form
