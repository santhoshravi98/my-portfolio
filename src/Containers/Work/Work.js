import react, { Component } from 'react'
import './Work.css'
import internImage from '../../Assets/Images/intern.jpg'
import workImage from '../../Assets/Images/work.png'
import skillsImage from '../../Assets/Images/skills.jpg'

const ORANGE = 'ORANGE',
    BLUE = 'BLUE',
    GREEN = 'GREEN',
    GRAY = 'GRAY'

const getInternIcon = () => {
    return internImage;
}

const getWorkIcon = () => {
    return workImage;
}

const getSkillsIcon = () => {
    return skillsImage;
}

const getCoinColor = symbol => {
    switch (symbol) {
        case 'ETH':
        case 'XRP':
        case 'ADA':
        case 'XLM':
        case 'XEM':
        case 'LSK':
        case 'DASH':
            return BLUE
        case 'BCH':
        case 'USDT':
        case 'NEO':
            return GREEN
        case 'BTC':
        case 'XMR':
            return ORANGE
        case 'TRX':
        case 'EOS':
        case 'LTC':
        default:
            return GRAY
    }
}

const data = [
    {
        id: 1,
        name: "Xome",
        symbol: "Yes",
        work: "Real Time Auctions Engine",
        cap: "HTML, CSS, HANDLEBAR JS, C#, SQL, JENKINS, OCTOPUS, GIT",
        volume: "Jan-2019 to July-2019",
        circulating: "18,415,393",
        img: getInternIcon(),
        color: getCoinColor("BTC")
    },
    {
        id: 2,
        name: "Ethereum",
        symbol: "You",
        rank: 2,
        work: "230.47",
        cap: "25,699,790,870",
        volume: "7,122,827,657",
        circulating: "111,511,971",
        img: getWorkIcon(),
        color: getCoinColor("ETH")
    },
    {
        id: 3,
        name: "Tether",
        symbol: "Can",
        rank: 3,
        work: "",
        cap: "9,224,337,233",
        volume: "22,616,885,934",
        circulating: "9,187,991,663",
        img: getSkillsIcon(),
        color: getCoinColor("USDT")
    }
]

class Work extends Component {
    constructor(props) {
        super(props)
        this.getCoins = this.getCoins.bind(this)
        this.setIndex = this.setIndex.bind(this)
        this.state = {
            coins: [],
            index: 0,
            updating: false,
            isLoading: false,
            isShowingTooltip: true
        }
    }
    componentDidMount() {
        this.getCoins()
        particlesJS("particles", particlesConfig)
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevState.index !== this.state.index) {
            if (this.state.isShowingTooltip) {
                this.setState({ isShowingTooltip: false })
            }
            this.setState({ updating: true })
            setTimeout(() => {
                this.setState({ updating: false })
            }, 200)
        }
    }
    getCoins() {
        this.setState({ isLoading: true })

        setTimeout(() => {
            this.setState({ coins: data });
            this.setState({ isLoading: false });
        }, 1000);
    }
    mapCoins(coins) {
        return coins.map(coin => ({
            name: coin.name,
            symbol: coin.symbol,
            rank: coin.rank,
            work: coin.work,
            cap: formatNum(coin.market_cap_usd),
            volume: formatNum(coin['24h_volume_usd']),
            circulating: formatNum(coin.available_supply),
            img: this.getCoinIcon(coin.symbol.toLowerCase()),
            color: getCoinColor(coin.symbol)
        }))
    }
    setIndex(index) {
        this.setState({ index })
    }
    render() {
        const {
            coins,
            index,
            updating,
            isLoading,
            isShowingTooltip
        } = this.state
        let card = null
        if (isLoading) {
            card = (
                <div id="card-loading">
                    <div id="card-loading-spinner" />
                </div>
            )
        }
        else if (coins.length > 0) {
            card = (
                <Card
                    coins={coins}
                    index={index}
                    setIndex={this.setIndex}
                />
            )
        }

        return (
            <div id="app" className={updating ? 'updating' : ''}>
                <div id="particles" />
                <div id="help-tooltip" className={isShowingTooltip ? 'showing' : 'hide'}>
                    <i className="fa fa-question-circle-o" />
                    <h1><span className="text">Hover over the icon and scroll.</span><span className="triangle" /></h1>
                </div>
                {card}
            </div>
        )
    }
}

