import React from 'react';
import Container from "@material-ui/core/Container";
import StandupTimeSeries from "./StandupTimeSeries";
import Example from "./StandupTimeSeries";


function ChartContainer() {
    return(
        <Container maxWidth="lg">
            <StandupTimeSeries/>
            {/*<Example>*/}

            {/*</Example>*/}
        </Container>
    );
}

export default ChartContainer;