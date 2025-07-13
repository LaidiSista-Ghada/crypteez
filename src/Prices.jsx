import React ,{ useEffect , useRef , useState} from 'react'; 

function Prices (){
    
    const titleRef = useRef(null) ;
    const [isVisible, setIsVisible] = useState(false);

    useEffect(()=>{
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                    setIsVisible(true);
                    }, 1000);
                }else{
                    setIsVisible(false);
                }
            },
            {threshold: 0.2}
        );
        if (titleRef.current){
            observer.observe (titleRef.current);
        }
    },[]);

    return (
        <div className="PricesSection">
            <h1 ref={titleRef} className={`animatedTitle ${isVisible ? 'visible' : ''}`}>Buy Bitcoin, ETH, Polygon & 250+ Cryptocurrencies</h1>
            <div className="Prices">
                <button className='line-chart'><img src="/line-chart.svg" alt="line-chart" /><h2>Check Prices</h2></button>
                <ul className='PricesList'>
                    <li className="priceTab">
                        <h2>Bitcoin</h2>
                        <h2>$42,728.54</h2>
                        <p className='percent-pos'>+0.21%</p>
                        <h3>$838,300,307,285.17</h3>
                        <img src="/vector-graph-green.svg" alt="graph" className='graph'/>
                        <button className='line-chart'><h3>Trade</h3></button>
                    </li>
                    <li className="priceTab">
                        <h2>Ethereum</h2>
                        <h2>$2,728.54</h2>
                        <p className='percent-pos'>+0.93%</p>
                        <h3>$276,300,307,285.17</h3>
                        <img src="/vector-graph-green.svg" alt="graph" className='graph'/>
                        <button className='line-chart'><h3>Trade</h3></button>
                    </li>
                    <li className="priceTab">
                        <h2>Cardano</h2>
                        <h2>$0.72854</h2>
                        <p className='percent-neg'>-1.35%</p>
                        <h3>$276,300,307,285.17</h3>
                        <img src="/vector-graph-red.svg" alt="graph" className='graph'/>
                        <button className='line-chart'><h3>Trade</h3></button>
                    </li>
                    <li className="priceTab">
                        <h2>Polkdadot</h2>
                        <h2>$6.7909</h2>
                        <p className='percent-neg'>-1.35%</p>
                        <h3>$8,307,285.17</h3>
                        <img src="/vector-graph-red.svg" alt="graph" className='graph'/>
                        <button className='line-chart'><h3>Trade</h3></button>
                    </li>
                </ul>
            </div>
            
        </div>
        
    );
}

export default Prices;