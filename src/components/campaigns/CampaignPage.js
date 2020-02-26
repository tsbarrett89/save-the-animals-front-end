import React from 'react';

const CampaignPage = props => {
    const id = props.match.params.id

    return (
        <div>
            <p>Campaign page {id}</p>
        </div>
    )
}

export default CampaignPage