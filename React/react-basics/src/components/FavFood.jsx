function FavFood() {
  const rajma = "https://www.secondrecipe.com/wp-content/uploads/2017/08/rajma-chawal-1.jpg"
  const paneer = "https://cdn.zeptonow.com/production///tr:w-600,ar-100-100,pr-true,f-auto,q-80/web/recipes/matar-panner.png"
  const biryani = "https://www.cubesnjuliennes.com/wp-content/uploads/2020/07/Chicken-Biryani-Recipe.jpg"
  const imageClass = "size-40 object-cover rounded-md"

  return (
    <div className="flex flex-col grow gap-2">
      <div className="text-3xl flex justify-center">
        My Favorite Food:
      </div>
      <div className="flex gap-4 justify-center">
        <img src={rajma} alt="" className={imageClass} />
        <img src={paneer} alt="" className={imageClass} />
        <img src={biryani} alt="" className={imageClass} />
      </div>
    </div>
  )
}

export default FavFood;