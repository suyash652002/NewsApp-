import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'

export default class News extends Component {
    static defaultProps = {
        country: 'in',
        pageSize: 8,
        category: 'general'
    }
    static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string
    }

    capitalize = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    constructor(props) {
        super(props);
        console.log("Hello I am a constructor from news component");
        this.state = {
            articles: [],
            loading: false,
            page: 1,

        }
        document.title = `${this.capitalize(this.props.category)} - NewsGeek`;
    }
    async updateNews(pageNo) {
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        this.setState({ loading: true });
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        this.setState({
            articles: parsedData.articles,
            totalArticles: parsedData.totalResults,
            loading: false
        });
    }
    async componentDidMount() {
        // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=3e5c4ad9176e4fbcafb8b17c57e83715&page=1&pageSize=${this.props.pageSize}`;
        // this.setState({ loading: true });
        // let data = await fetch(url);
        // let parsedData = await data.json();
        // console.log(parsedData);
        // this.setState({
        //     articles: parsedData.articles,
        //     totalArticles: parsedData.totalResults,
        //     loading: false
        // });
        this.updateNews();
    }

    handlePreviousClick = async () => {
        // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=3e5c4ad9176e4fbcafb8b17c57e83715&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
        // this.setState({ loading: true });
        // let data = await fetch(url);
        // let parsedData = await data.json();
        // console.log(parsedData);
        // this.setState({
        //     articles: parsedData.articles,
        //     page: this.state.page - 1,
        //     loading: false
        // });
        this.setState({ page: this.state.page - 1 });
        this.updateNews();
    }
    handleNextClick = async () => {
        // if (this.state.page + 1 > Math.ceil(this.state.totalArticles / 20)) {

        // }
        // else {

        // }
        // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=3e5c4ad9176e4fbcafb8b17c57e83715&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
        // this.setState({ loading: true })
        // let data = await fetch(url);
        // let parsedData = await data.json();
        // console.log(parsedData);
        // this.setState({ 
        //     articles: parsedData.articles,
        //     page: this.state.page + 1,
        //     loading: false
        // });
        this.setState({ page: this.state.page + 1 });
        this.updateNews();
    }
    render() {
        return (
            <div className='container my-3'>
                <h2 className='text-center' style={{ width: "35px 0px" }}>NewsGeek - Top {this.capitalize(this.props.category)} Headlines</h2>
                {this.state.loading && <Spinner />}

                <div className="row">
                    {!this.state.loading && this.state.articles.map((item) => {
                        return <div div className="col-md-4" key={item.url}>
                            <NewsItem title={item.title ? item.title.slice(0, 45) : ""} description={item.description ? item.description.slice(0, 88) : ""} imageUrl={item.urlToImage} newsUrl={item.url} author={item.author} date={item.publishedAt} source={item.source.name} />
                        </div>
                    })}

                </div>

                <div className="container d-flex justify-content-between">
                    <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.handlePreviousClick}>Previous</button>
                    <button disabled={this.state.page + 1 > Math.ceil(this.state.totalArticles / this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next</button>
                </div>
            </div >
        )
    }
}
