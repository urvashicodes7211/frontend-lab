import React from 'react'

function Ternary() {
  let rec = ["movie1", "movie2" , "tv_show3"];
  return(
    rec.length > 0 ? rec : "not rec"
  )
  
}

export default Ternary