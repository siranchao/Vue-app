import posts from "@/data/MOCK_DATA.json"
import { IncomingMessage, ServerResponse } from 'http'

export default function (req: IncomingMessage, res: ServerResponse) {
    const { pathname } = new URL(req.url!, `http://${req.headers.host}`)
    const id = pathname.split('/')
    console.log(id)
    return posts.find(post => post.acroynm == id[3])
}