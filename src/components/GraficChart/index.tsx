import { useState, useEffect } from "react";
import Chart from "react-apexcharts";
import { pokemonApi, PokemonType } from "../../api/routes/PokedexApi"

export function GraficChart() {
    const [pokemons, setPokemons] = useState<PokemonType[]>([])
    
        useEffect(() => {
            getPokemons()
        }, [])

        const getPokemons = async () => {
            const response = await pokemonApi.getPokemon()
            setPokemons(response.data)
        }
    
    const [options, setOptions] = useState({
        options: {
        chart: {
            id: "basic-bar",
        },
        xaxis: {
            categories: ['ATK', 'DEF', 'HP', 'SPATK', 'SPDEF', 'SPEED'],
        },
        plotOptions: {
            bar: {
            borderRadius: 4,
            borderRadiusApplication: "end",
            horizontal: true,
            },
        },
        },
        series: [
        {
            name: "series-1",
            data: [40, 40, 45, 50, 49, 60, 70, 91],
        },
        ],
    });    

    return (
        <div className="app">
        <div className="row">
            <div className="mixed-chart">
            <Chart
                options={options.options}
                series={options.series}
                type="bar"
                width="500"
            />
            </div>
        </div>
        </div>
    );
}
