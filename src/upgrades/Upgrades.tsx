import { useState, useEffect } from "react";
import "../../assets/CSS/Upg.css"

// Click Upgrades
import Click1 from "../../assets/images/upClick1.png"
import Click2 from "../../assets/images/upClick2.png"
import Click3 from "../../assets/images/upClick3.png"

//Auto Upgrades
import Auto1 from "../../assets/images/upAuto1.png"
import Auto2 from "../../assets/images/upAuto2.png"
import Auto3 from "../../assets/images/upAuto3.png"



function Upgrade() {

    const [activeUpg, setActiveUpg] = useState<Boolean>(false);
    const [activeAuto, setActiveAuto] = useState<Boolean>(false);

    return (
        <>
            <div className="changerBar">
                <button className={`upgButton ${activeUpg ? "active" : ""}`}
                    onClick={() => {
                        setActiveUpg(true)
                        setActiveAuto(false)
                    }}
                > Click
                </button>
                <button className={`autoButton ${activeAuto ? "active" : ""}`}
                    onClick={() => {
                        setActiveUpg(false)
                        setActiveAuto(true)
                    }}
                > Auto
                </button>
            </div>
            <div className="closeChangerBar">
                {activeAuto || activeUpg ?
                    <button
                        className="closeBar"
                        onClick={() => {
                            setActiveAuto(false)
                            setActiveUpg(false)
                        }}
                    > x </button>
                    :
                    null
                }
            </div>

            {activeUpg ?
                <div className="upgBarClick">
                    <div className="upgClick">
                        <img src={Click1} className="ClickImage" />
                    </div>
                    <div className="upgClick">
                        <img src={Click2} className="ClickImage" />
                    </div>
                    <div className="upgClick">
                        <img src={Click3} className="ClickImage" />
                    </div>
                </div> :
                null
            }

            {activeAuto ?
                <div className="upgBarAuto">
                    <div className="upgAuto">
                        <img src={Auto1} className="ClickImage" />
                    </div>
                    <div className="upgAuto">
                        <img src={Auto2} className="ClickImage" />
                    </div>
                    <div className="upgAuto">
                        <img src={Auto3} className="ClickImage" />
                    </div>
                </div> :
                null
            }


        </>
    )
}

export default Upgrade;