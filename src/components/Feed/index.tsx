// import node modules
import React from 'react';

// import mui components
import {
    Box,
} from '@mui/material';

// import sub component
import { ActivityComponent } from "../index"

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
            {data.length > 0 ?
                <>
                    {data.map((item: IActivity, index: number) => (
                        <Box key={index}>
                            <ActivityComponent data={item} />
                        </Box>
                    ))}

                </>
                : <Box>Loading...</Box>}
        </FeedComponentStyle>
    )
};

export default FeedComponent;