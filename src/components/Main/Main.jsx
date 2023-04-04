import React from "react";
import Calculator from "./Calculator/Calculator";
import '../Main/Main.scss'
import Table from "./Table/Table";

const Main = () => {
    return(
        <div className="main">
            <div className="main__container wrapper">
                <Calculator/>
                <Table />
            </div>
        </div>
    )
}

export default Main