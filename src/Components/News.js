import React, { Component } from 'react'
import NewsItems from './NewsItems'

export default class News extends Component {
    constructor() {
        super();
        this.state = {
            articles: [],
            loading: false,
            page:1
        }
    }
    async componentDidMount(){
        let url = "https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=949a7ca84df3421f8f30a95b0613fedc&page=1&pageSize=9"
        let data = await fetch(url);
        let parsedata = await data.json();
        this.setState({articles : parsedata.articles, totalResults : parsedata.totalResults})
    }
    showNext= async ()=>{
        // if((this.state.page+1) > Math.ceil(this.State.totalResults/9)){
                  
        // }
        // else{
            let url = `https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=949a7ca84df3421f8f30a95b0613fedc&page=${this.state.page-1}&pageSize=9`
            let data = await fetch(url);
            let parsedata = await data.json();
            this.setState({
                page:this.state.page+1,
                articles : parsedata.articles
            })
        // }
    }
    showPrev= async ()=>{
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=949a7ca84df3421f8f30a95b0613fedc&page=${this.state.page-1}&pageSize=9`
        let data = await fetch(url);
        let parsedata = await data.json();
       this.setState({
          page:this.state.page-1,
          articles : parsedata.articles
       })
    }
    render() {
        return (
            <div className='container my-3'>
                <h1 className='text-center text-success'>Today's latest Top Headlines</h1>
                <div className="row">
                    {this.state.articles.map((element) => {
                        return <div className='col-md-4' key={element.url}>
                            <NewsItems title={element.title?element.title:""} description={element.description?element.description:""}
                            newsUrl={element.url} imageUrl={element.urlToImage}/>
                        </div>
                    })
                    }
                </div>
                <div className='container d-flex justify-content-between'>
                    <button type='button' className='btn btn-dark' onClick={this.showPrev}>&larr; Previous</button>
                    <button type='button' className='btn btn-dark'  onClick={this.showNext}>Next &rarr;</button>
                </div>
            </div>
        )
    }
    }
