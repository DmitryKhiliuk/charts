import React, {useState} from 'react';
import {Button, Card, Space} from "antd";
import {MarketChartAsAPercentage} from "./marketChartAsAPercentage";
import {useAppDispatch, useAppSelector} from "../../redux/store";
import {selectChart} from "../../common/selectors";
import {selectionChartAC} from "../../redux/chartsReducer";
import {MarketChartInRubles} from "./marketChartInRubles";

const chartId = ['market%', 'marketR']
const chartNames = ['Рынок, %', 'Рынок, руб', 'Темпы', 'АКБ, %', 'АКБ', 'Моб.П', 'Рост рынка', 'Доли уч.%']



export const Charts = () => {

    const dispatch = useAppDispatch()
    const chart = useAppSelector(selectChart)

    const onClickHandler = () => {
        dispatch(selectionChartAC('marketR'))
    }
    const onClickHandlerDef = () => {
        dispatch(selectionChartAC('market%'))
    }

    return (
        <div>
            <Card title={'Chart title'} hoverable={true} style={{width: '1000px', height: '100vh'}}>
                <div style={{height: '80vh'}}>
                    {chart==='market%'&&<MarketChartAsAPercentage/>}
                    {chart==='marketR'&&<MarketChartInRubles/>}
                </div>
                <Space>
                    <Button onClick={onClickHandlerDef} type={chart==='market%'?'primary':'default'}>Рынок, %</Button>
                    <Button onClick={onClickHandler} type={chart==='marketR'?'primary':'default'}>Рынок, руб</Button>
                    <Button>Темпы</Button>
                    <Button>АКБ, %</Button>
                    <Button>АКБ</Button>
                    <Button>Моб.П</Button>
                    <Button>Рост рынка</Button>
                    <Button>Доли уч.%</Button>

                </Space>
            </Card>
        </div>
    );
};

