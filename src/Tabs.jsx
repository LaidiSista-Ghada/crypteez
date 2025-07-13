import { useEffect , useState } from "react";


function Tab01 (){
    return (
        <div className="Tab" id="tab1">
                <div className="tab-logo"><img src="/icon.svg" alt="logo" /><h2>Rewards Program</h2></div>
                <h2 className="tab-content">A loyalty program that’s actually Rewarding</h2>
                <button className="tab-CTA"><img src="/plus.svg" alt="plus" /><h2>Discover Rewards</h2></button>
        </div>
    );
}

function Tab02 (){
    return (
        <div className="Tab" id="tab2">
                <div className="tab-logo"><img src="/icon.svg" alt="logo" /><h2>Strike Options</h2></div>
                <h2 className="tab-content">Predict where your investment will be in 20 mins</h2>
                <button className="tab-CTA"><img src="/arrow-big-right.svg" alt="plus" /><h2>Start Trading</h2></button>
        </div>
    );
}

function Tab03 (){
    return (
        <div className="Tab" id="tab3">
                <div className="tab-logo"><img src="/icon.svg" alt="logo" /><h2>Up or Down Options</h2></div>
                <h2 className="tab-content">Pinpoint opportunities in any market condition</h2>
                <button className="tab-CTA"><img src="/plus.svg" alt="plus" /><h2>Start Trading</h2></button>
        </div>
    );
}




function Tabs() {
    const TabList = [<Tab01/>, <Tab02/> , <Tab03/>];
    const [currentTab, setCurrentTab] = useState(0);
    useEffect(() => {
        const timer = setTimeout(()=>{
            setCurrentTab((prevTab) => {return (prevTab + 1 )% TabList.length });
        },3000);
        return () => clearTimeout(timer);
    },[currentTab]);

    addEventListener('click', (e) => {
        if (e.target.classList.contains('dot')) {
            const index = Array.from(e.target.parentNode.children).indexOf(e.target);
            setCurrentTab(index);
        }
    });

    return (

    <div className="TabsSection">
        <div className="Tabs">
            {TabList[currentTab]} 
        </div>
        <div className="TabIndicators">
            {TabList.map((_,index)=>(
                <span
                    key ={index}
                    className={`dot ${currentTab === index ? 'active' : ''}`}
                ></span>
            ))}
        </div>
    </div>
    
  );
} 
      

export default Tabs;

