# Network Tools

The list below includes all of the Network Tools developed by each team in the class. They all follow a similar temple to keep documentation standardized.

<!--NEW TOOL BELOW-->

## Walkability Network Analysis

#### Tool Author: The City Commons

![description](../images/tools/Plan_View_1-2.jpg)

### Tool Description

Analysis techniques at the urban scale that focus on access to urban amenities through networks and mobility, using shortest path and origin / destination routing.  

### How to Use

Step-by-step Instructions:
1. Define location network
2. Define desired attractor points
3. Define origin location curves (Building Footprints)
4. Define target location points (Transportation Hubs)
5. Define your max travel distance time/distance
6. Define the distance for subdividing the networks into small segments. Essentially, this will be the resolution of the analysis.
7. Review visual and metric outputs. Does it look correct? Does something look wrong? Common issues below.

![description](../images/tools/Script_GH.png)

### Troubleshooting

1. Make sure to load the street centerlines properly, as they are crucial  to test walkability run and visualization.
2. The shortest walk component creates substantial geometry output, so be mindful of file size.
3. The same applies for the analysis of origins points. Be mindful of the file size.
4. You can get some overlap of the lines' visualization, so you need to move the lines physically with a move component to avoid that overlap.
5. If the line weight for the visualization is low,  some paths might not be adjusted depending on distance and time you are analyzing.

Walkshed Visualization:
![description](../images/tools/Plan_View_1-1.jpg)

Origin / Destination Visualization:
![description](../images/tools/Plan_View_1-3.jpg)

### Modeling Standards

Please follow the following Rhino standards to ensure the proper functionality of the tool:
1. Install the following plug-ins: Decoding Spaces, Human
2. This file can be useful if your project is in NYC: NYC Street Centerlines. However you can use any lines for your networks, be it parametrically generated or manually drawn.
3. Massing must be a single, simplified, closed polysurface.
4. Your model must be set to either Meters or Feet (not mm or in).
5. Your model must be free of overlapping, coplanar, or intersecting geometry.
6. Any surrounding context has to be a single, joined mesh.

### Sources, Calculations & Metrics

1. Travel distance within a group of buildings and urban amenities
2. Visualize footprints based on how many amenities they can reach
3. Amenities accessible within a certain walking time
4. Average number of amenities that can be accessed per building
5. Percentage of the buildings that have access to at least x amenities

### Sources, Calculations & Metrics

We used this tool in our project to test each proposed street type. The resulting metrics for each type served as a basis of comparison for each model. Subsequently, we were able to score the types based on their performance in this analysis.

![description](../images/tools/AnalysisResults01.png)

![description](../images/tools/AnalysisResults02.png)

![description](../images/tools/AnalysisResults03.png)

### Required Files

