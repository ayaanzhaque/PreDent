[![Netlify Status](https://api.netlify.com/api/v1/badges/c0638b06-ddad-4e28-b0dc-3b8857938ee5/deploy-status)](https://app.netlify.com/sites/predent/deploys)

# [PreDent](https://predent.netlify.app/)

Using ML to promote safer driving by predicting crash hotspots

**1st Place Overall @ MLH Summer League Data Day Grind 2020**

**1st Place Overall @ MacroHacks 2020**

**3rd Place Overall @ Hackmann 2020**

**Best Wep Application @ Macrohacks 2020**

**Sponsered Prize Winner @ Macrohacks 2020**



Devpost: https://devpost.com/software/predent

Demo: https://youtu.be/WoV-xuEERps

## Overview of our Project

PreDent is a unique progressive web application that identifies the accident-prone areas of a city through machine learning. The core of our project is an ML model that inputs static features (speed limits, road signs, road curvature, traffic volume), weather (precipitation, temperature), human factors, and many other attributes to ultimately output a map of city roads with hotspots of where collisions are likely. Note that our demo shows the process, but because our model is incredibly complex and large, the only way for us to deploy our model is to get access to expensive, high-powered servers. Our model will work on any city’s dataset, but they would have to be collected or provided to us.

First, government officials can upload a csv file of their collected traffic data, which many already have in private storages. This file is uploaded to Google Cloud, and we then input it into our model. Once we finish processing their data, we send email notifications back. Our model then outputs: 1) coordinates of crash sites 2) specific issues at each crash site, and 3) a heat map overview of the city. Additionally, using the model generated coordinates, we create an interactive map using the Google Maps API. With this information at hand, city designers can informatively improve their roads by determining where to fix roads, add additional signs, or more. This information is essential for promoting safer roads and infrastructure. 

We also have a page for common drivers. Once a city has partnered with us and we have created a heatmap for them, residents can find a map with the hotspots of where crashes are likely. These heatmaps change based on an hourly basis and time of year to account for rush hours and temperature/weather.  The common pedestrian or driver can also help improve the efficiency of our model by inputting data about crashes in their neighborhoods by interactively placing pins on the map, which we aggregate with already provided data. 

