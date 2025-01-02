import Button from '@mui/material/Button';



function Hero() {
  return (
    <main>
      <section className="mt-24">
        <div className="container mx-auto">
          <div className="flex gap-1 items-center justify-between">
            <div className="max-w-[600px]">
              <p className='text-[40px] font-bold'>Yummy</p>
              <p className='text-[17px] font-serif mb-3'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima cumque earum qui a itaque odit, amet rem, quidem doloribus optio incidunt eos rerum, impedit quas mollitia atque suscipit corporis ratione tenetur explicabo vero inventore id corrupti illo? Rerum, dolore nihil?</p>
              <Button variant="contained" style={{background: "pink", color: "#000", fontFamily: "sans-serif",fontWeight: "bold"}}>Learn more</Button>
            </div>
            <div className="w-[600px]">
              <img src="https://arthurs.lk/wp-content/uploads/2019/12/sasuage-min.png" alt="" />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Hero