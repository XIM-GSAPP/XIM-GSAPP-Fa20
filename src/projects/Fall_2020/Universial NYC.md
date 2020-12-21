Final Project XIM Fall 2020<br>
Team: Gun Young Jang, Jiyong Chun
<br>
<br>

# Universal NYC

##### Universal Design with super podiums and public nodes


![Introduction Collage image](https://github.com/Gunyoung-Jang/XIM-GSAPP-Fa20/blob/main/src/images/Universal%20NYC_Introduction%20Collage%20Image._Downgradejpg.jpg)


<br />

***

<br>

## &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1. Project Overview

<br />

![Daring question diagram](https://github.com/Gunyoung-Jang/XIM-GSAPP-Fa20/blob/main/src/images/Universal%20NYC_Super%20Podium.JPG)


***Super podium*** will enable people to enjoy enough accessibility regardless of different abilities. At the same time, towers on super podium will get bonus FAR for incentive, which richens building design. For this thesis, two building types will be explored, tower+podium and markethall.


#### Daring question:

```
“What if multiple buildings share one super podium and street nodes are open to enable people easily access upper ?”
```



       

#### Goals and Metrics

These section should be descriptive of how your team is setting up goals and metrics to determine success.

###### 1. Goal :
Equality in terms of accessibility, visibility, and safety in NYC / supporting community center

###### 2. What we are mesuring : 
- The number of public spaces(park + node) which are not further than ‘x minute distance’ from the cores of the podium
- X% of the cores have at least three public spaces within ‘x minute distance.’ 

- The percentage of the visible area in view ranges(30ft) at every intersection of roads
- Average view range percentage at every corner

- Average daylight hours of month when heating is required for buildings and roads

- CPTED(Crime Prevention Through Environmental Design) Analysis
- The number of the views from the surrounding buildings at every node / average of views in the whole area
- The gap between the highest exposed area and the least exposed area  

###### 3. Why we are masuring it:
Inequality caused by social structure needs to be alleviated, especially nowadays




#### What Did We Discover?

```
“Classified types of disabilities.”
```
 
![type classification](https://github.com/Gunyoung-Jang/XIM-GSAPP-Fa20/blob/main/src/images/Universal%20NYC_Disability%20Background%20Research%20(1).jpg)

```
“Analyzed which metrics can cover which type of disability.”
```

![relation between types and metrics](https://github.com/Gunyoung-Jang/XIM-GSAPP-Fa20/blob/main/src/images/Universal%20NYC_Types%20of%20disability%20and%20Metrics.JPG)



###### Background Research Source

*1. Erickson, W.Lee.C., and von Schrader, S.(2016), 2015 Disability Status Report: New York, Ithaca, NY: Cornell University Yang Tan Institute on Employment and Disability*

<br />

```
“Through the research of the disability in NYC, we have identified susceptible area to 'Social Changes'
which can indicate less previlaged area in our point of view.”
```

![Background research1](https://github.com/Gunyoung-Jang/XIM-GSAPP-Fa20/blob/main/src/images/Universal%20NYC_Disability%20Background%20Research%20(2).jpg)

Analysis in terms of income and pupulation

![Background research2](https://github.com/Gunyoung-Jang/XIM-GSAPP-Fa20/blob/main/src/images/Universal%20NYC_Disability%20Background%20Research%20(3).jpg)

Analysis in terms of occupation and education

![Background research3](https://github.com/Gunyoung-Jang/XIM-GSAPP-Fa20/blob/main/src/images/Universal%20NYC_Disability%20Background%20Research%20(4).jpg)

Extracted susceptible area in each category

![Background research4](https://github.com/Gunyoung-Jang/XIM-GSAPP-Fa20/blob/main/src/images/Universal%20NYC_Disability%20Background%20Research%20(5).JPG)

Found overlapped area and chose this area for our site

![Site perspective coloring](https://github.com/Gunyoung-Jang/XIM-GSAPP-Fa20/blob/main/src/images/Universal%20NYC_Site%20Perspective%20coloring.JPG)

<br />

### Location and program

The site represents socially alienated place but at the same time, which has great accessibility to lower manhattan in NYC.<br>
New community on this site will support socially neglected people in NYC as public institutes and social housings.

<br>

###### Background Image Source

*1. Google Earth*

<br />

<br />

![Site FAR analysis](https://github.com/Gunyoung-Jang/XIM-GSAPP-Fa20/blob/main/src/images/Universal%20NYC_Site%20Analysis_footage.JPG)


<br>

###### Background Research Source

*1. New York City’s Zoning & Land Use Map*

<br />

<br />

***

## &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2. Computational Design Model

<br />


![modeling procedure](https://github.com/Gunyoung-Jang/XIM-GSAPP-Fa20/blob/main/src/images/Universal%20NYC_Modeling.gif)

Roads for car: 30ft<br />
Roads for bike and waling people: 15ft

<br />

###### Background Research Source

*1. Vermont Pedestrian and Bicycle Facility Planning and Design Manual*

<br />

<br />

### Analysis Tools

<br />

#### Metrics 1: The average of the number of '2 minute-distance public spaces' from every core

![Metrics 1](https://github.com/Gunyoung-Jang/XIM-GSAPP-Fa20/blob/main/src/images/Universal%20NYC_Metric%201.gif)

<br />

*- The number of public spaces(park + node) which are not further than ‘2 minute distance’ from the cores of the podium*<br />
*- X% of the cores have at least three public spaces within ‘x minute distance.’*

<br />

**Measure the average of the number of '2 minute-distance public spaces' from every core’** <br />
which can be calculated by multiplying average wheelchair speed and the amount of time from certain parameters.

**To maximize** accessibility for public spaces from buildings.

**The most number of close public spaces(Blue)** will be be the successful option.
<br />
Manual Wheelchair Speed : 1.41 ft/s = **84.65 ft/min**

###### Background Research Source
*1. Manual Wheelchair Use: Bouts of Mobility in Everyday Life*

<br />

<br />

#### Metrics 2: Average view range percentage at every corner

![Metrics 2](https://github.com/Gunyoung-Jang/XIM-GSAPP-Fa20/blob/main/src/images/Universal%20NYC_Metric%202.gif)

<br />

![View Range Diagram](https://github.com/Gunyoung-Jang/XIM-GSAPP-Fa20/blob/main/src/images/Universal%20NYC_View%20Range%20Diagram.JPG)

*- The view ranges' diameter is 30ft*

*- Measure How large the area of the circle can be seen from every intersection point.*

<br />

The radius(**30ft**) of view range is decided by the distance between inner blocks.

**To maximize Visibility at every corner**, which is especially for people with hearing disabilities. They usually get spatial information with the eye.

The option that has the most ratio of circles which have **more visibility(blue)** will be the successful one.

<br />

**Red: 60%**
**Blue: 100%**

<br />

<br />

#### Metrics 3: Average daylight hours within cold months on buildings

![Metrics 3](https://github.com/Gunyoung-Jang/XIM-GSAPP-Fa20/blob/main/src/images/Universal%20NYC_Metric%203.gif)

*Average daylight hours within months when heating is required for buildings and roads*

(Jan, Feb, Mar, Apr, Oct, Nov, Dec)

<br />

Focused on heatings within cold months. This is because, for the less previliaged, sunlight is the only free source to maintain them warm enough to keep alive. 

<br />

To maximize the amount of daylight for buildings.

<br />

The option that has **much daylight hours(red)** will be a successful one.

<br />

###### Blue: 1 hour

<br />

###### Red: 10 hours

<br />

<br />

#### Metrics 4: Average daylight hours within cold months on roads

![Metrics 4](https://github.com/Gunyoung-Jang/XIM-GSAPP-Fa20/blob/main/src/images/Universal%20NYC_Metrics%204_Road.jpg)
*The same analysis with Metrics 3 on the roads*

<br />

<br />

#### Metrics 5: CPTED(Crime Prevention Through Environmental Design)

![Metrics 4](https://github.com/Gunyoung-Jang/XIM-GSAPP-Fa20/blob/main/src/images/Universal%20NYC_Metric%204.gif)

![description](https://github.com/Gunyoung-Jang/XIM-GSAPP-Fa20/blob/main/src/images/Universal%20NYC_CPTED%20Diagram.JPG)

*- The number of the views from the surrounding buildings at every node / average of views in the whole area*
*- The gap between the highest exposed area and the least exposed area*

<br />

<br />



### Procedural Types

![Procedure type](https://github.com/Gunyoung-Jang/XIM-GSAPP-Fa20/blob/main/src/images/Universal%20NYC_Procedural%20Type%20Diagram.JPG.png)

Red: Tower and Podium type <br />
Green: Markethall type

**'Super Podium'** enable the disability to move horizontally which is easier and safer.
**Towers** which are cut out can generate dynamic skylines.
**Markethall** enables broader nodes which means more openness. 


###### Design Rules

![modeling procedure diagram1](https://github.com/Gunyoung-Jang/XIM-GSAPP-Fa20/blob/main/src/images/Universal%20NYC_Modeling%20Diagram1.JPG)

<br />

![modeling procedure diagram2](https://github.com/Gunyoung-Jang/XIM-GSAPP-Fa20/blob/main/src/images/Universal%20NYC_Modeling%20Diagram2.JPG)
*The annual average of altitude and angle of sunray was used to calculate the maximum amount of sunlight.*


<br />


### Design Space


![modeling procedure diagram1](https://github.com/Gunyoung-Jang/XIM-GSAPP-Fa20/blob/main/src/images/Universal%20NYC_Street%20Types%20Diagram.gif)

###### Street option
<br />

1. Orthogonal grid option

2. Diagonal grid option

3. Curvy option

4. Trail option

Connect exsting roads with grid, diagonal, curvy, and trail without roads for cars types.

<br />

![description](https://github.com/Gunyoung-Jang/XIM-GSAPP-Fa20/blob/main/src/images/Universal%20NYC_scout%20variation.gif)

Extreme 'node offset distance' from minimum to maximum

Far max

Podium Height max

```
"Varying 'node offset distance' in this range because the trade off caused by FAR and openness of Nodes"
```

In other words, 
smaller node means more FAR, but less openness for each node <br />
broader node means less FAR, but more openness for each node.

<br />

![description](https://github.com/Gunyoung-Jang/XIM-GSAPP-Fa20/blob/main/src/images/Universal%20NYC_FAR%20Variation.gif)

```
"Varying 'FAR'"
```


***

## &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3. Analysis and Results

<br />

### Exploring the Design Space

![description](https://github.com/Gunyoung-Jang/XIM-GSAPP-Fa20/blob/main/src/images/Universal%20NYC_Design%20Variation.gif)

Scout design variation


### Results

![description](https://github.com/Gunyoung-Jang/XIM-GSAPP-Fa20/blob/main/src/images/Universal%20NYC_Relation%20between%20CPTED%20and%20Daylight%20hours%20on%20street.png)

### Conclusions and Next Steps

Refering to the outcome of '2 minute public spaces' analysis, design more public spaces not only near buildings but also in the buildings
