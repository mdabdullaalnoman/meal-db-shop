import React, { useEffect, useState } from 'react';
import ShowMeal from './ShowMeal';

const Meal = () => {
    const [meal , setMeal] = useState([]);

    useEffect( () => {
        fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
        .then( res => res.json())
        .then (data => setMeal(data.categories))

        .catch(err => console.log(err))
    },[])
    return (
        <div className="grid grid-cols-3 gap-4 place-items-center text-center">
            {
                meal.map( meal => <ShowMeal meal={meal} key={meal.idCategory}></ShowMeal>)
            }
        </div>
    );
};

export default Meal;