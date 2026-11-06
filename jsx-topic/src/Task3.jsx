import React, { Component } from 'react'

export default class Task3 extends Component {

    render() {
        let cars = [
            {
                id: 1,
                carName: "BMW",
                carPrice: 1000000,
                image: "https://www.evoindia.com/h-upload/2026/03/18/466294-p90632225highresthe-new-bmw-i3-50-xd-1.webp"
            },
            {
                id: 2,
                carName: "Polo ",
                carPrice: 850000,
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRj_x42GZiNZFoaE5ZLvq7VJCy9QDWdDhR9X5jdJb-cO5EmwiG8743ORUY&s=10"
            },
            {
                id: 3,
                carName: "Altroz",
                carPrice: 1250000,
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReYki8h8rBD2yH3X6nsAEMhbPq32-EPnuNyGq5K4alzd-cNeXEW1TjODTJ&s=10"
            },
            {
                id: 4,
                carName: "Crysta ",
                carPrice: 2650000,
                image: "https://media.zigcdn.com/media/model/2026/Oct/toyota--innova-crysta-123457_600x400.jpg"
            }

            ,
            {
                id: 5,
                carName: "Thar OG ",
                carPrice: 1650000,
                image: "https://www.team-bhp.com/sites/default/files/styles/check_high_res/public/Thar%20OG%20Front.png"
            }
        ]
        let randonCar=cars[Math.floor(Math.random()*cars.length)]
        console.log(randonCar)
        return (
            <div>
                    <h2>{randonCar.carName}</h2>
                    <img src={randonCar.image} alt=""  height={350} width={500}/>
            </div>
        )
    }
}
