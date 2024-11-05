import { v4 } from "uuid"
import { Claim, Policy } from "../types/redux"

export const initialPolicy: Policy = {
  price: 1000,
  created_at: new Date(),
  id: v4(),
  age: 45,
  name: "Jo",
}

export const initialClaim: Claim = {
  amount: 1000,
  approved: true,
  created_at: new Date(),
  id: v4(),
  policy_id: initialPolicy.id,
}
