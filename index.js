//requiring dotenv so that the app can be used on others servers as will because it might happen that if port 3000 is listening on my computer than will listen to other computers as well to balance that we use .env 
require('dotenv').config()
//requring express
const express=require('express')
//storing in app variable
const app=express()
//declaring a port
const port=3000

const githubdata={
    
        "login": "pranjal13sam",
        "id": 97796663,
        "node_id": "U_kgDOBdRCNw",
        "avatar_url": "https://avatars.githubusercontent.com/u/97796663?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/pranjal13sam",
        "html_url": "https://github.com/pranjal13sam",
        "followers_url": "https://api.github.com/users/pranjal13sam/followers",
        "following_url": "https://api.github.com/users/pranjal13sam/following{/other_user}",
        "gists_url": "https://api.github.com/users/pranjal13sam/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/pranjal13sam/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/pranjal13sam/subscriptions",
        "organizations_url": "https://api.github.com/users/pranjal13sam/orgs",
        "repos_url": "https://api.github.com/users/pranjal13sam/repos",
        "events_url": "https://api.github.com/users/pranjal13sam/events{/privacy}",
        "received_events_url": "https://api.github.com/users/pranjal13sam/received_events",
        "type": "User",
        "site_admin": false,
        "name": "Pranjal",
        "company": null,
        "blog": "",
        "location": "Rangpo,Sikkim",
        "email": null,
        "hireable": null,
        "bio": "4th year computer Science Engineering student",
        "twitter_username": null,
        "public_repos": 16,
        "public_gists": 0,
        "followers": 0,
        "following": 0,
        "created_at": "2022-01-15T15:09:09Z",
        "updated_at": "2024-10-16T16:17:13Z"
      
}

app.get('/',(req,res)=>{
    res.send('Hello World!')
})

app.get('/google',(req,res)=>{
    res.send('Welcome to google')
})
app.listen(process.env.PORT,()=>{
    console.log(`Example app listening on port ${port}`)
})
app.get('/github',(req,res)=>{
    res.json(githubdata)
})