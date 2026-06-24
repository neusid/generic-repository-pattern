import React, { useState } from 'react'
import { apiParserRepository, type ParserResult } from '../../domain/repository/api_parser.repository';


import InputComponent from './component/input_component'
import TableComponent from './component/table_component';

export default function ApiResponseParserPage() {

    const [Input, setInput] = useState<number>(1);

    const [Result, setResult] = useState<ParserResult>();

    const handleApiRepository = async (input: number) => {
        const result = await apiParserRepository.extractResponse(input);
        setResult(result);
        console.log(result.title)
    }

    const boxStyle = {
        display: 'flex',
        justifyContent: 'center', // hori
        alignItems: 'center', // verti
        minHeight: '50vh',
    }

    const boxTitleStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '20vh',
    }

    return (
        <>

            <div className="box" style={boxTitleStyle}>
                <div className="sub-box">
                    <div>Api Response Parser</div>
                </div>
            </div>
            <div className="box" style={boxStyle}>
                <div className="sub-box">
                    <InputComponent Input={Input} setInput={setInput} handleApi={handleApiRepository} />
                    {Result != null ? <TableComponent result={Result} /> : '<></>'}
                </div>
            </div>
        </>

    )
}
