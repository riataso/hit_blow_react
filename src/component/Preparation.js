import React from 'react'


const Preparation = () => {
  return (

    <div>
      <h1>4桁の数字を選択してください</h1>
      <div className="spinner_area">
        <input type="number" value=" " class="counter1" data-max="500" data-min="0" />
        <input type="button" value="+" class="btnspinner" data-cal="1" data-target=".counter1" />
        <input type="button" value="-" class="btnspinner" data-cal="-1" data-target=".counter1" />
      </div>

    </div>
  )
}

export default Preparation