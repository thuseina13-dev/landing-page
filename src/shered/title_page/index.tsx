import { useState } from "react"
import { PopUpInformation } from "../pop_up_information"
import "./index.css"

export const TitlePage = () => {
    const [isPopupOpen, setIsPopupOpen] = useState(false)

    return (
        <>
            <h1 className="title-page" onClick={() => setIsPopupOpen(true)}>
                Hello World.... Find Me...
            </h1>

            <PopUpInformation isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)}>
                <h2>Husein Abdullah</h2>
                <p>
                    Frontend Developer |
                    Tangerang Selatan, Kademangan, Setu |
                    {/* 0812 8602 1812 | */}

                </p>
                <p>
                    <a href="https://www.linkedin.com/in/husein-abdullah-telaumbanua-6bb180143" target="_blank" rel="noopener noreferrer">www.linkedin.com/in/husein-abdullah-telaumbanua-6bb180143</a> |
                    husein.abdullah.telaumbanua@gmail.com
                </p>
            </PopUpInformation>
        </>
    )
}
