Final Project XIM Fall 2020

Team: Huiya Zhong, Chengliang Li

# NEWtral Urbanism

***Creating a new type of Energy Neutral Community which use PV Panels on facades to produce solar energy, and Realize the cozy outdoor comfort open space, to which the residents have good view inside the buildings.***


![description](https://github.com/l-cl3424/XIM-GSAPP-Fa20/blob/main/Final/collage.jpg)

The introduction image indicates we propose putting PV panels on the facades of the housing type which transformed from typical NYCHA Housings.

<br />

***

## &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1. Project Overview

<br />



***"Under an 80 by 50 scenario, our aging buildings will need to be transformed into highly energy efficient structures and powered by renewable sources of energy, and new buildings will need to meet the highest possible energy performance standards.”—— One City: Built to Last***

```
“What if building envelope could be put PV  panels to generate solar energy covering the electricity consumptions of housings?”
```
![description](https://github.com/l-cl3424/XIM-GSAPP-Fa20/blob/main/Final/collage.jpg)

### Google earth map photo collage ###

The introduction image indicates we propose putting PV panels on the facades of the housing type which transformed from typical NYCHA Housings.


### Goals and Metrics

***Metrics***
1. Average annual PV Production (Proxy)
2. Winter outdoor daylight
3. Summer outdoor daylight
4. View from

***Goal***

To understand how cityscape as dense and developed as New York could adapt to changing need of public in order to increase over all activity. Evaluate the successfulness of city streets in contemporary as well as future times. Explore how public spaces can reshape the urban fabric/layout.

The sunlight exposure will be based on seasons within the year the average sunlight more than 6-hours exposure community will be determined as a comfortable community
The thermal analysis will indicates level of Comfort
The activiites and walkability will help us to utilize the street spaces by pedestrians and adjacent tenants as well as activities within larger context.

***We expect to find a comfortable community or a urban context needs at least 6 hours sunlight exposure, the enough public space as well as the different programs to meet the requirment. Moreover, the public space accessible within 10 mins based on different walkability path.***


### What Did We Discover?

At different population density area, the public space programs would be divided into five different types to meet our goal.
![description](https://github.com/tterrytang/XIM-GSAPP-Fa20/blob/main/src/images/VT_BST%20discover-01.png)

```
“Through the computational design model, we have identified urban population density and public space numbers trends that allows the city
to address the social distancing and shortage of public space programs while achieving or increasing sunlight exposure and public accessbility.”
```

![description](https://github.com/tterrytang/XIM-GSAPP-Fa20/blob/main/src/images/VT_BST%20rb.png)

In New York, Full block implementation saw higher levels of activity (78%) than “Open Restaurant” street (62%) and far higher level of activity compared to “Protected Bike Lane” street (51%)


In 2050, city of New York commits to have its first neighborhood designed to let people experience the GREAT Outdoors during the Pandemic.



<br />

***

## &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2. Computational Design Model

<br />

![description](https://github.com/l-cl3424/XIM-GSAPP-Fa20/blob/main/Final/CompDesignModelDiagram-01.jpg)



### Analysis Tools
Walkbility
![description](https://github.com/tterrytang/XIM-GSAPP-Fa20/blob/main/src/images/VT_BST%20WALKBILITY%20ANALYSIS-01.png)


![description](../images/PT_AnalysisToolSummary.png)
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

[Link]() to any procedural types you have documented and posted.


### Design Space

```
"I’m varying this input in this range because of street pattern and population density."
```



![description](https://github.com/l-cl3424/XIM-GSAPP-Fa20/blob/main/Final/inputs.jpg)

***Urban condition 1 with public space***
![description](https://github.com/tterrytang/XIM-GSAPP-Fa20/blob/main/src/images/VT_BST%20GIF1.gif)


***Urban condition 2 with public space***
![description](https://github.com/tterrytang/XIM-GSAPP-Fa20/blob/main/src/images/VT_BST%20GIF2.gif)

***Urban condition 3 with public space***
![description](https://github.com/tterrytang/XIM-GSAPP-Fa20/blob/main/src/images/VT_BST%20GIF3.gif)

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

### Design Comparison

Create an image comparing several options that are representative of the trends in your analysis. This should include high and low-performing options, options that perform well in some metrics but poorly in others, options that do a good job of balancing trade-offs, etc. Include text explaining the comparison image and key take-aways. Include an option that gives context to the performance as a baseline or a benchmark. For example, it could be the existing context or an option with your target density but with traditional development patterns (i.e., densification without design innovation.)

Make sure to include both images and the data. Provide a visual hierarchy so that we can see which data are most relevant, which are high vs.  low. These can be simple charts, or even just text. Focus on clearly communicating the data.

Zoom in to talk about the best option(s) and the worst. Take a few images to detail why these options perform well or poorly. The point of this entire exercise is to create a data-driven methodology for making DECISIONS, so choose which option or options are the best and defend those choices.

### Conclusions and Next Steps

For the concluding text of your computational design model documentation, think about the following questions as you reinforce the reason why the results your team's model should implemented.

1. How do you recommend the results of your model be used? Who should learn from this?
1. If we are treating this as a proof-of-concept to illustrate the viability of this type of computational approach to the city, what are the next steps for implementation?
1. Your project evaluation relative to the anti-bias rubric we developed. These include identifying limitations, what this does and does not do or include.
