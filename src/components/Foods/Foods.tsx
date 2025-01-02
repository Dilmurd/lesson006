import axios from "axios"
import { useEffect, useState } from "react"
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';

function Foods() {
    interface Recipe {
        id: number;
        image: string;
        name: string;
        ingredients: string[];
        rating: number;
    }

    const [data, setData] = useState<Recipe[]>([])

    useEffect(()=> {
        axios
          .get("https://dummyjson.com/recipes?limit=28")
          .then(res => {
            setData(res.data.recipes) 
            console.log(res.data.recipes);
                       
          })
          
    },[])
  return (
    <main>
        <section className="mt-40">
            <div className="container mx-auto">
                <div className="flex flex-wrap justify-between">
                    {data?.map((item)=> (
                    <div className="mb-4 w-[350px] bg-slate-500 rounded-lg" key={item.id}>
                        <img src={item.image} className="w-full rounded-lg " alt={item.name} />
                        <div className="p-2 flex flex-col">
                        <p>{item.name}</p>
                        <p>Ingredients: {item.ingredients[1]}</p>
                        <Box sx={{ '& > legend': { mt: 2 } }}>
                        <Rating name="read-only" value={item.rating} readOnly />
                        </Box>
                        <Button variant="contained" style={{padding: "5px",background: "pink",color: "#000", fontWeight: "bold", fontSize: "16px"}}>Go Pizza</Button>
                        </div>
                    </div>
                    ))}
                </div>
                <div className="text-center mt-3">
                <Button variant="contained" style={{background: "pink",color: "#000", fontWeight: "bold"}}>See More</Button>
                </div>
            </div>
        </section>
    </main>
  )
}

export default Foods