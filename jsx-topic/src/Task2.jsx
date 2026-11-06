import React, { Component } from 'react'

export default class Task2 extends Component {

    render() {
        let food = [
            {
                id: 1,
                foodName: "Chicken Biryani",
                foodPrice: 150,
                foodDescription: "Chicken biryani is a classic, aromatic mixed rice dish made with tender chicken, aged basmati rice, and a rich blend of whole and ground spices",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgV2p9KzdyZSBfaa-9QswpoddygNBXgsjzPChMGhbFWTTLw9Wnq8LHilWj&s=10"
            },
            {
                id: 2,
                foodName: "Masala Dosa",
                foodPrice: 80,
                foodDescription: "Masala dosa is a dish of South India, consisting of a savoury dosa crepe stuffed with a spiced potato stir fry. It is a popular breakfast item in South India, though it can be served at all times of the day and found in many other parts of the country and overseas",
                image: "https://myfoodstory.com/wp-content/uploads/2025/08/Mysore-Masala-Dosa-Recipe-3.jpg"
            },
            {
                id: 3,
                foodName: "puliyogare",
                foodPrice: 50,
                foodDescription: "Pulihora, also known as Pulisoru, Pulinchoru, Puliyogare, Puliyodarai, Ambad Baath, Kokum rice, or simply Tamarind rice, is a common and traditional rice preparation in the South Indian states of Andhra Pradesh, Telangana, Tamil Nadu and Karnataka.",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmNdNndlvUIbRnwQQ48lFvqsybEA5KUpQ7ln1TL_ApN50N9HHM7Sgv0c8&s=10"
            },
            {
                id: 4,
                foodName: "Ragi mudde",
                foodPrice: 60,
                foodDescription: "Ragi mudde, ragi sangati or ragi kali, colloquially simply referred to as either mudde or hittu which means 'lump' or 'dough', is a finger millet swallow dish from South India. In Rayalaseema Region in Andhra Pradesh it is called Ragi Sangati. In Tamil Nadu, it is called ragi kali.",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7qTtZvTU2bTKm2mh8RKrfMsf-ZCdbKhiGGJcjtT823RnfMgDTxYPLza8&s=10"
            }
        ]
        return (
            <div>
                {
                    food.map((f) => {
                        console.log(f)
                        return (
                            <>
                                <h1>{f.foodName}</h1>
                                <img src={f.image}  height={150} width={150} alt="" />
                                <p>{f.foodDescription}</p>
                            </>
                        )
                    })
                }
            </div>
        )
    }
}
