import type { ObjectId } from "mongodb"

export interface Association {
  _id?: ObjectId
  userId?: ObjectId
  name: string
  email: string
  phone: string
  description: string
  category: string
  members?: number
  address: string
  city: string
  postalCode: string
  country: string
  website?: string
  logoUrl?: string
  rib: string
  status: "pending" | "approved" | "rejected"
  createdAt: Date
  updatedAt: Date
}

export interface User {
  _id?: ObjectId
  email: string
  passwordHash: string
  role: "admin" | "association"
  createdAt: Date
  updatedAt: Date
}

export interface Subscription {
  _id?: ObjectId
  associationId: ObjectId
  stripeSubscriptionId?: string
  status: "active" | "cancelled" | "past_due"
  currentPeriodStart?: Date
  currentPeriodEnd?: Date
  createdAt: Date
  updatedAt: Date
}

export interface Donation {
  _id?: ObjectId
  associationId: ObjectId
  donorEmail?: string
  amount: number
  currency: string
  stripePaymentIntentId?: string
  status: "pending" | "completed" | "failed"
  createdAt: Date
}
