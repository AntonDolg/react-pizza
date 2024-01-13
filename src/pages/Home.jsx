import React from 'react';

import Categories from '../components/Categories';
import Sort from '../components/Sort';
import PizzaBlock from '../components/PizzaBlock/index';
import Skeleton from '../components/PizzaBlock/Skeleton';

function Home() {
    const[items,setItems]=React.useState([]);
    const[isLoading,setIsLoading]=React.useState(true);
    // https://6595a81d04335332df831c53.mockapi.io/items
    React.useEffect(()=>{
        fetch('https://6595a81d04335332df831c53.mockapi.io/items').then((res)=>{
        return res.json();
        }).then((arr)=>{
        console.log(arr);
        setItems(arr);
        setIsLoading(false);
        });
    },[]);
    return(
        <div className="container">
            <div className="content__top">
                <Categories />
                <Sort />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {
                isLoading?
                [...Array(7)].map((i)=><Skeleton key={i}/>):
                items.map((obj,i)=>(
                // <PizzaBlock
                // title={obj.title}
                // price={obj.price}
                // imageUrl={obj.imageUrl}
                // sizes={obj.sizes}
                // types={obj.types}/>
                <PizzaBlock key={obj.id} {...obj} />
                ))}
                {/* <PizzaBlock title="Пепперони" price={450}/>
                <PizzaBlock title="Сырная" price={400}/>
                <PizzaBlock title="Жульен" price={550}/>
                <PizzaBlock title="Домашняя" price={550}/>
                <PizzaBlock title="Римская" price={500}/>
                <PizzaBlock title="Острая" price={450}/>
                <PizzaBlock title="Мясная" price={600}/>
                <PizzaBlock title="Ветчина-грибы" price={550}/>
                <PizzaBlock title="Ананасовая" price={450}/> */}
            </div>
        </div>);
}

export default Home;