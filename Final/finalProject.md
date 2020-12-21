Final Project XIM Fall 2020

Team: Huiya Zhong, Chengliang Li

# NEWtral Urbanism

***Creating a new type of Energy Neutral Community which use PV Panels on facades to produce solar energy, and Realize the cozy outdoor comfort open space, to which the residents have good view inside the buildings.***


![description](https://github.com/l-cl3424/XIM-GSAPP-Fa20/blob/main/Final/design%20space.jpg)

The introduction image indicates we propose putting PV panels on the facades of the housing type which transformed from typical NYCHA Housings.

<br />

***

## &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1. Project Overview

<br />



***"Under an 80 by 50 scenario, our aging buildings will need to be transformed into highly energy efficient structures and powered by renewable sources of energy, and new buildings will need to meet the highest possible energy performance standards.”—— One City: Built to Last***

```
“What if building envelope could be put PV  panels to generate solar energy covering the electricity consumptions of housings?”
```

![description](https://github.com/l-cl3424/XIM-GSAPP-Fa20/blob/main/Final/site.png)
![description](https://github.com/l-cl3424/XIM-GSAPP-Fa20/blob/main/Final/collage.jpg)

### Google earth map photo collage ###

The introduction image indicates we propose putting PV panels on the facades of the housing type which transformed from typical NYCHA Housings.


### Goals and Metrics

***Metrics***
1. Average annual PV Production (Proxy)
2. Winter Comfort Open Space
3. Summer Comfort Open Space
4. Views to Open Space

***Goal***

Creating a new type of Energy Neutral Community which use PV Panels on facades to produce solar energy, and Realize the cozy outdoor comfort open space, to which the residents have good view inside the buildings.



<br />

***

## &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2. Computational Design Model

<br />

![description](https://github.com/l-cl3424/XIM-GSAPP-Fa20/blob/main/Final/CompDesignModelDiagram-01.jpg)



### Analysis Tools

![description](https://github.com/l-cl3424/XIM-GSAPP-Fa20/blob/main/Final/outputs.jpg)


![description]()
*Please include a short caption describing your diagram.*

Describe how you are deriving your metric.

1. Have a summary image with each analysis tool (examples above)
1. Use a image / diagram for each custom tool that requires further explanation on how it works. (Example below.)

#### Custom Tool Name
![description]()
*Please include a short caption describing your diagram.*

[Link]() to any packaged analysis tools you have documented and posted.



### Procedural Types

We defined the five different procedural types for public space program.
They are restricted by the urban density and building height.

***Procedural type rule***


Based on typical NYCHA Housing types. It applies to convex polygon parcels.

It cannot apply to curving parcels.

If the area of the parcel is smaller than the threshold, this type won’t be applied to the parcel.

If the shortest edge is smaller than the threshold, this type won’t be applied to the parcel.

If the ratio of the longest edge to the shortest edge is larger than 5, this type won’t be applied to the parcel.

If it is larger than 3 but smaller than 5, the building will have same widths’ wings; if it is smaller than 3,  the wings’ widths will be in proportion, which is relevant to the geometry of the parcel.



![description](https://github.com/l-cl3424/XIM-GSAPP-Fa20/blob/main/Radial_Tower/ratios-01.jpg)


![description](https://github.com/l-cl3424/XIM-GSAPP-Fa20/blob/main/Radial_Tower/heightsVariation.jpg)

Illustrating rules and types of computational design model.

[Link](https://github.com/l-cl3424/XIM-GSAPP-Fa20/blob/main/Radial_Tower/radialTower.md) to any procedural types you have documented and posted.

![description](https://github.com/l-cl3424/XIM-GSAPP-Fa20/blob/main/Radial_Tower/toKnow.jpg)


### Design Space


![description](https://github.com/l-cl3424/XIM-GSAPP-Fa20/blob/main/Final/inputs.jpg)


<br />

***

## &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3. Analysis and Results

<br />

### Exploring the Design Space

This section should be descriptive of your team's design exploration and initial insights using Scout.

***Each team will be conducting a live demonstration of your model in Scout when presenting final project.***

Additionally, teams will be required to document their live demo on GitHub with annotated, sequential screenshots replicating the sequence of the live demonstration. Show how you can use Scout to explore scenarios or answer specific questions using the parallel coordinates chart.

```
For example,
“What if’s . . .”
```

### Results

Were certain metrics inconclusive? Were there unexpected correlations? What are the GENERAL trends in your data? What are your SPECIFIC insights/findings? You can annotate right on top of Scout screenshots or translate insights to diagrams. How does performance (metrics) relate to form (inputs)?

![description]()
*Please include a short caption describing your diagram.*


### Conclusions

1. We made two Scout files. The only difference is that one of them count roof into the solar analysis while the other doesn't. And thus the results varies a lot. If we only put solar panels on facades, the top/bottom = 0.5 ratio one has the best performance. However, since the top/bottom = 1 ratio one has the largest roof, its performance is the best when the roof is included.
2. Generally, the summer and winter comforts are trade-off metrics.
3. The smaller the top/bottom ratio is , the better views to open space the building have.

### Next Steps

1. Develop the Solar Proxy Tool. Trying to figure out correlations between PV and Proxy by doing regressions.
2. New types will be designed (e.g. Setback Towers/skyscrapers having similar logic to those ratio < 1)
