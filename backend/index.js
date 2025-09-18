import express from "express";
import dotenv from "dotenv";
import cors from "cors";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json()); // สำหรับ POST

// mock data
const data = [
  { id: 1, name: "Item A", value: 10 },
  { id: 2, name: "Item B", value: 20 },
  { id: 3, name: "Item C", value: 30 },
];

//  ดึงรายการทั้งหมด
app.get("/api/items", (req, res) => {
  res.json(data);
});

// ดึงสรุปข้อมูล (จำนวน, ยอดรวม)
app.get("/api/summary", (req, res) => {
  const totalItems = data.length;
  const totalValue = data.reduce((sum, item) => sum + item.value, 0);

  res.json({
    totalItems,
    totalValue,
  });
});

app.listen(PORT, () => {
  console.log("Backend running at http://localhost:" + PORT);
});
