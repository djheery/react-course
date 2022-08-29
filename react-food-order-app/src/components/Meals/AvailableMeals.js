import React, { useEffect,useState } from 'react';
import classes from './AvailableMeals.module.css'
import MealItem from './MealItem'
import Card from '../UI/Card/Card';
import useHttp from '../../hooks/use-http';

const DUMMY_MEALS = [
  {
    id: 'm1',
    name: 'Sushi',
    description: 'Finest fish and veggies',
    price: 22.99,
  },
  {
    id: 'm2',
    name: 'Schnitzel',
    description: 'A german specialty!',
    price: 16.5,
  },
  {
    id: 'm3',
    name: 'Barbecue Burger',
    description: 'American, raw, meaty',
    price: 12.99,
  },
  {
    id: 'm4',
    name: 'Green Bowl',
    description: 'Healthy...and green...',
    price: 18.99,
  },
];

const AvailableMeals = () => {
  const {isLoading, isError, makeRequest: getMeals} = useHttp();
  const [mealsList, setMeals] = useState([]);


  useEffect(() => {
    const transformMeals = (mealData) => {
      const loadedMeals = [];
      for(const meal in mealData) {
        loadedMeals.push({
          id: mealData[meal].id,
          name: mealData[meal].name,
          description: mealData[meal].description,
          price: mealData[meal].price
        })
      }
  
      setMeals(loadedMeals.map(m => <MealItem 
                                      key={m.id}
                                      id={m.id}
                                      name={m.name}
                                      description={m.description}    
                                      price={m.price}
                                    />));
    }
    

    getMeals({url: "https://react-http-bf88b-default-rtdb.firebaseio.com/meals.json"}, transformMeals);
  },[])


    const getContent = () => {
      if(!isLoading && isError)
        return <p>There has been an error</p>;
      if(!isLoading && mealsList.length === 0)
        return <p>No Meals found</p>
      if(isLoading && !isError)
        return <p>Meal List loading</p>
      
      return mealsList;
    }


    return (
      <section className={classes.meals}>
        <Card>
          <ul>
            {getContent()}
          </ul>
        </Card>
      </section>
    )


}

export default AvailableMeals;