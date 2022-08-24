import {cats} from "../../../catsData"

export default function handler(req, res) {
  res.status(200).json(cats)
}