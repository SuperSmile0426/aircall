// import node modules
import React from 'react';

// import mui components
import {
    Box
} from '@mui/material';
// import mui component
import PhoneMissedIcon from '@mui/icons-material/PhoneMissed';
import CallEndIcon from '@mui/icons-material/CallEnd';
import VoicemailIcon from '@mui/icons-material/Voicemail';

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
            {data.id === "0" ?
                "Loading..."
                :
                <Box>
                    {
                        data.call_type === "missed" && data.direction === "inbound" ?
                            <PhoneMissedIcon />
                            : data.call_type === "answered" ?
                                <CallEndIcon />
                                : <VoicemailIcon />
                    }
                    <Box> <b>From</b> : {data.from}</Box>
                    <Box> <b>To</b> : {data.to}</Box>
                    <Box> <b>Via</b> : {data.via}</Box>
                    <Box> <b>Created_At</b> : {data.created_at}</Box>
                    <Box> <b>Duration</b> : {data.duration}</Box>
                </Box>
            }
        </ActivityDetailComponentStyle>
    )
};

export default ActivityDetailComponent;