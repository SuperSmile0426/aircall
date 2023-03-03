// import node modules
import React from 'react';

// import mui components
import {
    Box
} from '@mui/material';

// import components
import {
} from '../index';

// import styles
import { ActivityDetailComponentStyle } from './index.style';

//import models
import { IActivity } from '../../models';

type Props = {
    data: IActivity
};

const ActivityDetailComponent: React.FC<Props> = ({
    data
}) => {
    return (
        <ActivityDetailComponentStyle>
            <Box>{data.call_type}</Box>
        </ActivityDetailComponentStyle>
    )
};

export default ActivityDetailComponent;