[Grasshopper File](https://github.com/XIM-GSAPP/XIM-GSAPP-Fa20/raw/main/src/tools/Network/walkability%20network%20analysis/files/Github_Walkbility%20Tool_1124.gh)


<!--NEW TOOL BELOW-->

## Walkability Analysis

#### Tool Author: Great Outdoor


![description](https://github.com/tterrytang/XIM-GSAPP-Fa20/raw/main/src/tools/Network/walkability%20network%20analysis/0-Initial%20Diagram.jpg)
Initial diagram that walkability network connect building and public space

![description](https://github.com/tterrytang/XIM-GSAPP-Fa20/raw/main/src/tools/Network/walkability%20network%20analysis/1%20Restaurants%20Location.jpg)
Restaurant locations and retail at the horizontal.

![description](https://github.com/tterrytang/XIM-GSAPP-Fa20/raw/main/src/tools/Network/walkability%20network%20analysis/2%20Circulation.jpg)
Vertical circulation that connect building to public space network


![description](https://github.com/tterrytang/XIM-GSAPP-Fa20/raw/main/src/tools/Network/walkability%20network%20analysis/3%20Walkability.jpg)
Average number of Outdoor Eating Spaces Accessible: 12

### Description

The analysis tool included the different buildings distance to the public space, not only the horizontal, but also the vertical network through building to public space programs, there are four different aspects this analysis involved in, the pictures indicated above


### How To Use

<b>Step by Step Instructions:</b>


1. Right click on "population density" -> Select different density options.
2. Right click on "buildings" -> Select Multiple and select buildings.
3. Right click on "public space program points" -> Select Multiple and select the distance you want to test.
4. Adjust Threshold X,Y,Z
5. Review visual and metric outputs. Does it look correct? Does something look wrong? Common issues below.

![description](https://github.com/tterrytang/XIM-GSAPP-Fa20/raw/main/src/tools/Network/walkability%20network%20analysis/analysis%20grasshopper1.png)

![description](https://github.com/tterrytang/XIM-GSAPP-Fa20/raw/main/src/tools/Network/walkability%20network%20analysis/analysis%20grasshopper2.png)

#### Troubleshooting

Make sure that the distance has to start with 0. 
Make sure select the point as the start point, or the building as the start point for network analysis


#### Required Files

[Rhino File](https://github.com/tterrytang/XIM-GSAPP-Fa20/blob/main/src/tools/Network/walkability%20network%20analysis/files/The%20Great%20Outdoors.3dm)

[Grasshopper File](https://github.com/tterrytang/XIM-GSAPP-Fa20/blob/main/src/tools/Network/walkability%20network%20analysis/files/20201220_Walkability%20Analysis.gh)


<!--NEW TOOL BELOW-->

## Distance from Parks Tool

#### Tool Author: Food Oasis

![Summary Image](https://github.com/XIM-GSAPP/XIM-GSAPP-Fa20/raw/main/src/images/VS_BST%20Wilson%20SkylarRoyal%20RasamAminzadeh%20HaoChang%20FA20%2002%20distancetopark01.png)

### Description

This tool measures and compares the distance each building is from nearby parks.

### How To Use

1. Connect or right click the geometry parameter and set multiple geometries for the buildings you wish to measure.
1. Connect or right click the curve parameter and select the parks in your model.
2. Run the buildings through a mesh shadow command to get the outlines of the base of each building.
3. Divide the distance between the building curves and determine which set distance you want between each point. Here, we chose 50 feet.
4. Take the park curves and make them a geometry to assign it as a pull point in relation to building points created.
5. Sort the distances between the buildings and the parks and bring them into a list item to organize the distances into integers that each building is from the park.
6. Flatten the integer and connect that as the parameter to assign color values on the gradient tool.
7. Determine an integer for the desired minimum walking distance time to a park and the speed of a person walking (225 ft/min).
8. Multiply the walking distance time and the speed to get the distance threshold.
9. Use the distance threshold as the upper limit on the gradient tool. This determines whether a building is too far from the park or not. Set the lower limit as 1.
10. Apply the building breps as the geometry and the gradient as the material to preview the visual analysis.
11. Review the visual and metric outputs. Does it look correct? Common issues below

![gh image](https://github.com/XIM-GSAPP/XIM-GSAPP-Fa20/raw/main/src/images/VS_BST%20Wilson%20SkylarRoyal%20RasamAminzadeh%20HaoChang%20FA20%2002%20distancetopark02.png)


#### Troubleshooting

Make sure the assigned time for walking is what is needed for your design. A lower or higher number will change the requirements for the color assignments.


#### Required Files

[Rhino File](https://github.com/XIM-GSAPP/XIM-GSAPP-Fa20/raw/main/src/files/Analysis%20Tool%20Example.3dm)

[Grasshopper File](https://github.com/XIM-GSAPP/XIM-GSAPP-Fa20/raw/main/src/files/Analysis%20Tool%20Example.gh)


![Set park curves](https://github.com/XIM-GSAPP/XIM-GSAPP-Fa20/raw/main/src/images/VS_BST%20Wilson%20SkylarRoyal%20RasamAminzadeh%20HaoChang%20FA20%2002%20distancetopark03.png)

![Pull point](https://github.com/XIM-GSAPP/XIM-GSAPP-Fa20/raw/main/src/images/VS_BST%20Wilson%20SkylarRoyal%20RasamAminzadeh%20HaoChang%20FA20%2002%20distancetopark04.png)

![Assign color values](https://github.com/XIM-GSAPP/XIM-GSAPP-Fa20/raw/main/src/images/VS_BST%20Wilson%20SkylarRoyal%20RasamAminzadeh%20HaoChang%20FA20%2002%20distancetopark05.png)

<br />


### Modeling Standards

<b>Please follow the following Rhino standards to ensure the proper functionality of the tool: </b>


<input type="checkbox"> <b>My test massing is a single, simplified, CLOSED polysurface.</b>

  <li>Try "SelClosedSrf" to make sure it is closed.</li>

<input type="checkbox"> <b>My model is oriented to True North.</b>

  <li>Re-orient if it was rotated off of North at the start of the project.</li>

<input type="checkbox"> <b>Any groups or blocks in the model have been ungrouped/exploded.</b>

  <li>Try "SelBlockInstance" and "SelGroup" to make sure.</li>

<input type="checkbox"> <b>My model is set to either Meters or Feet (not mm or in).</b><br>

<input type="checkbox"> <b>My model is free of overlapping, coplanar, or intersecting geometry.</b><br>

<input type="checkbox"> <b>Any obstructions around the space have been modeled (trees, topography, buildings).</b><br>

<input type="checkbox"> <b>Any curved surfaces in the model have been simplified to individual flat planes.</b><br>

<input type="checkbox"> <b>Any surrounding context has been made into a single, joined mesh.</b>

### Sources, Calculations + Metrics

<p>This tool uses pull points to calculate distance from parks. The metric is derived the distance that each point on the building is from the park.</p>

### Limitations & Context

This tool measures distance but is not specific to all types of mobile ability. The distances can be continuously adjusted and tested by moving or choosing different parks.

### Examples

Here is how we used this tool on a project!

To determine if all the buildings are close enough to an amenity to be convenient for a person on the property to get to and use.
To determine if parks are being placed in the right locations and if there are enough amenities in the area.

<!--NEW TOOL BELOW-->

## Distance to Green Space - 3D Network

#### Tool Author: Building 3D Green Resource Equality


![description](https://github.com/ym2805/XIM-GSAPP-Fa20/raw/main/src/images/XIM%20TOOL%20DIAGRAM-01.png)


### Description

This tool shows how to visualize walking distance to green space in a 3D network, including ground travel distance from building to park 
and vertical travel distance from each floor to the ground. Visualization is shown on building facades with every 3 floors 
corresponding with walkability to both ground parks and bridges.

### How To Use

<b>Step by Step Instructions:</b>

1. Determine destination points (Ground Park Centroids). 
2. Determine origion points. (Building Footprints Centroids for ground travel & Building Floor Centroids for vertical travel)
3. Draw lines to connect ground travel from building to park.
4. Draw perpendicular lines to connect from building to floor.
5. Draw lines from Building Floor Centroids to Bridge Centroids.
6. Determine network. Load NYC Network Centerlines file if needed.
7. Filter out unwanted curves based on walking distance using network.
8. Calculate walking distnace use lines from step3 & step4.
9. Generate building facade by per 3 floors. This will be shown for visualization. (Not curves, but building facade segments.)
10. Review visual and metric outputs. Does it look correct? Does something look wrong? Common issues below.


<b> Troubleshooting </b>

1. For step4 vertical travel distance lines, trim with building breps if they go through each building.
2. For step6, no need to load NYC Network Centerlines if you have manually drawn street center lines and only calculate within site.
3. The file will get very heavy starting from step6. Be mindful when you select curves for network.
4. For step8, use only ground and vertical travel distance for lighter file. 
5. Horizontal travel distance from building floor to bridge can be omitted in step8 but has to be included in the network analysis (step7).


### Required Plugins 

[WombatGH](https://github.com/ym2805/XIM-GSAPP-Fa20/raw/main/src/tools/Network/Distance_to_Green_Space/files/wombatgh131.gha)


### Required Files

[Rhino File](https://github.com/ym2805/XIM-GSAPP-Fa20/raw/main/src/tools/Network/Distance_to_Green_Space/files/Distance_to_Green_Space.3dm)

[Grasshopper File](https://github.com/ym2805/XIM-GSAPP-Fa20/raw/main/src/tools/Network/Distance_to_Green_Space/files/Distance_to_Green_Space.gh)


![description](https://github.com/ym2805/XIM-GSAPP-Fa20/raw/main/src/images/XIM%20TOOL%20DIAGRAM-03.png)


### Modeling Standards

1. Make sure each individual building is booleanunioned to one brep.
2. Make sure to have existing parks, new procedural parks and bridges as three individual inputs.
3. Merge existing parks and new procedural parks first for ground travel distance caculation. 
4. Merge all three for network analysis and green area per person metric if desired.
5. Make sure building facade segment are capped to closed breps for visualization. 


### Sources, Calculations + Metrics

1. Walking Distance to Green Spaces in a 3D network.
2. Sqft of green spaces per person in the area.


### Context & Limitation

The visualization of green space in this tool represents the walkability to ground parks and bridges, but not the open spaces in courtyard typology or balconies.
