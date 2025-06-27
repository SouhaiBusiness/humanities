// MongoDB setup script
// Run this with: node scripts/mongodb-setup.js

const { MongoClient } = require("mongodb")

const uri = process.env.MONGODB_URI || "mongodb://localhost:27017"
const dbName = "humanities"

async function setupDatabase() {
  const client = new MongoClient(uri)

  try {
    await client.connect()
    console.log("Connected to MongoDB")

    const db = client.db(dbName)

    // Create collections
    await db.createCollection("users")
    await db.createCollection("associations")
    await db.createCollection("subscriptions")
    await db.createCollection("donations")

    // Create indexes
    await db.collection("associations").createIndex({ status: 1 })
    await db.collection("associations").createIndex({ category: 1 })
    await db.collection("associations").createIndex({ city: 1 })
    await db.collection("associations").createIndex({ name: "text", description: "text" })

    await db.collection("subscriptions").createIndex({ associationId: 1 })
    await db.collection("subscriptions").createIndex({ status: 1 })

    await db.collection("donations").createIndex({ associationId: 1 })

    // Create admin user
    const adminUser = {
      email: "admin@humanities.org",
      passwordHash: "$2b$10$example_hash", // Replace with actual hashed password
      role: "admin",
      createdAt: new Date(),
      updatedAt: new Date(),
    }

    await db.collection("users").insertOne(adminUser)

    console.log("Database setup completed successfully!")
  } catch (error) {
    console.error("Error setting up database:", error)
  } finally {
    await client.close()
  }
}

setupDatabase()
