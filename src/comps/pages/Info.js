import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import axios from 'axios';


export default function Info() {

    const [data, setData] = useState("")


    let { id } = useParams();


    useEffect(() => {



        axios.get(`https://api.coingecko.com/api/v3/coins/${id}`)
            .then(function (response) {
                // handle success
                setData(response.data.description.en)
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .then(function () {
                // always executed
            });

    }, [])

    function stripTags (original) {
        return original.replace(/(<([^>]+)>)/gi, "");
      }


    return (
        <div>
             
            <div className="container-sm  ">

                <div className="row mt-5 mb-5">

                    <p className="display-5">{id}</p>

                </div>
                <div className="row mt-5">

                   {
                       
                       
                      stripTags(data)
                       
                   
                   }
                    

                </div>

            </div>

            


        </div >
    )
}
