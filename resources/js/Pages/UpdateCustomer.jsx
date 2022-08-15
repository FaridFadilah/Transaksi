import React from "react"
import Form from "@/Layouts/form"
import Input from "@/Components/Input"
import Label from "@/Components/Label"
import { Link, usePage } from "@inertiajs/inertia-react"
import Button from "@/Components/Button"
import { Inertia } from "@inertiajs/inertia"

const UpdateSales = ({sales}) => {
    // console.log(sales)
    const {errors} = usePage().props
    const [values, setValues] = React.useState({
        code : sales.code,
        name : sales?.name || "",
        telp : sales?.telp||""
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
        Inertia.put(route("sales.update", sales.id), values)
    }
    return(
        <div className="">
            <form onSubmit={handleSubmit}>
                <div className="flex flex-col">
                    <Label forId="name">Nama sales</Label>
                    {errors.name && <p className="italic text-red-500">{errors.name}</p>}
                    <Input type="text" onChange={handleChange} id="name" value={values.name}/>
                    <Label forId="name">jumlah besar</Label>
                    {errors.qty && <p className="italic text-red-500">{errors.qty}</p>}
                    <Input type="number" onChange={handleChange} id="telp" value={values.telp}/>
                    <div className="pt-4">
                        <Button type="submit">Submit</Button>
                        <Link href={route("sales.index")} type="" className="px-4 py-2.5 mx-2">Cancel</Link>
                    </div>
                </div>
            </form>
        </div>
    )
}
UpdateSales.layout = page => <Form children={page} formClassName="lg:w-1/3 w-3/4" header="Update Sales"/>
export default UpdateSales