require("./index.less")

import DPlayer from 'dplayer';

export default function ProviderSearch() {
    const dp = new DPlayer({
        container: document.getElementById('dplayer'),
        video: {
            url: '/assets/临时video到时候删/1.mp4',
        },
    });


    return (
        <>
            {}

        </>
    )
}