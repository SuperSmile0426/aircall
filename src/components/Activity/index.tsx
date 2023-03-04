// import node modules
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";

// import mui components
import {
    Box
} from '@mui/material';

// import mui component
import PhoneMissedIcon from '@mui/icons-material/PhoneMissed';
import CallEndIcon from '@mui/icons-material/CallEnd';
import VoicemailIcon from '@mui/icons-material/Voicemail';

// import components
import {
} from '../index';

// import styles
import { ActivityComponentStyle } from './index.style';

//import models
import { IActivity } from '../../models';

// redux & store
import { RootState } from '../../redux/store';
import { archieveActivity } from "../../redux/slices/activity.slice";

type Props = {
    data: IActivity
};

const ActivityComponent: React.FC<Props> = ({
    data
}) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const archiieveActivtity = (event: any, id: string) => {
        console.log(id);
        if (id) {
            dispatch(archieveActivity({ id }));
            event.stopPropagation();
        } else {
            alert("ID Undefined")
        }
    }


    return (
        <ActivityComponentStyle onClick={() => { navigate(`detail/${data.id}`) }}>
            <Box className="activity-container">
                {
                    data.call_type === "missed" && data.direction === "inbound" ?
                        <PhoneMissedIcon />
                        : data.call_type === "answered" ?
                            <CallEndIcon />
                            : <VoicemailIcon />
                }

                {
                    data.call_type === "missed" && data.direction === "inbound" ?
                        <Box>
                            {data.from ? data.from : "Secret"}     : +{data.duration} <br />
                            via {data.via}
                        </Box>
                        :
                        <Box>
                            {data.from ? data.from : "Secret Number"}<br />
                            via:  {data.via ? data.via : "secret air call number"}
                        </Box>
                }

            </Box>

            <Box className="activity-footer">
                {new Date(data.created_at).getHours()} : {new Date(data.created_at).getMinutes()}
                <Box className="archieve-text" onClick={(event: any) => archiieveActivtity(event, data.id)}>Achieve</Box>
            </Box>

        </ActivityComponentStyle >
    )
};

export default ActivityComponent;