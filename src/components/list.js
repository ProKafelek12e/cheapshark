"use client"
import {useEffect, useState } from 'react'
import { Skeleton } from "@/components/ui/skeleton"
import DealCard from '@/components/cards'
export default function List() {
    const [load,setLoad] = useState(true)
    const [deals,setDeals] = useState()
    useEffect(()=>{
        const getDeals = async ()=>{
            try{
                const response = await fetch('https://www.cheapshark.com/api/1.0/deals?storeID=1&upperPrice=15&pageSize=1000')
                const games = await response.json()
                console.log(games)
                setDeals(games)
            }
            catch{

            }
            finally{
                setLoad(false)
            }
        }
        getDeals()
    },[])
  return (
    <div>
        {(load==true?
        <>
            <Skeleton className="h-4 w-[80vw]" />
            <Skeleton className="h-4 w-[80vw]" />
        </>:       
                    <div className='flex flex-row flex-wrap w-full relative justify-around gap-1'>
                    {deals.map((deal,idx)=>(
                        <DealCard key={deal} game={deal}/>
                    ))}
                    </div>)}
        {console.log(deals)}
    </div>
  )
}
