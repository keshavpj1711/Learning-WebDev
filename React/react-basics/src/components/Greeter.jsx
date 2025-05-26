function Greeter() {
  const getHour = new Date().getHours();
  let displayText = "";
  let color;
  function getGreetings(hour) {
    if (hour >= 0 && hour < 12) {
      displayText = "Morning";
      color = "red";
    } else if(hour >= 12 && hour < 18){
      displayText = "Afternoon";
      color = "green";
    } else {
      displayText = "Night"
      color = "blue";
    }
  }

  return (
    <div className="grow">
      <div>
        <div className="text-2xl flex justify-center">
          Current Hour: {getHour}{getGreetings(getHour)}
        </div>
        {console.log(color)}
        <div className={"text-3xl flex justify-center text-"+ color +"-600"}>
          Good {displayText}!!
        </div>
      </div>
    </div>
  )
}

export default Greeter;