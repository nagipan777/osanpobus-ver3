export default function handler(req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*"); // CORS 設定
    res.status(200).json({ message: "Hello from Vercel!" });
  }