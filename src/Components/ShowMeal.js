import React from 'react';
import { useHistory } from 'react-router';

const ShowMeal = (props) => {
    const { strCategory, strCategoryDescription, strCategoryThumb } = props.meal;
    console.log(props.meal);
    const history = useHistory();
    const handleClick = () => {
        history.push(`mealDetails`)
    }
    return (
        <div>
            <div>
                <img src={strCategoryThumb} alt="meal-img" />
            </div>
            <button onClick={handleClick} className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 px-5 py-2 rounded-lg text-gray-100 font-bold">see details</button>
        </div>
    );
};

export default ShowMeal;