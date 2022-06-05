import express from 'express';
import kakaoAPI from './kakaoAPI';
import NaverAPI from './NaverAPI';
import cors from 'cors';

const app = express()
const port = 8082

app.use(cors());
app.enable('trust proxy');

app.get('/', (req, res) => {
  
  res.send("")
})


app.get('/auth/kakao/callback', async (req, res) =>{
  const {code} = req.query;
  res.send(await kakaoAPI.getAuthorizationToken(code));


})

app.get('/auth/kakao/profile', async (req, res) =>{
  const accessToken = req.get('Authorization');
  res.send(await kakaoAPI.getProfile(accessToken));


})

app.get('/auth/naver/callback',  async (req, res) =>{
  const {code, state} = req.query;
  console.log(code, state);
  res.send(await NaverAPI.getAuthorizationToken(code, state));

})

app.get('/auth/naver/profile', async (req, res) =>{
  const accessToken = req.get('Authorization');
  res.send(await NaverAPI.getProfile(accessToken));

})



app.listen(port, () => console.log(`Example app listening on port ${port}`))