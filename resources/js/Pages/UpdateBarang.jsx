import React from "react"
import Form from "@/Layouts/form"
import Input from "@/Components/Input"
import Label from "@/Components/Label"
import { Link, usePage } from "@inertiajs/inertia-react"
import Button from "@/Components/Button"
import { Inertia } from "@inertiajs/inertia"

const UpdateBarang = ({barang}) => {
    // console.log(barang)
    const {errors} = usePage().props
    const [values, setValues] = React.useState({
        code : barang.code,
        name : barang?.name || "",
        qty : barang?.qty||"",
        discount : barang?.discount||"",
        harga : barang?.harga||"",
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
        Inertia.put(route("barang.update", barang.id), values)
    }
    return(
        <div className="">
            <form onSubmit={handleSubmit}>
                <div className="flex flex-col">
                    <Label forId="name">Nama barang</Label>
                    {errors.name && <p className="italic text-red-500">{errors.name}</p>}
                    <Input type="text" onChange={handleChange} id="name" value={values.name}/>
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
UpdateBarang.layout = page => <Form children={page} formClassName="lg:w-1/3 w-3/4" header="Update Barang"/>
export default UpdateBarang