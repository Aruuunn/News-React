import React from 'react';
import './box.css';


const Box = (props) => {
  return(
  <div className="box">
    <b>{props.title}</b>
    <br />
    {props.author}
    {props.description}
  </div>)
};

export default Box;




/*

author
"Times Of India"
content
"Subscribe\r\nStart Your Daily Mornings with Times of India Newspaper!Order Now"
description
"India News: PM Modi on Monday advised his ministers to prepare for a ‘new normal’ post the lockdown, asking them to work towards mitigating the economic impact of"
publishedAt
"2020-04-06T22:12:22Z"

source
{id: "the-times-of-india", name: "The Times of Indi…}
title
"Covid-19 lockdown: Prepare for ‘new normal’, draft biz continuity plans, PM tells ministers - Times of India"
url
"https://timesofindia.indiatimes.com/india/prepare-for-new-normal-draft-biz-continuity-plans-pm-to-ministers/articleshow/75018421.cms"
urlToImage
"https://static.toiimg.com/thumb/msid-75018547,width-1070,height-580,imgsize-279646,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg"
*/
