import React, { useState } from 'react'
import { data } from './data'
const Person = () => {
  const [person, removePeorson] = useState(data)
  const removeItem = (index) => {
    console.log(index)
    removePeorson((item) => {
      let newPeople = item.filter((person) => person.id !== index)
      console.log(item)
      console.log(index)

      return newPeople
    })
  }
  return (
    <>
      <h1>{person.length} birthdays today</h1>
      {person.map((person) => {
        const { id, name, age, imge } = person
        return (
          <article key={id}>
            <img src={imge} alt='' />
            <div className='info'>
              <h4>{name}</h4>
              <p>{age}</p>
            </div>
            <div className='remove'>
              {/* wethout () 'barnces الفنكشن هتشتغل علي طول لازم تقوله لما هدوس هلي الباتون هيحصل فنكشن معنيه لاكن من غير ال بارنسيس هيخش ينفض النفنكش علي طول' */}
              <button onClick={() => removeItem(id)}>remove</button>
            </div>
          </article>
        )
      })}
      <button
        className='clear'
        onClick={() => {
          removePeorson([])
        }}
      >
        clear all
      </button>
    </>
  )
}

export default Person
