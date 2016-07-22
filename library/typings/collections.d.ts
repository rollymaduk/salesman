/**
 * Created by rolly_000 on 7/5/2016.
 */
interface Channel{
    name:string,
    description?:string,
    owner?:string,
    subscribers?:string[]
}
interface Product{
    name:string,
    description?:string,
    price?:number,
    photo?:string,
    tags?:string[],
    owner?:string,
    channel?:string
}
interface Inventory{
    product:string,
    quantity:number,
    owner?:string,
    channel?:string,
}
interface Transaction{
    inventory:string,
    changedQty:number,
    price:number,
    owner?:string,
    status?:string,
    channel?:string
}
interface Route{
    name:string,
    customers?:string[],
    tags?:string[],
    subscribers?:string[],
    channel?:string
}
interface CustomerProfile{
    title:string,
    firstName:string,
    lastName:string,
    "D.O.B"?:Date,
    telephones?:string[],
    emails?:string[],
    channel?:string
}
interface Customer{
    name:string,
    contacts:CustomerProfile[],
    photo?:string,
    location?:string,
    channel?:string
}
