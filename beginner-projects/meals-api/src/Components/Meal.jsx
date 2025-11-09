import React from 'react'
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react'
import '../index.css'

const Meal = () => {
    const [items,setItems]=useState([]);

    useEffect(()=>{
        axios.get("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood")
        .then((res)=>{
            setItems(res.data.meals);
        })
        .catch((err)=>{
            console.log(err);
        })
    })
    const itemList = items.map(({strMeal,strMealThumb,idMeal})=>{
        return (
            <section className='card'>
                <img src={strMealThumb} alt="meal Image" />
                <section className='content'>
                    <p>{strMeal}</p>
                    <p>{idMeal}</p>
                </section>
            </section>
        )
    })
  return (
    <div className='items-container'>
        {itemList}
    </div>
  )
}

export default Meal