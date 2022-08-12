import react from "react"
import Button from "@/Components/Button"
import { Inertia } from "@inertiajs/inertia"
import Label from "@/Components/Label"
import Input from "@/Components/Input"
import Form from "@/Layouts/form"
import { Link, usePage } from "@inertiajs/inertia-react"

const InputSales = ({codeTransaksi, Barang, Customer}) => {
    const [values, setValues] = react.useState({
        code : codeTransaksi,
        barang_id : "",
        customer_id : "",
        jumlah_pesanan : "",
        tgl : "",
        ongkir : "",
    })
    
    const {errors} = usePage().props
    const {flash} = usePage().props

    const handleChange = (e) => {
        const key = e.target.id;
        const value = e.target.value
        setValues(values => ({
            ...values,
            [key]: value,
        })
    )}

    const handleSubmit = (e) => {
        e.preventDefault()
        // console.log(values)
        Inertia.post(route("sales.store"), values)
    }

    return (
        <form onSubmit={handleSubmit}>
                <Label className="m-2">Code transaksi</Label>
                <Input placeholder={codeTransaksi} className="bg-gray-300 px-1 py-1 dark:bg-gray-700 placeholder:text-gray-200" id="codeTransaksi" value={values.codeTransaksi}  disabled/>
                <Label className="m-2">Tanggal</Label>
                {errors.tgl && <p className="italic text-red-500">{errors.tgl}</p>}
                <Input type="Date" id="tgl" value={values.tgl} onChange={handleChange} className="bg-gray-300 px-1 py-1"/>
                <Label>Barang</Label>
                {errors.barang_id && <p className="italic text-red-500">{errors.barang_id}</p>}
                <select className="rounded-lg dark:bg-gray-600 dark:text-gray-50 focus:outline-none focus:ring focus:ring-blue-300" value={values.barang_id} onChange={handleChange} id="barang_id">
                    <option>Tidak memilih</option>
                    {Barang.map((barang, index) => ( 
                        <option key={index} value={barang.id}>{barang.name}</option>
                    ))}
                </select>
                <Label>Customer</Label>
                {errors.customer_id && <p className="italic text-red-500">{errors.customer_id}</p>}
                <select className="rounded-lg dark:bg-gray-600 dark:text-gray-50 focus:outline-none focus:ring focus:ring-blue-300" value={values. customer_id} onChange={handleChange} id="customer_id">
                    <option>Tidak memilih</option>
                    {Customer.map((customer, index) => ( 
                    <option key={index} value={customer.id}>{customer.name}</option>
                    ))}
                </select>
                <Label className="m-2">Jumlah barang</Label>
                {errors.jumlah_pesanan && <p className="italic text-red-500">{errors.jumlah_pesanan}</p>}
                {flash.jumlah && <p className="italic text-red-500">{flash.jumlah}</p>}
                <Input type="number" className="bg-gray-300 px-1 py-1 dark:bg-gray-700 placeholder:text-gray-200" id="jumlah_pesanan" onChange={handleChange} value={values.jumlah_pesanan}/>
                <Label className="m-2">Ongkir</Label>
                {errors.ongkir && <p className="italic text-red-500">{errors.ongkir}</p>}
                {flash.nominal_ongkir && <p className="italic text-red-500">{flash.nominal_ongkir}</p>}
                <Input type="number" className="bg-gray-300 px-1 py-1 dark:bg-gray-700 placeholder:text-gray-200" id="ongkir" onChange={handleChange} value={values.ongkir}/>
                <div className="py-4">
                    <Button type="submit">Submit</Button>
                    <Link href={route("sales.index")} className="inline-flex items-center px-4 py-2 bg-gray-50 border border-transparent rounded-md font-semibold text-xs text-black uppercase tracking-widest active:bg-gray-900 transition ease-in-out duration-150 mx-2">Cancel</Link>
                </div>
        </form>
    )
}
InputSales.layout = page => <Form children={page} formClassName="lg:w-1/4 w-3/4" header="Input Transaksi" />
export default InputSales