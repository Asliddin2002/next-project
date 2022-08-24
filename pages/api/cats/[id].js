import {cats} from "../../../catsData"

export default function handler(req, res) {
    const { id } = req.query
    const cat = cats.find((cat) => cat.id === Number(id))
  res.status(200).json(cat)
}