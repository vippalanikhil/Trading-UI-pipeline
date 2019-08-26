import React, { Component } from 'react'
import url from '../../config.json'
import axios from 'axios'
// const {BarChart, Bar, XAxis, YAxis, Cell, CartesianGrid, Tooltip, Legend} = recharts;
import './Trending.css'
export class Trending extends Component {
    constructor(props){
        super(props)
        this.state={
            allStocksList:[{
                stockName: 'Hero',
                crisilRating: 5
            },
            {
                stockName: "Suzuki motors",
                crisilRating: 4
            },
            {
                stockName: "Reliance",
                crisilRating: 3
            },
            {
                stockName: "HCL",
                crisilRating: 6
            },
            {
                stockName: "Bajaj Auto",
                crisilRating: 2

            }
            ]
        }
    }
    componentDidMount() {
        axios.get(`${url.urlMahesh}/getTrending`)
            .then(res => {
                console.log("res inside component did mount get all stocks", res)
                if (res.status === 200 && res.data.status==="SUCCESS" ){   
                    console.log("inside success")
                    this.setState({
                        allStocksList: res.data.data
                    },()=>{
                        console.log("all stock after set state", this.state.allStocksList)
                    });
                } else {
        
                }
            })
    }
    render() {
        return (
            <div>
                <h2>Trending Stocks</h2>
                <table className="breachtable">
                            <thead className="tableheading">
                                <tr>
                                    <th scope="col">Stock Name</th>
                                    <th scope="col">CRISIL Rating</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.allStocksList.map((each, index) => (
                                        <tr className="datarow" scope="row">
                                            <td> {each.stockName}</td>
                                            <td> {each.crisilRating  }</td>
                                        </tr>
                                    ))
                                }

                            </tbody>
                        </table>
                
            </div>
        )
    }
}

export default Trending
