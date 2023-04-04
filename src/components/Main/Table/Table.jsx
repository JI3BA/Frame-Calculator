import React from "react";
import './Table.scss'

const Table = () => {
    return(
        <>
            <table className="table">
                <thead className="table__head">
                    <tr>
                        <th>Наименование</th>
                        <th>eд.</th>
                        <th>кол-во</th>
                        <th>Сумма</th>
                    </tr>
                </thead>
            </table>
        </>
    )
}

export default Table