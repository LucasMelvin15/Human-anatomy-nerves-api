const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000


app.use(cors())
const nerves = {
    'brachial-Plexus' :{
       'description' : 'network of nerve fibres that supplies the skin and musculature of the upper limb',
       'branches':' musculocutaneous, median, ulnar, axillary, and radial nerves ',
       
       'clinical-relevance':'Upper Brachial Plexus Injury (Erbs Palsy),Lower Brachial Plexus Injury ',
       'image': 'https://teachmeanatomy.info/upper-limb/nerves/brachial-plexus/'
            },
    'axillary-nerve' :{
        'description' : 'major peripheral nerve of the upper limb',
        'branches':' spinal roots (C5-C6) ',
       
        'clinical-relevance':'Upper Brachial Plexus Injury (Erbs Palsy) ',
        'image': 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fteachmeanatomy.info%2Fwp-content%2Fuploads%2FAxillary-Nerve-Overview.png&imgrefurl=https%3A%2F%2Fteachmeanatomy.info%2Fupper-limb%2Fnerves%2Faxillary-nerve%2F&tbnid=GOn_7nV8j3IcCM&vet=12ahUKEwiKr-rG25v4AhVF2xoKHVt1C3sQMygAegUIARDYAQ..i&docid=qfr-7GgwK2YVQM&w=1512&h=1568&q=axillary%20nerve&ved=2ahUKEwiKr-rG25v4AhVF2xoKHVt1C3sQMygAegUIARDYAQ'
             
    },
    'musculocutaneous-nerve' :{
        'description' : 'major peripheral nerve of the upper limb',
        'branches':' nerve roots (C5-C7) ',
       
        'clinical-relevance':'Injury to the musculocutaneous nerve ',
        'image': 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fteachmeanatomy.info%2Fwp-content%2Fuploads%2FAnatomical-Course-of-the-Musculocutaneous-Nerve.jpg&imgrefurl=https%3A%2F%2Fteachmeanatomy.info%2Fupper-limb%2Fnerves%2Fmusculocutaneous-nerve%2F&tbnid=serOf_1F611ojM&vet=12ahUKEwj99fSK2pv4AhXSwYUKHV0MC3UQMygAegUIARCvAQ..i&docid=G5Yjw-e8AizcxM&w=570&h=1028&q=musculocutaneous%20%20nerve%20teach%20me%20anatomy&ved=2ahUKEwj99fSK2pv4AhXSwYUKHV0MC3UQMygAegUIARCvAQ'
             
    },
    'median-nerve' :{
        'description' : 'major peripheral nerve of the upper limb',
        'branches':' nerve roots (C6-T1) ',
       
        'clinical-relevance':'carpal tunnel syndrome ',
        'image': 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fteachmeanatomy.info%2Fwp-content%2Fuploads%2FAnatomical-Course-of-the-Median-Nerve-through-the-Upper-Limb.jpg&imgrefurl=https%3A%2F%2Fteachmeanatomy.info%2Fupper-limb%2Fnerves%2Fmedian-nerve%2F&tbnid=ZUUJ2QIn1m251M&vet=12ahUKEwjim_ms25v4AhVS04UKHWOeBJkQMygAegUIARDWAQ..i&docid=0vWa0IwxBzDCJM&w=524&h=1000&q=median%20nerve&ved=2ahUKEwjim_ms25v4AhVS04UKHWOeBJkQMygAegUIARDWAQ'
             
    },
    
    'radial-nerve' :{
        'description' : 'major peripheral nerve of the upper limb',
        'branches':' nerve roots (C5-T1) ',
       
        'clinical-relevance':'Injury to the radial nerve ',
        'image': 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fteachmeanatomy.info%2Fwp-content%2Fuploads%2FAnatomical-Course-of-the-Radial-Nerve.jpg&imgrefurl=https%3A%2F%2Fteachmeanatomy.info%2Fupper-limb%2Fnerves%2Fradial-nerve%2F&tbnid=gq_5LuPB-0diBM&vet=12ahUKEwibzbru2Zv4AhUGBRoKHdV7CikQMygAegUIARC3AQ..i&docid=6iwclT1SV0WdrM&w=524&h=816&q=radial%20nerve%20teach%20me%20anatomy&ved=2ahUKEwibzbru2Zv4AhUGBRoKHdV7CikQMygAegUIARC3AQ'
             
    },
    'ulnar-nerve' :{
        'description' : 'major peripheral nerve of the upper limb',
        'branches':' nerve roots (C8-T1) ',
       
        'clinical-relevance':'ulnar nerve palsy ',
        'image': 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fteachmeanatomy.info%2Fwp-content%2Fuploads%2FAnatomical-Course-of-the-Ulnar-Nerve-through-the-Upper-Limb.jpg&imgrefurl=https%3A%2F%2Fteachmeanatomy.info%2Fupper-limb%2Fnerves%2Fulnar-nerve%2F&tbnid=mFe4aYnfzDhk2M&vet=12ahUKEwitk9Lc2Zv4AhUKGRoKHQyPDvEQMygAegUIARC5AQ..i&docid=9DryvCNFCjAu8M&w=524&h=1000&q=ulnar%20nerve%20teach%20me%20anatomy&ved=2ahUKEwitk9Lc2Zv4AhUKGRoKHQyPDvEQMygAegUIARC5AQ'
             
    },
}
app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:nerveName', (request, response) => {
    const nervesName = request.params.nerveName.toLowerCase()

    if(nerves[nervesName]){
        response.json(nerves[nervesName])
    }
})


app.listen(process.env.PORT || PORT, () => {
    console.log(`Server is now running on ${PORT}! Better go catch it`)
})