class Card extends Component {
    determineSign(num) {
        return parseFloat(num) >= 0 ? 'positive' : 'negative'
    }
    render() {
        const { coins, index } = this.props,
            coin = coins[index],
            colorClass = getColorClass(coin.color)
        return (
            <div id="card-wrapper" className={colorClass}>
                <div id="card">
                    <div id="card-left" className="card-half">
                        <div id="coin-icon" style={{ backgroundImage: `url(${coin.img})` }} />
                        <div id="coin-symbol-vert">
                            <h1>{coin.symbol}</h1>
                        </div>
                        <CoinSelection
                            coins={coins}
                            index={index}
                            setIndex={this.props.setIndex}
                        />
                    </div>
                    <div id="card-right" className="card-half">
                        <div id="card-right-contents">
                            <div id="coin-header">
                                <div id="coin-name">
                                    <h1>{coin.name}</h1>
                                </div>
                                <div id="coin-symbol">
                                    <h1>{coin.symbol}</h1>
                                </div>
                                <div id="coin-rank">
                                    <div className="label">
                                        <h1>Full Stack Intern</h1>
                                    </div>
                                    <div className="value">
                                        <h1>{coin.rank}</h1>
                                    </div>
                                </div>
                            </div>
                            <div id="coin-price">
                                <div className="value">
                                    <h1>{coin.work}</h1>
                                </div>
                            </div>
                            <div id="coin-info">
                                <CoinInfoField value={coin.cap} label={"- Worked With"} />
                                <CoinInfoField value={`$${coin.volume}`} label={"Volume"} />
                                <CoinInfoField value={`${coin.circulating} ${coin.symbol}`} label={"Circulating Supply"} />
                            </div>
                            <div id="card-right-stripes" />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const CoinInfoField = ({
    value,
    label
}) => {
    return (
        <div className="coin-info-field">
            <div className="value">
                <h1>{value}</h1>
            </div>
            <div className="label">
                <h1>{label}</h1>
            </div>
        </div>
    )
}

class CoinSelection extends Component {
    constructor(props) {
        super(props)
        this.setCurrentScrollTop = this.setCurrentScrollTop.bind(this)
        this.moveScrollTop = this.moveScrollTop.bind(this)
        this.onOptionsScroll = this.onOptionsScroll.bind(this)
        this.state = {
            currentScrollTop: 0
        }
    }
    setCurrentScrollTop(val) {
        this.setState({ currentScrollTop: val })
    }
    moveScrollTop() {
        this.refs.coinOptions.scrollTop = this.state.currentScrollTop
    }
    onOptionsScroll() {
        const option = document.getElementsByClassName('coin-option')[0],
            topOffset = window.innerHeight / 2,
            optionHeight = option.clientHeight,
            scrollTop = this.refs.coinOptions.scrollTop,
            newScrollTop = this.props.index * (optionHeight + 20),
            index = Math.max(1, Math.ceil(scrollTop / optionHeight))
        this.setCurrentScrollTop(newScrollTop)
        this.props.setIndex(index - 1)
    }
    render() {
        const coinOptions = this.props.coins.slice(0, 10).map(coin => {
            const selected = this.props.index == coin.rank - 1
            return (
                <div key={coin.symbol} className={`coin-option ${selected ? 'selected' : ''}`}>
                    <div className={'coin-option-icon'} style={{ backgroundImage: `url(${coin.img})` }} />
                </div>
            )
        })
        return (
            <div id="coin-selection" onMouseLeave={this.moveScrollTop}>
                <div id="coin-options-wrapper"
                    ref="coinOptions"
                    className="scroll-bar"
                    onScroll={_.throttle(this.onOptionsScroll, 200)}
                >
                    <div id="coin-options">
                        {coinOptions}
                    </div>
                </div>
            </div>
        )
    }
}

const formatNum = num => {
    const splitNum = num.split('.'),
        firstHalf = splitNum[0].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","),
        secondHalf = splitNum[1] ? splitNum[1].substring(0, 2) : splitNum[1]

    return secondHalf ? `${firstHalf}.${secondHalf}` : firstHalf
}

const getColorClass = color => {
    switch (color) {
        case ORANGE:
            return 'orange'
        case BLUE:
            return 'blue'
        case GREEN:
            return 'green'
        case GRAY:
            return 'gray'
    }
}

const particlesConfig = {
    "particles": {
        "number": {
            "value": 30
        },
        "color": {
            "value": "#607d8b"
        },
        "size": {
            "value": 2
        },
        "line_linked": {
            "enable": true,
            "distance": 350,
            "color": "#607d8b"
        }
    },
    "interactivity": {
        "events": {
            "onhover": {
                "enable": true,
                "mode": "grab"
            },
            "onclick": {
                "enable": false
            }
        },
        "modes": {
            "grab": {
                "distance": 500,
                "line_linked": {
                    "opacity": 1
                }
            }
        }
    }
}

export default Work;