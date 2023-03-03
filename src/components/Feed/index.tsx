// import node modules
import React from 'react';

// import mui components
import {
    Box,
} from '@mui/material';

// import styles
import { FeedComponentStyle } from './index.style';

//import models
import { IActivity } from '../../models';

type Props = {
    data: IActivity[]
};

const FeedComponent: React.FC<Props> = ({
    data
}) => {

    return (
        <FeedComponentStyle>
            {data.map((item: IActivity, index: number) => (
                <Box key={index}>{item.from}</Box>
            ))}
        </FeedComponentStyle>
    )
};

export default FeedComponent;