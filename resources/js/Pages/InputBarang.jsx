import React from "react"
import Input from "@/Components/Input"
import Form from "@/Layouts/form"
import Label from "@/Components/Label"
import Button from "@/Components/Button"
import { Inertia } from '@inertiajs/inertia'
import { Link, usePage } from "@inertiajs/inertia-react"

const InputBarang = ({codeBarang, create_url}) => {
    const {errors} = usePage().props
    const [values, setValues] = React.useState({
        code : codeBarang,
        name : "",
        qty : "",
        discount : "",
        harga : "",
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
        Inertia.post(route("barang.store"), values)
    }

    return (
        <div className="">
        <form onSubmit={handleSubmit}>
            <div className="flex flex-col">
                <Input type="hidden" onChange={handleChange} id="code" value={values.code}/>
                <Label forId="name">Nama barang</Label>
                {errors.name && <p className="italic text-red-500">{errors.name}</p>}
                <Input type="text" onChange={handleChange} autoComplete="off" id="name" value={values.name}/>
                <Label forId="name">jumlah besar</Label>
                {errors.qty && <p className="italic text-red-500">{errors.qty}</p>}
                <Input type="number" onChange={handleChange} id="qty" value={values.qty}/>
                <Label forId="name">Discount</Label>
                {errors.discount && <p className="italic text-red-500">{errors.discount}</p>}
                <Input type="number" onChange={handleChange} id="discount" value={values.discount}/>
                <Label forId="name">Harga</Label>
                {errors.harga && <p className="italic text-red-500">{errors.harga}</p>}
                <Input type="number" onChange={handleChange} id="harga" value={values.harga}/>
                <div className="pt-4">
                    <Button type="submit">Submit</Button>
                    <Link href={route("barang.index")} type="" className="px-4 py-2.5 mx-2">Cancel</Link>
                </div>
            </div>
        </form>
        </div>
    )
}
InputBarang.layout = page => <Form children={page} formClassName="lg:w-1/3 w-3/4" header="Input Barang"/>
export default InputBarang