import React, { Component, Suspense } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';
import Chart from './components/Chart/Chart';
import Rank from './components/Rank/Rank';
import Newsletter from './components/Newsletter/Newsletter';
import Data from './components/Data/Data';
import Tooltip from './components/Tooltip/Tooltip';
import chartData from './data.json';
import Heart from './images/svg-bgs/heart.svg';
import Switch from './components/Switch/Switch';
//dynamically import files
const Footer = React.lazy(() => import('./components/Footer/Footer'));

//update variable below according to tabs
let currentCatIndexGlobal = 0;
let loveHearts = [];
const backgroundColors = [
    'rgba(255,99,132,0.7)',
    'rgba(75,192,192,0.7)',
    'rgba(255,206,86,0.7)',
    'rgba(54,162,235,0.7)',
    'rgba(170,13,197,0.5)' //last color is used for the Radar chart
];
const pointColors = [  // these are used for the points on the Radar chart
    'rgba(255,99,132,1)',
    'rgba(75,192,192,1)',
    'rgba(255,206,86,1)',
    'rgba(54,162,235,1)'
]
const chartTitle = [' Web Technologies', ' Mobile Technologies', ' Programming Languages', ' Backend Technologies'];

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
            contributors: [],
            chartChoice: "Polar",
            zoomLevel: 55
        }
        this.keyCount = 0;

        this.getKey = this.getKey.bind(this);
        this.setLoveHearts(currentTopic, rawData);
    }

    getKey() {
        return this.keyCount++;
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
        this.fetchContributors();
        window.addEventListener('scroll', this.handleScroll);
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
                        label: currentSelection,
                        backgroundColor: this.state.chartChoice === "Polar" ? backgroundColors : backgroundColors[4],
                        borderColor: 'white',
                        hoverBorderColor: 'white',
                        hoverBackgroundColor: pointColors,
                        pointBackgroundColor: pointColors,
                        pointBorderColor: "#fff",
                        pointBorderWidth: 2,
                        pointHoverBackgroundColor: pointColors,
                        pointHoverBorderColor: pointColors,
                        pointRadius: 5,
                        pointHoverRadius: 7
                    }
                ],
                labels: ['Global Job Demand', 'US Job Demand', 'Startup Job Demand', 'Remote Job Demand']
            }
        }, () => {
            this.setState({
                minimZoom: 100 - Math.ceil(Math.max.apply(null, this.state.cData.datasets[0].data))
            })
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

        while (redHearts--) {
            hearts.push(<img src={Heart} alt="active love" height="25" key={this.getKey()} />);
            maxHearts--;
        }
        while (maxHearts--)
            hearts.push(<img src={Heart} alt="inactive love" height="25" key={this.getKey()} style={{ filter: "grayscale(1)" }} />)

        return hearts;
    }

    setLoveHearts = (currentTopic, rawData) => {
        loveHearts = this.returnLove(rawData.devLoveArray[rawData.langArray.indexOf(currentTopic)] / 20);
    }

    changeChart = () => {
        const choice = this.state.chartChoice === "Polar" ? "Radar" : "Polar";
        this.setState(
            {
                chartChoice: choice
            }, () => { this.getData(this.state.currentTopic) })
    }

    zoom = (event) => {
        this.setState({
            zoomLevel: 100 - Number(event.target.value)
        });
    }

    render() {
        const { cData, rawData, currentTopic, contributors, chartChoice, zoomLevel, minimZoom} = this.state;
        return (
            <div id="top" ref={(ref) => this.scrollIcon = ref}>
                <Header />
                <Navigation onNavClick={this.onNavClick} currentCategoryIndex={currentCatIndexGlobal} />
                <section className="trends">
                    <h2 className="title">Top 5 {chartTitle[currentCatIndexGlobal]}</h2>
                    <div className="chart-container">
                        <Rank langArray={rawData.langArray} onTopicClick={this.onTopicClick} checkbox={currentTopic} />
                        <Tooltip tooltipText='This is a score out of 5 based on developer opinion, community size, downloads, Google searches, and satisfaction surveys, etc..'>
                            <h5 className="pr-1">Developer Love:</h5>
                            <h5 className="pl-1 anim-waving ">{loveHearts}</h5>
                        </Tooltip>
                        <div className="chartHolder">
                            <div className="toolbox">
                                <p>Chart type</p>
                                <Switch onClick={this.changeChart} leftText="Polar" rightText="Radar" />
                                <p>Zoom</p>
                                <div className="zoomSlider">
                                    <span>-</span><input type="range" min="1" max={ minimZoom } step="1" onChange={ this.zoom }/><span>+</span>
                                </div>
                            </div>
                            <Chart data={cData} type={chartChoice}  zoomLevel={ zoomLevel }/>
                        </div>
                    </div>
                </section>
                <Newsletter />
                <Data loveFunction={this.returnLove} />
                <Suspense fallback={<div>Loading...</div>}>
                    <Footer contrib={contributors} />
                </Suspense>
            </div>
        );
    }
}

export default App;
