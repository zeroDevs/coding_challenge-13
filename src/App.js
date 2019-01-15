import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';
import Chart from './components/Chart/Chart';
import Rank from './components/Rank/Rank';
import Newsletter from './components/Newsletter/Newsletter';
import Data from './components/Data/Data';
import Footer from './components/Footer/Footer';
import Tooltip from './components/Tooltip/Tooltip';
import chartData from './data.json';
import Heart from './images/svg-bgs/heart.svg';

//update variable below according to tabs
let currentCatIndexGlobal = 0;
let loveHearts = [];

const dataExtractor = (catIndex) => {
    return chartData[catIndex].reduce((data, technology) => {
        data.langArray.push(technology.name);
        data.devLoveArray.push(technology.devLove);
        data.gJobArray.push(technology.gJobDemand);
        data.usJobArray.push(technology.usJobDemand);
        data.supJobArray.push(technology.supJobDemand);
        data.remJobArray.push(technology.remJobDemand);
        return data;
    }, {
        langArray: [],
        devLoveArray: [],
        gJobArray: [],
        usJobArray: [],
        supJobArray: [],
        remJobArray: []
    });
};

class App extends Component {
    constructor() {
        super();
        const currentTopic = chartData[currentCatIndexGlobal][0].name;
        const rawData = dataExtractor(currentCatIndexGlobal);

        this.state = {
            cData: {},
            currentTopic: currentTopic,
            rawData: rawData,
            contributors: []
        }

        this.setLoveHearts(currentTopic, rawData);
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

        this.setLoveHearts(currentSelection, this.state.rawData);
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
    returnLove = (redHearts) => {
        let maxHearts = 5;
        const hearts = [];
        while(redHearts--)
        {
            hearts.push(<img src={Heart} alt="active love" height="25" />);
            maxHearts--;
        }
        while(maxHearts--)
            hearts.push(<img src={Heart} alt="inactive love" height="25" style={{filter: "grayscale(1)"}} />)
        return hearts;
    }

    setLoveHearts = (currentTopic, rawData) => {
      loveHearts = this.returnLove(rawData.devLoveArray[rawData.langArray.indexOf(currentTopic)] / 20);
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
                        <Tooltip tooltipText='This is a score out of 5 based on developer opinion, community size, downloads, google searches, and satisfaction surveys, etc..'>
                            <h5 className="pr-1">Developer Love:</h5>
                            <h5 className="pl-1">{loveHearts}</h5>
                        </Tooltip>
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
