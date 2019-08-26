import React, { Component } from 'react'
import './Purchase.css'
import axios from 'axios'
import url from '../../config.json'
export class Purchase extends Component {
    constructor(props) {
        super(props);
        this.state = {
            initialState: {
                stockList:[{
                    name:'Hero',
                    unitPrice: '1100',
                    stockExchange: 'NSE'
                }]
               
            },
            allStocksList:[]
           
           
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleCancel = this.handleCancel.bind(this);
        

    }
    handleChange(e) {
        this.setState({ [e.target.id]: e.target.value }, () => {
            // localStorage.setItem("data",this.state.emailId)
        });

    }
    componentDidMount() {
        axios.get(`${url.url}/getAllStocks`)
            .then(res => {
                console.log("res inside component did mount get all movies", res)
                if (res.status === 200 && res.data.status === "SUCCESS"){
                    this.setState({
                        allStocksList: res.data.data
                    });
                } else {
        
                }
            })
    }
    handleSubmit(e) {
        e.preventDefault()
        this.validate().then((res) => {
            console.log("res", res)
            const { movieId, theatreId, date } = this.state
            const movie = {
                movieId: movieId,
                theatreId: theatreId,
                date: date
            };
            this.props.history.push({
                pathname: '/search-result',
                
            })
            if (res) {
                this.getData(movie).then((response) => {
                    if (response.status === 200 && response.data.status === "SUCCESS") {
                        this.props.validateUser(true);
                        this.props.history.push({
                            pathname: '/search-result',
                            state:{data: response.data.data, date: this.state.date}
                        })
                    } else{
                        alert(`Sorry we do not find any movies available on this date`);
                    }
                  })
                }
        });

    }
    onTheatreChange(e) {
        this.setState({
            theatreId: this.state.allTheatreList[e.target.value - 1].theatreId,
            theatreName: this.state.allTheatreList[e.target.value - 1].theatreName
        })

    }
    onStockChange(e) {

        this.setState({
            movieId: this.state.allMoviesList[e.target.value - 1].movieId,
            movieName: this.state.allMoviesList[e.target.value - 1].movieName
        })

    }
    handleCancel(e) {
        e.preventDefault();
        this.setState(() => this.initialState)
        document.getElementById("searchform").reset();
        console.log("state after reset", this.state)
    }
    getData(movie) {
        return new Promise((resolve, reject) => {
            axios.get(`${url.urlmahesh}/searchMovie/${movie.movieId}/${movie.theatreId}`)
                .then(res => {
                    resolve(res)
                }).catch(err => {
                    reject(err)
                })
        });
    }
    validate() {
        console.log("Inside validate")
        let isValid = true;
        const errors = {
            dateError: ''
        }
        var UserDate = this.state.date
        var ToDate = new Date();

        // if (this.state.date && new Date(UserDate).getTime() >= ToDate.getTime()) {
        //     console.log("Date is valid")
        // } else {
        //     isValid = false;
        //     errors.dateError = "Please select valid date either today or future date"
        // }


        this.setState({
            ...this.state,
            ...errors
        })
        console.log("isValid inside validate", isValid)
        return Promise.resolve(isValid);

    }
    render() {
        let stockList = this.state.initialState.stockList.map((item, i) => {
            return (
                <option key={i} value={item.movieId}>{item.movieName}</option>
            )
        }, this);
      
        return (
            <div>
                <header >
                    <h2> Buy Stocks</h2>
                </header>
                <form id="purchaseform" className="purchaseform">
                    <div className="form-group">
                        <br></br>
                        <div className="form-group col-xs-3">
                            <label htmlFor="stockName" style={{ "font-weight": "bold" }}>Select the stock</label>
                            <br></br>
                            <select
                                className="form-control"
                                id="stockName"
                                onChange={this.onStockChange}
                            >
                                <option>select</option>
                                {stockList}
                            </select>
                        </div>
                    </div>
                    <br></br>
                    <span>
                        <button id="submitsearch" type="submit" className="but" onClick={this.handleSubmit}>Buy</button>
                    </span>
                    <span>&nbsp;&nbsp;
                <button id="submitcancel" type="submit" className="but" onClick={this.handleCancel}>Cancel</button>
                    </span>

                </form>
            </div>
        )
    }
}

export default Purchase
