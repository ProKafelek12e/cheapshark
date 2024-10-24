import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import Image from "next/image"
import { Flame } from "lucide-react"
export default function DealCard({game}) {
  return (
    <Card className='w-1/5'>
        <CardHeader>
            {game.thumb &&<span className="w-full h-[100px] relative"><Image src={game.thumb} alt={game.internalName} fill={true} objectFit="contain"/></span>}
            <CardTitle>{game.title}</CardTitle><span>{parseFloat(game.dealRating)>=9 && <Flame color="red"/>}{game.dealRating}</span>
        </CardHeader>
        <CardContent>
            <p>Card Content</p>
        </CardContent>
        <CardFooter>
            <p>Card Footer</p>
        </CardFooter>
    </Card>
  )
}
