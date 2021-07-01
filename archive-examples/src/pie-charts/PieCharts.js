import React from 'react'
import PieChart from 'react-minimal-pie-chart';
import { Container, Row, Col } from 'reactstrap';


export default class PieExamples extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    render() {
        return (
            <Container>
                <Row>
                    <Col md={3}>
                        <PieChart
                            animate={false}
                            animationDuration={500}
                            animationEasing="ease-out"
                            cx={50}
                            cy={50}
                            data={[
                                {
                                    color: '#E38627',
                                    title: 'One',
                                    value: 10
                                },
                                {
                                    color: '#C13C37',
                                    title: 'Two',
                                    value: 15
                                },
                                {
                                    color: '#6A2135',
                                    title: 'Three',
                                    value: 20
                                }
                            ]}
                            label={function noRefCheck() { }}
                            labelPosition={50}
                            labelStyle={{
                                fill: '#121212',
                                fontFamily: 'sans-serif',
                                fontSize: '5px'
                            }}
                            lengthAngle={360}
                            lineWidth={100}
                            onClick={undefined}
                            onMouseOut={undefined}
                            onMouseOver={undefined}
                            paddingAngle={0}
                            radius={50}
                            rounded={false}
                            startAngle={0}
                            viewBoxSize={[
                                100,
                                100
                            ]}
                        />
                    </Col>
                    <Col md={3}>

                        <PieChart
                            label={(x) => { return 'title' }}
                            labelStyle={{ color: 'white' }}
                            data={[
                                { title: 'One', value: 10, color: '#E38627' },
                                { title: 'Two', value: 15, color: '#C13C37' },
                                { title: 'Three', value: 20, color: '#6A2135' },
                            ]}
                        />;
                    </Col>
                    <Col md={3}>
                        <PieChart
                            animate={false}
                            animationDuration={500}
                            animationEasing="ease-out"
                            cx={50}
                            cy={50}
                            data={[
                                {
                                    color: '#E38627',
                                    title: 'One',
                                    value: 10
                                },
                                {
                                    color: '#C13C37',
                                    title: 'Two',
                                    value: 15
                                },
                                {
                                    color: '#6A2135',
                                    title: 'Three',
                                    value: 20
                                }
                            ]}
                            label
                            labelPosition={112}
                            labelStyle={{
                                fontFamily: 'sans-serif',
                                fontSize: '5px'
                            }}
                            lengthAngle={360}
                            lineWidth={100}
                            onClick={undefined}
                            onMouseOut={undefined}
                            onMouseOver={undefined}
                            paddingAngle={0}
                            radius={42}
                            rounded={false}
                            startAngle={0}
                            viewBoxSize={[
                                100,
                                100
                            ]}
                        />
                    </Col>
                </Row>
                <Row>
                    <Col md={4}>
                        <PieChart
                            animate={false}
                            animationDuration={500}
                            animationEasing="ease-out"
                            cx={50}
                            cy={50}
                            data={[
                                {
                                    color: '#E38627',
                                    title: 'One',
                                    value: 10
                                },
                                {
                                    color: '#C13C37',
                                    title: 'Two',
                                    value: 15
                                },
                                {
                                    color: '#6A2135',
                                    title: 'Three',
                                    value: 20
                                }
                            ]}
                            label
                            labelPosition={60}
                            labelStyle={{
                                fontFamily: 'sans-serif',
                                fontSize: '5px'
                            }}
                            lengthAngle={360}
                            lineWidth={20}
                            onClick={undefined}
                            onMouseOut={undefined}
                            onMouseOver={undefined}
                            paddingAngle={18}
                            radius={50}
                            rounded
                            startAngle={0}
                            viewBoxSize={[
                                100,
                                100
                            ]}
                        />
                    </Col>
                    <Col md={4}>
                        <PieChart
                            animate={false}
                            animationDuration={500}
                            animationEasing="ease-out"
                            cx={50}
                            cy={50}
                            data={[
                                {
                                    color: '#E38627',
                                    value: 82
                                }
                            ]}
                            label
                            labelPosition={0}
                            labelStyle={{
                                fontFamily: 'sans-serif',
                                fontSize: '25px'
                            }}
                            lengthAngle={360}
                            lineWidth={20}
                            onClick={undefined}
                            onMouseOut={undefined}
                            onMouseOver={undefined}
                            paddingAngle={0}
                            radius={50}
                            rounded={false}
                            startAngle={0}
                            totalValue={100}
                            viewBoxSize={[
                                100,
                                100
                            ]}
                        />
                    </Col>
                </Row>
            </Container>
        )
    }

}