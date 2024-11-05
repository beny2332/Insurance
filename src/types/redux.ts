export interface Claim{
    id: string
    policy_id: string
    approved: boolean
    amount: number
    created_at: Date
}

export interface Policy{
    id: string
    name: string
    created_at: Date
    price: number
    age: number
}

export interface GenericPayload{
    id?:string
    amount?:number
    price?:number
    policy_id?:string

}

