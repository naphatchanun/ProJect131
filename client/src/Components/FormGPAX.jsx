// import React from 'react'
import { useState } from 'react'

const FormGPAX = () => {

    const [gpax, setGPAX] = useState({
        creditgpx: 0, gpa: 0
    });
    const [allsetGPAX, setallSetGPAX] = useState([]);


    function handleAddGPAX(event) {
        const { name, value } = event.target;
        setGPAX((prevGPAX) => ({
            ...prevGPAX,
            [name]: parseFloat(value),
        }));
    }

    function addGPAX(event) {
        event.preventDefault();
        console.log("submit");
        console.log("============================")
        console.log(gpax.creditgpx);
        console.log(gpax.gpa);
        console.log("============================")
        console.log(gpax);
        setallSetGPAX((prevallSetGPAX) => {
            return [...prevallSetGPAX, gpax];
        })
    }
    function calculateGPAX() {
        let sumCredit = 0;
        let sumScore = 0;
        allsetGPAX.map((item) => {
            sumCredit += parseInt(item.creditgpx);
            console.log("Credit", sumCredit);
            console.log("so", item.gpa);
            sumScore += parseFloat(item.creditgpx) * parseFloat(item.gpa);
        })
        console.log("sumCredit", sumCredit);
        console.log("sumScore", sumScore);
        console.log("GPAX", sumScore / sumCredit);
        return sumScore / sumCredit;
    }

    console.log(gpax);

    return (
        <>
            <div className='pt-5'>
                <input className='border p-2 rounded-full border-[#71a0c7]' type="number" placeholder="CREDIT" name="creditgpx" onChange={handleAddGPAX}  />
                <input className='border p-2 rounded-full border-[#71a0c7]' type="number" placeholder="SCORE" name='gpa' onChange={handleAddGPAX} />
                <div className='flex justify-center pt-5'>
                    <button className='border p-2 rounded-full border-[#71a0c7] bg-gradient-to-r from-[#BA90C6] to-[#E8A0BF] hover:from-[#975C8D] hover:to-[#FFABAB]' type="submit" onClick={addGPAX}>ADD</button>
                </div>
                <div>{calculateGPAX()}</div>
            </div>
            <div>
                {allsetGPAX.map((item, index) => {
                    return (
                        <div key={index} className='bg-[#F2BED1] m-10  '>
                            <h1>เทอมที่{index + 1}</h1>
                            <h1>{item.creditgpx}</h1>
                            <h1>{item.gpa}</h1>
                        </div>
                    );
                })}
            </div>
        </>
    )
}

export default FormGPAX
