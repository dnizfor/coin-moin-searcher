
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';

const axios = require('axios').default;



export default function Home() {

    const [coins, setCoins] = useState([])
    const [filtre, setFiltre] = useState("")



    const filtered = coins.filter((item)=>{
        return item["id"].includes(filtre.toLocaleLowerCase())
    })
    console.log("list",filtered)



    useEffect(() => {

        axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
            .then(function (response) {
                // handle success
                setCoins(response.data)
               


            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .then(function () {
                // always executed
            });

    }, [])
    
    

    const changeHandler = (e) => {

        setFiltre(e.target.value)

        
    }

    return (
        <div className="container-sm ">
            <div className="row  text-center mt-3">
                <h1>Coin Moin Searcher</h1>
            </div>

            <div>
                <label>
                    Search Coin:  <input onChange={changeHandler}></input>
                </label>
               

            </div>
         



            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">24h%</th>
                        <th scope="col">Price</th>
                        <th scope="col">Market Cap</th>
                        <th scope="col">Volume</th>
                        <th scope="col">Circulating Supply</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        filtered.map((coin, index) => (




                            
                            <tr key={index}>
                                <Link style={{color: "black" , textDecoration:"none" }}  to={"coin/"+coin.id}><th scope="row">{index + 1}</th></Link>
                                <td><Link style={{color: "black" , textDecoration:"none" }}  to={"coin/"+coin.id}><th scope="row">{coin.id}</th></Link></td>
                                <td>$ {coin.price_change_24h}</td>
                                <td>$ {coin.current_price}</td>
                                <td>$ {coin.market_cap}</td>
                                <td>$ {coin.total_volume}</td>
                                <td>{coin.circulating_supply}</td>
                            </tr>
                           







                        ))
                    }
                </tbody>
            </table>

        </div >
    )
}
