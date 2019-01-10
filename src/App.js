import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';
import Chart from './components/Chart/Chart';
import Rank from './components/Rank/Rank';
import Newsletter from './components/Newsletter/Newsletter';
import Data from './components/Data/Data';
import Footer from './components/Footer/Footer';
import chartData from './data.json';

//update variable below according to tabs
let currentCatIndexGlobal = 0;

const dataExtractor = (catIndex) => {

    let lArray = [];
    let dlArray = [];
    let gArray = [];
    let usArray = [];
    let supArray = [];
    let remArray = [];

    for (let i = 0; i < chartData[catIndex].length; i++) {
        lArray.push(chartData[catIndex][i].name);
        dlArray.push(chartData[catIndex][i].devLove);
        gArray.push(chartData[catIndex][i].gJobDemand);
        usArray.push(chartData[catIndex][i].usJobDemand);
        supArray.push(chartData[catIndex][i].supJobDemand);
        remArray.push(chartData[catIndex][i].remJobDemand);

    }

    return ({
        langArray: lArray,
        devLoveArray: dlArray,
        gJobArray: gArray,
        usJobArray: usArray,
        supJobArray: supArray,
        remJobArray: remArray,
    })
}

class App extends Component {
    constructor() {
        super();
        this.state = {
            cData: {},
            currentTopic: chartData[currentCatIndexGlobal][0].name,
            rawData: dataExtractor(currentCatIndexGlobal),
            contributors: []
        }
    }

    fetchContributors = async () => {
        await fetch('https://api.github.com/repos/zeroDevs/coding_challenge-13/contributors')
            .then(res => res.json())
            .then(json => this.setState({
                contributors: json
            }));
    }

    componentDidMount() {
        this.getData(this.state.currentTopic);
        this.fetchContributors()
    }

    getData(currentSelection) {
        const { langArray, gJobArray, usJobArray, supJobArray, remJobArray } = this.state.rawData;
        const cIndex = langArray.indexOf(currentSelection);

        this.setState({
            currentTopic: currentSelection,
            cData: {
                datasets: [
                    {
                        data: [gJobArray[cIndex], usJobArray[cIndex], supJobArray[cIndex], remJobArray[cIndex]],
                        label: 'Languages',
                        backgroundColor: [
                            'rgba(255,99,132,0.7)',
                            'rgba(75,192,192,0.7)',
                            'rgba(255,206,86,0.7)',
                            'rgba(231,233,237,0.7)',
                            'rgba(54,162,235,0.7)'
                        ]
                    }
                ],
                labels: ['Global Job Demand', 'US Job Demand', 'Startup Job Demand', 'Remote Job Demand']
            }
        });
    }

    onTopicClick = (topic) => {
        this.getData(topic);
    }

    onNavClick = (index) => {
        currentCatIndexGlobal = index;
        this.setState({
            rawData: dataExtractor(index)
        },
            () => {
                this.getData(this.state.rawData.langArray[0]);
            })
    }

    render() {
        const { cData, rawData, currentTopic, contributors } = this.state;
        return (
            <div id="top">
                <Header />
                <Navigation onNavClick={this.onNavClick} currentCategoryIndex={currentCatIndexGlobal} />
                <section className="trends">
                    <h2 className="title">Top 5</h2>
                    <div className="chart-container">
                        <Rank langArray={rawData.langArray} onTopicClick={this.onTopicClick} checkbox={currentTopic} />
                        <h5 className="mb-4">Love by Community: {rawData.devLoveArray[rawData.langArray.indexOf(currentTopic)] / 20} / 5</h5>
                        <Chart data={cData} />
                    </div>
                </section>
                <Newsletter />
                <Data chartData={cData} location={false} />
                <Footer contrib={contributors} />
            </div>
        );
    }
}

export default App;
