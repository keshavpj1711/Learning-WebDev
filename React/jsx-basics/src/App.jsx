function App() {
  const name = "Keshav";
  const imageClass = "size-40 object-cover rounded-md";

  return (
    <>
      <div className="flex flex-col gap-5 h-screen">
        <div className='flex flex-col justify-center items-center gap-2 grow'>
          <h1 className='text-6xl'>{name} is learning JSX</h1>
          <h3 className='text-3xl'>Your random number is: {Math.floor(Math.random() * 11)}</h3>
        </div>

        <div className="flex flex-col grow gap-2">
          <div className="text-3xl flex justify-center">
            My Favorite Food:
          </div>
          <div className="flex gap-4 justify-center">
            <img src="https://www.secondrecipe.com/wp-content/uploads/2017/08/rajma-chawal-1.jpg" alt="" className={imageClass}/>
            <img src="https://cdn.zeptonow.com/production///tr:w-600,ar-100-100,pr-true,f-auto,q-80/web/recipes/matar-panner.png" alt="" className={imageClass}/>
            <img src="https://www.cubesnjuliennes.com/wp-content/uploads/2020/07/Chicken-Biryani-Recipe.jpg" alt="" className={imageClass}/>
          </div>
        </div>

        <footer className="flex justify-center min-h-16">
          Created by: {name} Copyright {new Date().getFullYear()}
        </footer>
      </div>
    </>
  )
}

export default App
