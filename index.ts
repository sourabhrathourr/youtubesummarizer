// import { google } from 'googleapis';

// async function getTranscript(apiKey: string, videoId: string): Promise<string> {
//     const youtube = google.youtube({
//         version: 'v3',
//         auth: apiKey,
//     });

//     try {
//         // Get video details
//         const videoResponse = await youtube.videos.list({
//             part: ['snippet', 'contentDetails'],
//             id: [videoId],
//         });

//         // Get video transcript
//         const transcriptResponse = await youtube.captions.list({
//             part: ['snippet'],
//             videoId: videoId,
//         });

//         const captions = transcriptResponse?.data?.items[0]?.snippet?.title;
//         return captions;
//     } catch (error) {
//         console.error('Error fetching transcript:', error);
//         throw error;
//     }
// }

// // Replace 'YOUR_API_KEY' and 'VIDEO_ID' with your actual API key and YouTube video ID
// const apiKey = 'AIzaSyDbaDmWl7CmK0TTYADnp_aAEayUMLUEqhE';
// const videoId = 'aSW7RJ5zWgE';

// getTranscript(apiKey, videoId)
//     .then((transcript) => console.log(transcript))
//     .catch((error) => console.error('Error:', error));

// AIzaSyCvT1Ju2xDWcy5E7xm2kd0zZpi3AjOwfTg

// client id : 497306984791-7s3sst4kbk5um1cc92be4dj51l0r01ah.apps.googleusercontent.com

// client-secret : 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



https://accounts.google.com/o/oauth2/v2/auth?
 scope=https://www.googleapis.com/auth/youtube.force-ssl&
 access_type=offline&
 include_granted_scopes=true&
 state=state_parameter_passthrough_value&
 redirect_uri=http://localhost&
 response_type=code&
 client_id=497306984791-7s3sst4kbk5um1cc92be4dj51l0r01ah.apps.googleusercontent.com

// code : 4/0AfJohXni0sTJr8_6tdSPE4TwwITOzDwP6qinrVJCEhvwJHOoEUR381RTFp5-lpzjDaNaKQ
curl \
--request POST \
--data "code=4/0AfJohXkqGNUMyIUum0PJyGHqXn4zpDKBdEgppRegvulTN2DOTUaAW9XUqgRtiLL7MvQkuw&client_id=497306984791-7s3sst4kbk5um1cc92be4dj51l0r01ah.apps.googleusercontent.com&client_secret=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&redirect_uri=http://localhost&grant_type=authorization_code" \
https://accounts.google.com/o/oauth2/token


// access token : ya29.a0AfB_byB858fW-ZEOnitlAa-n7CZCvJo-jJ5nHMqcbpbEbXzfmFwPx8_Qw0wSx1_0dmTUbYD63AfLO_lPlvZKzZmCyjwFgNbkwlBtXHQZ-TZL29vLEXE6Cw9Rfrgp7o-1eIuNHwabv5Ce-km8DQtyN3TwQcMCaZTrhN59aCgYKAegSARASFQHGX2MiYNabvi9W0GJhr-7o3jGjZQ0171


GET https://youtube.googleapis.com/youtube/v3/captions/[ID]?key=[YOUR_API_KEY] HTTP/1.1

Authorization: Bearer [YOUR_ACCESS_TOKEN]
Accept: application/json