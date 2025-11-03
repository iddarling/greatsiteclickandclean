// backend/server.js
import express from "express"
import cors from "cors"
import mongoose from "mongoose"
import dotenv from "dotenv"

dotenv.config()

const app = express()
app.use(cors())
app.use(express.json())

// Подключаемся к MongoDB
mongoose.connect(process.env.MONGO_URI || "mongodb://localhost:27017/clickclean")
  .then(() => console.log("✅ MongoDB подключен"))
  .catch(err => console.error("Ошибка MongoDB:", err))

// Модель заказа
const orderSchema = new mongoose.Schema({
  clientName: String,
  address: String,
  district: String,
  timeSlot: String,
  status: { type: String, default: "Новый" },
})
const Order = mongoose.model("Order", orderSchema)

// CRUD API
app.get("/api/orders", async (_, res) => res.json(await Order.find()))
app.post("/api/orders", async (req, res) => res.json(await Order.create(req.body)))
app.put("/api/orders/:id", async (req, res) => res.json(await Order.findByIdAndUpdate(req.params.id, req.body, { new: true })))
app.delete("/api/orders/:id", async (req, res) => {
  await Order.findByIdAndDelete(req.params.id)
  res.json({ success: true })
})

// Запуск сервера
const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log(`🚀 API запущен на http://localhost:${PORT}`))
