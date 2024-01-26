const express = require('express')
const { google } = require('googleapis');

const app = express()

app.get('/',(req,res)=>{
res.send("Youtuber Summarizer")
})

app.listen(3000,()=>{
    console.log("server listening on port: 3000")
})


async function getTranscript(apiKey, videoId) {
    const youtube = google.youtube({
        version: 'v3',
        auth: apiKey,
    });

    try {
        // Get caption tracks
        const captionResponse = await youtube.captions.list({
            part: ['snippet'],
            videoId: videoId,
        });
        // console.log('captionResponse', JSON.stringify(captionResponse))

        // Find the caption track with the desired language
        const captionTrack = captionResponse.data.items.find((item) => item.snippet.language === 'en');
         console.log('captionTrack', captionTrack)

        if (!captionTrack) {
            console.log('No English captions found for this video.');
            return;
        }

        // Get caption content
        const captionDownloadResponse = await youtube?.captions?.download({
            id: captionTrack.id,
            tfmt: 'srt',
        });
        console.log('captionDownloadResponse', captionDownloadResponse)

        const captions = captionDownloadResponse.data;
        return captions;
    } catch (error) {
        // console.log('Error:');
        console.error('Error fetching bhosidke shadev:', error);
        throw error;
    }
}

// Replace 'YOUR_API_KEY' and 'VIDEO_ID' with your actual API key and YouTube video ID
const apiKey = 'AIzaSyCvT1Ju2xDWcy5E7xm2kd0zZpi3AjOwfTg';
const videoId = 'aSW7RJ5zWgE';

getTranscript(apiKey, videoId)
    .then((transcript) => console.log(transcript))
    .catch((error) => console.error('Error:', error));
