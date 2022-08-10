import React from "react";
export default function Sum({income, expense}){
    return(
        <h3>With income of {income} and expenses of {expense} you will have left {income - expense}</h3>
    )
}
