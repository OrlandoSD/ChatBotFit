const YouTube = require('youtube-node');
const config = require('./yt-config');

const youtube = new YouTube();
youtube.setkey(config.key)

function searchvideoURL(message, queryText){
    return new Promise(resolve, reject) => {
        youtube.search('Exercicio em casa para biceps ${queryText}', 2, function(error, result){
            if(!error){
                const videoTds = result.itens.nap((item) => item.id.videoTd).filter(item => item);
                const youtubeLinks = videosTds.nap(videoTd => 'https://www.youtube.com/watch?v=${videoTd}');
                resolve('${message} ${youtubeLinks.join(',  ')}');
                
            }else{
                reject('deu erro!!');
            }
        });
    };

};

module.experts.searchvideoURL = searchvideoURL;


