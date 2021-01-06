# Energy Efficient Community 

***“Can energy efficient community be achieved in 2050 New York ? ”*** 

![description](https://github.com/XIM-GSAPP/XIM-GSAPP-Fa20/raw/main/src/images/COLLAGE.jpg)
***This collage shows the urban grid type centered around a subway station.*** 

<br />

***

## &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1. Project Overview

<br />

Extreme carbon emission events are causing climate change. How Will The New York City Act to reduce carbon emission is an issue worth considering. Through this project, we explore the efficiency of differnt grid type, mainly compare orthogonal and voronoi pattern. We are aiming to providing a metro-friendly urban grid to decay car usage , while at the same time designing a energy efficient building type that calls attention to climate change and encourages a lifestyle of public transportation. 


```
“Can energy efficient community be achieved in 2050 New York ? ”
```

### What Did We Discover?

![description](https://github.com/XIM-GSAPP/XIM-GSAPP-Fa20/raw/main/src/images/OneNYC.png)
***“ONE NYC 2050” A VISION OF NEW YORK CITY IN 2050*** 

```
In 2050, New York City is prepared for a changing climate, and is no longer reliant on fossil fuels.
In 2050, New Yorkers no longer rely on cars.
In 2050, New York City achieves carbon neutrality and 100% clean electricity.
In 2050, New York City ensures all New Yorkers have access to neighborhood open spaces and cultural resources.
```


### Goals and Metrics

Goals：Creating a community Configuration can make the building meet the energy efficiency of winter heat preservation and summer heat insulation, provide convenient access to the metro station and urban public green space for residents, and ensure the green space has sufficient sunlight.


Metric 01: facade sustainbility
In consideration of energy consumption, the building should reduce direct sunlight in summer as much as possible to prevent heat, and increase direct sunlight in winter to ensure insulation. Area that meets both summer shading and winter lighting can be understood as a sustainable area.

Metric 02: metro walkability
In order to fundamentally reduce carbon emissions, we hope to reduce people's reliance on cars and encourage public transport. Therefore, the time of access to Metro station becomes very important. If Community Configuration enables people to walk to the Metro, then more people will choose a low-carbon way of travel.

Metric 03: green walkability
Green space of an ideal community is essential. We set the density and distribution of various green Spaces. How to quantify their advantages and disadvantages, the most intuitive way is to measure the time of walking time from building to green space. Pedestrian-friendly urban green Spaces mean residents have easier access to fresh air and represent a healthy lifestyle.

Metric 04: green space sunlight
The amount and area of green space often cannot be directly used to judge whether it is a good green space for a community. A green space surrounded by high-rise buildings may be permanently shadowed and become a negative space of the city. Therefore, the time that green space gets sunlight in a year is another metric.

Metric 05: walkability to green space with enough sunlight
Light and accessibility of green space are both important, so the more intuitive goal is to make it easier for people to reach good green space with enough light.


<br />

***

## &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2. Computational Design Model

<br />

![description](https://github.com/XIM-GSAPP/XIM-GSAPP-Fa20/raw/main/src/images/typediagram.png)


### Analysis Tools

***Beneficial Daylight for Facade*** 

Metric 01: Facade meet requirement: summer sun<6hr/day

Metric 02: Facade meet requirement: winter sun>3hr/day 

![description](https://github.com/XIM-GSAPP/XIM-GSAPP-Fa20/raw/main/src/images/METRIC_facade.jpg)


***Walkability*** 

Metric 03: Population that has 7-min access to Metro Station

Metric 04: Population that has 3-min access to Green Space

![description](https://github.com/XIM-GSAPP/XIM-GSAPP-Fa20/raw/main/src/images/METRIC3.jpg)



***Green Space Quality*** 

Metric 05: Green Space that has average 4 hr sunlight/day 

Metric 06: Population that has 3-min access to Green Space with Average 4 hr Sunlight/Day

![description](https://github.com/XIM-GSAPP/XIM-GSAPP-Fa20/raw/main/src/images/METRIC2.jpg)

<br />

***


####  Beneficial Daylight for Facades Analysis Tool
![description](https://github.com/XIM-GSAPP/XIM-GSAPP-Fa20/raw/main/src/images/T-MAIN_PHOTO2.jpg)
*This analysis tool explores building in winter and summer sunlight time. In consideration of energy consumption, the building should reduce direct sunlight in summer as much as possible to prevent heat, and increase direct sunlight in winter to ensure insulation. Area that meets both summer shading and winter lighting can be understood as a sustainable area. This Analysis Tool visualizes the distribution of these sustainable areas.*

[Link](https://github.com/YuanEleanorLiu/XIM-GSAPP-Fa20/blob/main/src/tools/Environmental/Average_Daylight/README.md) 




### Tower with Balconies for Optimal Daylight.
![description](https://github.com/XIM-GSAPP/XIM-GSAPP-Fa20/raw/main/src/images/P-XIM-MAIN%20PHOTO.jpg)
*This collection of structures explores the ways in which the tower with balconies for optimal daylight can be built and modified. This Grasshopper procedural type helps optimize the basic podium curve into 4-sides rectangular , all following user inputs and pre-set procedural rules.*

[Link](https://github.com/YuanEleanorLiu/XIM-GSAPP-Fa20/blob/main/src/types/Tower_with_Balconies/README.md) 




<br />

***

### Procedural Types

![description](https://github.com/XIM-GSAPP/XIM-GSAPP-Fa20/raw/main/src/images/population.png)

*01: Urban Grid Type*
![description](https://github.com/XIM-GSAPP/XIM-GSAPP-Fa20/raw/main/src/images/GRIDTYPE.jpg)


*02: Tower Distribution Type*
![description](https://github.com/XIM-GSAPP/XIM-GSAPP-Fa20/raw/main/src/images/TOWER_DISTRIBUTION.jpg)

*03: Green Space Density*
![description](https://github.com/XIM-GSAPP/XIM-GSAPP-Fa20/raw/main/src/images/GREEN_SPACE.jpg)

*04: Balcony Shape Type*
![description](https://github.com/XIM-GSAPP/XIM-GSAPP-Fa20/raw/main/src/images/BALCONY_SHAPE.jpg)

*05: Tower Balcony Depth/Height Ratio*
![description](https://github.com/XIM-GSAPP/XIM-GSAPP-Fa20/raw/main/src/images/BALCONY_ratio.jpg)
<br />

***

## &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3. Analysis and Results

<br />

### Exploring the Design Space

We analyzed data from three dimensions which are sustainble facade, walkability and green space quality, and obtained 160 models.
High and low-performing options were selected, and the diagram below showed the options that performed well in the specific metrics but poorly in others.

![description](https://github.com/XIM-GSAPP/XIM-GSAPP-Fa20/raw/main/src/images/compare_option.jpg)
*High and low-performing options*

### Design Comparison

We also compare the dimensions synthetically and get several sets of good and bad choices. In the model with better performance, the proportion of radial Metro block is the highest. Among the poor performing models, rotated NYC blocks accounted for the highest percentage. The figure below shows the two sets of models with the best and worst average performance.

![description](https://github.com/XIM-GSAPP/XIM-GSAPP-Fa20/raw/main/src/images/CHOICES.jpg)
*The best and worst average performance*

