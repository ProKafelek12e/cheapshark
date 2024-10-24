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
    <Card className='w-1/4'>
        <CardHeader className='relative'>
            {game.thumb &&<span className="w-full h-[100px] relative"><Image src={game.thumb} alt={game.internalName} fill={true} objectFit="contain"/></span>}
            <CardTitle>{game.title}</CardTitle><span className='absolute right-3 top-3 bg-[#FFFFFFDA] text-black rounded-[100px] p-1 flex flex-col justify-center items-center'>{(parseFloat(game.dealRating)>=9?<Flame color="red"/>:game.dealRating)}</span>
        </CardHeader>
        <CardContent>
            <p>{game.salePrice}$ <span className="line-through">{game.normalPrice}$</span></p><br></br>
            <p>{parseInt(game.savings)}%</p>
        </CardContent>
        <CardFooter>
            <p>Card Footer</p>
        </CardFooter>
    </Card>
  )
}
